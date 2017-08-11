document.addEventListener('turbolinks:load', function () {
  const headerOpenBtn = document.getElementById('headerOpenBtn')
  const menuHeaderOpenBtn = document.getElementById('menuHeaderOpenBtn')
  const menuHeaderCloseBtn = document.getElementById('menuHeaderCloseBtn')
  const menu = document.getElementById('menu')
  const dim = document.getElementById('dim')

  menuHeaderOpenBtn.onclick = function () {
    menu.classList.remove('mobileHelper')
    dim.style.display = 'block'
    setTimeout(() => {
      dim.style.opacity = '0.6'
    }, 50)
  }

  headerOpenBtn.onclick = function () {
    menu.classList.remove('mobileHelper')
  }

  menuHeaderCloseBtn.onclick = function () {
    menu.classList.add('mobileHelper')
    dim.style.opacity = '0'
    setTimeout(() => {
      dim.style.display = 'none'
    }, 300)
  }
})
