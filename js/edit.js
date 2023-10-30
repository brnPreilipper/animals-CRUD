$(function () {
    
    $(document).on('click', '#Modal', function () {

        let idAtu = $('#idAtu').val()
        let nameAtu = $('#nameAtu').val()
        let speciesAtu = $('#speciesAtu').val()
        let colorAtu = $('#colorAtu').val()
        let sizeAtu = $('#sizeAtu').val()

        let item = {
            id: idAtu,
            name: nameAtu,
            species: speciesAtu,
            color: colorAtu,
            size: sizeAtu
        };
        console.log(item)

        fetch("http://cafepradev.com.br:21020/animals/update", {
            method: "PUT",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(item) 
        })
    });

return false
});