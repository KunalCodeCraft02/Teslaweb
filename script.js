let car = document.querySelectorAll(".carlogo img");
let itag = document.querySelector(".links i");
let links = document.querySelectorAll("#menu h4");

let modelx = document.getElementById("modelx");
let models = document.getElementById("models");
let modelc = document.getElementById("modelc");

let ModelText = document.querySelector("#centertext .text span");


let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");



// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

function carAnimation() {
    let tl = gsap.timeline()

    tl.to(car, {
        x: -1100,
        duration: 2,
        scrollTrigger: {
            trigger: ".carlogo",
            start: "top 20%",
            scrub: true
        }
    });
}

function navAnimation() {
    let tl2 = gsap.timeline();
    let flag = 0

    itag.addEventListener("click", function () {
        if (flag === 0) {
            tl2.to("#menu", {
                right: "-10px",
            })
            tl2.from(links, {
                x: 500,
                duration: 0.5,
                stagger: {
                    amount: 0.3
                }
            })
            flag = 1
        }
        else {
            tl2.to("#menu", {
                right: "-30%",
                stagger: {
                    amount: 0.3,
                },
                duration: 1
            })
            flag = 0
        }
    })
}

// function carModelAnimation() {
//     function hideAllImages() {
//         gsap.set([img1, img2, img3], { display: "none" });
//     }

//     modelx.addEventListener("click", function () {
//         hideAllImages();
//         ModelText.textContent = "Model X";
//         gsap.set(img1, { display: "block" });
//         gsap.fromTo(img1, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: Power2.easeOut });
//     });

//     models.addEventListener("click", function () {
//         hideAllImages();
//         ModelText.textContent = "Model S";
//         gsap.set(img2, { display: "block" });
//         gsap.fromTo(img2, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: Power2.easeOut });
//     });

//     modelc.addEventListener("click", function () {
//         hideAllImages();
//         ModelText.textContent = "Model C";
//         gsap.set(img3, { display: "block" });
//         gsap.fromTo(img3, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: Power2.easeOut });
//     });
// }

// carModelAnimation();




carAnimation();
navAnimation();
// // carModelAnimation();
