var cwp = require('./')
var test = require('tape')
var path = require('path')
var cwd = process.cwd()

test('works as expected', function (t) {
  t.plan(4)

  var a = cwp('package.json')

  t.equal(a, cwd + '/package.json')

  var b = cwp('test', 'index.js')
  t.equal(b, cwd + '/test/index.js')

  var c = cwp('lib/secret/dir', 'file')
  t.equal(c, cwd + '/lib/secret/dir/file')

  var d = cwp('../../../.ssh/id_rsa')
  t.equal(d, path.join(cwd, '../../../.ssh/id_rsa'))

  t.end()
})
