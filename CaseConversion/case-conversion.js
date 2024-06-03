/*
 * JavaScript Practice Question: 
 *
 * Question Name: Case Conversion.
 * 
 * Description: Here i Solved two questio for better understanding, firstly i solved the problem for single 
 * starting and then for data of the object, 
 * 
 * Instructions:
 * - Return the object whose values are in camelCase.
 *
 */


// Info:- First Part
// let name = 'raman-thakral';
// let array = name.split('-');
// console.log(array)

// // str.charAt(0).toUpperCase() + str.slice(1);
// let NewArr = [array[0],(array[1].charAt(0).toUpperCase()+array[1].slice(1))]
// console.log(NewArr)
// let ConvertedString = typeof NewArr.join('');
// console.log(typeof NewArr.join(''))


//Second Part

let data = {
    "name" :"raman-thakral",
    "rollNo." : 34234,
    college: "cgc/landra"
}

for (let key in data) {
    
    if(typeof data[key] != "number"){
    let array = data[key].split('-');
    
        let capitalizedPart = array.map((part, index) => index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)).join('');

    // let UpdatedString = NewArr.join('')
    data[key]= capitalizedPart;
    //    data[key]= UpdatedString;
}
}

for(let key in data){
    console.log(data[key])
}



