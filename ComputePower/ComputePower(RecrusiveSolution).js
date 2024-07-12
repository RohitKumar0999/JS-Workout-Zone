// x: number n:power
function ComputePower(x, n) {
    if(n===0)
        return 1;
    let temp = ComputePower(x,Math.floor(n/2));
    temp = temp * temp;
    
    if(n%2===0){
        return temp;
    }
    else{
        return temp*x;
    }

}

console.log(ComputePower(3, 4));
