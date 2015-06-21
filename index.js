const assert = require('assert')

const PALM = 320
const LAP = 800
const DESK = 1920
const WALL = 2560

module.exports = ergonomicViewport

// get the ergonomic viewport
// num -> str
function ergonomicViewport (vp) {
  vp = vp || getViewport()
  assert.ok(vp)
  if (vp < PALM) return 'wrist'
  if (vp < LAP) return 'palm'
  if (vp < DESK) return 'lap'
  if (vp < WALL) return 'desk'
  return 'wall'
}

// get viewport width
// null -> obj
function getViewport () {
  const docEl = document.documentElement
  return window.innerWidth || docEl.clientWidth || document.body.clientWidth
}
