/*// let resultado 
numeros.map(num => {
    let resultado = num* 2;
    return resultado;
})

console.log("resultado" + resultado);

// filter 
// filtra elementos com base em uma condicao 

let numeros = [5, 10, 15, 20]

//num -> palavra auxiliar
let maioresQueDez = numeros.filter(num => num> 10);
console.log(maioresQueDez);
*/

//reduce 
// reduz os valores de um array para um unico valor
//let numeros =[1, 2, 3, 4,]

//acumulador incia em 0
// variavel auxiliar é o num 
// acumulador inicia em 0 e soma com auxilia ate o ultimo valoe do array 
//let soma = numeros.reduce((acumulador , auxiliar) => acumulador + auxiliar, 0);

//console.log(soma);

//find 
//retorna o primeiro elemento que atende a condiçao
/* let produtos = [
    { id: 1, nome: "teclado", preco: 50}, //produto
     { id: 2, nome: "mouse", preco: 30}, //produto
      { id: 2, nome: "caderno", preco: 30}, //produto

]
//find atende o primeiro que encontra na condicoa
let item = produtos.find(produto => produtos.id == 2);
console.log(item);

///com filter atende todos que tiverem a condicao
let itemFiltrado = produtos.filter(produto => produtos.id == 2);
console.log("usando filter: " , itemFiltrado); */

//let frase = "js é top";

//let palavras = frases.split(" ");
//console.log(palavras);
//trim
// trim remove espacos no inicio e final de uma string
//let nome = "   Paulo    ";
//let nomeLimpo = nome.trim();

//console.log(nome)
//console.log(nomeLimpo)

// foreach
 //let nomes = ["joao", "Guilherme", "Maria"];

//nomes.forEach(nome => console.log(Seu nome é ${nome}´))

//some 
//verifica se pelo menos um item atende a condiçao
/* let numeros = [1, 3, 5, 8]

let temPar = numeros.some(num => num % 2 === 0);
console.log(temPar) // true

// every 
//verifica se todos os itens atendem a condiçao 
// retorno booleano
let todosPares = numeros.every(num => num % 2 === 0);
console.log(todosPares) // false  */

//sort 
//ordena os elementos de array

/* let numeros = [3, 10, 5, 2, 4]
let letras = ["c", "a", "x", "h",]

//para letras
letras.sort();
console.log(letras);

//para numeros 
numeros.sort((a, b) => a - b);
console.log(numeros); */

//reverse 
/* let numeros =[1, 2 , 3,]

numeros.reverse()
console.log(numeros)// [2, 2, 1,] */

//join
/* let palavras = ["eu", "sou", "top"];
console.log(frase); "eu sou top";

//push
//pop
//shift
// unshift
let lista = ["A", "B",]

//push -> adiciona elementos no final do array
lista.push("c"); // adiciona
console.log(lista)

// pop -> remove elementos no final da lista 
lista.pop(); // remove
console.log(lista)
 */
// shift

// unshift

//slice
//cria uma copia de uma parte da lista

/* let numeros = [1, 2, 3, 4]

let parte = numeros.slice(1, 3)  // 1 e 3 sao posicoes de array
console.log(parte) // [2, 3]
 */

//splice
// o splice remove ou adicina elmentos em qualquer posicao

// array.
/* let numero = [1, 2, 3, 4]

numeros.splice(1,1) 

// [1, 3, 4]

// removendo elementos, sem adiciona

numeros.splice(1, 1)
console.log(numeros); // [1, 3, 4]

let frutas = ["Banana", "Laranja", "Maça", "Manga",]

frutas.splice(0, 3, "Limao",  "kiwi")
console.log(frutas);

frutas.Spliced(2, 0, "limao", "kiwi");
console.log(frutas); */

//replace 
// o replace substitui uma parte da string
/* let texto = "Olá mundo";

let novoTexto = texto.replace("mundo", "cliente");
console.log(novoTexto); */

// nossas funçoes 
/* function exibirMensagem() {
 console.log("bem vindo(a)!";
}
   //executando a funçao criada
   exibirMensagem()

   //funcao com parametros
   function cumprimentar(nome) {
    console.log("Olá, %{nome"} )
   }
 */
/* 
   const somar = (numero1, numero2)  => numero1 + numero 2;

   console.log(somar(1, 2))

   function somarNovo(numero1, numero2) {
    console.log(numero1 + numero2)

    //return numero1 + numero 2
   }
 */
/* 
   let textoP = document.getElementById("texto");

   let saudacao = prompt("digite a saudaçao: ");

   if(saudacao ==  "bom dia") {
    textoP.textContent + saudacao; 
   } else {
    textoP.textContent = "SEGUNDOUUUUU VISSE";
   } */