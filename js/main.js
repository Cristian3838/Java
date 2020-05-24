function clicou() {
    //Injeta o elemnto HTML Obrigado por clicar,
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";


    //Para deixar o obrigado por  clicar em negrito
    document.getElementById("agradecimento").innerHTML = "<p>Obrigado por clicar</p>";

    //console.log(document.getElementById("Agradecimento"));
    //alert("Obrigado por clicar");
}

//Direcionar para outra tela

function redirecionar() {
    window.open("https://cursos.univesp.br/");
}

function trocar(elemento) {
    alert("trocar texto");
}

function passar(elemento) {
    alert("colocou o mouse aqui");
}

function pegar() {
    document.getElementById("onemove").innerHTML = "<p>Obrigado por passar o mouse</p>"; //Troca o texto

}

function dois() { //Comando para trocar o nome

    document.getElementById("twomove").innerHTML = "<p>Valew por passar o mouse</p>";
}

function load() {
    alert("Página carregada");
}


function funcaoChange(elemento) {
    console.log(elemento.value)
}


//Programação em Javascript
//Declaração de variaveis
/*var nome = "Cristian Jonas Ataliba ";
var idade = 31;
var frase = "Aprendendo a usar java"
var informação = "Virando ninja em java"
var lista = ["maça", "pera", "banana"];
lista.push("abacate");
lista.pop("abacate");

//Alertas na programação
alert("Bem vindo ao Javascript " + nome);
alert("Welcome to the jungle");
alert("A cor da fruta é verde maçã " + nome);

//O que aparecera no console
console.log(nome + idade + " anos");
console.log(frase.replace("Aprendendo", "Entendendo")); //Replace troca palavra da varivael declarada
console.log(informação);
console.log(frase + " e " + informação); //Sinal de mais é concatenação

console.log(lista); // Aparece todaa lista
console.log(lista[0]); //Aparece um item apenas da lista

console.log(lista.length); //Aparece a quantidade de elementos da lista

console.log(lista.reverse()); //Reverte os elementos da lista
console.log(lista.toString()); //Coloca os elementos em linha ao inves de coluna
console.log(lista.join(" @ ")); //Join coloca o carater que escolhermos parar separa as strings

var fruta = { atributo: "bonita ", nome: "maça", cor: "verde" } //Dicionario
console.log(fruta);

var usuarios = [{ Idade: "30 anos", nome: "Silvana", sexo: "Feminino" },
        { Idade: "33 anos", nome: "Cristian", sexo: "Masculino" }
    ] //Lista de dicionarios
console.log(usuarios);

//Condicional if/else
var idade = 3;

if (idade >= 18) {
    alert("maior de 18 anos");
} else {
    alert("menor de 18 anos");
};

//Prompt para solicitar dados ao usuario
var idade = prompt("Qual sua idade ? ")
if (idade >= 18) {
    alert("Entre e divirta-se com o brinquedo");
} else {
    alert("Você não pode entrar no brinquedo");
};

//laços de repetição While

var count = 2;
while (count <= 5) {
    console.log(count);
    count = count + 1;
};

//Laços de repetição for

var count;
for (count = 3; count <= 5; count++) {
    alert(count);
};

//Comando para mostrar a Data atual

var d = new Date();
alert(d);
alert(d.getDay() + 1);
alert(d.getHours());
alert(d.getMinutes());
alert(d.getFullYear());
alert("Hoje é " + d.getDate() + "/" + (d.getMonth() + 1) + "/" + (d.getFullYear()));

//Funcções
function soma(n1, n2) {
    return n1 + n2;
}
alert(soma(5, 10));

//Troca de frases
function setreplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}
alert(setreplace("vai namapol", "namapol", "seligapol e tamujunto kkkkkk"));


//Validar idade
function validaidade(idade) {
    var validar;
    if (idade >= 18) {
        return true
    } else {
        return false
    }
}

var idade = prompt("Qual é sua idade");
console.log(validaidade(idade));*/

//Lista de comandos index

//Lista de comandos do JS

//Lista de comandos do Java script

//Lista de comandos do Java (Programador Cristian)

//Comandos do Java