# cwf

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![stability][stability-image]][stability-url]

[npm-image]: https://img.shields.io/npm/v/cwf.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/cwf
[travis-image]: https://img.shields.io/travis/ngoldman/cwf.svg?style=flat-square
[travis-url]: https://travis-ci.org/ngoldman/cwf
[stability-image]: https://img.shields.io/badge/stability-1%20--%20experimental-yellow.svg?style=flat-square
[stability-url]: https://nodejs.org/api/documentation.html#documentation_stability_index

Get path to file from current working directory.

i.e., **c**urrent **w**orking **f**ile.

Should respect OS file system differences (please let me know if I missed something).

## Install

```
npm install cwf
```

## Usage

```js
var cwf = require('cwf')
```

The `path.join` style of notation is supported.

```js
var file = cwf('path', 'to', 'file')
```

The Unix filesystem style of notation is also supported.

```js
var file = cwf('path/to/file')
```

They are interchangeable.

```js
var file = cwf('path/to/dir', 'file')
```

`cwf` returns a string corresponding to the file path, **not** the file itself. You still need to use [`fs`](https://nodejs.org/api/fs.html) or something like it to interact with the file.

## Example

Given node is running in `/Users/ng/dev/github/cwf/`, here are some examples.

```js
cwf('package.json')
// -> '/Users/ng/dev/github/cwf/test/index.js'

cwf('test', 'index.js')
// -> '/Users/ng/dev/github/cwf/test/index.js'

cwf('lib/secret/dir', 'file')
// -> '/Users/ng/dev/github/cwf/lib/secret/dir/file'

cwf('../../../.ssh/id_rsa')
// -> '/Users/ng/.ssh/id_rsa'
```

## Todo

* tests! esp. to make sure this works outside of mac/unix

## Contributing

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## License

[ISC](LICENSE.md)
