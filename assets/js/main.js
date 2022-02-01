const btn = document.getElementById("btn-mobile")
const menuBtn1 = document.querySelector('.menu-buttom-1')
// const menuBtn2 = document.querySelector('.menu-buttom-2')
const menuBtn3 = document.querySelector('.menu-buttom-3')

menuBtn1.addEventListener('click', () => {
    const nav = document.getElementById("nav")
    if (nav.className.match('active')) {
        nav.classList.remove('active')
    }
})

// menuBtn2.addEventListener('click', () => {
//     const nav = document.getElementById("nav")
//     if (nav.className.match('active')) {
//         nav.classList.remove('active')
//     }
// })

menuBtn3.addEventListener('click', () => {
    const nav = document.getElementById("nav")
    if (nav.className.match('active')) {
        nav.classList.remove('active')
    }
})

btn.addEventListener('click', () => {
    const nav = document.getElementById("nav")
    nav.classList.toggle('active')
})

window.addEventListener('scroll', () => {
    const header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 0)
})