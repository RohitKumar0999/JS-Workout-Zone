// Find Prime Numbers upto N


//Helping Function Write differently in some file
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

function FindNPrime(N){

    for(let i=2;i<=N;i++){
        if(CheckPrime(i)){
            console.log(i);
        }
    }
}

FindNPrime(10);