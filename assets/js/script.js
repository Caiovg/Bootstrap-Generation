var nome = window.document.getElementById('nome')
var email = window.document.getElementById('email')
var menssagem = window.document.getElementById('menssagem')

let nomeOK = false
let emailOk = false
let menssagemOk = false

function validarNome(){
    let txtNome = document.querySelector('#txtNome')

    if(nome.value == ""){
        txtNome.innerHTML = 'Informe o nome'
        txtNome.style.color = "red"
        nome.focus();
        return;
    }else{
        txtNome.innerHTML = ''
        nomeOK = true
    }
}

function validarEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value == ""){
        txtEmail.innerHTML = 'Informe o email'
        txtEmail.style.color = "red"
        nome.focus();
        return;
    }else{
        txtEmail.innerHTML = ''
        emailOk = true
    }
}

function validarAssunto(){
    let txtMenssagem = document.querySelector('#txtMenssagem')

    if(menssagem.value == ""){
        txtMenssagem.innerHTML = 'Informe uma menssagem'
        txtMenssagem.style.color = "red"
        nome.focus();
        return;
    }else{
        txtMenssagem.innerHTML = ''
        menssagemOk = true
    }
}

function enviar(){
    if(nomeOK == true && emailOk == true && menssagemOk == true){
        alert("Formulario enviado com suceeso!")
    }else{
        alert("Preencha o formulario corretamente")
    }
}
