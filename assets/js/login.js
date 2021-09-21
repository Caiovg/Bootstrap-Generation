var userName = window.document.getElementById('userName')
var pass = window.document.getElementById('pass')

let userNameOk = false
let passOk = false

function validarUserName(){
    let txtUserName = document.querySelector('#txtUserName')

    if(userName.value == ""){
        txtUserName.innerHTML = 'Campo Vazio'
        txtUserName.style.color = "red"
        userName.focus();
        return;
    }else{
        txtUserName.innerHTML = ''
        userNameOk = true
    }
}

function validarPass(){
    let txtPass = document.querySelector('#txtPass')

    if(pass.value == ""){
        txtPass.innerHTML = 'Campo Vazio'
        txtPass.style.color = "red"
        pass.focus();
        return;
    }else{
        txtPass.innerHTML = ''
        passOk = true
    }
}

function enviar(){
    if(userNameOk == true && passOk == true){
        window.location.replace("http://www.devmedia.com.br");
    }else{
        alert("Erro")
    }
}