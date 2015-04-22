# cwp

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]

[npm-image]: https://img.shields.io/npm/v/cwp.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/cwp
[travis-image]: https://img.shields.io/travis/ngoldman/cwp.svg?style=flat-square
[travis-url]: https://travis-ci.org/ngoldman/cwp

Get a path string relative to the current working directory.

i.e., **c**urrent **w**orking **p**ath.

All it really does is pass arguments to `path.join` with `process.cwd()` prepended. A very minimal (perhaps totally unnecessary) shortcut.

## Install

```
npm install cwp
```

## Usage

```js
var cwp = require('cwp')
var file = cwp('path/to', 'file')
```

`cwp` returns a string corresponding to the file path, **not** the file itself. You still need to use [`fs`](https://nodejs.org/api/fs.html) or something like it to interact with the file.

Unix filesystem notation, strings for each entity, or a mix of both are all supported. The API is the same as [`path.join`](https://nodejs.org/api/path.html#path_path_join_path1_path2) -- the only difference is that the current working directory is always automatically prepended.

### Example

Given the process is running in `/Users/ng/dev/github/cwp/`, here are some examples.

```js
cwp('package.json')
// -> '/Users/ng/dev/github/cwp/package.json'

cwp('test', 'index.js')
// -> '/Users/ng/dev/github/cwp/test/index.js'

cwp('lib/secret/dir', 'file')
// -> '/Users/ng/dev/github/cwp/lib/secret/dir/file'

cwp('../../../.ssh/id_rsa')
// -> '/Users/ng/.ssh/id_rsa'
```

## Contributing

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## License

[ISC](LICENSE.md)
