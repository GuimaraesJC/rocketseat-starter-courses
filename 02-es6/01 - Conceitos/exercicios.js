/**
 * 1º exercício
 * 
 * Para testar seus conhecimentos com classes, crie uma classe com nome "Admin". Essa classe
 * deve extender uma segunda classe chamada "Usuario".
 * 
 * A classe "Usuario" deve receber dois parâmetros no método construtor, 'email' e 'senha',
 * e anotá-los em propriedades da classe. A classe "Admin", por sua vez, não recebe 
 * parâmetros, mas deve repassar os parâmetros de 'email' e senha à classe pai e marcar uma
 * propriedade "admin" como "true" na classe.
 * 
 * Agora, com suas classes formatadas, adicione um método na classe "Usuario" chamado 'isAdmin',
 * que retorna se o usuário é administrador ou não, baseado na propriedade admin.
 * 
 * Exemplo:
 * 
 * const User1 = new Usuario('email@teste.com', 'senha123');
 * const Adm1 = new Admin('email@teste.com', 'senha123');
 * 
 * console.log(User1.isAdmin()) // false
 * console.log(Adm1.isAdmin()) // true
 */

class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }

    isAdmin() {
        return this.admin === true;
    }
}

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha);

        this.admin = true;
    }    
}


const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin());
console.log(Adm1.isAdmin());


/**
 * 2º exercício
 * 
 * A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):
 * 
 * const usuarios = [  
 *      { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
 *      { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
 *      { nome: 'Lucas', idade: 30, empresa: 'Facebook' }
 * ];
 */

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' }
];

/**
 * 2.1 Utilizando o "map"
 *
 * Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]
 */

const idades = usuarios.map(usuario => usuario.idade);
console.log(idades);


/**
 * 2.2 Utilizando o "filter"
 *
 * Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat
 * e com mais de 18 anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]
 */

const adultosDaRocketseat = usuarios.filter(usuario => usuario.idade >= 18 && usuario.empresa === 'Rocketseat');
console.log(adultosDaRocketseat);


/**
 * 2.3 Utilizando o "find"
 *
 * Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined
 */

const googlers = usuarios.find(usuario => usuario.empresa === 'Google');
console.log(googlers);


/**
 * 2.4 Unindo operações
 *
 * Multiplique a idade de todos usuários por dois e depois realize um filtro 
 * nos usuários que possuemno máximo 50 anos:
 *
 * // Resultado:
 * [  
 *      { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
 *      { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' }
 * ] 
 */

const operacoes = usuarios
    .map(usuario => ({ ...usuario, idade: usuario.idade * 2 }))
    .filter(usuario => usuario.idade <= 50);

console.log(operacoes);


/**
 * 3º exercício
 *
 * Converta as funções nos seguintes trechos de código em Arrow Functions:
 */


/**
 * 3.1
 *
 * const arr = [1, 2, 3, 4, 5];
 * 
 * arr.map(function(item) {
 *      return item + 10;
 * });
 */

const arr = [1, 2, 3, 4, 5];

arr.map(item => item + 10);


/**
 * 3.2
 * Dica: Utilize uma constante pra function
 *
 * const usuario = { nome: 'Diego', idade: 23 };
 * 
 * function mostraIdade(usuario) {
 *      return usuario.idade;
 * }
 * 
 * mostraIdade(usuario);
 */

const usuario = { nome: 'Diego', idade: 23 };

const mostraIdade = () => usuario.idade;

mostraIdade(usuario);


/**
 * 3.3
 * Dica: Utilize uma constante pra function
 *
 * const nome = 'Diego';
 * const idade = 23;
 * 
 * function mostraUsuario(nome = 'Diego', idade = 18) {
 *      return { nome, idade };
 * }
 * 
 * mostraUsuario(nome, idade);
 * mostraUsuario(nome);
 */

const nome = 'Diego';
const idade = 23;

const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });

mostraUsuario(nome, idade);
mostraUsuario(nome);


/**
 * 3.4
 *
 * const promise = function() {
 *      return new Promise(function(resolve, reject) {
 *          return resolve();
 *      });
 * }
 */

const promise = function () {
    return new Promise((resolve, reject) => resolve());
}