var x = 2;

console.log("x", x);

{
    console.log("x", x);
    var x = 4; // escopo de bloco se fosse um let não mudaria daria problema
}

console.log("x", x);