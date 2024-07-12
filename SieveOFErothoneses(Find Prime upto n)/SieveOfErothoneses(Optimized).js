// More Better Solution.
function Sieve(N){
    let isPrime= new Array(N+1).fill(true);
    for(let i =2;i<=N;i++){
          if(isPrime[i]){
            console.log(i);
            for(let j = i*i; j<=N; j=j+i){
                isPrime[j]=false;
            }
          }
    }
}

Sieve(100);