let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{

let inputSenha = document.querySelector('#senha')

if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
}else {
    inputSenha.setAttribute('type', 'password')
}
})

function logar(){
    var user = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if(user =="surf@gmail.com" && senha == "surf"){
         alert("podeCre");
         window.location.href="./index/pagina-inicial.html";
    }else{
        alert('usuário não cadastrado');
    }

}





