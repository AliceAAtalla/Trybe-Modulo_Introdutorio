/*Faça um programa que defina três variáveis 
com os valores dos três ângulos internos de um 
triângulo. Retorne true se os ângulos 
representarem os ângulos de um triângulo e false 
caso contrário.

Para os ângulos serem de um triângulo válido,
 a soma dos três deve ser 180 graus. 
 Caso os ângulos estejam inválidos, 
 o programa deve retornar uma mensagem de erro.*/


 let ang1 = 60;
 let ang2 = 20;
 let ang3 = 90;
 let triangulo = ang1 + ang2 + ang3;

if ( triangulo === 180) {
  console.log(true);
}
else {
  console.log("Error");
}
 