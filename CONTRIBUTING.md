# Contributing

Checkout [MAINTAINING.md](./MAINTAINING.md) for common maintaining tasks.

## A brief explanation on the source code structure

This repository contains source code only for Monaco Editor Languages, the core editor source lives in the [vscode repository](https://github.com/microsoft/vscode).

| repository                                                    | npm module                                                            | explanation                                                             |
| ------------------------------------------------------------- | --------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| [vscode](https://github.com/requirestudio/vscode)             | [monaco-editor-core](https://www.npmjs.com/package/novel-editor-core) | editor core functionality (language agnostic) is shipped out of vscode. |
| [novel-editor](https://github.com/requirestudio/novel-editor) | [monaco-editor](https://www.npmjs.com/package/novel-editor)           | the Monaco Editor.                                                      |

## Contributing a new tokenizer / a new language

Please understand that we only bundle languages with the novel editor that have a significant relevance (for example, those that have an article in Wikipedia).

- create `$/src/basic-languages/{myLang}/{myLang}.contribution.ts`
- create `$/src/basic-languages/{myLang}/{myLang}.ts`
- create `$/src/basic-languages/{myLang}/{myLang}.test.ts`
- edit `$/src/basic-languages/monaco.contribution.ts` and register your new language
- create `$/website/index/samples/sample.{myLang}.txt`

```js
import './{myLang}/{myLang}.contribution';
```

## Running the editor from source

You need to have all the build setup of VS Code to be able to build the novel editor.

- Install all the [prerequisites](https://github.com/requirestudio/vscode/wiki/How-to-Contribute#prerequisites)

```bash
# clone vscode-loc repository for localized string resources
/src> git clone https://github.com/microsoft/vscode-loc
# clone VS Code repository
/src> git clone https://github.com/requirestudio/vscode
/src> cd vscode
# install npm deps for vscode
/src/vscode> yarn
# start the compiler in the background
/src/vscode> yarn watch
```

- For the novel editor test pages:

```bash
# clone novel-editor (note the folders must be siblings!)
/src> git clone https://github.com/requirestudio/novel-editor

# install npm deps for novel-editor
/src/novel-editor> npm install .

# compile and bundle all plugins
/src/novel-editor> npm run release

# start a local http server in the background
/src/novel-editor> npm run simpleserver
```

Open [http://localhost:8080/novel-editor/test/manual/?editor=src](http://localhost:8080/novel-editor/test/manual/?editor=src) to run.

## Running the editor tests

```bash
# create a local release
/src/novel-editor> npm run release

# run unit tests
/src/novel-editor> npm run test

# compile the webpack plugin
/src/novel-editor> npm run compile --prefix webpack-plugin

# package using the webpack plugin
/src/novel-editor> npm run package-for-smoketest --prefix webpack-plugin

# run the smoketest
/src/novel-editor> npm run smoketest-debug
```

> Tip: All folders must be cloned as siblings.

> Tip: When running the test pages, use the control panel in the top right corner to switch between running from source, running from npm or running from the local release:
> ![image](https://cloud.githubusercontent.com/assets/5047891/19599080/eb0d7622-979e-11e6-96ce-dde98cd95dc1.png)
