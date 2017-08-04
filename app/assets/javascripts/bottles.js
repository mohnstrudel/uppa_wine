document.addEventListener('turbolinks:load', () => {
  const headerOpenBtn = document.getElementById('headerOpenBtn')
  const menuHeaderCloseBtn = document.getElementById('menuHeaderCloseBtn')
  const menu = document.getElementById('menu')

  headerOpenBtn.onclick = () => menu.classList.remove('hidden')
  menuHeaderCloseBtn.onclick = () => menu.classList.add('hidden')
})
