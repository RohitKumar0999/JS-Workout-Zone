// x: number n:power
function ComputePower(x,n){
let res = 1;
for(let i=0;i<n;i++){
    res = res * x;
}
return res;
}

console.log(ComputePower(3,4));