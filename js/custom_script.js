// hamburger open and close script 

const header_hamburger = document.querySelector('#header_hamburger');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');


header_hamburger.addEventListener('click',function(){
console.log('click hamburger');
    if(header_hamburger.classList.contains('open')){
        header_hamburger.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    }
    else{
        header_hamburger.classList.add('open');
        fadeElems.forEach(function(element){
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        });
    }
});
//  hamburger open and close script end 

