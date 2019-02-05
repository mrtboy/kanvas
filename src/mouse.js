var mouse = {
  init: function() {
    // Listen for mouse events on the game foreground canvas
    let canvas = document.getElementById('appForegroundCanvas')

    canvas.addEventListener('mousemove', mouse.mousemovehandler, false)

    canvas.addEventListener('mouseenter', mouse.mouseenterhandler, false)
    canvas.addEventListener('mouseout', mouse.mouseouthandler, false)

    canvas.addEventListener('mousedown', mouse.mousedownhandler, false)
    canvas.addEventListener('mouseup', mouse.mouseuphandler, false)

    canvas.addEventListener('contextmenu', mouse.mouserightclickhandler, false)

    canvas.addEventListener('touchstart', mouse.touchstarthandler, {
      passive: false
    })
    canvas.addEventListener('touchend', mouse.touchendhandler, {
      passive: false
    })
    canvas.addEventListener('touchmove', mouse.touchmovehandler, {
      passive: false
    })

    mouse.canvas = canvas
  },

  // x,y coordinates of mouse relative to top left corner of application
  appX: 0,
  appY: 0,

  // application grid x,y coordinates of mouse
  gridX: 0,
  gridY: 0,

  calculateAppCoordinates: function() {
    mouse.appX = mouse.x + app.offsetX
    mouse.appY = mouse.y + app.offsetY

    mouse.gridX = Math.floor(mouse.appX / app.gridSize)
    mouse.gridY = Math.floor(mouse.appY / app.gridSize)
  },

  // Is the mouse inside the canvas region
  insideCanvas: false,

  setCoordinates(clientX, clientY) {
    let offset = mouse.canvas.getBoundingClientRect()

    mouse.x = (clientX - offset.left) / app.scale
    mouse.y = (clientY - offset.top) / app.scale

    mouse.calculateAppCoordinates()
  },

  mouseenterhandler: function() {
    mouse.insideCanvas = true
  },

  mouseouthandler: function() {
    mouse.insideCanvas = false
  },

  // Is the left mouse button currently pressed
  buttonPressed: false,

  mousemovehandler(event) {
    canMouseX = parseInt(event.clientX - offsetX)
    canMouseY = parseInt(event.clientY - offsetY)

    mouse.insideCanvas = true
    if (mouse.insideCanvas) {
      app.foregroundContext.clearRect(0, 0, app.canvasWidth, app.canvasHeight)
      app.foregroundContext.drawImage()
    }
  },

  mousedownhandler(event) {
    mouse.insideCanvas = true
    mouse.setCoordinates(event.clientX, event.clientY)

    if (event.button === 0) {
      // Left mouse button was pressed
      mouse.buttonPressed = true

      mouse.dragX = mouse.gameX
      mouse.dragY = mouse.gameY

      console.log(event)
    }
  }
}
