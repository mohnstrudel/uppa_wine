
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

  var winesCatalog = $('#bottles-index');
  if (winesCatalog) {
    var timeout, trackpad = false;
    this.$container = $('#bottles-index');
    var self = this;
    this.$container.on('mousewheel', function(event) {
      self.$container.scrollLeft( self.$container.scrollLeft() - ( event.deltaY * event.deltaFactor ) );
      event.preventDefault()
    });

    $(document).on('keyup', function(event, delta, deltaX, deltaY){
      if(event.keyCode == 39 || event.keyCode == 40){
        // При нажатии на вниз ИЛИ вправо скроллим вправо
        var leftPos = winesCatalog.scrollLeft();
        winesCatalog.animate({scrollLeft: leftPos + 600}, 800);
        
        // console.log('pressing right arrow');
      }
      else if(event.keyCode == 37 || event.keyCode == 38){
        // При нажатии на вверх ИЛИ влево скроллим влево
        var leftPos = winesCatalog.scrollLeft();
        winesCatalog.animate({scrollLeft: leftPos - 600}, 800);
        self.$container.scrollLeft();
        
      }
        
    })



    $('.bottle').css('transform', 'translateY(0)');

    var bottles = $('[data-wine-path]');
    // var locale = $('[data-locale]');
    // console.log("locale is: " + locale);
    
    $.map(bottles, function (bottle) {
      $(bottle).on('click', function (e) {
        var senderElement = e.target;
        // console.log("senderElement is: " + senderElement);
        var url = e.currentTarget.dataset.winePath
        var locale = e.currentTarget.dataset.locale;
        // console.log('locale is: ' + locale);
        if($(e.target).is(".bottle") || ($(e.target).is(".bottleImage"))) {
          if(locale == "ru"){
            window.location.href = window.location.origin + url  
          }
          
        }
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
