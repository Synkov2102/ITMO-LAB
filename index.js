//этот код помогает определить на каком устройстве открыта страница
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');

    let menuEducations = document.querySelectorAll('.menu__sub');
    if (menuEducations.length > 0) {
        for (let index = 0; index < menuEducations.length; index++) {
            const menuEducation = menuEducations[index];
            menuEducation.addEventListener("click", function (e) {
                menuEducation.parentElement.classList.toggle('_active');
            });
        }
    }
    

} else {
    document.body.classList.add('_pc');
}

//меня бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

//прокрутка при клике
const menuLinks = document.querySelectorAll('[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

// function toggleImg() {
//     const myButtonClasses = document.getElementById("btn1").classList;
//     const g1 = document.getElementById("btn1");
  
//     if (myButtonClasses.contains("switcher__radio-magistr")) {
//       myButtonClasses.remove("switcher__radio-magistr");
//     } else {
//       myButtonClasses.add("switcher__radio-magistr");
//       g1.src = "./images/Study/Magistr.png";
//     }
//     if (myButtonClasses.contains("switcher__radio-aspirant")) {
//       myButtonClasses.remove("switcher__radio-aspirant");
//     } else {
//       myButtonClasses.add("switcher__radio-aspirant");
//       g1.src = "./images/Study/Aspirant.png";
//     }
//   }

// смена картинок при нажатии на кнопки
  const g1 = document.getElementById("btn1");
  function toggleImgMag(src) {
      g1.src = src;
      const activeElement = document.querySelector('.switcher__radio_active');
    //   activeElement.classList.contains('_active') {
    //     activeElement.classList.remove('_active');
    // }
    

  }

//   function toggleImgAsp() {
//       g1.src = "./images/Study/Aspirant.png"

//   }