let varA = "A"; //B
let varB = "B"; //C
let varC = "C"; //A

const valorATemp = varA;

varA = varB;
varB = varC;
varC = valorATemp;

console.log(varA, varB, varC)