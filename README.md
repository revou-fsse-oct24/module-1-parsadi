# module-1-parsadi

# NAV BAR
I'm using a sticky navbar that will always be above the website page. It is also responsive by the hamburger menu while it's on mobile viewport size.
```html
<nav>
        <div class="logo">
            <img src="Assets/propeller.png" alt="logo">
            <h5>Clear Prop <br> Pilot Prep</h5>
        </div>
        <ul class="nav-list">
            <li class="nav-item"><a href="#ourservice" class="nav-link">Our Services</a></li>
            <li class="nav-item"><a href="#learning" class="nav-link">Learning Path</a></li>
        </ul>

        <div class="hamburger">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
    </nav>
```
Here are the styles that i use :
```css
nav {
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    min-height: 60px;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;
    background-color: #3498db;
}


.logo img {
    height: 50px;
    width: 50px;
    padding-left: 15px;
}

.logo h5 {
    padding-top: 15px;
}

.logo {
    margin-top: 10px;
    display: grid;
    grid-template-columns: 70px auto;
}

ul {
    display: flex;
    margin-top: 40px;
    column-gap: 2em;
    transition: all 0.3s ease-in-out;
    list-style-type: none;

}

.nav-link {
    color: var(--nav-color);
    font-size: 2em;
}

.nav-link:hover,
.nav-link:focus {
    color: var(--nav-color-hover);
    transition: color 0.4s;
}

.hamburger {
    display: none;
    cursor: pointer;
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
}

.bar {
    height: 2px;
    width: 27px;
    background-color: black;
    margin: 2px 0;
    opacity: 1;
}

.nav--open {
    transform: translate(0) !important;
}

.hamburger--open .bar:nth-child(1) {
    transform: translateY(6px) rotate(45deg);
}

.hamburger--open .bar:nth-child(2) {
    opacity: 0;
}

.hamburger--open .bar:nth-child(3) {
    transform: translateY(-6px) rotate(-45deg);
}

@media (max-width: 650px) {

    .nav-list {
        position: fixed;
        top: 20px;
        left: 0;
        width: 100%;
        padding: 10px 0 25px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #3498db;
        transform: translateX(-100%);
    }

    .hamburger {
        opacity: 1;
    }
}
```
Thus, here's the javascript code :
```javascript
const navEl = document.querySelector(".nav-list");
const hamburgerEl = document.querySelector(".hamburger");
const content = document.querySelector(".quote");

hamburgerEl.addEventListener("click", () => {
    navEl.classList.toggle("nav--open");
    console.log("hello");
    hamburgerEl.classList.toggle("hamburger--open");
    content.classList.toggle("quote--open");

});

```

# PREVIEW
There is also a preview in this website to show what this website is really about. Here's the code of it:
```html
<div class="quote" id="quote">
            <div class="quote-inner">
                <h1>"Pilot is a human that never stop learning."</h1>
                <h6>Human are created with two legs, a pair of hands, and a
                    single brain. We sees the fish then try to learn how to swim. However, when it comes to conquering
                    the
                    sky, we could not grow wings. Thus, we use our single brain to make a flying meachine that conquest
                    bird
                    domination high above"
                </h6>
            </div>
        </div>
```
Hers's the style sheet :
```css
.quote--open {
    margin-top: 160px !important;

}


.quote {
    background-color: #253c61;
    margin-bottom: 0;
    margin-top: 10px;
    height: 300px;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
}

.quote-inner {
    margin: 0 20px;
}

.quote h1,
h6 {
    text-align: center;
    color: white;
}
```

