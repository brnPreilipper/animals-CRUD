$(function () {

    function listarAnimais() {
        fetch("http://cafepradev.com.br:21020/animals/list", {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(data => {
                $('#carregarAnimais').empty();

                data.forEach(animais => {
                    $('#carregarAnimais').append(`
                    <tr>
                        
                        <td>${animais.name}</td>
                        <td>${animais.species}</td>
                        <td>${animais.color}</td>
                        <td>${animais.size}</td>
                        <td>
                            <a href="#" class="btn btn-danger deletaItem" rel="${animais.id}">D</a>


                            <button type="button" class="btn btn-warning editarItem" rel="${animais.id}" data-bs-toggle="modal" data-bs-target="#Modal"
                                data-bs-whatever="@getbootstrap">E</button>

                            <div class="modal fade" id="Modal" tabindex="-1" aria-labelledby="ModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="ModalLabel">Editar Cadastro</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <form>
                                                <div class="mb-3">
                                                    <label for="nomeNovo"
                                                        class="col-form-label">Nome</label>
                                                    <input type="text" class="form-control" id="nomeNovo" placeholder="Nome do Animal:">
                                                </div>
                                                <div class="mb-3">
                                                    <label for="especieNovo"
                                                        class="col-form-label">Espécie</label>
                                                    <input type="text" class="form-control" id="especieNovo" placeholder="Nome da Espécie:">
                                                </div>
                                                <div class="mb-3">
                                                    <label for="corNovo"
                                                        class="col-form-label">Cor</label>
                                                    <input type="text" class="form-control" id="corNovo" placeholder="Cor do Animal:">
                                                </div>
                                                <div class="mb-3">
                                                    <label for="alturaNovo"
                                                        class="col-form-label">Tamanho</label>
                                                    <input type="text" class="form-control" id="alturaNovo" placeholder="Tamanho do Animal:">
                                                </div>
                                            </form>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-danger"
                                                data-bs-dismiss="modal">Cancelar</button>
                                            <button type="submit" class="btn btnSalvarEdite btn-warning">Editar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    `
                    );
                });
            })
            .catch(error => console.error(error));
    }


    listarAnimais();
    return false
});