$(function () {
    // evento de cadastro
    $(document).on('submit', '#cadastraAnimal', function (event) {
        event.preventDefault(); // Para evitar o envio padrão do formulário

        let name = $('#name').val()
        let species = $('#species').val()
        let color = $('#color').val()
        let size = $('#size').val()

        // criar objeto para gravar
        let item = {
            name: name,
            species: species,
            color: color,
            size: size
        };

        // adicionar o objeto do item no array de animais
        fetch("http://cafepradev.com.br:21020/animals/insert", {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(item)
        })
        .then(() => {
            location.reload(); // Recarrega a página após a exclusão, se for  bem-sucedida
        });
    });

    return false;
});