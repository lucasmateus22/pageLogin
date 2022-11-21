const color2 = document.querySelector('body')
function red(){
    if(
        document.querySelector.classList.contains('blue')
    ){
        document.documentElement.classList.remove('blue');
    }else{
        document.documentElement.classList.add('blue');
    }
}document.documentElement.classList.add('blue');
/**---------------------------------------------------------------------------- */

const color3 = document.querySelector('body')

const color1 = document.querySelector('body')
function blue(){
    if(
        document.querySelector.classList.contains('red')
    ){
        document.documentElement.classList.remove('red');
    }else{
        document.documentElement.classList.add('red');
    }
}document.documentElement.classList.add('red');
/**---------------------------------------------------------------------------- */


function green(){
    if(
        document.querySelector.classList.contains('green')
    ){
        document.documentElement.classList.remove('green');
    }else{
        document.documentElement.classList.add('green');
    }
}document.documentElement.classList.add('green');
