/**
 * 1º exercício
 * 
 * Crie uma função que, dado o objeto a seguir:
 * 
 * var endereco = {
 *    rua: "Rua dos Pinheiros",
 *    numero: 1293,
 *    bairro: "Centro",
 *    cidade: "São Paulo",
 *    uf: "SP"
 * };
 * 
 * Retorne o seguinte conteúdo:
 * 
 * O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com nº 1293.
 */

var endereco = {
	rua: "Rua dos Pinheiros",
	numero: 1293,
	bairro: "Centro",
	cidade: "São Paulo",
	uf: "SP"
};

function montaMensagem(obj) {
	return 'O usuário mora em ' + obj.cidade + ' / ' + obj.uf + ', no bairro ' +
		obj.bairro + ', na rua "' + obj.rua + '" com nº ' + obj.numero + '.';
}

var resultado = montaMensagem(endereco);
console.log(resultado);


/**
 * 2º exercício
 * 
 * Crie uma função que, dado um intervalo (entre x e y), exiba todos os números pares.
 */

function pares(x, y) {
	for (var i = x; i <= y; i++) {
		if (i % 2 === 0) {
			console.log(i);
		}
	}
}

pares(1, 10);


/**
 * 3º exercício
 * 
 * Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "JavaScript"
 * e retorna um booleano (true/false) caso exista ou não.
 * 
 * Dica: para verificar se um vetor contém um valor, utilize o método "indexOf".
 */

var skills = ['JavaScript', 'ReactJS', 'React Native'];
var outrasSkills = ['Java', 'Python', 'Ruby'];

function temHabilidade(skills) {
	return skills.indexOf('JavaScript') !== -1;
}

var resultado1 = temHabilidade(skills);
var resultado2 = temHabilidade(outrasSkills);

console.log(resultado1);
console.log(resultado2);


/**
 * 4º exercício
 * 
 * Escreve uma função que, dado um total de anos de estudo, retorna o quão experiente o usuário é.
 */

function experiencia(anos) {
	if (anos < 0) {
		return 'Valor inválido';
	} else if (anos >= 0 && anos <= 1) {
		return 'Iniciante';
	} else if (anos > 1 && anos <= 3) {
		return 'Intermediário';
	} else if (anos > 3 && anos <= 6) {
		return 'Avançado';
	} else {
		return 'Jedi Master';
	}
}

var experiencia0 = experiencia(-2);
var experiencia1 = experiencia(0);
var experiencia2 = experiencia(1);
var experiencia3 = experiencia(2);
var experiencia4 = experiencia(3);
var experiencia5 = experiencia(5);
var experiencia6 = experiencia(6);
var experiencia7 = experiencia(7);
var experiencia8 = experiencia(10);

console.log(experiencia0);
console.log(experiencia1);
console.log(experiencia2);
console.log(experiencia3);
console.log(experiencia4);
console.log(experiencia5);
console.log(experiencia6);
console.log(experiencia7);
console.log(experiencia8);


/**
 * 5º exercício
 * 
 * Dado o seguinte vetor de objetos:
 * 
 * var usuarios = [
 * 		{
 * 			nome: 'Diego',
 * 			habilidades: ['Javascript', 'ReactJS', 'Redux']
 * 		},
 * 		{
 * 			nome: 'Gabriel',
 * 			habilidades: ['VueJS', 'Ruby on Rails', 'Elixir']
 * 		}
 * ];
 * 
 * Escreva uma função que produza o seguinte resultado:
 * 
 * O Diego possui as habilidades: Javascript, ReactJS, Redux
 * O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
 * 
 * Dica: Para percorrer um vetor você deve utilizar a sintaxe "for...of" 
 * e para unir valores de um array com um separador utilize o "join".
 */

var usuarios = [
	{
		nome: 'Diego',
		habilidades: ['Javascript', 'ReactJS', 'Redux']
	},
	{
		nome: 'Gabriel',
		habilidades: ['VueJS', 'Ruby on Rails', 'Elixir']
	}
];

function habilidadesPorUsuario(usuarios) {
	var resultado = '';

	for (var usuario of usuarios) {
		var linha = 'O ' + usuario.nome + ' possui as habilidades: ' + usuario.habilidades.join(', ') + '\n';
		
		resultado += linha;
	}

	return resultado;
}

var habilidades = habilidadesPorUsuario(usuarios);
console.log(habilidades);