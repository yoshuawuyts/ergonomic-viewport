const test = require('tape')
const vp = require('./')

global.window = {}
global.document = { documentElement: {} }

test('should throw if no viewport is found', function (t) {
  t.plan(1)
  t.throws(vp)
})

test('should accept a number', function (t) {
  t.plan(1)
  t.equal(vp(300), 'wrist')
})

test('should get the current viewport', function (t) {
  t.plan(3)

  setViewport(900)
  t.equal(vp(), 'lap')

  document.innerWidth = null
  t.equal(vp(), 'lap')

  document.documentElement.clientWidth = null
  t.equal(vp(), 'lap')
})

test('should return different values based on the viewport', function (t) {
  t.plan(5)
  t.equal(vp(100), 'wrist')
  t.equal(vp(700), 'palm')
  t.equal(vp(1000), 'lap')
  t.equal(vp(2000), 'desk')
  t.equal(vp(8000), 'wall')
})

function setViewport (val) {
  window.innerWidth = val
  document.documentElement.clientWidth = val
  document.body = val
}
