// ************* promtion cross button **********************


const promoBanner = document.querySelector("#promo-banner");
const crossBtnIcon = document.querySelector("#cross-btn i");

crossBtnIcon.addEventListener("click", function () {
  // Add the slide-up class to trigger the animation
  promoBanner.classList.add("slide-up");

  // After animation completes, remove the banner completely from DOM
  setTimeout(() => {
    promoBanner.remove(); // This removes the element completely from the DOM
  }, 300); // Match this to your animation duration
});



// ****************** hero section swiper    ******************************
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  breakpoints: {
    768: {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        enabled: true,
      },
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    enabled: false,
  },
});

// //  video configuration
// video.addEventListener('click', function () {
//     if (video.paused) {
//       video.play(); // Play video if paused
//     } else {
//       video.pause(); // Pause video if playing
//     }
//   });


//  ************** cross hamburger working  ***********

const crossHamburgerBtn = document.querySelector("#cross-hamburger-btn");
const mobileMenu = document.querySelector("#mobile-menu");
const heroSection = document.querySelector(".hero-section");
const menuItemSection = document.querySelector(".mobile-menu-item")
// Set initial state
function showMenu() {
  mobileMenu.classList.remove("hidden");
  crossHamburgerBtn.classList.add("hidden");
  heroSection.classList.remove("hidden");
  menuItemSection.classList.add("hidden");
}
function showHamburger() {
  mobileMenu.classList.add("hidden");
  crossHamburgerBtn.classList.remove("hidden");
  heroSection.classList.add("hidden");
  menuItemSection.classList.remove("hidden");
}
// Initial state - showing the menu bars icon first
showMenu();
// Add event listeners
mobileMenu.addEventListener("click", showHamburger);
crossHamburgerBtn.addEventListener("click", showMenu);



// ************ arrival section swiper   ******************************
var featureSwiper = new Swiper(".featureSwiper", {
  grabCursor: true,
  slidesPerView: "auto",
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: "2",
      spaceBetween: 20,
    },
    862: {
      slidesPerView: "3",
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4.2,
      spaceBetween: 15,
    },
  },
});


// tabs **************
function showTab(tabNumber) {
  // Hide all tab contents
  const tabs = document.querySelectorAll(".tab-content");
  tabs.forEach((tab) => tab.classList.add("hidden"));

  // Remove active class from all buttons
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) =>
    button.classList.remove("border-b-2", "border-blue-500", "text-blue-500")
  );

  // Show the selected tab's content
  const activeTab = document.getElementById(`tab-content-${tabNumber}`);
  activeTab.classList.remove("hidden");

  // Add active styles to the selected tab button
  const activeButton = document.getElementById(`tab-${tabNumber}`);
  activeButton.classList.add("border-b-2", "border-black", "text-500");
}

// Initialize by showing the first tab
showTab(1);

function toggleSection(id) {
  const section = document.getElementById(id);
  section.classList.toggle("hidden");
}


// Sign up page *******************
function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    const currentType = passwordField.type;
    
    // Toggle password field type between 'password' and 'text'
    if (currentType === 'password') {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
}
// ************ product page   ***********************
document.addEventListener("DOMContentLoaded", function () {
  // Initialize thumbnail swiper
  var productThumbsSwiper = new Swiper(".product-thumbs-swiper", {
      spaceBetween: 10,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
  });

  // Initialize main swiper with thumbs
  var productMainSwiper = new Swiper(".product-main-swiper", {
      spaceBetween: 10,
      grabCursor: true,
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      thumbs: {
          swiper: productThumbsSwiper,
      },
  });
// Accordion functionality for FAQ section
document.addEventListener('DOMContentLoaded', () => {
  const details = document.querySelectorAll('details');

  details.forEach(detail => {
    detail.addEventListener('toggle', () => {
      if (detail.open) {
        details.forEach(otherDetail => {
          if (otherDetail !== detail && otherDetail.open) {
            otherDetail.open = false;
          }
        });
      }
    });
  });
});
});