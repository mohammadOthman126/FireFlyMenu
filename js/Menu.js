
var pictures=['angus','backfire','Bounls2','cesar','carthage','curly','hotDog'];
var iconImg;
setInterval(function pickImage () {
    var index=Math.floor(Math.random()*7);
    iconImg.setAttribute('src','/media/'+pictures[index] + '.jpg');
},1000)
function start (){
    iconImg=document.getElementById('image');
   // iconImg.addEventListener('click',pickImage,false);
   iconImg.addEventListener('load',pickImage,false);
}
window.addEventListener('load',start,false);
