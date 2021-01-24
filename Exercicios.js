/*a= 'Hello Word';

console.log(a);

console.log("Olá Mundo");

var numero  = 124;
console.log(numero);



var numeroA=20;
var numeroB=5;

var resultadoSoma=(numeroA+numeroB);
var resultadoSubtracao=(numeroA-numeroB);
var resultadoMultiplicacao=(numeroA*numeroB);
var resultadoDivisao=(numeroA/numeroB);

console.log(resultadoSoma);
console.log(resultadoSubtracao);
console.log(resultadoMultiplicacao);
console.log(resultadoDivisao);


var nome = "Leidiane";
var sobrenome= "Soares";
var nomeCompleto= nome + " " + sobrenome;


console.log(nomeCompleto);


var nome = "Leidiane";
var sobrenome= "Soares";
var idade=31;

 var resultado= (nome+ " "+ sobrenome+" terá"+" "+idade+" "+"anos");

console.log(resultado);




var numeroA=30;

var numeroB=45;


var numeroC=numeroA;

var numeroC=numeroB;


console.log(numeroC);


var gostoDeSorvete = true;
console.log (gostoDeSorvete);


var umNumeroPequeno=1;
var umNumeroGrande=100;

var eMenor= umNumeroPequeno < umNumeroGrande;

var eMaior=umNumeroPequeno > umNumeroGrande;

console.log(eMenor,eMaior);

function metade(numero) {
    return numero/2;
 }

 console.log(metade(5));
 console.log(metade(1.5)); //E isto irá devolver 3


 function multiplicar(numero1,numero2){
    return numero1 * numero2 ;
  }

  console.log(multiplicar(5,2));*/

 /* function somar (num1, num2) {
   return num1 + num2;
}

function triploDaSoma(num3, num4) {
   var resultadoDaSoma = somar(num3, num4);
   return resultadoDaSoma * 3;
}



  
function triplo(numero){
   return numero*3;
  }
  
  
  function triploDaSoma(num1,num2){
     var resultado= num1+num2;  
  return triplo(resultado);
      }

  
  console.log(triploDaSoma(2,4));


  function perimetro(raio){
   return 3.14 * raio * 2;



  };



  function area(raio){
   return 3.14 * raio * raio;


  };


  console.log(perimetro(4));
  console.log(area(2));



  function tamanhoNomeCompleto(nome,sobrenome){

   return nome.length + " ".length + sobrenome.length;


}

console.log(tamanhoNomeCompleto("enzo","silva"));


function escreverCartao(titulo,nome,sobrenome){
   return titulo + " " + nome + " " + sobrenome;


};

console.log(escreverCartao("Dra.", "Ana", "Pérez"));



Math.round (4.6) // arredonda pra cima, número inteiro mais próximo, se o segundo for maior ou igual a 5
Math.round (4.3) //retorna 4 por que neste caso o 3 é < que 5 então permanece o 4
Math.floor (4.6) // arredonda para baixo, retorna 4
Math.floor (4.3) // retorna 4
Math.max () //pega dois parâmetros e retorna o maior número, enquanto Math.min () pega dois parâmetros e retorna o menor.

console.log(Math.round (4.5)); //retorna 7
console.log(Math.min (4, 7)); //retorna 4

function gerarProbabilidade(){

   return Math.random()*100;
   
   }

   console.log(gerarProbabilidade());





var diaDeSemana ="domingo";

if (diaDeSemana=="domingo"){

console.log("Hoje é dia de futebol!!!")

}


function eMaior(umNumero) {
   if (umNumero > 5) {
    return true;
   } else {
    return false;
   }
}


function hojeSeJoga(domingo)
{
   if (domingo=="domingo")
   { 
       return "Hoje é dia de futebol!!!";
   } else    {
   return "Hoje não é dia de futebol :(";
   }
}

console.log(hojeSeJoga("domingo"));
console.log(hojeSeJoga("segunda"));}

function eMaior(n1,n2)
{
    if(n1>n2)
    {
        return n1; 
    }
    else{
        return n2;
    }
}


console.log(eMaior(10,4));

//A função pra dar certo tem que escrever na segunda linha, se não dá erro//


function sinal(umNumero)
{

   if(umNumero>0)
   {

      return 1;
   }
      else if(umNumero==0){

      return 0;
   }
   else if(umNumero<0){

      return -1;
   }

}


function eNumeroDaSorte(umNumero){

   return umNumero > 0 && umNumero % 2 == 0 || umNumero % 3 == 0 && umNumero != 15;

} 


console.log(eNumeroDaSorte(15));


function  possoIrAoBanco(diaDaSemana,horaAtual){

   return horaAtual >= 9 && horaAtual <= 15 &&  diaDaSemana !="Sábado" && diaDaSemana !="Domingo";

}

console.log(possoIrAoBanco("segunda-feira", 12));
console.log(possoIrAoBanco("terça-feira", 1));
console.log(possoIrAoBanco("Sábado", 11));
console.log(possoIrAoBanco("Domingo", 10));


function filosofoHipster(profissão,nacionalidade,km){

   return profissão=="Músico" && nacionalidade=="Brasil" && km >2;


}


console.log(filosofoHipster ('Músico', 'Brasil', 5)); // verdadeiro
console.log(filosofoHipster ('Jogador de futebol', 'Alemanha', 12)); // false
console.log(filosofoHipster ('Músico', 'Argentina', 1)); // false


function pagarComCartao
(temJuros, taxasDoCartao, dinheiroDisponivel) {
  return !temJuros && taxasDoCartao >= 3 || dinheiroDisponivel < 100;
}


console.log(pagarComCartao(true, 6, 320));
console.log(pagarComCartao(false, 8, 80));
console.log(pagarComCartao(true, 2, 215));
console.log(pagarComCartao(true, 1, 32));

function podeSeAposentar(idade,sexo, anosDeContribuicao){

   return idade>=60 && sexo=="F" && anosDeContribuicao>=30 || idade >=65 && sexo=="M" && anosDeContribuicao>=30;

}

console.log(podeSeAposentar(69, "M", 40));




function podeSubir(alturaPessoa,vemComCompania,temProblemaCardiaco){

   return alturaPessoa>= 1.5 && temProblemaCardiaco == false || alturaPessoa>=1.2 && vemComCompania== true && temProblemaCardiaco == false;


}

console.log(podeSubir(1.5, false, false));
      // não pode subir
      // porque embora seja maior do que 1.5m,
      // tem um problema cardíaco)





function medalhaSegundoOPosto(posto){

   if(posto==1)
   {

      return "ouro";

   }

   else if(posto==2){

      return "prata";

   }


   else if(posto==3){

      return "bronze";


   }
   else{

      return "Continue participando";

   }

   }



   console.log(medalhaSegundoOPosto(1));
   //"ouro"
   console.log( medalhaSegundoOPosto(2));
   //"prata"
    console.log(medalhaSegundoOPosto(3));
  // "bronze"
   console.log(medalhaSegundoOPosto(100));
   //"Continue participando"



   function imprimir5vezes5()
   {

      for(var i = 1; i <= 5; i++) {
         console.log(5)
      }



   }



imprimir5vezes5();

function passoAPasso(){

   for(var i = 0; i < 5; i++) {
      console.log(i)
   }



}


passoAPasso();


 function passandoPor(){

   for(var x=0; x <=3; x++){

      console.log("aqui eu tenho o valor de " +x)
   }



   }

 passandoPor();


function passandoPelosPares(){
   for( var i=0; i<=6;i++){
      if( i % 2 == 0){
         console.log("aqui eu tenho o valor de "+i)
      }


   }




}

passandoPelosPares();





function imprimirAzul(x){
   for(var i=0; i<x; i++){

      console.log("Azul");


   }

}

imprimirAzul(3);


 function somar5MoedasDe25Centavos(){
   var zerovinteCinco = 0; 
   for( var i=0; i<5; i++){
      zerovinteCinco = zerovinteCinco + 0.25;
  
   }

   return zerovinteCinco;
 }

 console.log(somar5MoedasDe25Centavos());



function somarMoedasDe25(x)
{
   var zerovinteCinco = 0; 

   for(i=0;i<x;i++){
      zerovinteCinco = zerovinteCinco + 0.25;
   }


return zerovinteCinco;

}


console.log(somarMoedasDe25(7));





function somaDosPares(x) {
 var soma=0;
   for(var i=0; i<=x; i+=2)

{

soma= soma +i;


}
return soma;

}


console.log(somaDosPares(10));






function somatoria(x){
   var soma=0;
   for( var i=0; i<x; i++){

      soma= soma+i;


   }
      return soma;
}

console.log(somatoria(5));*/


  

