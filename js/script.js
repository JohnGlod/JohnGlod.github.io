'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const firstSlider = document.querySelector('.first-slider'),
  arrivalSlider = document.querySelector('.arrival-slider'),
  secondDaySlider = document.querySelector('.second-day-slider'),
  avachinskySlider = document.querySelector('.avachinsky-slider'),
  vachkazhetsSlider = document.querySelector('.vachkazhets-slider'),
  seaTripSlider = document.querySelector('.sea-trip-slider'),
  seaOceanSlider = document.querySelector('.sea-ocean-slider'),
  helicopterSlider = document.querySelector('.helicopter-slider'),
  teamSlider = document.querySelector('.team-slider');

const First = new Swiper(firstSlider, {
  autoplay: {
    delay: 3000,
  },
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 35,
  centerSlides: true,
  breakpoints: {
    320: {
      slidesPerView: 1.3,
    },
    450: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    }
  },
  autoHeight: true,
  grabCursor: true,
  navigation: {
    nextEl: '.first-slider-next',
    prevEl: '.first-slider-prev',
  },
});

const Arrival = new Swiper( arrivalSlider, {
  autoplay: {
    delay: 3000,
  },
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  centerSlides: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2.5,
    },
  },
  autoHeight: true,
  grabCursor: true,
  navigation: {
    nextEl: '.arrival-slider-next',
    prevEl: '.arrival-slider-prev',
  },
});

const secondDay = new Swiper( secondDaySlider, {
  autoplay: {
    delay: 3000,
  },
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  centerSlides: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2.2,
    },
    992: {
      slidesPerView: 2.5,
    },

  },
  autoHeight: true,
  grabCursor: true,
  navigation: {
    nextEl: '.second-day-slider-next',
    prevEl: '.second-day-slider-prev',
  },
});


const Vachkazhets = new Swiper( vachkazhetsSlider, {
  autoplay: {
    delay: 3000,
  },
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  centerSlides: false,
  breakpoints: {
    375: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2.5,
    },
  },
  autoHeight: true,
  grabCursor: true,
  navigation: {
    nextEl: '.vachkazhets-slider-next',
    prevEl: '.vachkazhets-slider-prev',
  },
});

const Avachinsky = new Swiper( avachinskySlider, {
  autoplay: {
    delay: 3000,
  },
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  centerSlides: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2.5,
    },
  },
  autoHeight: true,
  grabCursor: true,
  navigation: {
    nextEl: '.avachinsky-slider-next',
    prevEl: '.avachinsky-slider-prev',
  },
});

const seaTrip = new Swiper( seaTripSlider, {
  autoplay: {
    delay: 3000,
  },
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  centerSlides: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2.5,
    },
  },
  autoHeight: true,
  grabCursor: true,
  navigation: {
    nextEl: '.sea-trip-slider-next',
    prevEl: '.sea-trip-slider-prev',
  },
});

const seaOcean = new Swiper( seaOceanSlider, {
  autoplay: {
    delay: 3000,
  },
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  centerSlides: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2.5,
    },
  },
  autoHeight: true,
  grabCursor: true,
  navigation: {
    nextEl: '.sea-ocean-slider-next',
    prevEl: '.sea-ocean-slider-prev',
  },
});

const Helicopter = new Swiper( helicopterSlider, {
  autoplay: {
    delay: 3000,
  },
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  centerSlides: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2.2,
    },
    992: {
      slidesPerView: 2.5,
    },

  },
  autoHeight: true,
  grabCursor: true,
  navigation: {
    nextEl: '.helicopter-slider-next',
    prevEl: '.helicopter-slider-prev',
  },
});

const Team = new Swiper(teamSlider, {
  autoplay: {
    delay: 3000,
  },
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 35,
  centerSlides: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    }
  },
  autoHeight: false,
  grabCursor: true,
  navigation: {
    nextEl: '.team-slider-next',
    prevEl: '.team-slider-prev',
  },
});
;
  const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

