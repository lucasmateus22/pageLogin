
const body = document.querySelector('body');
function changerColorR(){
    if(
        document.documentElement.contains(!'red')
    ){
        document.documentElement.classList.remove(!'red');
    }else{
        document.documentElement.classList.add('red');
    }
}
document.documentElement.classList.add('red');
/**---------------------------------------------------------- 
const body1 = document.querySelector('body');
function changerColorG(){
        document.documentElement.classList.add('green');
}
document.documentElement.classList.add('green');


const body2 = document.querySelector('body');
function changerColorB(){
    document.documentElement.classList.add('blue');
}document.documentElement.classList.add('blue');

*/

/**
 
const color1 = document.querySelector(body)
function changerColorB(){
    if(
        document.documentElement.classList.contains('red'||'green')
    ){
        document.documentElement.classList.remove('red', 'green');
    }else{
        document.documentElement.classList.add('blue');
    }
}document.documentElement.classList.add('blue');

const color2 = document.querySelector(body)
function changerColorG(){
    if(
        document.documentElement.classList.contains('red'||'blue')
    ){
        document.documentElement.classList.remove('red', 'blue');
    }else{
        document.documentElement.classList.add('green');
    }
}document.documentElement.classList.add('green');

const color3 = document.querySelector(body)
function changerColorR(){
    if(
        document.documentElement.classList.contains('green'||'blue')
    ){
        document.documentElement.classList.remove('green', 'blue');
    }else{
        document.documentElement.classList.add('red');
    }
}document.documentElement.classList.add('red');

 
const bluecolor = document.querySelector(body)
function changerColorB(){
    if(
        document.documentElement.classList.contains('red'&&'green')
    ){
        document.documentElement.classList.remove('red', 'green');
    }else{
        document.documentElement.classList.add('');
    }
}document.documentElement.classList.add('');

const greencolor = document.querySelector(body)
function changerColorG(){
    if(
        document.documentElement.classList.contains('red'&&'blue')
    ){
        document.documentElement.classList.remove('red', 'blue');
    }else{
        document.documentElement.classList.add('green');
    }
}document.documentElement.classList.add('green');

const redcolor = document.querySelector(body)
function changerColorR(){
    if(
        document.documentElement.classList.contains('green'&&'blue')
    ){
        document.documentElement.classList.remove('green', 'blue');
    }else{
        document.documentElement.classList.add('red');
    }
}document.documentElement.classList.add('red');*/
const body5 = document.querySelector(body);
function changerColorR(){
    if(
        document.documentElement.classList.contains('red')
    ){document.documentElement.classList.remove('blue','green');
    }else{
        document.documentElement.classList.add('red');
    }
}
document.documentElement.classList.add('red')

const bodyG = document.querySelector(body);
function changerColorG(){
    if(
        document.documentElement.classList.contains('green')
    ){document.documentElement.classList.remove('green');
    }else{
        document.documentElement.classList.remove('red','blue')
        document.documentElement.classList.add('green');
    }
}
document.documentElement.classList.add('green')

const bodyB = document.querySelector(body);
function changerColorB(){
    if(
        document.documentElement.classList.contains('blue')
    ){document.documentElement.classList.remove('blue');
    }else{
        document.documentElement.classList.remove('red', 'green')
        document.documentElement.classList.add('blue');
    }
}
document.documentElement.classList.add('blue')