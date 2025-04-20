const frutas = ["Maçã", "Laranja", "Uva"];
/* for of só funciona em array e string 
   NÃO FUNCIONA EM OBJETO pq não é interável
   interável => item por item, em ordem(tem oq percorrer)
*/ 
for(let chave of frutas){
    console.log(chave)
}