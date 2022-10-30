function genFooter() {
    const footer = `
        <section>
        
        <h2>GET IN TOUCH </h2>
        <h3>Have questions? Want to see a certain topic? Want to chat?</h3>
        <form method="post" action="#" class="contact-form">
            <label for="name">Name</label>
            <input required type="text" name="name" id="name" />
            <label for="email">Email</label>
            <input required type="text" name="email" id="email" />
            <label for="message">Message</label>
            <textarea style="resize: none;" required name="message" id="message" rows="3"></textarea>
            <label class="contact-link">Link</label>
            <input class="contact-link" name="contact-link" id="contact-link" placeholder="url">
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
            <li class="active"><a href="/">Home</a></li>
            <li class="dropdown"><span>Categories</span>
                <div class="dropdown-content">
                    <ul>
                        <li class="drawer"><a href="/acting-habits">Acting Habits</a></li>
                        <li class="drawer"><a href="/agents">Agents</a></li>
                        <li class="drawer"><a href="/auditions">Auditions</a></li>
                        <li class="drawer"><a href="/getting-started">Getting Started</a></li>
                        <li class="drawer"><a href="/industry-tips">Industry Tips</a></li>
                        <li class="drawer"><a href="/organization">Organization</a></li>
                        <li class="drawer"><a href="/preparation">Preparation</a></li>
                    </ul>
                </div>
            </li>
        </ul>
        <ul class="icons">
        </ul>
    `
    document.getElementById('nav').innerHTML = menuLinks;
    document.getElementById('navPanel').innerHTML += menuLinks;

    let socialBlock = document.querySelectorAll('.icons');
    for (i = 0; i < socialBlock.length; i++) {
        const socialLinks = `
            <li><a target="__blank" href="https://www.facebook.com/themessyactor/" class="icon brands fa-facebook-f" title="link to facebook"><span class="label">Facebook</span></a></li>
            <li><a target="__blank" href="https://www.instagram.com/themessyactorblog/" class="icon brands fa-instagram" title="link to instagram"><span class="label">Instagram</span></a></li>
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

    let menuList = document.querySelectorAll('#nav .links li');
    let menuLinks = document.querySelectorAll('#nav .links li a');
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

    let mobileMenuList = document.querySelectorAll('#navPanel .links li');
    let mobileMenuLinks = document.querySelectorAll('#navPanel .links li a');
    for (i = 0; i < mobileMenuList.length - 1; i++) {
        mobileMenuList[i].classList.remove('active');
        if (mobileMenuLinks[i].pathname === currentPage) {
            mobileMenuLinks[i].parentNode.classList.add('active');
            if (mobileMenuLinks[i].parentNode.classList.contains('drawer')) {
                mobileMenuLinks[i].parentNode.parentNode.parentNode.parentNode.classList.add('active');
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
let link = document.getElementById('contact-link')

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
        name: name.value,
        email: email.value,
        message: message.value,
    }

    if (name.value === '' || email.value === '' || message.value === '') {
        alert('Please fill out all fields')
        return
    }

    if (link.value.length > 0) {
        alert('email sent');
        name.value = '';
        email.value = '';
        message.value = '';
        link.value = '';
        return
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