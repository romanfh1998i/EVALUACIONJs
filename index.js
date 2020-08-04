/*function Es_Perfecto(numero){
var temp =0;
for(var i=1;i<=numero/2;i++)
{ 
  
  if(numero%i ===0){
temp += i;


}
}

if (temp === numero && numero%temp !==1){
  console.log("este numero es Es Perfecto");

}else{
  console.log("no es Perfecto");

}
}

Es_Perfecto(6);


var list = [2,4,607,2,58];
var Pares =0;
var Paressum =0;
  for(Pares of list)
{ 
  if(Pares%2 ===0 ){
   Paressum +=Pares;



}


}
console.log("numeros sumado = "+Paressum);
*/
var arrayfib=[0,1];
for(var i =arrayfib.length; i<=10;i++){
  arrayfib[i]=arrayfib[i-2]+arrayfib[i-1];
  }
console.log(arrayfib);


  



  
  

