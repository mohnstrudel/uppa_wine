document.addEventListener('turbolinks:load', function () {
  var headerOpenBtn = document.getElementById('headerOpenBtn')
  var menuHeaderOpenBtn = document.getElementById('menuHeaderOpenBtn')
  var menuHeaderCloseBtn = document.getElementById('menuHeaderCloseBtn')
  var menu = document.getElementById('menu')
  var dim = document.getElementById('dim')

  menuHeaderOpenBtn.onclick = function () {
    menu.classList.remove('mobileHelper')
    dim.style.display = 'block'
    setTimeout(function () {
      dim.style.opacity = '0.6'
    }, 50)
  }

  headerOpenBtn.onclick = function () {
    menu.classList.remove('mobileHelper')
  }

  menuHeaderCloseBtn.onclick = function () {
    menu.classList.add('mobileHelper')
    dim.style.opacity = '0'
    setTimeout(function () {
      dim.style.display = 'none'
    }, 300)
  }

  var winesCatalog = $('#bottles-index')
  if (winesCatalog) {
    winesCatalog.mousewheel(function(event, delta) {
      this.scrollLeft -= (delta * 2)
      event.preventDefault()
    })
    $('.bottle').css('transform', 'translateY(0)')
    // winesCatalog.css('opacity', '1')
  }

  var aboutGallery = $('#about-gallery')
  if (aboutGallery) {
    $(aboutGallery).slick({
      accessibility: false,
      nextArrow: '#rightArrow',
      prevArrow: '#leftArrow',
      mobileFirst: true
    })
  }
})
