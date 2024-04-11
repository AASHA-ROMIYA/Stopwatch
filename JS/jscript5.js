var btnstart=document.querySelector('.start');
var btnstop=document.querySelector('.stop');
var btnreset=document.querySelector('.reset');
var hr=min=sec=ms=0,starttime;
btnstart.addEventListener('click',()=>{
    btnstart.classList.add('start-active');
    btnstop.classList.remove('stop-active');
starttime=setInterval(()=>{
ms++;
if(ms==100){
   sec++;
   ms=0;
}
if(sec==60){
    min++;
    sec=0;
}
if(min==60){
    hr++;
    min=0;
}


    display();
},10
)})
btnstop.addEventListener('click',()=>{ 
    btnstart.classList.remove('start-active');
    btnstop.classList.add('stop-active');
    clearInterval(starttime);
    display();

})

btnreset.addEventListener('click',()=>{
    btnstart.classList.remove('start-active');
    btnstop.classList.remove('stop-active');
    hr=min=sec=ms=0;
    clearInterval(starttime);
    display();

})
function display(){
    phr=hr<10?'0'+hr:hr;
    pmin=min<10?'0'+min:min;
    psec=sec<10?'0'+sec:sec;
    pms=ms<10?'0'+ms:ms;

document.querySelector('.hr').innerText=phr;
document.querySelector('.min').innerText=pmin;
document.querySelector('.sec').innerText=psec;
document.querySelector('.ms').innerText=pms;
}