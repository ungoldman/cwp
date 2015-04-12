# cwp

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![stability][stability-image]][stability-url]

[npm-image]: https://img.shields.io/npm/v/cwp.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/cwp
[travis-image]: https://img.shields.io/travis/ngoldman/cwp.svg?style=flat-square
[travis-url]: https://travis-ci.org/ngoldman/cwp
[stability-image]: https://img.shields.io/badge/stability-1%20--%20experimental-yellow.svg?style=flat-square
[stability-url]: https://nodejs.org/api/documentation.html#documentation_stability_index

Get a path string relative to the current working directory.

i.e., **c**urrent **w**orking **p**ath.

Should respect OS file system differences (please let me know if I missed something).

## Install

```
npm install cwp
```

## Usage

```js
var cwp = require('cwp')
```

The [`path.join`](https://nodejs.org/api/path.html#path_path_join_path1_path2) style of notation is supported.

```js
var file = cwp('path', 'to', 'file')
```

The Unix filesystem style of notation is also supported.

```js
var file = cwp('path/to/file')
```

They are interchangeable.

```js
var file = cwp('path/to/dir', 'file')
```

`cwp` returns a string corresponding to the file path, **not** the file itself. You still need to use [`fs`](https://nodejs.org/api/fs.html) or something like it to interact with the file.

## Example

Given node is running in `/Users/ng/dev/github/cwp/`, here are some examples.

```js
cwp('package.json')
// -> '/Users/ng/dev/github/cwp/test/index.js'

cwp('test', 'index.js')
// -> '/Users/ng/dev/github/cwp/test/index.js'

cwp('lib/secret/dir', 'file')
// -> '/Users/ng/dev/github/cwp/lib/secret/dir/file'

cwp('../../../.ssh/id_rsa')
// -> '/Users/ng/.ssh/id_rsa'
```

## Todo

* tests! esp. to make sure this works outside of mac/unix

## Contributing

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## License

[ISC](LICENSE.md)
