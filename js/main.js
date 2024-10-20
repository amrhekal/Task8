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
nextBtn = document.querySelector(".next");
prevBtn = document.querySelector(".prev");
slides = document.querySelectorAll(".slider-container .slide");
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
let acc = document.querySelectorAll(".talk .accordion");
let panel = document.querySelectorAll(".talk .panel");

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