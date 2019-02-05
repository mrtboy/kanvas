'use strict'

var app = {
  init() {
    app.initCanvas()
    circle.init()
    mouse.init()
  },

  canvasWidth: 480,
  canvasHeight: 400,

  initCanvas() {
    app.backgroundCanvas = document.getElementById('appBackgroundCanvas')
    app.backgroundContext = app.backgroundCanvas.getContext('2d')

    app.foregroundCanvas = document.getElementById('appForegroundCanvas')
    app.foregroundContext = app.foregroundCanvas.getContext('2d')

    app.foregroundCanvas.width = app.canvasWidth
    app.backgroundCanvas.width = app.canvasWidth

    app.foregroundCanvas.height = app.canvasHeight
    app.backgroundCanvas.height = app.canvasHeight
  },

  scale: 1,
  resize() {
    var maxWidth = window.innerWidth
    var maxHeight = window.innerHeight

    var scale = Math.min(maxWidth / 640, maxHeight / 480)
  }
}

window.addEventListener(
  'load',
  () => {
    app.init()
  },
  false
)
