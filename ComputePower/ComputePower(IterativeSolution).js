// x: number n: Power
//T.c: Theta(log(n))
//S.c: Theta(1)
function ComputePower(x,n){
let res=1;
while(n>0){
    if(n%2!==0)
      res=res*x;
    x=x*x;
}
return res;
}

console.log(ComputePower(4,5));