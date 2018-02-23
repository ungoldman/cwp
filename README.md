# cwp


[![npm][1]][2]
[![travis][3]][4]
[![standard][5]][6]
[![downloads][7]][2]

[1]: https://img.shields.io/npm/v/cwp.svg?style=flat-square
[2]: https://www.npmjs.com/package/cwp
[3]: https://img.shields.io/travis/ungoldman/cwp/master.svg?style=flat-square
[4]: https://travis-ci.org/ungoldman/cwp
[5]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[6]: http://standardjs.com/
[7]: https://img.shields.io/npm/dm/cwp.svg?style=flat-square

Get a path string relative to the current working directory.

i.e., **C**urrent **W**orking **P**ath.

## About

It just pass arguments to `path.join` with `process.cwd()` prepended.

A very minimal (perhaps totally unnecessary) shortcut.

## Install

```
npm install cwp
```

## Usage

```js
var cwp = require('cwp')
var file = cwp('path/to', 'file')
```
Unix filesystem notation, strings for each entity, or a mix of both are all supported. The API is the same as [`path.join`](https://nodejs.org/api/path.html#path_path_join_path1_path2) -- the only difference is that the current working directory is always automatically prepended.

### Example

Given the process is running in `/Users/ng/dev/github/cwp/`, here are some example outputs.

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

## Tests

```
npm install
npm test
```

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) before getting started.

## License

[ISC](LICENSE.md)
