'use strict';

function heathAvg(a,b,c){
    return (a+b+c)/3;
}

let x = heathAvg(89,120,103)
console.log('The avg score by Heath : ' + x)

function zaneAvg(a,b,c){
    return (a+b+c)/3;
}

let y = zaneAvg(116,94,123)
console.log('The avg score by Zane : ' + y)

if(x>y){
    console.log('Heath scores more than Zane and Heath scores : ' + x )
}

else{
    console.log('Zane scores more than Heath and Zane scores : ' + y )
}

let p = heathAvg(92,120,103)
let q = zaneAvg(116,90,123)

console.log('In another match the winner is')

if(p>q){
    console.log('Heath scores more than Zane and Heath scores : ' + p )
}if(q<p){
    console.log('Zane scores more than Heath and Zane scores : ' + q )
}else{
    console.log('Match Draw')
}

function mariaAvg(a,b,c){
    return (a+b+c)/3;
}

let z = mariaAvg(97,134,105)

console.log('The avg score by Heath : ' +z)

if( x>y && x>z ){
    console.log('Heath Won the game')
}if( y>z && y>x ) {
    console.log('Zane won the game')
} else {
    console.log('Maria won the game')
}
