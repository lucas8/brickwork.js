export default function createOverlay() {
  let frame = new FrameManager()

  document.querySelectorAll('[data-brickworkjs-product]').forEach(e => {
    e.onmouseover = () => {
      frame.createIFrame(
        e.attributes.getNamedItem('data-brickworkjs-product').value,
      )
    }
    e.onclick = () => {
      console.log('hi')
      // TODO: Display Loader
      frame.displayIFrame()
    }
  })
}

class FrameManager {
  constructor() {
    this.iframe = null
    this.timer = 0
    this.origin = window.location.origin
    this.isLoaded = false
    this.setupMessaging()
  }

  setupMessaging = () => {
    window.addEventListener(
      'message',
      function (msg) {
        this.handleMessage(msg)
      }.bind(this),
      false,
    )
  }

  // CLIENT API

  createIFrame = productId => {
    this.iframe = document.createElement('iframe')
    this.iframe.setAttribute('allowFullScreen', 'allowfullscreen')
    this.iframe.setAttribute('allowTransparency', 'true')
    this.iframe.src = `http://localhost:3000/products/${productId}`
    this.iframe.className = 'brickworkjs-ecommerce-iframe'
    document.body.appendChild(this.iframe)
  }

  displayIFrame = () => {
    let styles = ['width: 100% !important', 'height: 100% !important'].join(';')
    this.iframe.style = styles
  }

  sendMessage = ({action, payload} = {}) => {
    this.iframe.contentWindow.postMessage(
      JSON.stringify({action, payload}),
      this.origin,
    )
  }

  handleMessage = msg => {
    var {data} = msg
    this[data.method](data.args)
  }
}
