/**
 * 5º exercício
 * 
 * Utilizando o operador rest/spread (...), realize as seguintes operações:
 */

/**
 * 5.1 Rest
 * 
 * A partir do array: 
 * 
 * const arr = [1, 2, 3, 4, 5, 6];
 * 
 * Defina uma variável x, que recebe a primeira posição do vetor, e outra variável y,
 * que recebe todo o restante dos dados.
 * 
 * console.log(x); // 1
 * console.log(y); // [2, 3, 4, 5, 6]
 */

const arr = [1, 2, 3, 4, 5, 6]

const [x, ...y] = arr;

console.log(x);
console.log(y);


/**
 * Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:
 * 
 * function soma...
 * 
 * console.log(soma(1, 2, 3, 4, 5, 6)); // 21
 * console.log(soma(1, 2)); // 3
 */

function soma(...valores) {
    return valores.reduce((total, valor) => total + valor);
}

console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(1, 2));



/**
 * 5.2 Spread
 * 
 * A partir do objeto e utilizando o operador spread:
 * 
 * const usuario = {
 *      nome: 'Diego',
 *      idade: 23,
 *      endereco: {
 *          cidade: 'Rio do Sul',
 *          uf: 'SC',
 *          pais: 'Brasil'
 *      }
 * };
 * 
 * Crie uma variável "usuario2" que contenha todos os dados, porém com o nome 'Gabriel'.
 * 
 * Crie uma variável "usuario3" que contenha todos os dados, porém com a cidade 'Lontras'.
 */

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil'
    }
};

const usuario2 = { ...usuario, nome: 'Gabriel' };
const usuario3 = { ...usuario, endereco: { ...usuario.endereco, cidade: 'Lontras' } };

console.log(usuario2);
console.log(usuario3);