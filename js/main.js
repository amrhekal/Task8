// Show Nav List On Small Screen
const barsBtn = document.querySelector(".bars");
const navList = document.querySelector("nav .nav-content .right");

barsBtn.addEventListener("click", () => {
    if (navList.clientHeight === 0) {
        navList.style.height = `${navList.scrollHeight}px`;
    } else {
        navList.style.height = "";
    }
});
/////////////////////////////////////////////////////////////////////////////////////
// slider
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const slides = document.querySelectorAll(".slider-container .slide");
let currentIndex = 0;

nextBtn.addEventListener("click", () => {
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains("active")) {
            currentIndex = i;
            slides[i].classList.remove("active");
        }
    }
    if (currentIndex === slides.length - 1) {
        slides[0].classList.add("active");
    } else {
        slides[++currentIndex].classList.add("active");
    }
});

prevBtn.addEventListener("click", () => {
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains("active")) {
            currentIndex = i;
            slides[i].classList.remove("active");
        }
    }
    if (currentIndex === 0) {
        slides[slides.length - 1].classList.add("active");
    } else {
        slides[--currentIndex].classList.add("active");
    }
});
////////////////////////////////////////////////////////////////////
//accordion section
const acc = document.querySelectorAll(".talk .accordion");
const panel = document.querySelectorAll(".talk .panel");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        // Close opend accordion panels
        if (acc[i].classList.contains("active")) {
            acc[i].classList.remove("active");
            panel[i].style.height = '';
        } else {
            // Close all other accordion panels
            for (let j = 0; j < acc.length; j++) {
                acc[j].classList.remove("active");
                panel[j].style.height = '';
            }
            // Toggle the clicked accordion
            acc[i].classList.add("active");
            panel[i].style.height = `${panel[i].scrollHeight}px`;
        }

    });
}
/////////////////////////////////////////////////////////////////
// Show Arrow Up
const headerUp = document.querySelector(".header-up");
headerUp.addEventListener('click', () => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        headerUp.style.display = "block";
    } else {
        headerUp.style.display = "none";
    }

})