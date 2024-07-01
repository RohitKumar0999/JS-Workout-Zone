function FindGCD(a,b){
    while( b!==0){
      a= a%b;
      [a,b] = [b,a]
    }
    return a;
}

function FindLCM(a,b){
    return ((a*b)/FindGCD(a,b));
}

console.log("LCM of a =10 and b = 15 is: ",FindLCM(19,15));

//Answer: 30