var path = require('path')

module.exports = function cwp () {
  var args = Array.prototype.slice.call(arguments)
  args.unshift(process.cwd())
  return path.join.apply(null, args)
}
