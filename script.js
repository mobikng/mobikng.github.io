const toggleBbutton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('nav-links')[0]

toggleBbutton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})