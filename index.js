var path = require('path')

module.exports = function cwf () {
  var args = Array.prototype.slice.call(arguments)
  var arr = []

  function add (a) { arr.push(a) }

  args.forEach(function (arg) {
    if (arg.indexOf('/') !== -1) arg.split('/').forEach(add)
    else add(arg)
  })

  arr.unshift(process.cwd())
  return path.join.apply(null, arr)
}
