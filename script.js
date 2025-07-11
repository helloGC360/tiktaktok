var redid=document.getElementById('red');
var blueid=document.getElementById('blue');
var btn=document.getElementsByClassName('btn');
var home=document.getElementsByClassName('homepage');
var pop=document.getElementById('poup');
var mus=document.getElementsByTagName('audio');


  let chal=0;
  let p=2;
  var red=0,blue=0;


  let p1;
  let p2;
  let p3;
  let p4;
  let p5;
  let p6;
  let p7;
  let p8;
  let p9;
  /*
function c(){ alert(
p1+' p1\n'+
p2+' p2\n'+
p3+' p3\n'+
p4+' p4\n'+
p5+' p5\n'+
p6+' p6\n'+
p7+' p7\n'+
p8+' p8\n'+
p9+' p9\n'
    );}*/


  
 function btn1(x){
    player(x);
    p1=p;
check();
    c();
  }

function btn2(x){
    player(x);
    p2=p;check();
   // alert('im b1'+bt1+'p1  '+p1);
    c();
  }
function btn3(x){
    player(x);
    p3=p;check();
   // alert('im b1'+bt1+'p1  '+p1);
    c();
  }
function btn4(x){
    player(x);
    p4=p;check();
   // alert('im b1'+bt1+'p1  '+p1);
    c();
  }
function btn5(x){
    player(x);
    p5=p;check();
   // alert('im b1'+bt1+'p1  '+p1);
    c();
  }
function btn6(x){
    player(x);
    p6=p;check();
   // alert('im b1'+bt1+'p1  '+p1);
    c();
  }
function btn7(x){
    player(x);
    p7=p;check();
   // alert('im b1'+bt1+'p1  '+p1);
    c();
  }
function btn8(x){
    player(x);
    p8=p;check();
   // alert('im b1'+bt1+'p1  '+p1);
    c();
  }
function btn9(x){
    player(x);
    p9=p;check();
   // alert('im b1'+bt1+'p1  '+p1);
    c();
  }




 
 
 
 function player(x){
   chal=chal+1;
   
   if(p==1){
     mus[0].play();
    btn[x-1].style='background:blue;color:white;';
    btn[x-1].innerHTML='X';
    btn[x-1].disabled=1;
    p=2;
   }else if(p==2){
     mus[1].play();
    btn[x-1].style='background:red;color:white;';
    btn[x-1].innerHTML='o';
    btn[x-1].disabled=1;
    p=1;
   };
   //alert(chal);
   
 }
 
 
 function check(){
         if((p1==1 && p2==1 && p3==1)||(p4==1 && p5==1 && p6==1)||(p7==1 && p8==1 && p9==1)||(p1==1 && p4==1 && p7==1)||(p2==1 && p5==1 && p8==1)||(p3==1 && p6==1 && p9==1)||(p1==1 && p5==1 && p9==1)||(p3==1 && p5==1 && p7==1)){
      
     // alert('player 1 got victory red');
     mus[3].play();
      pop.style='z-index:5;animation:pop 1.8s 1 reverse;background-image:radial-gradient(transparent,red);';
      pop.innerHTML='RED team victory';
      for(let ip=0;ip<9;ip++){
        btn[ip].disabled=1;
      }
      jha();
      red++;
 }else if((p1==2 && p2==2 && p3==2)||          (p4==2 && p5==2 && p6==2)||          (p7==2 && p8==2 && p9==2)||          (p1==2 && p4==2 && p7==2)||          (p2==2 && p5==2 && p8==2)||          (p3==2 && p6==2 && p9==2)||          (p1==2 && p5==2 && p9==2)||          (p3==2 && p5==2 && p7==2)){
   //   alert('player 2 victory blue');
    mus[3].play();
      pop.style='z-index:5;animation:pop 1.8s 1;background-image:radial-gradient(transparent,blue);';
      pop.innerHTML='BLUE team victory';
      for(let ip=0;ip<9;ip++){
        btn[ip].disabled=1;
      }
      
     jha()
     blue++;
   }else if(chal==9){
     mus[2].play();
     pop.style='z-index:5;animation:pop 1.8s 1;background-image:radial-gradient(transparent,greenyellow);';
     pop.innerHTML= 'match DRAW';
   for(let ip=0;ip<9;ip++){
        btn[ip].disabled=1;
   }
     jha();
     chal=0;
 }
redid.innerHTML=' red: '+red;
blueid.innerHTML='blue: '+blue;
 }
 



function jha(){
  setTimeout(()=>{
  for(let ip=0;ip<9;ip++){
        btn[ip].disabled=0;
        btn[ip].style='background:black;';
        btn[ip].innerHTML='.';
      }
   pop.style='z-index:0;';
   mus[3].pause();
p1=0;
p2=0;
p3=0;
p4=0;
p5=0;
p6=0;
p7=0;
p8=0;
p9=0;
chal=0;},1800);
//  alert(chal);
}



function s(event){
  round=event.value;
//  alert(rou);
}
  function next(){
  // alert(round);
  mus[4].play();
   home[0].style='animation:home 1.2s 1;';
   setInterval(()=>{
    home[0].style='z-index:0;';
   },1000)
  }
  
  
  
  function po(){
    pop.style='background:red;animation:pop 1s 1 linear';
  }