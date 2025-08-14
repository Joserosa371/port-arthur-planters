
export function injectGA(measurementId){
  if(!measurementId || typeof window==='undefined') return
  if(document.getElementById('ga-script')) return
  const s = document.createElement('script')
  s.id = 'ga-script'
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(s)
  window.dataLayer = window.dataLayer || []
  function gtag(){window.dataLayer.push(arguments)}
  window.gtag = gtag
  gtag('js', new Date())
  gtag('config', measurementId)
}
