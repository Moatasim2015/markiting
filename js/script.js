
/*=========== header menu =============*/

let menu = document.querySelector('.header .menu');

document.querySelector('#menu-btn').onclick = () =>{
   menu.classList.toggle('active');
}




/*=========== home section / swiper demos =============*/
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  hashNavigation: {
    watchState: true,
  },
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



/*======== latest product ==========*/

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("latest-product");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}



/*=========== featured section / swiper demos =============*/
var swiper = new Swiper(".featured-slider", {
  slidesPerView: 1,
  spaceBetween:25,
  loop:true,
  centeredSlides:true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
  breakpoints: {
      0: {
          slidesPerView:1,
    },
    330: {
      slidesPerView:2,
    },
    550: {
      slidesPerView:3,
    },
    768: {
      slidesPerView:4,
    },
    1050: {
      slidesPerView:5,
    },
  },
});




// ------------------------- up ------------------------

let span = document.querySelector(".up");

window.onscroll = function () {
this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
    window.scrollTo({
        top: 0 ,
        behavior: "smooth",
    });
};