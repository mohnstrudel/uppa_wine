document.addEventListener('turbolinks:load', () => {
  const headerOpenBtn = document.getElementById('headerOpenBtn')
  const menuHeaderOpenBtn = document.getElementById('menuHeaderOpenBtn')
  const menuHeaderCloseBtn = document.getElementById('menuHeaderCloseBtn')
  const menu = document.getElementById('menu')

  menuHeaderOpenBtn.onclick = () => menu.classList.remove('mobileHelper')
  headerOpenBtn.onclick = () => menu.classList.remove('mobileHelper')
  menuHeaderCloseBtn.onclick = () => menu.classList.add('mobileHelper')
})
