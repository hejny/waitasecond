/* tslint:disable:no-conditional-assignment */
import { readFile, writeFile } from 'fs';
import glob from 'glob-promise';
import { join, relative } from 'path';
import { PackageJson } from 'type-fest';
import { promisify } from 'util';

// TODO: Activate TypeScript 3.8 and use top level await instead of wrapped code by main function

main();

async function main() {
    const comments = [
        'GENERATED WITH generate-main-exports',
        'Warning: Do not edit by hand, all changes will be lost on next execution!',
    ];

    const filesPath = await glob(join(__dirname, '../../src/**/*.ts'));
    const files = await Promise.all(
        filesPath.map(async (path) => ({
            content: await promisify(readFile)(path, 'utf8'),
            path,
        })),
    );

    const exports: Array<{ path: string; name: string }> = [];
    for (const file of files) {
        let execArray: any; // RegExpExecArray | null;
        const regExp =
            /^export\s+(?!abstract)\s*(async)?\s*[a-z]+\s+(?<name>[a-zA-Z0-9_]+)/gm;
        while ((execArray = regExp.exec(file.content))) {
            const { name } = execArray.groups!;
            exports.push({ path: file.path, name });
        }
    }

    let content = '';

    content += comments.map((comment) => `// ${comment}`).join('\n');
    content += '\n\n';

    content += exports
        .map(
            ({ name, path }) =>
                `import { ${name} } from './${relative(
                    join(__dirname, '../../src'),
                    path,
                )
                    .split('\\')
                    .join('/')
                    .replace(/\.tsx?$/, '')}.js';`,
        )
        .join('\n');
    content += '\n\n';

    content += `export {\n${exports
        .sort(
            (a, b) =>
                a.name.length > b.name.length
                    ? 1
                    : -1 /* TODO: Maybe some better sorting */,
        )
        .map(({ name }) => name)
        .join(',\n')}\n};`;

    await promisify(writeFile)(join(__dirname, '../../src/main.ts'), content);

    const packageJson: PackageJson = JSON.parse(
        await promisify(readFile)(
            join(__dirname, '../../package.json'),
            'utf8',
        ),
    ) as PackageJson;

    // TODO: Do not put interfaces into exports
    packageJson.exports = Object.fromEntries([
        ['.', './dist/main.js'],
        ...exports.map(({ name, path }) => [
            `./${name}`,
            './' +
                relative(join(__dirname, '../..'), path)
                    .split('\\')
                    .join('/')
                    .replace(/\.ts$/, '.js')
                    .replace(/^src\//, 'dist/'),
        ]),
    ]);
    packageJson.typesVersions = {
        '*': Object.fromEntries(
            exports.map(({ name, path }) => [
                `./${name}`,
                [
                    './' +
                        relative(join(__dirname, '../..'), path)
                            .split('\\')
                            .join('/')
                            .replace(/\.ts$/, '.d.ts')
                            .replace(/^src\//, 'dist/'),
                ],
            ]),
        ),
    };

    await promisify(writeFile)(
        join(__dirname, '../../package.json'),
        JSON.stringify(packageJson, null, 4),
    );

    // Note: Here is not prettier due to prettier will be triggered automatically by prettier-watch script
}

/**
 * TODO: This should be an indipendent lib
 */
