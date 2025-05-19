// ************* promotion cross button **********************
document.addEventListener("DOMContentLoaded", function () {
  const promoBanner = document.querySelector("#promo-banner");
  const crossBtnIcon = document.querySelector("#cross-btn i");

  if (crossBtnIcon) {
    crossBtnIcon.addEventListener("click", function () {
      // Add the slide-up class to trigger the animation
      promoBanner.classList.add("slide-up");

      // After animation completes, remove the banner completely from DOM
      setTimeout(() => {
        promoBanner.remove(); // This removes the element completely from the DOM
      }, 300); // Match this to your animation duration
    });
  }

  // ****************** hero section swiper ******************************
  // Debug element presence
  console.log(
    "Swiper container exists:",
    !!document.querySelector(".mySwiper")
  );

  try {
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
      on: {
        init: function () {
          console.log("Swiper initialized successfully");
        },
        error: function (e) {
          console.error("Swiper error:", e);
        },
      },
    });
  } catch (error) {
    console.error("Error initializing Swiper:", error);
  }

  // ************** cross hamburger working ***********
  const crossHamburgerBtn = document.querySelector("#cross-hamburger-btn");
  const mobileMenu = document.querySelector("#mobile-menu");
  const heroSection = document.querySelector(".hero-section");
  const menuItemSection = document.querySelector(".mobile-menu-item");

  // Set initial state
  function showMenu() {
    if (mobileMenu && crossHamburgerBtn && heroSection && menuItemSection) {
      mobileMenu.classList.remove("hidden");
      crossHamburgerBtn.classList.add("hidden");
      heroSection.classList.remove("hidden");
      menuItemSection.classList.add("hidden");
    }
  }

  function showHamburger() {
    if (mobileMenu && crossHamburgerBtn && heroSection && menuItemSection) {
      mobileMenu.classList.add("hidden");
      crossHamburgerBtn.classList.remove("hidden");
      heroSection.classList.add("hidden");
      menuItemSection.classList.remove("hidden");
    }
  }

  // Initial state - showing the menu bars icon first
  showMenu();

  // Add event listeners
  if (mobileMenu) {
    mobileMenu.addEventListener("click", showHamburger);
  }

  if (crossHamburgerBtn) {
    crossHamburgerBtn.addEventListener("click", showMenu);
  }

  // ************ arrival section swiper ******************************
  try {
    if (document.querySelector(".featureSwiper")) {
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
        on: {
          init: function () {
            console.log("Feature Swiper initialized successfully");
          },
        },
      });
    }
  } catch (error) {
    console.error("Error initializing Feature Swiper:", error);
  }

  // Add CSS for smooth transitions
  const style = document.createElement("style");
  style.textContent = `
    .tab-content {
      transition: opacity 0.3s ease-in-out;
      opacity: 0;
    }
    
    .accordion-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease-in-out;
    }
    
    .accordion-content.active {
      max-height: 500px; /* Adjust based on your content */
    }
    
    details {
      transition: all 0.3s ease;
    }
    
    summary {
      cursor: pointer;
    }
    
    /* Animation for promotion banner */
    .slide-up {
      transform: translateY(-100%);
      transition: transform 0.3s ease-out;
    }
    
    /* For smooth fade-in effect */
    .fade-in {
      opacity: 0;
      animation: fadeIn 0.3s forwards;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `;
  document.head.appendChild(style);

  // Initialize the first tab
  showTab(1);

  // Initialize accordions
  const accordionSections = document.querySelectorAll("#info, #questions");
  accordionSections.forEach((section) => {
    section.classList.add("accordion-content");
    if (!section.classList.contains("hidden")) {
      section.classList.add("active");
    }
  });

  // Add event listeners for the details elements in desktop view (FAQ questions)
  const detailsElements = document.querySelectorAll("details");

  // Add smooth animation for details elements
  detailsElements.forEach((details) => {
    const summary = details.querySelector("summary");
    const content = details.querySelector("p");

    if (content) {
      content.style.transition = "all 0.3s ease-in-out";
    }

    details.addEventListener("toggle", function (e) {
      // Only run this when a details element is being opened
      if (this.open) {
        // Add animation class
        if (content) content.classList.add("fade-in");

        // Close all other details elements
        detailsElements.forEach((otherDetails) => {
          if (otherDetails !== this && otherDetails.open) {
            otherDetails.open = false;
          }
        });
      } else {
        // Remove animation class
        if (content) content.classList.remove("fade-in");
      }
    });
  });
});

// tabs **************
function showTab(tabNumber) {
  // Hide all tab contents
  const tabs = document.querySelectorAll(".tab-content");
  tabs.forEach((tab) => {
    tab.classList.add("hidden");
    tab.style.opacity = 0;
  });

  // Remove active class from all buttons
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) =>
    button.classList.remove("border-b-2", "border-blue-500", "text-blue-500")
  );

  // Show the selected tab's content
  const activeTab = document.getElementById(`tab-content-${tabNumber}`);
  if (activeTab) {
    activeTab.classList.remove("hidden");

    // Add fade-in animation
    setTimeout(() => {
      activeTab.style.opacity = 1;
    }, 10);
  }

  // Add active styles to the selected tab button
  const activeButton = document.getElementById(`tab-${tabNumber}`);
  if (activeButton) {
    activeButton.classList.add("border-b-2", "border-black", "text-500");
  }
}

// Updated toggleSection function for accordion behavior with animations
function toggleSection(id) {
  // Get all sections that can be toggled
  const allSections = ["info", "questions"];

  // Close all sections except the one being toggled
  allSections.forEach((sectionId) => {
    if (sectionId !== id) {
      const section = document.getElementById(sectionId);
      if (section && !section.classList.contains("hidden")) {
        section.classList.remove("active");
        // Wait for animation to complete before hiding
        setTimeout(() => {
          section.classList.add("hidden");
        }, 300);
      }
    }
  });

  // Toggle the clicked section
  const section = document.getElementById(id);
  if (section) {
    if (section.classList.contains("hidden")) {
      section.classList.remove("hidden");
      // Trigger reflow to allow animation to work
      section.offsetHeight;
      section.classList.add("active");
      section.classList.add("fade-in");
    } else {
      section.classList.remove("active");
      // Wait for animation to complete before hiding
      setTimeout(() => {
        section.classList.add("hidden");
      }, 300);
    }
  }
}
