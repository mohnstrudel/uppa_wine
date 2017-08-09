document.addEventListener('turbolinks:load', function () {
  var headerOpenBtn = document.getElementById('headerOpenBtn')
  var menuHeaderOpenBtn = document.getElementById('menuHeaderOpenBtn')
  var menuHeaderCloseBtn = document.getElementById('menuHeaderCloseBtn')
  var menu = document.getElementById('menu')

  menuHeaderOpenBtn.onclick = function () {
    menu.classList.remove('mobileHelper')
  }
  headerOpenBtn.onclick = function () {
    menu.classList.remove('mobileHelper')
  }
  menuHeaderCloseBtn.onclick = function () {
    menu.classList.add('mobileHelper')
  }
})
