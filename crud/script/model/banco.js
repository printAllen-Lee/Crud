
var btn =  document.querySelector("#sub-btn");
btn.addEventListener('click',submit);
var idd = 0
function submit() {
    
    var nome =  document.querySelector("#nome").value;
    var cpf =  document.querySelector("#cpf").value;
    var tel =  document.querySelector("#tel").value;

    if (cpf.length == 11) {
        
        var uses = {
            id:idd,
            nome:nome,
            cpf:cpf,
            tel:tel
        }

    }
    else{
        window.alert("[ERRO-909] CPF invalido")
    }

    console.log(uses)

}
