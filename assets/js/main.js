const btn = document.getElementById("btn-mobile")
const menuBtn1 = document.querySelector('.menu-buttom-1')
const menuBtn2 = document.querySelector('.menu-buttom-2')
const menuBtn3 = document.querySelector('.menu-buttom-3')
const menuBtn4 = document.querySelector('.menu-buttom-4')

const submit = document.querySelector('.submit')
const form = document.getElementById('contato')
const alerta = document.querySelector('.container-message-alert')

submit.addEventListener('click', (e) => {
    const nome = document.getElementById('nome')
    const telefone = document.getElementById('telefone')
    const email = document.getElementById('email')
    const mensagem = document.getElementById('mensagem')
    console.log(nome)
    
    if (nome.value == "" || telefone.value == "" || email.value == "" || mensagem.value == "") {
        e.preventDefault()
        console.log("tudo vazio")
        alerta.classList.add('active')
        nome.classList.add('alert')
        telefone.classList.add('alert')
        email.classList.add('alert')
        mensagem.classList.add('alert')
    } else {
        alerta.classList.remove('active')
        nome.classList.remove('alert')
        telefone.classList.remove('alert')
        email.classList.remove('alert')
        mensagem.classList.remove('alert')
    }
})

menuBtn1.addEventListener('click', () => {
    const nav = document.getElementById("nav")
    if (nav.className.match('active')) {
        nav.classList.remove('active')
    }
})

menuBtn2.addEventListener('click', () => {
    const nav = document.getElementById("nav")
    if (nav.className.match('active')) {
        nav.classList.remove('active')
    }
})

menuBtn3.addEventListener('click', () => {
    const nav = document.getElementById("nav")
    if (nav.className.match('active')) {
        nav.classList.remove('active')
    }
})

menuBtn4.addEventListener('click', () => {
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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});