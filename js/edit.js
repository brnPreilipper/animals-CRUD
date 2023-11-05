$(document).on('click', '.editarItem', function () {
    let relValue =  this.getAttribute("rel");

    $(document).on('click', '.btnSalvarEdite', function(){
        let idItem = relValue;
        let nomeNovo = $('#nomeNovo').val();
        let especieNovo = $('#especieNovo').val();
        let corNovo = $('#corNovo').val();
        let tamanhoNovo = $('#tamanhoNovo').val();
        console.log(idItem);

        let item = {
            id: idItem,
            name: nomeNovo,
            species: especieNovo,
            color: corNovo,
            size: tamanhoNovo
        };

        fetch("http://cafepradev.com.br:21020/animals/update",{
            method: "PUT",
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(item)
        });
        console.log(item);
                     
        setTimeout(function(){
            location.reload();
        }, 1000);
    });
    return false;
});