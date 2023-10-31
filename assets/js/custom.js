const bannerSwiper = new Swiper(".banner-slider", {
  loop: true,
  loopedSlides: 2,
  slidesPerView: 2,
  spaceBetween: 24,
  navigation: {
    nextEl: ".banner-arrow.next",
    prevEl: ".banner-arrow.prev",
  },
  watchOverflow: true,  
  // centeredSlides: true,
  // centerInsufficientSlides: true,
  //   history: {
  //     replaceState: true,
  //   },
});

const addButtonElements = document.querySelectorAll('.add-btn');
const minusButtonElements = document.querySelectorAll('.minus');

addButtonElements.forEach(function(button) {
  button.addEventListener('click', itemAdded);
});

minusButtonElements.forEach(function(button) {
  button.addEventListener('click', itemRemoved);
});

function itemAdded() {
  this.parentElement.classList.add("added");
}
function itemRemoved() {
  this.parentElement.parentElement.classList.remove("added");
}

const placesSwiper = new Swiper(".places-slider", {
  slidesPerView: 4,
  spaceBetween: 24,
  navigation: {
    nextEl: ".places-arrows .next",
    prevEl: ".places-arrows .prev",
  },
  watchOverflow: true,
  //   history: {
  //     replaceState: true,
  //   },
});


const categoriesSwiper = new Swiper(".categories-slider", {
  slidesPerView: 12,
  spaceBetween: 20,
  navigation: {
    nextEl: ".places-arrows .next",
    prevEl: ".places-arrows .prev",
  },
  watchOverflow: true,
  //   history: {
  //     replaceState: true,
  //   },
});


const expandOrderbutton = document.querySelectorAll('.expand-order-details');

function expandOrder() {
  const orderContainer = this.parentElement.parentElement.parentElement;
  const orderSummaryContainer = orderContainer.querySelector('.order-sumary-container');
  const containerHeight = orderContainer.querySelector('.row').offsetHeight;

  if (orderContainer.classList.contains('order-expanded')) {
    orderContainer.classList.remove('order-expanded');
    orderSummaryContainer.style.height = '0px';
    this.parentElement.parentElement.classList.remove('shadow');
  } else {
    orderContainer.classList.add('order-expanded');
    orderSummaryContainer.style.height = containerHeight + 'px';
    this.parentElement.parentElement.classList.add('shadow');
  }

  console.log(containerHeight);
}

expandOrderbutton.forEach((expandButton) => {
 expandButton.addEventListener('click', expandOrder);
})


const productCarousel = document.querySelector("#productCarousel");

if (productCarousel) {
  new Carousel(
    productCarousel,
    {
      infinite: false,
      Dots: false,
      Thumbs: {
        type: "classic",
        Carousel: {
          slidesPerPage: 1,
          Navigation: true,
          center: true,
          fill: true,
          dragFree: true,
        },
      },
    },
    { Thumbs }
  );
}

Fancybox.bind('[data-fancybox="gallery"]', {
  idle: false,
  compact: false,
  dragToClose: false,

  animated: false,
  showClass: "f-fadeSlowIn",
  hideClass: false,

  Carousel: {
    infinite: false,
  },

  Images: {
    zoom: false,
    Panzoom: {
      maxScale: 1.5,
    },
  },

  Toolbar: {
    absolute: true,
    display: {
      left: [],
      middle: [],
    },
  },

  Thumbs: {
    type: "classic",
    Carousel: {
      axis: "x",
      slidesPerPage: 1,
      Navigation: true,
      fill: true,
      dragFree: true,

      // breakpoints: {
      //   '(min-width: 640px)': {
      //     axis: 'y',
      //   },
      // },
    },
  },
});