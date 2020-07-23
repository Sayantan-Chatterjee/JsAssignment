'use strict';
function jeffBmi(mass,height)
 {
    return mass/(height*height);
 }

 let x = jeffBmi(68,1.68);

 console.log('BMI of jeffBmi : ' + x)

function toddBmi(mass,height){
    return mass/(height*height);
}
 let y = toddBmi(65,1.72)

 console.log('BMI of Todd : ' + y) 

let bool

if( bool=x>y){
    console.log(`jeff BMI is higher than todd so the bool value is ${bool} `)
}
else{
    console.log(`todd BMI is heighr than jeff so the bool value is ${bool}`)
}

