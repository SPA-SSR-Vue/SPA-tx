function adaptREM() {
  const docEl = document.documentElement
  const clientWidth = docEl.clientWidth
  if (!clientWidth) {
    return
  }
  docEl.style.fontSize = 100 * (clientWidth / 750) + 'px'
}

adaptREM()

window.onresize = adaptREM