ga('send', 'pageview');

var makeContact  = document.getElementById("make_contact");
var showPdf  = document.getElementById("show_pdf");
if(makeContact){
    makeContact.addEventListener("click" , function(){
        ga('send', 'event', 'menu', 'entre_em_contato', 'link_externo');
    })
}

if(showPdf){
    showPdf.addEventListener("click" , function(){
        ga('send', 'event', 'menu', 'download_pdf', 'download_pdf');
    })
}

$(".card-montadoras").on( "click" , function (){
    var nomeDoConteudo = ($(this)[0].getAttribute("data-id"));
    ga('send', 'event', 'analise', 'ver_mais', nomeDoConteudo);

})



$("#email").on( "blur" , function (event){
    var emailInput = event.target;
    
    if(emailInput.validity.valid == true){
        ga('send', 'event', 'contato', emailInput.id, 'preencheu');
    }

})

$("#nome").on( "blur" , function (event){
    var nomeInput = event.target;
    
    if(nomeInput.validity.valid == true){
        ga('send', 'event', 'contato', nomeInput.id, 'preencheu');
    }

})

$("#telefone").on( "blur" , function (event){
    var telefoneInput = event.target;
    
    if(telefoneInput.validity.valid == true){
        ga('send', 'event', 'contato', telefoneInput.id, 'preencheu');
    }

})

$("#aceito").on( "click" , function (event){
    var aceitoInput = event.target;
    
    if(aceitoInput.checked){
        ga('send', 'event', 'contato', aceitoInput.id, 'preencheu');
    }
    


})

$(".contato").on( "submit" , function (event){
    ga('send', 'event', 'contato', 'enviado', 'enviado');
})