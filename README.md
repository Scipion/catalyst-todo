# Catalyst ToDo

Simple ToDo app based on WebComponents with @github/catalyst.

The pourpose of this repo is just play with [@github/catalyst](https://github.github.io/catalyst/) and native Custom Elements.

> No tests neither state management has been taken into consideration for this demostrations.

## Usage

As simple as:

```
npm install
npm start
```

## Setup

This project has been build with [parcel](https://parceljs.org/) and typescript.

It can be build by executing `npm run build` that will run `parcel build src/index.html`.

### Limitations

- **Parcel v2 configuration**: Due to the fact that the parser used by Terser in Parcel v2 changes the names of classes during the minification process, it has become necessary to add a configuration to the `.terserrc` file. If this configuration is not added, the build may not work correctly. To address this issue, it's been added to configuration the file `.terserrc` just with entry: `"keep_classnames": true`. This will ensure that the original class names are preserved during the minification process and the build works correctly.