/*

function caloriasDeTrote(nVoltas){

   var caloriasDeTrote = 0;
  
   for(var i = 1; i < nVoltas+1; i++) {
  
   console.log( caloriasDeTrote += 5 * i);
  
   } return caloriasDeTrote;
}



 function  caloriasDeTrote(nVoltas){

   var calorias = 0;

   for( var i = 1; i < nVoltas+1; i++){

    calorias = calorias +  5 * i ;
   
   } return calorias;   
}


console.log(caloriasDeTrote(2));




var seriesFavoritasDaAna = 
["Game of Thrones", "Breaking Bad", "House of Cards"];
var seriesFavoritasDoHeitor = ["Blindspot", "Blacklist"];



console.log(seriesFavoritasDaAna);
console.log(seriesFavoritasDoHeitor);
var saudacao=["olá","mundo!"];
var saudar=["olá","olá"];
console.log(saudacao);
console.log(saudar);


var  a=(["olá", "mundo"], ["mundo", "olá"]);
var b=(["olá", "mundo"], ["olá", "mundo"]);
var c=(["olá", "mundo"], ["olá", "todo", "o", "mundo"]);
var arraysIguais=(["olá"], ["olá", "mundo"]);

console.log(arraysIguais);
console.log(a);
console.log(b[0]);
console.log(c);


var numerosDeLoteria = [2, 11, 17, 32, 36, 39];
var girosDeDado = [1, 6, 6, 2, 2, 4];
var saiuCara = [false, false, true, false];
var listaDeNumeros = [[1, 2, 3], [4, 5, 6]];




console.log(numerosDeLoteria);
console.log(saiuCara);
console.log(girosDeDado);
console.log(listaDeNumeros);



var numerosDeLoteria = [22,40,12];


console.log([] .length);
console.log(numerosDeLoteria.length);
console.log([4, 3].length);



var pertences=["espada","escudo","crossbow"];

console.log(pertences);

pertences.push ("cross");

console.log(pertences);*/


