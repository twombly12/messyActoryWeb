function genFooter() {
    const footer = `
        <section>
        
        <h2>GET IN TOUCH </h2>
        <h3>Have questions? Want to see a certain topic? Want to chat?</h3>
        <form method="post" action="#" class="contact-form">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" />
            <label for="email">Email</label>
            <input type="text" name="email" id="email" />
            <label for="message">Message</label>
            <textarea name="message" id="message" rows="3"></textarea>
            <input type="submit" value="Send Message" />
        </form>
    </section>
    <section class="split contact">
            <div class="cta"></div>
        <section>
            <h3>Social</h3>
            <ul class="icons alt">

            </ul>
        </section>
    </section>
    `
    document.getElementById('footer').innerHTML = footer;
}

function cta() {
    const ctaContent = `<h2>The Audition Book</h2>
    <a class="img-link" target="__blank" href="https://www.blurb.ca/b/11262737-the-audition-notebook">
        <picture>
            <source srcset="../assets/images/cta-book-mockup.webp" type="image/webp">
            <source srcset="../assets/images/cta-book-mockup.jpg" type="image/jpg"> 
            <img class="main-blog-image" src="../assets/images/cta-book-mockup.webp" alt="two rock climbers help each other climb a cliff symbolizing that a good acting agent should help an actor have a successful career">
        </picture>    
    </a>
    <a class="button" target="__blank" href="https://www.blurb.ca/b/11262737-the-audition-notebook">Buy it now</a>`;


    document.querySelectorAll('.cta').forEach(element => {
        element.innerHTML = ctaContent;
    })
}

function genCopyright() {
    const copyright = `
        <ul>
            <li>&copy; The Messy Actor Blog </li>
            <li>Design: <a href="https://dashinteractive.ca/" target="_blank">Dash Interactive</a></li>
        </ul>
        `
    document.getElementById('copyright').innerHTML = copyright;
}


function menuAndSocial() {
    const menuLinks = `
        <ul class="links">
            <li class="active"><a href="/index.html">Home</a></li>
            <li class="dropdown"><span>Categories</span>
                <div class="dropdown-content">
                    <ul>
                        <li class="drawer"><a href="/Categories/acting-habits.html">Acting Habits</a></li>
                        <li class="drawer"><a href="/Categories/agents.html">Agents</a></li>
                        <li class="drawer"><a href="/Categories/auditions.html">Auditions</a></li>
                        <li class="drawer"><a href="/Categories/getting-started.html">Getting Started</a></li>
                        <li class="drawer"><a href="/Categories/industry-tips.html">Industry Tips</a></li>
                        <li class="drawer"><a href="/Categories/organization.html">Organization</a></li>
                        <li class="drawer"><a href="/Categories/preparation.html">Preparation</a></li>
                    </ul>
                </div>
            </li>
        </ul>
        <ul class="icons">
        </ul>
    `
    document.getElementById('nav').innerHTML = menuLinks;

    let socialBlock = document.querySelectorAll('.icons');
    for (i = 0; i < socialBlock.length; i++) {
        const socialLinks = `
            <li><a href="https://www.facebook.com/themessyactor/" class="icon brands fa-facebook-f" title="link to facebook"><span class="label">Facebook</span></a></li>
            <li><a href="https://www.instagram.com/themessyactorblog/" class="icon brands fa-instagram" title="link to instagram"><span class="label">Instagram</span></a></li>
    `
        socialBlock[i].innerHTML = socialLinks;
    }

}


function tagline() {
    document.getElementById('site-tagline').innerHTML = "Learn, Grow, and Get Messy!"
}

function populateLogo() {
    if (document.getElementById('logo-image')) {
        document.getElementById('logo-image').src = "/assets/images/Logo_Full-Colour.png"
        document.getElementById('logo-image').alt = "logo for the messy actor acting blog"
    }
}

function activeMenuItem() {
    let currentPage = window.location.pathname;
    let menuList = document.querySelectorAll('.links li');
    let menuLinks = document.querySelectorAll('.links li a');
    for (i = 0; i < menuList.length - 1; i++) {
        menuList[i].classList.remove('active');
        if (menuLinks[i].pathname === currentPage) {
            menuLinks[i].parentNode.classList.add('active');
            if (menuLinks[i].parentNode.classList.contains('drawer')) {
                menuLinks[i].parentNode.parentNode.parentNode.parentNode.classList.add('active');
            }
            break
        }
    }
}




function runOnLoad() {
    genFooter()
    genCopyright()
    menuAndSocial()
    tagline()
    populateLogo()
    cta()
    activeMenuItem()
}


runOnLoad();

/* ------------------------------------------------------------------- 
Contact Form
-------------------------------------------------------------------*/
const contactForm = document.querySelector('.contact-form')

let name = document.getElementById('name')
let email = document.getElementById('email')
let message = document.getElementById('message')

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
        name: name.value,
        email: email.value,
        message: message.value,
    }

    let xhr = new XMLHttpRequest()
    xhr.open('POST', '/')
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onload = function() {
        if (xhr.responseText == 'success') {
            alert('email sent');
            name.value = '';
            email.value = '';
            message.value = '';
        } else {
            alert('Something went wrong!')
        }
    }

    xhr.send(JSON.stringify(formData))

})