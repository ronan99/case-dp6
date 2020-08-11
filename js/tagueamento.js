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


$("#email").on( "focusout" , function (event){
    var emailInput = event.target;
    
    if(emailInput.validity.valid == true){
        ga('send', 'event', 'contato', emailInput.id, 'preencheu');
    }

})

$("#email").on( "focusout" , function (event){
    var emailInput = event.target;
    
    if(emailInput.validity.valid == true){
        ga('send', 'event', 'contato', emailInput.id, 'preencheu');
    }

})

$("#nome").on( "focusout" , function (event){
    var emailInput = event.target;
    
    if(emailInput.validity.valid == true){
        ga('send', 'event', 'contato', emailInput.id, 'preencheu');
    }

})

$("#telefone").on( "focusout" , function (event){
    var emailInput = event.target;
    
    if(emailInput.validity.valid == true){
        ga('send', 'event', 'contato', emailInput.id, 'preencheu');
    }

})

$("#aceito").on( "focusout" , function (event){
    var emailInput = event.target;
    
    if(emailInput.validity.valid == true){
        ga('send', 'event', 'contato', emailInput.id, 'preencheu');
    }

})

$(".contato").on( "submit" , function (event){
    console.log("submited")
    // ga('send', 'event', 'contato', 'enviado', 'enviado');
})