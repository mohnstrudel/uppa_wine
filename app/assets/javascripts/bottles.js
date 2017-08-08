document.addEventListener('turbolinks:load', () => {
  const burger = document.getElementById('burger')
  const burgerCloseBtn = document.getElementById('burgerCloseBtn')
  const menu = document.getElementById('menu')

  burger.onclick = () => menu.classList.remove('hidden')
  burgerCloseBtn.onclick = () => menu.classList.add('hidden')
})
