import { login } from './autenticador.js'

const form = document.querySelector('#form-login')
const aviso = document.querySelector('#aviso')

form.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const email = document.querySelector('#email').value
    const senha = document.querySelector('#senha').value

    try{
        const usuario = login(email, senha)
        alert(`Bem vindo ${usuario.email},  Aproveite os nossos serviços!`)
        window.location.href = "../html/index.html"
    } catch(erro){
        aviso.textContent = erro.message
    }
    
})