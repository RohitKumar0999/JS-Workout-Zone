// Find the Least Common Divisor (LCM)

//E.g
//  I/P :   a = 4 , b=6
//o/p : 12


function GIVELCM (num1, num2){
    let MaxValue = Math.max(num1,num2);
if((num1%num2 === 0)|| (num2%num1 === 0)){
    return MaxValue;
}
 let LCM = MaxValue++;
while(MaxValue){
    if((LCM%num1===0)&&(LCM%num2===0)){
    return LCM;
    }
    else{
        LCM++;
    }
}
}

console.log("LCM = ",GIVELCM(3,7));