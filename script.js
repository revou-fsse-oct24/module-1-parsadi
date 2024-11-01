const navEl = document.querySelector(".nav-list");
const hamburgerEl = document.querySelector(".hamburger");
const content = document.querySelector(".quote");

hamburgerEl.addEventListener("click", () => {
    navEl.classList.toggle("nav--open");
    console.log("hello");
    hamburgerEl.classList.toggle("hamburger--open");
    content.classList.toggle("quote--open");

});

const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')

    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}

// const buttonSubmit = document.querySelector(".submit");
// const contactDiv = document.querySelector(".contact-us-container");
// const submittedWords = document.querySelector(".contact-submitted")


// buttonSubmit.addEventListener("click", () => {
//     contactDiv.classList.add("hidden");
//     submittedWords.classList.remove("hidden")

// })

// SUBMITING

const nameSubmit = document.getElementById("name")
const emailSubmit = document.getElementById("email");
const buttonSubmit = document.getElementById("submitButton")

buttonSubmit.onclick = function () {
    alert(`Welcome ${nameSubmit.value} . Our team will reach you at ${emailSubmit.value}`);
}


// text moving

const textEl = document.getElementById('text');
const text = "Aviate, Navigate, Communicate";
let idText = 1;

writeText();

function writeText() {
    textEl.innerText = text.slice(0, idText);
    idText++;

    if (idText > text.length) {
        idText = 1
    }

    setTimeout(writeText, 350);
};




