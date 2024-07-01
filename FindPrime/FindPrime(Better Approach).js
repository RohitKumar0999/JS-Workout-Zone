// Check prime

// From math we extract that we have to traverse only upto root(n)
function CheckPrime(num){
    if(num){
        for(let i =2;i*i<=num;i++){
            if(num%i===0){
                return false;              
            }
        }
        return true;
    }
}

console.log("IS Prime",CheckPrime(17));