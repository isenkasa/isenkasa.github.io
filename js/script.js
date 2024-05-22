const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 120)
})

let menu = document.querySelector('#menu-icon')
let navlist = document.querySelector('.navlist')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('active')
}

window.onscroll = () => {
    menu.classList.remove('bx-x')
    navlist.classList.remove('active')
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form')
    form.addEventListener('submit', function (event) {
        event.preventDefault()
        const name = form.querySelector('input[type="text"]').value
        const email = form.querySelector('input[type="email"]').value
        const message = form.querySelector('textarea').value

        // Generate the mailto link
        const mailtoLink = `mailto:isenkasa1005@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AReply to: ${encodeURIComponent(email)}`

        // Open the default email client with the pre-filled email
        window.location.href = mailtoLink
    })
})
