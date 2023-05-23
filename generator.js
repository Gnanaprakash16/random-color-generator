var container=document.querySelector('.content');
var colorcard=document.querySelector('.color-card');
var btn=document.querySelector('button');
var hex=document.querySelector('span');
function getNewColor(){
    var symbols='0123456789ABCDEF';
    var color='#';
    for(var i=0;i<6;i++){
        color=color+symbols[Math.floor(Math.random()*16)];

       
    }
    document.body.style.background=color;
    colorcard.style.background=color;
    hex.innerHTML=color;
}
btn.addEventListener('click',getNewColor);

