'use strict'

function replaceChunk (source) {
  this.cacheable()

  let newSource = source

  newSource = newSource.replace(/require[(](\`)/g, '__non_webpack_require__($1')

  this.callback(null, newSource)
}

module.exports = replaceChunk
