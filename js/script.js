//<ПОДКЛЮЧЕНИЕ JS ФАЙЛОВ>=======================================================================================================================================================>
;
;
function testWebP(callback) {
  let webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height === 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support === true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});
;
function ibg() {
  let ibg = document.querySelectorAll('._ibg');
  for (let i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}

ibg();
;
;
;
new Swiper('.network__slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
  },
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  slidesPerView: 1.1,
  breakpoints: {
    800: {
      slidesPerView: 2,
    },
  },
});

new Swiper('.slider__comments', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
  },
  spaceBetween: 30,
  slidesPerView: 2,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  slidesPerView: 1.05,
  breakpoints: {
    1200: {
      slidesPerView: 2,
    },
  },
});
;
;
//</ПОДКЛЮЧЕНИЕ JS ФАЙЛОВ>=======================================================================================================================================================>

document.querySelector('.header__burger').addEventListener('click', change);
function change() {
  document.querySelector('.header__burger').classList.toggle('_active');
  document.querySelector('.header__nav').classList.toggle('_active');
  document.querySelector('.header__title').classList.toggle('_active');
  document.querySelector('.header__logo').classList.toggle('_active');
  document.querySelector('.header').classList.toggle('_active');
  document.querySelector('body').classList.toggle('_lock');
  if (document.querySelector('.header__burger').classList.contains('_active')) {
    document.querySelector('.header__burger').innerHTML = 'Close';
  } else document.querySelector('.header__burger').innerHTML = 'Menu';
  document.querySelector('.header').addEventListener('click', (e) => {
    if (!e.target.closest('.header__content')) {
      change();
    }
  });
}

const sel = document.querySelector('.option');
const selWp = document.querySelector('.form__option');
function select() {
  sel.addEventListener('click', () => {
    selWp.classList.toggle('_selected');
  });
}
select();
//=======================================================================================================================================================>
AOS.init({
  once: true,
});
