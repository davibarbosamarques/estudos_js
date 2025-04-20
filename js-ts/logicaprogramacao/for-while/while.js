function escolherNum(min, max){
    let r = Math.random() * (max - min) + min;
    return Math.floor(r)
}

const min = 1;
const max = 20;
let rand = escolherNum(min, max);

while(rand !== 10){
   rand = escolherNum(min, max);
   console.log(rand);
}
 console.log("venceu");