//var umArray = [1, 2, 3];
//var outroArray = [4, 5];


/* function mover(umArray,outroArray){
   var resultado = umArray.pop();
    outroArray.push(resultado);
   return [umArray,outroArray] ;
 }



console.log(mover([1,2,3],[4,5]));




\* function mover(umArray, outroArray){
   var umArray = [1, 2, 3];
   var outroArray = [4, 5];
umArray.pop(); //deveria ser [1, 2]
outroArray.push(umArray.pop()); //deveria ser [4, 5, 3]

}


console.log(mover([1,2,3],[4,5]));




var diasDeTrabalho = ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira"]

console.log(diasDeTrabalho.indexOf ("osvaldo"));


function contem(array, numero){

    var resultado= array.indexOf(numero)
      if(resultado>=0){
         return true;
      }
else{
   return false;
}
   } 




console.log(contem([1, 6, 7, 6], 7));
//true
 console.log(contem([1, 6, 7, 6], 6));
//true
 console.log(contem([], 7));
//false
 console.log(contem([8, 5], 7));
//false

var mesesDoAno=[];
console.log(mesesDoAno[0]);
var esse= ["esse", "cachorro", "tem", "a", "cauda", "peluda"]
 console.log(esse[48]);
var animal=["cachorro"];
console.log(animal[0]);

var deste= ["esse", "cachorro", "tem", "a", "cauda", "peluda"]
console.log(deste[1])



function medalhaDeAcordoComPosto(numero){

   medalha=["nada","ouro","prata","bronze"];
   

      if(numero > 3){

         return "nada";

      }
      else{

         return medalha[numero];
      }



      }



console.log(medalhaDeAcordoComPosto (0)); 
console.log(medalhaDeAcordoComPosto (2));
//"prata"
console.log(medalhaDeAcordoComPosto (3));
//"bronze"
console.log(medalhaDeAcordoComPosto (4));
//"nada"
 console.log(medalhaDeAcordoComPosto (5));
//"nada"

;
function somaLucroSemestre(umSemestre) {
   return umSemestre[0] + umSemestre[1] +
       umSemestre[2] + umSemestre[3] +
       umSemestre[4] + umSemestre[5];
}


console.log(somaLucroSemestre([1,2,3]));
console.log(somaLucroSemestre([0,1,2,3,4,5]));
console.log(somaLucroSemestre([0,-2,3,10]));




function lucroTotal4(umPeriodo){
   var soma = 0;
soma = soma + umPeriodo[0];
soma = soma + umPeriodo[1];
soma = soma + umPeriodo[2]
soma= soma+ umPeriodo[3];
return soma;

}



function lucroTotal(umPeriodo) {
   var soma= 0;
   var mes = 0;
   for (var i=0; i<umPeriodo.length; i++) {
     mes = umPeriodo[i];
     soma= soma+ mes;
   }
   return soma;
 }


/*console.log(lucroTotal([]));
console.log(lucroTotal([100]));
console.log(lucroTotal([100, 2]));
console.log(lucroTotal([2, 10, -20]));
console.log(lucroTotal([2, 10, -20, 0, 0, 10, 10]));


function quantidadeDeMesesComLucro(umPeriodo) {
   var quantidade= 0;
     
   for (let mes=0; mes< umPeriodo.length; mes++) {
    var result=  umPeriodo[mes];
     if (result>0){
           
      quantidade= quantidade+1;
     }
     

   }
   return quantidade;
 }


 function quantidadeDeMesesComPerda(umPeriodo) {
   var quantidade= 0;
     
   for (let mes=0; mes< umPeriodo.length; mes++) {
    var result=  umPeriodo[mes];
     if (result<0){
           
      quantidade= quantidade+1;
     }
     

   }
   return quantidade;
 }




 console.log(quantidadeDeMesesComPerda([1,0,2,3]));
 console.log(quantidadeDeMesesComPerda([1,10,2,3,2,0]));
 console.log(quantidadeDeMesesComPerda([0, -3, -1, -5]));

 
 function saldoDeMesesComLucro(umPeriodo){
      var novoArray=[];
   for (let mes=0; mes< umPeriodo.length; mes++) {
    var result=  umPeriodo[mes];
     if (result>0){
           
      novoArray.push(umPeriodo[mes]);
     }
     

   }
   return novoArray;
 }


 
// A função saldoDeMesesComLucro deve ser declarada
//A função saldoDeMesesComLucro deve receber um parâmetro
console.log(saldoDeMesesComLucro([1]));// deve retornar [1]
console.log(saldoDeMesesComLucro([2, 20, 20]));// deve retornar [2, 20, 20]
console.log(saldoDeMesesComLucro([10, -10, 2, 100])); //deve retornar [10, 2, 100]
 
 
 
 console.log(saldoDeMesesComLucro([100, 20, 0, -10, 10]));
//[100, 20, 10]


 function  naipeDeTruco(naipe){
   var novoArray=[];
   for(let i=1;i<12;i++){
      if(i!=8 && i!=9){

         novoArray.push(i+" de "+naipe)

      }


   }
return novoArray;


 }

 console.log(naipeDeTruco("espadas"));
//["1 de espadas", "2 de espadas", "3 de espadas" ..., "12 de espadas"]


if(true){

   let a= "Eu";
   
   let b= "tenho";
   
   let c= "anos";
   
   let idade = 20 ;
    
   console.log(a + b + idade + c);
  }
  //Necessitamos uma função produto que receba um array de números e retorne o produto: o resultado de multiplicar todos os elementos entre si.

// produto([1, 4, 7]) deve retornar 28, que é 1 * 4 * 7.
   
   

   function fatorial(numero){
      fatoriar=1;
     
      for(i=1; i<=numero;i++){
      
       
      fatoriar= fatoriar*i;

      }

   return fatoriar;

   }
   
   
console.log(fatorial(0));
console.log(fatorial(1));
console.log(fatorial(5));


  
     function maisMenos(umArray){          
         var qdtPositivos= 0;
         var qdtZeros =0;
         var qdtNegativos =0;
        var quantidadeT= umArray.length;
        var novoArray=[];
                 
        for( var i=0; i<umArray.length; i++) {
         var numero= umArray[i];
              if(numero>0){

                  qdtPositivos= qdtPositivos+1;
                                                    
               }

               else if(numero==0){

                 qdtZeros= qdtZeros+1;
         
                 
               }
               else{

                  qdtNegativos= qdtNegativos+1;
               
                
               }

                             
      
         }
      qdtNegativos = qdtNegativos / quantidadeT;
         qdtPositivos = qdtPositivos/quantidadeT;
         qdtZeros= qdtZeros/quantidadeT;
          novoArray.push(qdtPositivos, qdtZeros, qdtNegativos);
   
         return novoArray;     
      }

 console.log(maisMenos([1, 2, 0, -1]));*/
  // retorno[0] = numeroPositivos / arrayEntrada.length;
