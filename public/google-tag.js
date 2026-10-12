window.dataLayer = window.dataLayer || []
window.gtag = function gtag() {
  window.dataLayer.push(arguments)
}

window.gtag('js', new Date())
window.gtag('config', 'AW-18480693444')

document.addEventListener('click', (event) => {
  if (!event.target.closest('a[href^="tel:"]')) return

  window.gtag('event', 'conversion', {
    send_to: 'AW-18480693444/yqi6CN6Ry5odEMSBpOxE',
    transport_type: 'beacon',
  })
})