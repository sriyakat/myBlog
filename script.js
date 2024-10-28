// header section...........................................*
let list = document.querySelector(".nav_list");
let menu = document.querySelector(".nav_hamburger");

menu.addEventListener('click', ()=>{
    list.classList.toggle('showNavBar');
})

// main section
// section one.........................................................*

let button = document.querySelector('.Btn');
let read = document.querySelector(".read_more");

button.addEventListener('click' , ()=>{
    read.classList.toggle('details');
})

// skill section.....................................................
const skills = {
  html: 90,
  css: 70,
  js: 55,
  angular: 30,
};

function setProgress(skill, percentage) {
  const progressBar = document.getElementById(`${skill}-progress`);
  progressBar.style.width = percentage + "%";
  progressBar.textContent = percentage + "%";
}

setProgress("html", skills.html);
setProgress("css", skills.css);
setProgress("js", skills.js);
setProgress("angular", skills.angular);



// section three.....................................................*
//  const images = document.querySelector('.carousel-images');
//     const totalImages = images.children.length;
//     let index = 0;

//     function slideShow() {
//       index++;
//       if (index === totalImages) {
//         index = 0;
//       }
//       images.style.transform = `translateX(-${index * 100}%)`;
//     }

//     setInterval(slideShow, 2000); // Change image every 3 seconds

const carousel = document.getElementById('carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
let index = 0;

function scrollCarousel() {
    index = (index + 1) % carouselItems.length; // Loop back to the first item after the last one
    carousel.scrollTo({
        left: index * window.innerWidth, // Scroll horizontally based on the current index
        behavior: 'smooth'
    });
}

setInterval(scrollCarousel, 2000); // Scroll every 2 seconds

// footer section...................................................

// Update current year dynamically
document.getElementById('current-year').textContent = new Date().getFullYear();

// Smooth scroll to top
document.getElementById('back-to-top').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Newsletter form submission
document.getElementById('newsletter-form').addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Thank you for subscribing to our Blog!');
});



