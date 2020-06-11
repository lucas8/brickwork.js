export default function createOverlay() {
  let frame = new FrameManager()

  document.querySelectorAll('[data-brickworkjs-product]').forEach(e => {
    e.onmouseover = () => {
      frame.createIFrame(
        e.attributes.getNamedItem('data-brickworkjs-product').value,
      )
    }
    e.onclick = () => {
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
    this.setupMessaging()
    this.isClientReady = false
    this.userIntent = false
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
    const newProductLink = `http://localhost:3000/products/${productId}`
    if (!this.iframe) {
      this.iframe = document.createElement('iframe')
      this.iframe.setAttribute('allowFullScreen', 'allowfullscreen')
      this.iframe.setAttribute('allowTransparency', 'true')
      this.iframe.src = newProductLink
      this.iframe.className = 'brickworkjs-ecommerce-iframe'
      this.iframe.addEventListener('load', this.loadFn, false)
      document.body.appendChild(this.iframe)
    } else if (this.iframe.src !== newProductLink) {
      this.iframe.src = newProductLink
    }
  }

  // displayIFrame = () => {
  //   this.sendMessage({
  //     action: 'displayIntent',
  //     payload: {intentToDisplay: true},
  //   })
  // }

  displayIFrame = () => {
    if (this.isClientReady) {
      let styles = [
        'width: 100% !important',
        'height: 100% !important',
        'animation: fadeIn ease 500ms;',
      ].join(';')
      this.iframe.style = styles
    } else {
      this.userIntent = true
    }
  }

  sendMessage = ({action, payload} = {}) => {
    this.iframe.contentWindow.postMessage({action, payload}, '*')
  }

  handleMessage = msg => {
    var {data} = msg
    this[data.method](data.args)
  }

  // SERVER API

  clientReady = () => {
    this.isClientReady = true
    if (this.userIntent) {
      this.displayIFrame()
    }
  }
}
