/* ======================================
   HAZELVERSE - SCRIPT
====================================== */

// LOADER

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1800);

});

// LUCKY READER

const fortunes = [

"✨ Every chapter you read changes a part of you.",

"🌙 Tonight, imagination is your greatest strength.",

"📖 Somewhere in HazelVerse, a story is waiting for you.",

"⭐ Your next favorite book is closer than you think.",

"🖋️ The words you seek are already searching for you.",

"🌌 Even the darkest sky hides countless stars.",

"💜 Keep reading. The universe rewards the curious."

];

const luckyBtn = document.getElementById("luckyBtn");

const fortuneText = document.getElementById("fortuneText");

if (luckyBtn) {

    luckyBtn.addEventListener("click", () => {

        const random = Math.floor(Math.random() * fortunes.length);

        fortuneText.textContent = fortunes[random];

    });

}

// NAVBAR BACKGROUND

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background = "rgba(5,4,13,.95)";

    } else {

        header.style.background = "rgba(5,4,13,.75)";

    }

});

// SMOOTH SECTION REVEAL

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.2

});

sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform = "translateY(60px)";

    section.style.transition = "all 0.8s ease";

    observer.observe(section);

});

// HERO TITLE GLOW

const heroTitle = document.querySelector(".hero h1");

let glow = true;

setInterval(() => {

    if (!heroTitle) return;

    if (glow) {

        heroTitle.style.textShadow = "0 0 35px #FFD86B";

    } else {

        heroTitle.style.textShadow = "0 0 8px #FFD86B";

    }

    glow = !glow;

}, 1200);

// COPYRIGHT YEAR

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =

        `© ${new Date().getFullYear()} Hazel Thrones. All Rights Reserved.`;

}

console.log("🌌 Welcome to HazelVerse");
