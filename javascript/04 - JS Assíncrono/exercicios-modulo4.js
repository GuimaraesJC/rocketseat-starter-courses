/**
 * 1º exercício
 * 
 * Crie uma função que recebe a idade de um usuário e retorna uma Promise que,
 * depois de 2 segundos, retornará se usuário é maior de idade ou não. Se o 
 * usuário tive mais que 18 anos de idade, o resultado deve cair no ".then", 
 * caso contrário, no ".catch";
 */

function checaIdade(idade) {
    return new Promise(function(resolve, reject) {
        setTimeout(idade >= 18 ? resolve : reject, 2000);
    });
}

checaIdade(20)
    .then(function () {
        console.log('Maior de idade');
    })
    .catch(function () {
        console.log('Menor de idade');
    });


/**
 * 2º exercício
 * 
 * Crie uma tela com um <input>, que deve receber o nome de um usuário no Github.
 * Após digitar o nome do usuário e clicar no botão buscar, a aplicação deve buscar
 * pela API do Github (conforme URL abaixo) os dados de repositórios do usuário e 
 * mostrá-los em tela:
 * 
 * URL de exemplo: https://api.github.com/users/diego3g/repos
 * 
 * Basta alterar "diego3g" pelo nome do usuário.
 * 
 * <input type="text" name="user">
 * <button onclick="">Adicionar</button>
 * 
 * Depois de preencher o input e adicionar, a seguinte lista deve aparecer abaixo:
 * 
 * <ul>
 *    <li>repo1</li>
 *    <li>repo2</li>
 *    <li>repo3</li>
 *    <li>repo4</li>
 *    <li>repo5</li>
 * </ul>
 */

var containerElement = document.querySelector('#app');
var inputElement = document.querySelector('#app input');

var listElement = document.createElement('ul');

function buscaRepositorios(user) {
    // Mensagem de "Carregando..." solicitada no exercício 03 (início)
    listElement.innerHTML = '';

    var itemLoadingText = document.createTextNode('Carregando...');
    var itemLoadingElement = document.createElement('li');

    itemLoadingElement.appendChild(itemLoadingText);
    listElement.appendChild(itemLoadingElement);

    containerElement.appendChild(listElement);
    // Mensagem de "Carregando..." solicitada no exercício 03 (fim)

    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://api.github.com/users/' + user + '/repos');
        xhr.send(null);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else if (xhr.status === 404) {
                    // Mensagem de erro de usuário inexistente, solicitado no exercício 03
                    reject('O usuário informado não existe.'); 
                }
            }
        }
    });
}

function listaRepositorios() {
    var user = inputElement.value;    

    buscaRepositorios(user)
        .then(function (result) {
            listElement.innerHTML = '';

            for (var repo of result) {
                var itemName = document.createTextNode(repo.name);
                var itemElement = document.createElement('li');

                itemElement.appendChild(itemName);
                listElement.appendChild(itemElement);

                containerElement.appendChild(listElement);
            }
        })
        .catch(function (error) {
            listElement.innerHTML = '';

            var errorMessageElement = document.createTextNode(error);
            var itemElement = document.createElement('li');

            itemElement.appendChild(errorMessageElement);
            listElement.appendChild(itemElement);

            containerElement.appendChild(listElement);
        });

    inputElement.value = '';
}


/**
 * 3º exercício
 * 
 * A partir do resultado do exemplo anterior, adicione um indicador de carregamento
 * em tela no lugar da lista apenas enquanto a requisição estiver acontecendo:
 * 
 * <li>Carregando...</li>
 * 
 * Além disso, adicione uma mensagem de erro em tela caso o usuário no Github não exista.
 * 
 * Dica: Quando o usuário não existe, a requisição irá cair no ".catch" com código de erro 404.
 */