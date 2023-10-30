$(function () {
    $(document).on('click', '.deletaItem', function () {
        let relValue = this.getAttribute("rel");
        let item = {
            id: relValue
        };

        // Operação de exclusão
        fetch("http://cafepradev.com.br:21020/animals/delete", {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(item)
        })
        .then(() => {
            location.reload(); // Recarrega a página após a exclusão, se for  bem-sucedida
        })
        .catch(error => console.error(error));
    });
    return false;
});


