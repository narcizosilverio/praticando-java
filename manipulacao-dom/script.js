const elementos = document.querySelectorAll(".texto");
// querySelectorAll pega todos os elementos

console.log(elementos);

// percorrendo a lista 

// percorrendo a ista e pegando cada elemento p
elementos.forEach(elemento => console.log(elemento));

//percrrendo a list e pegando o texto innerText
elementos.forEach(elemento => console.log(elemento.innerText));

//alterando texto
elementos.forEach(elemento => {
    elemento.innerText = "alterado";
    // elemento.innerText = "alterado";
})

//inner.html - trocar as tags
elementos.forEach(elemento => {
    elemento.innerHTML = "<h2>Item</h2>"
})
// trocar a cor dos elementos
elementos.forEach(elemento => {

    elemento.style.color = "#0000ff"
})

//eventos com js
//o que sao eventos? aços do usuario

//evento click
/* const botao = document.getElementById("btn");

botao.addEventListener("click", () => {
    alert("voce clicou!");
})

 */

//evento de digitaçao input keyup

/*evento input ele dispara enquanto digita em tempo real*/

const campo = document.getElementById("campo");
const resultado = document.getElementById("resultado");

campo.addEventListener("input", () => {
    //value -> o que esta sendo digitado dentro do campo 
    resultado.innerText = campo.Value;
})
 