if (iconMenu) {
  iconMenu.addEventListener('click', (e) => {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}
;
  const animItems = document.querySelectorAll('._anim-items');

function offset(el) {
  const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

function animOnScroll() {
  animItems.forEach((animItem) => {
    const animItemHeight = animItem.offsetHeight;
    const animItemOffset = offset(animItem).top;
    const animStart = 4;

    let animItemPoint = window.innerHeight - animItemHeight / animStart;

    if (animItemHeight > window.innerHeight) {
      animItemPoint = window.innerHeight - window.innerHeight / animStart;
    }

    const scrolledToObject =
      window.pageYOffset > animItemOffset - animItemPoint;
    const didNotScrollObject =
      window.pageYOffset < animItemOffset + animItemHeight;

    if (scrolledToObject && didNotScrollObject) {
      animItem.classList.add('_active');
    } else {
      if (!animItem.classList.contains('_anim-no-hide')) {
        animItem.classList.remove('_active');
      }
    }
  });
  setTimeout(() => animOnScroll(), 600);
}

window.addEventListener('scroll', animOnScroll);
;    
  const popupLinks = document.querySelectorAll('.popup-link')
const body = document.querySelector('body')
const closePopupElems = document.querySelectorAll('.close-popup') 
let unlock = true;
const timeout = 800;

function openPopup(popup){
  if (popup && unlock){
    const popupActive = document.querySelector('.popup.open')
    popupActive ? closePopup(popupActive, false) : lockBody()
    popup.classList.add('open')
    popup.addEventListener('click', (e) => {
      if (!e.target.closest('.popup__inner')) {
        closePopup(e.target.closest('.popup'))
      }
    })
  }
}
function closePopup(popup, status = true){
  if (unlock){
    popup.classList.remove('open')
    if(status){
      unLockBody()
    }
  }
}

function lockBody(){
  const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px'
  body.style.paddingRight = lockPaddingValue
  body.classList.add('lock')
  unlock = false
  setTimeout(() => unlock = true, timeout)
}

function unLockBody(){
  setTimeout(()=> {
    body.style.paddingRight = '0px'
    body.classList.remove('lock')
  }, timeout)

  unlock = false
  setTimeout(() => unlock = true, timeout)
}

popupLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const popupName = link.getAttribute('href').replace('#', '')
    const currentPopup = document.getElementById(popupName)
    console.log(currentPopup)
    openPopup(currentPopup)
    e.preventDefault()
  })
})

closePopupElems.forEach(link => {
  link.addEventListener('click', (e) => {
    closePopup(link.closest('.popup'))
    e.preventDefault()
  })
})

document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape'){
    const popupActive = document.querySelector('.popup.open')
    closePopup(popupActive)
  }
})
;   
  const buttonСounterElem = document.querySelector('.number');
const form = document.forms['form'];

const counterChange = (e) =>
  e.target.classList.contains('number__plus')
    ? quantity.stepUp()
    : quantity.stepDown();

buttonСounterElem.addEventListener('click', counterChange);

const formAddError = (input) => {
  input.classList.add('_error');
  input.parentElement.classList.add('_error');
};
const formRemoveError = (input) => {
  input.classList.remove('_error');
  input.parentElement.classList.remove('_error');
};
const emailValidate = (input) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(input.value).toLowerCase());
};

const formValidate = (form) => {
  let error = 0;
  let formReq = document.querySelectorAll('._req');
  formReq.forEach((input) => {
    formRemoveError(input);

    if (input.classList.contains('_email')) {
      if (!emailValidate(input)) {
        formAddError(input);
        error++;
      }
    } else {
      if (input.value === '') {
        formAddError(input);
        error++;
      }
    }
  });
  return error;
};

const formSend = async (e) => {
  e.preventDefault();

  const email = document.querySelector('#email');
  const quantity = document.querySelector('#quantity');
  const date = document.querySelector('#date');
  const message = document.querySelector('#message');
  const name = document.querySelector('#name');
  const tariff = document.querySelector('input[name="tariff"]:checked');

  const data = {
    email: email.value,
    name: name.value,
    date: date.value,
    message: message.value,
    tariff: tariff.value,
    quantity: quantity.value,
  };

  const error = formValidate(form);

  if (!error) {
    form.classList.add('_sending');

    const response = await fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert('Заявка успешно отправлена!');
      form.reset();
      form.classList.remove('_sending');
    } else {
      alert('Упс, что-то пошло не так!');
    }
  } else {
    alert('Заполните необходимые поля. ');
  }
};

form.addEventListener('submit', formSend);
;    
});
