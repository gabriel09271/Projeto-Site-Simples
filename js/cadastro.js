import { registrar } from './autenticador.js'

const form = document.querySelector('#form-cadastro')
const aviso = document.querySelector('#aviso')

form.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const usuario = {
        nome: document.querySelector('#nome').value,
        email: document.querySelector('#email').value,
        senha: document.querySelector('#senha').value,
    }
    
    try{
        registrar(usuario)
        alert('Cadastro realizado! Faça login agora para continuar.')
        window.location.href = '../index.html'
    } catch(erro){
        aviso.textContent = erro.message
    }
})