# OUR SERVICES AND PRODUCTS
In this section, the website shows the products and services that being offered to the viewers. Here are the code:
```html
<h1 class="ourservice-title" id="ourservice">Our Services</h1>
        <div class="grid-container container">

            <div class="menu-container item1">
                <img src="Assets/pilot_prep.jpg" alt="Preperation to become pilot">
                <div class="learnMore">
                    <h1>learn more</h1>
                </div>
                <div class="title">
                    <h3>Aviation Basic Knowledge</h3>
                </div>

            </div>
            <div class="menu-container item2">
                <img src="Assets/ppl.jpg" alt="Private Pilot Theory">
                <div class="learnMore">
                    <h1>learn more</h1>
                </div>
                <div class="title">
                    <h3>Private Pilot Theory</h3>
                </div>


            </div>
            <div class="menu-container item3">
                <img src="Assets/instrument.jpg" alt="Instrument Flying Theory">
                <div class="learnMore">
                    <h1>learn more</h1>
                </div>
                <div class="title">
                    <h3>Instrument Flying Theory</h3>
                </div>

            </div>
        </div>
```
Here is the style sheet :
```css
.ourservice-title {
    background-color: rgba(39, 233, 245, 0.8);
    width: 100vw;
}

.grid-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    height: 30%;
    margin-bottom: 0;
    background-color: rgba(39, 233, 245, 0.8);
    padding: 20px;
}

.menu-container {
    height: 500px;
    width: 300px;
    margin: 5px;
    border-style: solid;
    border-color: #253c61;
    border-width: 5px;
    border-radius: 5px;
    position: relative;
}

.menu-container h3 {
    position: absolute;
    bottom: 10px;
    color: #fff;

}

.menu-container img {
    height: 100%;
    width: 100%;
}

.learnMore {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    color: aliceblue;
    transition: 0.6s;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;


}

.learnMore:hover {
    background-color: rgba(0, 0, 0, 0.6);
    opacity: 1;
}


@media (max-width : 650px) {
    .grid-container {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .menu-container {
        height: 500px;
        width: 300px;
        margin: 5px;
        border-style: solid;
        border-color: #253c61;
        border-width: 5px;
        border-radius: 5px;
        position: relative;
        background-color: wheat;
    }
}
```
# LEARNING PATH
The Learning path section is the aid to the viewers to make decision what product that has to be bought first and the description of the products.
```html
<h1 id="learning" style="background-color: aquamarine;">Learning Path</h1>
        <div class="body-container">
            <div class="progress-container">
                <div class="panel active" style="background-image: url(Assets/pilot_prep.jpg )">
                    <h3>Step 1</h3>
                    <p>This course is suit with all aspiring pilots out there. Here you will learn what is a pilot
                        really
                        do, what are the requirenments, how an aircraft could fly, and other related basic information
                        regarding aviation. If you want to join a flying school, this course is the most recommended one
                        you
                        should took before progressing to our private pilot course</p>
                </div>
                <div class="panel " style="background-image: url(Assets/ppl.jpg )">
                    <h3>Step 2</h3>
                    <p>This course objective is to train aspiring pilot to get more depth knowledge regarding aviation.
                        After completing this course, candidates are expected to be proficient in knowledge regarding
                        safe
                        flying conduct as a private pilot capacity or as a pilot-in-command in small aircraft</p>
                </div>
                <div class="panel " style="background-image: url(Assets/instrument.jpg )">
                    <h3>Step 3</h3>
                    <p>This course objective is to train aspiring private pilot to get more depth knowledge regarding
                        flying operation with limited visibility and weather condition. After completing this course,
                        candidates are expected to be proficient in knowledge regarding safe flying conduct as a
                        pilot-in-command in IFR condition</p>
                </div>

            </div>

        </div>
```
Here is the styling code:
```css
.body-container {
    width: 100%;
    height: 100%;
    background-color: aquamarine;
}

.body-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 500px;
    overflow: hidden;
    margin-bottom: 2em;
}

.progress-container {
    display: flex;
    width: 100%;
    height: 100%;

}

.panel {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
    border-radius: 50px;
    color: #fff;
    cursor: pointer;
    flex: 0.5;
    margin: 10px;
    position: relative;
    transition: flex 0.7s ease-in;
}

.panel h3 {
    font-size: 24px;
    position: absolute;
    bottom: 150px;
    left: 20px;
    margin: 0;
    opacity: 0;


}

.panel p {
    font-size: 15px;
    position: absolute;
    bottom: 50px;
    left: 20px;
    margin: 0;
    opacity: 0;
}

.panel.active {
    flex: 5;

}

.panel.active h3 {
    opacity: 1;
}

.panel.active p {
    opacity: 1;
}

@media(max-width: 680px) {
    .body-container {
        width: 100%;
    }

    .progress-container {
        width: 100%;
    }
}
```
Here is the Javascript code :
```javascript
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
```
# CONTACT US
In this section, im using a form tag to arrange and utilize some tags like label, input, radio button, text area, and a submit button. I also give some Jacascript code in order to pop up an alert about what just user has been input on the form. Here's enjoy the code

```html
<div class="contact-us-title">
            <h1>Contact Us</h1>
        </div>
        <form action="#" class="contact-us">
            <div class="contact-item">
                <label class="contact-fill" for="name">Name :</label><br>
                <input class="contact-input" type="text" id="name">
            </div>
            <div class="contact-item">
                <label class="contact-fill" for="email">Email :</label><br>
                <input class="contact-input" type="email" id="email">
            </div>
            <div>
                <label for="">Course of Intention :</label><br>

                <input type="radio" name="course" id="abk" value="abk">
                <label for="abk">Aviation Basic Knowledge</label><br>

                <input type="radio" name="course" id="ppt" value="ppt">
                <label for="ppt">Private Pilot Theory</label><br>

                <input type="radio" name="course" id="ift" value="ift">
                <label for="ift">Instrument Flying Theory</label><br>
            </div>
            <div class="contact-item">
                <label for="">Message :</label><br>
                <textarea name="" placeholder="enter message here..." cols="30" rows="10"></textarea>
            </div>

            <div>
                <input type="submit" id="submitButton">
            </div>
```
Now here's the styling code

```css
.contact-us-title {
    font-size: 15px;
    background-color: #3498db;
}

.contact-us {
    display: flex;
    flex-direction: column;
    background-color: #3498db;
    align-items: center;
}

.input-text,
textarea {
    width: 100%;
    border-radius: 5px;
}

.contact-item {
    width: 35%;
    padding: 0;
    margin-bottom: 15px;
}

.contact-input {
    width: 100%;
    border-radius: 5px;
}

.contact-fill {
    width: 100%;
}

button {
    background-color: blue;
    color: #fff;
    border-radius: 9px;
    width: 15%;
    margin-bottom: 5px;

}

.contact-submitted {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: green;
}

```

Now the Javascript

```Javascript
const nameSubmit = document.getElementById("name")
const emailSubmit = document.getElementById("email");
const buttonSubmit = document.getElementById("submitButton")

buttonSubmit.onclick = function () {
    alert(`Welcome ${nameSubmit.value} . Our team will reach you at ${emailSubmit.value}`);
}
```

# ADDITIONAL FEATURE BELOW CONTACT US SECTION

It is actualy just a simple running text with mostly Javascript. I made it just so my website looks a little bit more attractive :)) . Here are the codes. Enjoy

```HTML
<div class="text-container">
            <h1 id="text">"Aviate, Navigate, Communicate"</h1>
        </div>

```

Now here's the functionality form the Javascript

```javascript
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
```

# GITHUB PAGE
I also deploy my project on Github Page, here is the link https://revou-fsse-oct24.github.io/module-1-parsadi/
