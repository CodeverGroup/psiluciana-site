const btn = document.getElementById("btn-mobile")

btn.addEventListener('click', () => {
    const nav = document.getElementById("nav")
    nav.classList.toggle('active')
})

window.addEventListener('scroll', () => {
    const header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 0)
})