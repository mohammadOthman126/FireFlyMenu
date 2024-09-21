
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

/*var videos=['oday11','oday22','oday33'];
var iconVid;
function pickVid(){
    var index2=Math.floor(Math.random()*3);
    iconVid.setAttribute('src','/media'+videos[index2]+'MP4');
}
function start2(){
    iconVid=document.getElementById('myVideo');
    iconVid.addEventListener('click',pickVid,false);
    //iconVid.addEventListener('load',pickVid,false);
}
window.addEventListener('load',start2,false);*/
