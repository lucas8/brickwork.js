export default function createOverlay() {
  let frame = new FrameManager()

  document.querySelectorAll('[data-simple-ecommerce-id]').forEach(e => {
    e.onmouseover = () => {
      frame.createIFrame(
        e.attributes.getNamedItem('data-simple-ecommerce-id').value,
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
    this.isLoaded = false
    this.setupMessaging()
  }

  setupMessaging = () => {
    window.addEventListener(
      'message',
      function(msg) {
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
    this.iframe.src = `http://localhost:3000?product-id=${productId}`
    this.iframe.className = 'simple-ecommerce-iframe'
    document.body.appendChild(this.iframe)
  }

  displayIFrame = () => {
    if (this.isLoaded) {
      let styles = ['width: 100%', 'height: 100%'].join(';')
      this.iframe.style = styles
    }
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
