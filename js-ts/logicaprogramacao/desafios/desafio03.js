const divisibilidade = () => {

    for(let i = 0; i < 100; i++){

        if(i % 3 !== 0 && i % 5 !== 0){
            console.log(`${i}`) 
        }
        else if(i % 3 === 0 && i % 5 === 0){
            console.log(`${i} FizzBuzz`)
        }
        else if(i % 3 === 0){
            console.log(`${i} Fizz`)
        }
        else{
            console.log(`${i} Buzz`)
        }
    }
    
}
console.log(divisibilidade())