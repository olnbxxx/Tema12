
function fibonacci (num) {
    if(num == 0 || num == 1){
        return num;
    }
    else{
        return fibonacci (num - 1) + fibonacci (num - 2);
    }
}

const num_fib = 6;
let suc_fib = []
for(let i = 1; i <= num_fib; i++){
    suc_fib.push(fibonacci(i))
}

console.log(suc_fib)