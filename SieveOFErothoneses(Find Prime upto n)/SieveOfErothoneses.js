function Sieve(N){
    let isPrime = new Array(N+1).fill(true);
    for(let i=2;i*i<=N;i++){
        if(isPrime[i]){
            for(let j = i*2;j<=N;j=j+i){
                 isPrime[j]=false;
            }
        }
    }
    for(let i=2;i<=N;i++){
        if(isPrime[i]){
        console.log(i);
        }
    }
    }
    Sieve(100);