// const star = '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 500 500" fill="none"><rect width="500" height="500" fill="none"/><path d="M218 112C222.185 144.082 244.054 170.55 272.056 185.889C290.892 196.207 312.238 201.456 333 206.333C348.437 209.96 363.854 212.588 379.722 212.944C383.309 213.025 391.765 213.81 392.944 208.5C393.278 206.998 380.363 214.938 378.222 216.222C362.222 225.822 346.966 234.496 336 250C322.282 269.394 317.294 290.892 320.667 314.5C322.452 326.999 328.332 340.236 334.056 351.444C336.317 355.874 339.991 362.88 343.556 366.444C345.765 368.654 344.649 368.437 343.5 365.5C340.768 358.518 335.176 352.146 330.444 346.444C307.14 318.36 282.453 293.28 250 275.611C223.06 260.944 194.911 249.668 164 250C151.125 250.138 133.608 255.422 123 263.222C118.338 266.65 124.204 263.542 126 262.444C130.503 259.693 135.848 257.138 140 253.944C145.968 249.354 152.884 246.429 158.556 241.444C166.642 234.338 175.198 227.484 181.167 218.389C188.315 207.496 199.853 194.969 203 182.222C204.805 174.912 206.926 167.554 208.556 160.222C210.067 153.42 209.759 145.804 212 139.222C214.607 131.565 217 120.111 217 112" stroke="white" stroke-width="50" stroke-linecap="round"/></svg>'
// const avoidElement = document.getElementById("page-hero");
// const BG = document.getElementById("page-hero-wrapper");

// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
// }
// function getRndFloat(min, max) {
//     return (Math.random() * (max - min + 1)) + min;
// }

// function drawStar(x, y) {
//     BG.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 500 500" fill="none" style="position:absolute;top:${y}px;left:${x}px;z-index: -1;"><rect width="500" height="500" fill="none"/><path d="M218 112C222.185 144.082 244.054 170.55 272.056 185.889C290.892 196.207 312.238 201.456 333 206.333C348.437 209.96 363.854 212.588 379.722 212.944C383.309 213.025 391.765 213.81 392.944 208.5C393.278 206.998 380.363 214.938 378.222 216.222C362.222 225.822 346.966 234.496 336 250C322.282 269.394 317.294 290.892 320.667 314.5C322.452 326.999 328.332 340.236 334.056 351.444C336.317 355.874 339.991 362.88 343.556 366.444C345.765 368.654 344.649 368.437 343.5 365.5C340.768 358.518 335.176 352.146 330.444 346.444C307.14 318.36 282.453 293.28 250 275.611C223.06 260.944 194.911 249.668 164 250C151.125 250.138 133.608 255.422 123 263.222C118.338 266.65 124.204 263.542 126 262.444C130.503 259.693 135.848 257.138 140 253.944C145.968 249.354 152.884 246.429 158.556 241.444C166.642 234.338 175.198 227.484 181.167 218.389C188.315 207.496 199.853 194.969 203 182.222C204.805 174.912 206.926 167.554 208.556 160.222C210.067 153.42 209.759 145.804 212 139.222C214.607 131.565 217 120.111 217 112" stroke="white" stroke-width="50" stroke-linecap="round"/></svg>`
// }

// const generateBGStar = function() {
//     const starsCount = getRndInteger(12, 4);
//     // for(let i = 0; i<= Math.floor(starsCount/4); i++) {
//     //     const starX = getRndInteger(0, window.innerWidth);
//     //     const starY = getRndInteger(0, avoidElement.offsetTop);
//     //     console.log(starX,starY);
//     //     drawStar(starX, starY);
//     // }
//     // for(let i = 0; i<= Math.floor(starsCount/4); i++) {
//     //     const starX = getRndInteger(0, window.innerWidth);
//     //     const starY = getRndInteger((avoidElement.offsetTop + avoidElement.offsetHeight), window.innerHeight);
//     //     console.log(starX,starY);
//     //     drawStar(starX, starY);
//     // }
//     // for(let i = 0; i<= Math.floor(starsCount/4); i++) {
//     //     const starX = getRndInteger(0, avoidElement.offsetLeft);
//     //     const starY = getRndInteger(0, window.innerHeight);
//     //     console.log(starX,starY);
//     //     drawStar(starX, starY);
//     // }
//     // for(let i = 0; i<= Math.floor(starsCount/4); i++) {
//     //     const starX = getRndInteger(avoidElement.offsetLeft + avoidElement.offsetWidth , window.innerWidth);
//     //     const starY = getRndInteger(0, window.innerHeight);
//     //     console.log(starX,starY);
//     //     drawStar(starX, starY);
//     // }
//     for(let i = 0; i<= Math.floor(starsCount/4); i++) {
//         const starX = getRndInteger(0, (window.innerWidth-30)/2);
//         const starY = getRndInteger(0, (window.innerHeight-30)/2);
//         console.log(starX,starY);
//         drawStar(starX, starY);
//     }
//     for(let i = 0; i<= Math.floor(starsCount/4); i++) {
//         const starX = getRndInteger((window.innerWidth-30)/2, window.innerWidth-30);
//         const starY = getRndInteger(0, window.innerHeight-30/2);
//         console.log(starX,starY);
//         drawStar(starX, starY);
//     }
//     for(let i = 0; i<= Math.floor(starsCount/4); i++) {
//         const starX = getRndInteger(0, window.innerWidth-30/2);
//         const starY = getRndInteger((window.innerHeight-30)/2, window.innerHeight-30);
//         console.log(starX,starY);
//         drawStar(starX, starY);
//     }
//     for(let i = 0; i<= Math.floor(starsCount/4); i++) {
//         const starX = getRndInteger((window.innerWidth-30)/2, window.innerWidth-30);
//         const starY = getRndInteger((window.innerHeight-30)/2, window.innerHeight-30);
//         console.log(starX,starY);
//         drawStar(starX, starY);
//     }
//     console.log(window.innerWidth);
//     console.log(window.innerHeight);
//     console.log(avoidElement.offsetWidth);
//     console.log(avoidElement.offsetLeft);
//     console.log(avoidElement.offsetHeight);
//     console.log(avoidElement.offsetTop);
//     console.log(avoidElement.getBoundingClientRect())
// }
// // document.addEventListener("DOMContentLoaded", generateBGStar()) ;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
const resetActiveState = function(items, activeItem) {
    for (let i = 0; i < items.length; i++) {
        const element = items[i];
        if (element === activeItem) {
            continue;
        }
        else {
            document.getElementById(`${element.id}-link`).classList.remove("active-link");
            document.getElementById(`${element.id}-link`).querySelector("div").style.display = "none";
        }
    }
}

const checkActiveSection = function() {
    const navSections = document.getElementsByClassName("nav-section");
    for (let i = 0; i < navSections.length; i++) {
        const section = navSections[i];
        let corespondingLink = document.getElementById(`${section.id}-link`);
        sectionRect = section.getBoundingClientRect();
        if (((sectionRect.top+sectionRect.bottom)/2 > 0 && (sectionRect.top+sectionRect.bottom)/2 < screen.height) || (sectionRect.top < 0 && sectionRect.bottom > screen.height)) {
            corespondingLink.classList.add("active-link");
            corespondingLink.querySelector("div").style.display = "block";
            resetActiveState(navSections, section);
            break;
        }
    }
}

window.onscroll = checkActiveSection;
checkActiveSection();