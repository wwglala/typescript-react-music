(function (document) {
  const docEL = document.documentElement
  const resize = () => {
    let width = docEL.getBoundingClientRect().width
    docEL.style.fontSize = `${100 * (width / 1242)}px`
  }
  window.addEventListener('resize', resize, false)
  document.addEventListener('DOMContentLoaded', resize)
})(document)