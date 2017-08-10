document.addEventListener('turbolinks:load', () => {
  const headerOpenBtn = document.getElementById('headerOpenBtn')
  const menuHeaderOpenBtn = document.getElementById('menuHeaderOpenBtn')
  const menuHeaderCloseBtn = document.getElementById('menuHeaderCloseBtn')
  const menu = document.getElementById('menu')
  const dim = document.getElementById('dim')

  menuHeaderOpenBtn.onclick = () => {
    menu.classList.remove('mobileHelper')
    dim.style.display = 'block'
    setTimeout(() => {
      dim.style.opacity = '0.6'
    }, 50)
  }
  headerOpenBtn.onclick = () => menu.classList.remove('mobileHelper')
  menuHeaderCloseBtn.onclick = () => {
    menu.classList.add('mobileHelper')
    dim.style.opacity = '0'
    setTimeout(() => {
      dim.style.display = 'none'
    }, 300)
  }
})
