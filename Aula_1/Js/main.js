
/*
function primo(num) {
    for (var i = 2; i < num; i++)
    if (num % i === 0) return false;
    return num !== 1;
}
   // var resl = "O n�mero" + primo(num) + "� primo"}
function  retornaResposta(num2){
    if (primo(num2)){
        return "o numero " + num2 + " � primo "
    }else{
        return "o numero " + num2 + " n�o � primo "
    }
}  

var num1 = prompt(" Informe um numero 123" )
console.log (retornaResposta(num1));
*/

/*
function botao(){  
    document.getElementById("goodJob").innerHTML = " vc fez um bom trabalho";
}

function outraPagina1(){
    window.open("https://www.globo.com/");
    //window.location.href = "https://www.globo.com/";
}

function mouseAqui(){
    document.getElementById("mexerMouse").innerHTML = "fez certinho"
    //alert("escreva de novo")
}

function volte(){
    document.getElementById("mexerMouse").innerHTML = "refa�a"
}

function mouseAqui(elemento){
        elemento.innerHTML = "fa�a de novo"
        //document.getElementById("mexerMouse").innerHTML = "fez certinho"
        //alert("escreva de novo")
    }
*/

// var lista = [" uva ",  " kiwi ", " banana "];
//lista.push(" pera ");
//lista.pop();
/*console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "));

//var idade = 37;
//var frase = "bebe não deixa eu fazer as coisas sozinha";
//alert(nome + " tem " + idade + " anos ");
//console.log(frase);
*/

/* var fruta = {nome: "uva ", cor: "verde"}    
console.log(fruta.nome);
alert(fruta.cor); */

/*var frutas = [{nome: "uva ", cor: "verde"}, {nome: "maça ", cor: "vermelha"}];   
console.log(frutas);
alert(frutas[1].cor);*/

/*var idade = prompt("Qual sua idade");
//var idade  = 18;
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/

/*var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++
}
*/

/*var count
for(count=0; count <=5; count++){
    alert(count);
}
*/

/*var d = new Date();
//alert(d.getMonth()+1);
alert(d.getMinutes());
*/

/*function soma(n1, n2){
    return n1 + n2;
}
alert(soma(5,10));

/*function setReplace (frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
    alert(setReplace("Vai Ana", "Paula", "Araujo"));
*/

/*function validaIdade(idade){
    var validar;
    if (idade >=18){
        validar = true
           }else{
        validar = false
           }
    return validar;
}

var idade = prompt ("qual sua idade")
console.log(validaIdade(idade))
*/
/*
//declaracao de variaveis
var citacao = [];
    citacao[0]="Sou dramática, intensa, transitória e tenho uma alegria em mim que quase me deixa exausta. Eu sei sorrir com os olhos e gargalhar com o corpo todo. Eu sei chorar toda encolhida abraçando as pernas. Por isso, não me venha com meios-termos, com mais ou menos ou qualquer coisa. Venha a mim com corpo, alma, vísceras, e falta de ar..";
    citacao[1]="Só sei que nada sei";
    citacao[2]="Faça ou não faça, tentativa não existe";
    citacao[3]="Eu acredito no amor. Eu creio que pode existir alguma chance e eu sempre acho que pode ser diferente. Talvez essa seja a explicação de todas decepções";
    citacao[4]="De alguma forma eu sabia que seria amor. Eu não sei, mas acho que a gente olha e pensa: “Quero pra mim”. Mas dá um frio na barriga, um tremor, um medo de depender de alguém, de sofrer, de escolher errado, de lutar por algo que não vale a pena. Porque o coração nem sempre é mocinho, as vezes ele também gosta de pregar peças, sei lá, talvez queira provar que também sabe ser vilão. Foi por isso que corri, tentei fugir, mas quando tem que ser, não adianta, será";
//alert(citacao[2]);

var contador = 0;


//funcoes
function exibeTexto(){
//camel case
    document.getElementById("texto").innerHTML =  citacao[contador];
//auto incrementar o contador
    contador++
//limitador
    if(contador == citacao.length){
contador = 0
}
//temporizacao
//funcoes intrinsecas -> elas vem o javascript
setTimeout("exibeTexto()",10000);
}//fim da funcao exibeTexto()
/*

/*
//declaracao de variaveis
var banners = ["Imagens/alice.jpg","Imagens/jr_eu.jpg","Imagens/Le_e_eu.jpg"];
var alternativo = ["Amorzinho","amor","principe"];
var titulo = ["Princesinha","Princesa","Amorzão"];
//
var contador = 0;
//functions
function rotativo(){
    //nesta linha endereco da imagem
    document.images[0].src = banners[contador];
    //o alt da imagem
    document.images[0].alt = alternativo[contador];
    //title das imagens
    document.images[0].title = titulo[contador];
//
    contador++
    //document.write(contador);
    //
if(contador == banners.length){
contador = 0
}
//contador de tempo -> timer
setTimeout("rotativo()",2000)
}

//Objetos
//Date
//ao definir a variavel -> new Date()
var dia = new Date()
//criar variavel -> objeto caracteristicas de Date
var hora = dia.getHours();
var minutos  =  dia.getMinutes()
//var hora pegue o objeto dia e dentro de dia, selecione as horas
//document.write(hora);
//encadeamento
if(hora<=12){
    document.write("Bom Dia")
    alert(hora + ":" + minutos)
}else if(hora>12 & hora <=18){
    document.write("Boa Tarde")
}else if(hora>18){
    document.write("Boa Noite")
}else{
    document.write("Fim do mundo")  
}
/*
/*
Obtém a data/hora atual
var data = new Date();

Guarda cada pedaço em uma variável
var dia     = data.getDate();           // 1-31
var dia_sem = data.getDay();            // 0-6 (zero=domingo)
var mes     = data.getMonth();          // 0-11 (zero=janeiro)
var ano2    = data.getYear();           // 2 dígitos
var ano4    = data.getFullYear();       // 4 dígitos
var hora    = data.getHours();          // 0-23
var min     = data.getMinutes();        // 0-59
var seg     = data.getSeconds();        // 0-59
var mseg    = data.getMilliseconds();   // 0-999
var tz      = data.getTimezoneOffset(); // em minutos

*/



/*<!--
    <script type = "text/javascript">  var nome = prompt("qual seu nome")
        document.write(" Welcome "+ nome +"!") </script>
-->
*//*    //matriz ou array
        //são variáveis que armazenam vários valores
        var nome = [];
        nome[0] = "Primeiro"; 
        nome[1] = "Segundo";
        nome[2] = "Terceiro";
        //
        alert(nome[1]);
        
        //definicao de um array quando declarado
        var mercado = ["Arroz","Banana","Maça","Jabuticaba","Abacate","Feijao"];
        var totalDeItens = mercado.length;
        //
        //alert(mercado[3]);
        alert(mercado.length);
        /*array bidimensional
        var sub_um = ["São Paulo","Osasco","Guarulhos"];
        var sub_dois=["Rio de Janeiro","Cabo Frio","Petrópolis"];
        
        var super = [sub_um,sub_dois];
        
        var cidade = super[0][1];
        alert(cidade);
        */
// JavaScript Document
function clique(){
	//alert("Ok");
	document.getElementById("fundo").style.backgroundColor="#000";
	//
	}
function troca(cor){
	if (cor == "vermelho"){
		document.getElementById("fundo").style.backgroundColor="red";
		document.getElementById("quadrado").style.backgroundColor="#f0f";
		}else if(cor == "verde"){
			document.getElementById("fundo").style.backgroundColor="green";
			}else{
				document.getElementById("fundo").style.backgroundColor="blue";
				};
	
	};

