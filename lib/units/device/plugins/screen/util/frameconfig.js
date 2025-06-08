var util = require('util')

function FrameConfig(real, virtual) {
  this.realWidth = real.width
  this.realHeight = real.height
  if ( virtual.width > real.width || virtual.height > real.height ) {
    this.virtualWidth = real.width
    this.virtualHeight = real.height
  }
  else {
    this.virtualWidth = virtual.width
    this.virtualHeight = virtual.height
  }
  this.rotation = virtual.rotation
}

FrameConfig.prototype.toString = function() {
  return util.format(
    '%dx%d@%dx%d/%d'
  , this.realWidth
  , this.realHeight
  , this.virtualWidth
  , this.virtualHeight
  , this.rotation
  )
}

module.exports = FrameConfig
