/* =========================================
   PRIYANKA PORTFOLIO
========================================= */

document.addEventListener("DOMContentLoaded", function () {


    // =========================================
// HERO TYPING ANIMATION
// =========================================

const typingText = document.getElementById("typing-text");

const roles = [
    "Full-Stack Developer",
    "Python Developer",
    "Web Developer"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {
        typingText.textContent =
            currentRole.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentRole.length) {
            deleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();


    /* =====================================
       NAVBAR SCROLL EFFECT
    ===================================== */

    const navbar =
        document.querySelector(".navbar");


    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 50) {

                navbar.style.boxShadow =
                    "0 5px 30px rgba(0, 170, 255, 0.1)";

            } else {

                navbar.style.boxShadow =
                    "none";

            }

        }
    );


    /* =====================================
       SKILL CARD EFFECT
    ===================================== */

    const skillCards =
        document.querySelectorAll(".skill-card");


    skillCards.forEach(function (card) {

        card.addEventListener(
            "click",
            function () {

                skillCards.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                card.classList.add("active");

            }
        );

    });


    /* =====================================
       FOOTER YEAR
    ===================================== */

    const footerText =
        document.querySelector("footer p");


    if (footerText) {

        const year =
            new Date().getFullYear();

        footerText.innerHTML =
            `© ${year} Priyanka K. Built with HTML, CSS & JavaScript.`;

    }

});
// =========================================
// SCROLL REVEAL ANIMATION
// =========================================

const revealElements = document.querySelectorAll(
    ".section, .project-card, .skill-card, .education-card, .experience-card, .certificate-card, .contact-box, .highlight-card"
);

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});
// =========================================
// BACK TO TOP BUTTON
// =========================================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// =========================================
// ACTIVE NAVBAR LINK
// =========================================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});
// =========================================
// CURSOR GLOW EFFECT
// =========================================

const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (event) => {

    cursorGlow.style.left = event.clientX + "px";
    cursorGlow.style.top = event.clientY + "px";

});
