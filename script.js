document.addEventListener("DOMContentLoaded", function () {
  const openButton  = document.getElementById("menu-open-button");
  const closeButton = document.getElementById("menu-close-button");
  const sidebar     = document.querySelector("ul.dd");
  const menuLinks   = document.querySelectorAll(".dd .d1");

  // Open sidebar
  openButton.addEventListener("click", () => {
    sidebar.classList.add("active");
    document.body.classList.add("active");
  });

  // Close sidebar
  closeButton.addEventListener("click", () => {
    sidebar.classList.remove("active");
    document.body.classList.remove("active");
  });

  // Close sidebar when any link (d1) is clicked
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      sidebar.classList.remove("active");
      document.body.classList.remove("active");
    });
  });
});

// initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,    // fixed typo (was grrabCursor)
  spaceBetween: 25,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});
