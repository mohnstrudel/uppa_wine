document.addEventListener('turbolinks:load', function () {
  var headerOpenBtn = document.getElementById('headerOpenBtn')
  var menuHeaderOpenBtn = document.getElementById('menuHeaderOpenBtn')
  var menuHeaderCloseBtn = document.getElementById('menuHeaderCloseBtn')
  var menu = document.getElementById('menu')
  var dim = document.getElementById('dim')

  var winesSelector = $('#winesSelector__Title')
  if (winesSelector) {
    var winesOptions = $('#winesSelector__Options')
    var winesOptionsItems = $('[data-select-option]')
    winesSelector.on('click', function (e) {
      winesOptions.toggle('fast')
    })
    $.map(winesOptionsItems, function (option) {
      $(option).on('click', function (e) {
        var id = e.target.dataset.selectOption
        window.location.href = window.location.href.slice(0, -1) + id
      })
    })
  }

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
  }

  var fakeScrollArea = $('#fakeScrollArea')
  var scrollObject = $('#scrollObject')
  if (fakeScrollArea) {
    fakeScrollArea.mousewheel(function(event, delta) {
      var currentScrollTop = scrollObject.scrollTop()
      scrollObject.scrollTop(currentScrollTop - delta)
      event.preventDefault()
    })
  }

  var slickGallery = $('#slick-gallery')
  if (slickGallery) {
    $(slickGallery).slick({
      accessibility: false,
      nextArrow: '#rightArrow',
      prevArrow: '#leftArrow',
      mobileFirst: true
    })
  }

  var bottles = $('[data-wine-path]')
  if (bottles) {
    $.map(bottles, function (bottle) {
      $(bottle).on('click', function (e) {
        console.log(e.target.dataset.winePath);
        var url = e.target.dataset.winePath;
        window.location.href = window.location.origin + url;
      })
    })
  }
})
