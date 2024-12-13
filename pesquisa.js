function envio() {
    var texto = window.document.getElementById('form');
    var campo = texto.value.toLowerCase(); 

    if (campo == "detergente" || campo == "detergentes" || campo == "qboa" || campo == "desinfetante" || campo == "multiuso" || campo == "amaciante"
        || campo == "sabão em pó" || campo == "sabao em po") {
        window.location.href = "quimicos.html";
    } else if (campo == "cabelo" || campo == "shampo" || campo == "shampoo" || campo == "condicionador"
        || campo == "sabonete" || campo == "sabão" || campo == "desodorante" || campo == "escova de dente"
        || campo == "fio dental"
    ){
        window.location.href = "pessoal.html";
    } else if (campo == "equipamento" || campo == "vassoura" || campo == "rodo" || campo == "luva de borracha" 
        || campo == "escova" || campo == "balde" || campo == "esponja" || campo == "rodo pequeno"){
        window.location.href = "ferramentas.html";
    } else {
        alert("Nenhum resultado encontrado."); 
    }
}
