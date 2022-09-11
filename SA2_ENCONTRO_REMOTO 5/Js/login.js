//quando a página estiver carregada por completo

///--------------------------------------------------------- Altera elemento usando Jquery
// $(document).ready (function(){
//     $('#email').val("adriano@adriano");
// })

///--------------------------------------------------------- alerta usando jquery

// $(document).ready (function(){
//         alert('hello word');
// });

///--------------------------------------------------------- alerta usando jquery botão

// $(document).ready (function(){
//     $("button").click (function(){
//         alert('hello word');
//     })
// })

///--------------------------------------------------------- alerta usando jquery botão para alterar conteudo
// $(document).ready(function () {
//     $("button").click(function () {
//         $('#email').val("adriano@adriano");
//     })
// })


//--------------------------------------------------------- Função de login
$ (document).ready (function (){
    $('#signin').click (function(){
        let email = $("#email").val();
        let senha = $("#senha").val();

        console.log (validarLogin (email, senha));

        if(validarLogin(email, senha)){
            alert("Preenchido corretamente")
        }else{
            alert("Preencher todos os campos")
           }
    })


    function validarLogin (e, s){
        if(e !=="" && s !=""){
            return true; //avisa que não está tudo preenchido
        }else{
            return false; //está tudo preenchido
        }
    }
});
