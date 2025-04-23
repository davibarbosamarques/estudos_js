const a1 = [0, 1, 2];
const a2 = [3, 4, 5];

// let a3 = a1.concat(a2, 'davi')
let a3 = [...a1, ...a2, ...[1,2,3]]
console.log(a3)