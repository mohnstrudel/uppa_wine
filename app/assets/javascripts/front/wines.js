document.addEventListener('turbolinks:load', function () {
  var headerOpenBtn = document.getElementById('headerOpenBtn');
  var menuHeaderOpenBtn = document.getElementById('menuHeaderOpenBtn');
  var menuHeaderCloseBtn = document.getElementById('menuHeaderCloseBtn');
  var menu = document.getElementById('menu');
  var dim = document.getElementById('dim');

  // Выбор года бутылки из выпадашки на мобилках
  var winesSelector = $('#winesSelector__Title')
  if (winesSelector) {
    var winesOptions = $('#winesSelector__Options')
    var winesOptionsItems = $('[data-select-option]')
    winesSelector.on('click', function (e) {
      winesOptions.toggle('fast')
    })
    $.map(winesOptionsItems, function (option) {
      $(option).on('click', function (e) {
        var newSlug = e.target.dataset.selectOption
        var oldUrl = window.location.href
        var prevSlugStartIndex = oldUrl.lastIndexOf('/') + 1
        window.location.href = oldUrl.slice(0, prevSlugStartIndex) + newSlug
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
    var timeout, trackpad = false;
    winesCatalog.mousewheel(function(e, delta) {
      if( trackpad || Math.abs(e.deltaX) ) {
        // probably using trackpad
        // only respond on X axis for a second
        trackpad = true; clearTimeout( timeout );
        timeout = setTimeout(function(){ trackpad = false; }, 1000);
        // use a smaller multiplier
          this.scrollLeft -= (e.deltaX * 10);
      } else {
          // most likely not trackpad
          this.scrollLeft -= (e.deltaY * 40);
      }

      e.preventDefault();
      // function normalizeWheelSpeed(event) {
      //   var normalized;
      //   if (event.wheelDelta) {
      //     normalized = (event.wheelDelta % 120 - 0) === -0 ? event.wheelDelta / 120 : event.wheelDelta / 12;
      //   } else {
      //     var rawAmmount = event.deltaY ? event.deltaY : event.detail;
      //     normalized = -(rawAmmount % 3 ? rawAmmount * 10 : rawAmmount / 3);
      //   }
      //   return normalized;
      // }
      // var d = normalizeWheelSpeed(event)
      // this.scrollLeft -= d * 0.8
      // event.preventDefault()
    })
    $('.bottle').css('transform', 'translateY(0)')

    var bottles = $('[data-wine-path]')
    $.map(bottles, function (bottle) {
      $(bottle).on('click', function (e) {
        var url = e.currentTarget.dataset.winePath
        window.location.href = window.location.origin + url
      })
    })
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
})
