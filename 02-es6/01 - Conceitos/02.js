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