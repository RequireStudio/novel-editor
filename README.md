# Novel Editor

## Installing

```
$ npm install novel-editor
```

You will get:

- inside `esm`: ESM version of the editor (compatible with e.g. webpack)
- inside `dev`: AMD bundled, not minified
- inside `min`: AMD bundled, and minified
- inside `min-maps`: source maps for `min`
- `monaco.d.ts`: this specifies the API of the editor (this is what is actually versioned, everything else is considered private and might break with any release).

It is recommended to develop against the `dev` version, and in production to use the `min` version.

## Issues

Create [issues](https://github.com/requirestudio/novel-editor/issues) in this repository for anything related to the Monaco Editor. Always mention **the version** of the editor when creating issues and **the browser** you're having trouble in. Please search for existing issues to avoid duplicates.

## License

Licensed under the [MIT](https://github.com/requirestudio/novel-editor/blob/main/LICENSE.txt) License.