//retorno[1] = numeroZeros / arrayEntrada.length;
//retorno[2] = numeroNegativos / arrayEntrada.length;

//return retorno;
/*let retorno = [];
function maisMenos(arrayEntrada){
let numeroPositivos = 0;
let numeroZeros = 0;
let numeroNegativos = 0;

for(let i = 0; i < arrayEntrada.length; i++){
if(arrayEntrada[i] < 0)
numeroNegativos=numeroNegativos+1;

else if(arrayEntrada[i] == 0)
numeroZeros=numeroZeros+1;

else
numeroPositivos=numeroPositivos+1;
}
retorno[0] = numeroPositivos / arrayEntrada.length;
retorno[1] = numeroZeros / arrayEntrada.length;
retorno[2] = numeroNegativos / arrayEntrada.length;

return retorno;
}


function maisMenos(numArray) {

      var quantidade =  numArray.length;
   
      var positivos = 0;
   
      var zeros = 0;
   
      var negativos = 0;
   
      for(i = 0; i < quantidade; i++) {
   
          if(numArray[i] < 0) {
   
              negativos = negativos +1;
   
          } else if(numArray[i]>0) {
   
              positivos = positivos +1;
   
          } else{
   
              zeros = zeros + 1;
   
          }
   
      }
   
      positivos = positivos / quantidade;
   
      zeros = zeros / quantidade;
   
      negativos = negativos / quantidade;
   
      var total = [positivos, zeros, negativos];
   
      return total;
   
   }
   



  


  //Desafio - Produto
  //Necessitamos uma função produto que receba um array de números e retorne o produto: o resultado de multiplicar todos os elementos entre si.
  
 // Por exemplo,  deve retornar 28, que é 1 * 4 * 7.
  
  //Escreva a função produto


      function produto(array) {
            var multi=1;
            var numero=0;
       for(let i=0; i<array.length; i++) {// no array se colocar i<= não funciona!//
            numero= array[i];
            multi= multi* numero;
         }

         return multi;

      }


console.log(produto([1,4,7]));


function lucroTotal(umPeriodo) {
   var soma= 0;
   var mes = 0;
   for (var i=0; i<umPeriodo.length; i++) {
     mes = umPeriodo[i];
     soma= soma+ mes;
   }
   return soma;
 }



 /*Desafio - Árvore utópica
 As árvores utópicas  crescem de uma forma particular, em dois ciclos:
 
 cada primavera dobram seu tamanho
 cada verão crescem um metro
 Se Laura planta uma árvore utópica com um metro, no final do outono, qual seria sua altura depois de N ciclos?
 
 Alguns exemplos:
 
 si N = 0, sua altura será 1 metro (não cresceu nada)
 si N = 1, sua altura será de 2 metros (dobrou a altura na primavera)
 si N = 2, sua altura será de 3 metros (cresceu um metro mais no verão)
 si N = 3, sua altura será de 6 metros (dobrou a altura na primavera seguinte)
 E assim ...
 
 Escreva a função alturaArvoreUtopica, que utilize uma quantidade de ciclos de crescimento, e retorne a altura resultante da árvore de Laura.*/



    /*  function alturaArvoreUtopica(qdtCiclos){
         
         var altura=1;
         for(let i=0;i<= qdtCiclos; i++){
           
            if(i==0){
               altura=altura;

            }  else if(i % 2 == 0 &&  i!=0){

               altura= altura+1;

            }  else if(i % 2>0 &&  i!=0){
               altura=altura*2;

            } 
          

         }
         return altura;
      }


      console.log(alturaArvoreUtopica(0));
      console.log(alturaArvoreUtopica(1));
      console.log(alturaArvoreUtopica(2));
 console.log(lucroTotal([1,4,7])); 
 console.log(alturaArvoreUtopica(3));*/

 /*Desafio - Escada
 Queremos representar uma escada com altura variável, utilizando um array de strings.
 
 Por exemplo, uma escada com altura 3, representaremos com o seguinte array:
 
 var escada3 = [
  "  #",
  " ##",
  "###"
 ]
 E uma escada com altura 5, da seguinte forma:
 
 [  "    #",   "   ##",    "  ###",     " ####",     "#####" ]



 ******
[ '    #', '   ##', '  ###', ' ####', '#####' ]




 Escreva uma função escada que utilize uma altura (um número) e retorne um array que represente a escada correspondente. Não esqueça que o espaço " " faz parte da resposta :)
 
 Me dê uma pista
 Em JavaScript você pode repetir um texto usando repeat da seguinte maneira: var degrau = "#".repeat(2); // agora degrau = "##"; Isso servirá para montar nossos degraus; 
 Mas como faço para inserir a quantidade de degraus de acordo com o número indicado pelo meu array resultado? Como inserir um elemento em um array?

 function escada(alturaEscada){
    var array=[];
    var degrau="#";
    for(let i=1;i<=alturaEscada;i++){

      
      array.push( " ".repeat(alturaEscada-i)+degrau.repeat(i));

    }


return array;


 }
 


function acontece(arrayAlunos,qdtMinima){
   var qdtAlunosAdiantados=0;
    for(let i=0; i<=arrayAlunos.legth; i++){
         
         if(arrayAlunos[i]<=0){
          qdtAlunosAdiantados= qdtAlunosAdiantados+1;
      }
   }
   if(  qdtAlunosAdiantados>=qdtMinima){
      return true
   };
     
   }




function aberturas (diasAula, qdtaMin){

      let novoArray = [];
   
      for (let i = 0; i < diasAula.length; i++){
             novoArray.push(acontece(diasAula[i], qdtaMin));
   
      }
   
      return novoArray;  
   
   }
  
 console.log(escada(5));

Desafio - Professora Furiosa
Uma professora de programação, cansada de que os estudantes cheguem tarde, decidiu que vai cancelar a aula se há poucos presentes.

Ela representa a entrada dos estudantes como um array de tempos de chegada tarde, em minutos. Por exemplo, se um estudante chegou 10 minutos atrasado, outro 5 minutos antes da hora, outro com 3 minutos de atraso, e outro pontual, poderá representar assim:

var alunosDaSegunda = [10, -5, 3, 0];
Com essa informação e a quantidade mínima de estudantes para que suceda o curso, a professora quer saber se a aula acontecerá. Por exemplo, supondo que a quantidade mínima de estudantes para que a aula aconteça é de 2 alunos, então o curso da segunda-feira se realizará, porque houve um estudante que foi pontual e um estudante que chegou cedo.

 acontece(alunosDaSegunda, 2)
true
Mas se a quantidade mínima fosse 3, a aula não aconteceria:

 acontece(alunosDaSegunda, 3)
false
Escreva as seguintes funções: 1. acontece, que diz se a aula sucederá de acordo com o array dos estudantes que entraram. 2. aberturas, que utiliza um array com os arrays dos estudantes que entraram nos outros dias, e a quantidade mínima de estudantes, e diga quais os dias em que as aulas aconteceram e quais não. Por exemplo:

aberturas([alunosDaSegunda, alunosDaTerça, alunosDaQuarta], 2)
[true, false, false]



*/





   function acontece (alunosDia, quant){

         var adiantados= 0;
      
         for (var i = 0; i < alunosDia.length; i++){
      
           if (alunosDia[i] <= 0)   
         adiantados=adiantados+1
      
         if (adiantados >= quant) return true;
       
      
      }

      return false;
   }


function aberturas (alunosDia, quant){

      var resultadoArray = [];
   
      for (var i = 0; i < alunosDia.length; i++){
   
       resultadoArray.push(acontece(alunosDia[i], quant));  
   
      }
   
      return resultadoArray;  
   
   }
   
        
     

   
      
   console.log(aberturas([1,0,-1], [1,0,-10],[1,0,-10], 1))
   console.log(acontece([10, -5, 3, 0],1));
