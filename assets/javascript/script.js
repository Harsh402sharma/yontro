
   

    // Top Swiper - Left Direction
    new Swiper('.topSwiper', {
      loop: true,
      freeMode: true,
      speed: 4000,
      grabCursor: true,
      allowTouchMove: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
      },
    });


    // Bottom Swiper - Right Direction
    new Swiper('.bottomSwiper', {
      loop: true,
      freeMode: true,
      speed: 4000,
      grabCursor: true,
      allowTouchMove: true,
      autoplay: {
        delay: 0,
        reverseDirection: true,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
      },
    });


    new Swiper('.trendingSwiper', {
    loop: true,
    spaceBetween: 25,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 2,
      },

      1024: {
        slidesPerView: 4,
      },
    },
  });



  new Swiper('.clientSwiper', {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
    },
  });

  window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {
      preloader.classList.add("hide");
    }, 1000);

  });