var z=document.getElementById('hai');
z.style.display="flex";
z.style.justifyContent="center";
z.style.alignItems="center";
var a=document.getElementById('hell');
var b=document.createElement('div');
a.style.display="flex";
b.style.position="relative";
b.style.height="30rem";
b.style.width="30rem";
b.style.backgroundColor="yellow";
b.style.borderRadius="50%";
b.style.border="8px solid black";
b.style.boxShadow="6px 6px 10px blue";
a.appendChild(b);
var b4=document.createElement('div');
b4.style.height="5rem";
b4.style.width="5rem";
b4.style.borderRadius="50%";
b4.style.backgroundColor="red";
b4.style.position="absolute";
b4.style.top="42%";
b4.style.left="42%";
b.appendChild(b4);

var b1=document.createElement('div');
b1.style.height="10rem";
b1.style.width="0.6rem";
b1.style.backgroundColor="black";
b1.style.position="absolute";
b1.style.borderRadius="50%";
b1.style.top="50%";
b1.style.left="48%";
b1.style.transformOrigin="top";
b.appendChild(b1);
b1.style.position="absolute";

var b2=document.createElement('div');
b2.style.height="10rem";
b2.style.width="1rem";
b2.style.backgroundColor="orange";
b2.style.position="absolute";
b2.style.borderRadius="50%";
b2.style.top="50%";
b2.style.left="48%";
b2.style.transformOrigin="top";
b2.style.transform="rotate(45deg)";
b.appendChild(b2);

var b3=document.createElement('div');
b3.style.height="8rem";
b3.style.width="1.5rem";
b3.style.backgroundColor="blue";
b3.style.position="absolute";
b3.style.borderRadius="50%";
b3.style.top="49%";
b3.style.left="47%";
b3.style.transformOrigin="top";
b3.style.transform="rotate(90deg)";
b.appendChild(b3);

var c=document.createElement('h3');
var c1=document.createElement('h3');
var c2=document.createElement('h3');
var c3=document.createElement('h3');
var c4=document.createElement('h3');
var c5=document.createElement('h3');
var c6=document.createElement('h3');
var c7=document.createElement('h3');
var c8=document.createElement('h3');
var c9=document.createElement('h3');
var c10=document.createElement('h3');
var c11=document.createElement('h3');

c.innerHTML="12";
c.style.position="absolute";
c.style.top="0";
c.style.right="50%";
c.style.boxShadow="6px 6px 6px black";
c1.innerHTML="1";
c1.style.position="absolute";
c1.style.top="8%";
c1.style.right="30%";
c1.style.boxShadow="6px 6px 6px black";
c2.innerHTML="2";
c2.style.position="absolute";
c2.style.top="20%";
c2.style.right="15%";
c2.style.boxShadow="6px 6px 6px black";
c3.innerHTML="3";
c3.style.position="absolute";
c3.style.top="42%";
c3.style.right="10%";
c3.style.boxShadow="6px 6px 6px black";
c4.innerHTML="4";
c4.style.position="absolute";
c4.style.top="60%";
c4.style.right="14%";
c5.innerHTML="5";
c5.style.position="absolute";
c5.style.top="75%";
c5.style.right="28%";
c6.innerHTML="6";
c6.style.position="absolute";
c6.style.top="80%";
c6.style.right="50%";
c6.style.boxShadow="6px 6px 6px black";
c7.innerHTML="7";
c7.style.position="absolute";
c7.style.top="75%";
c7.style.left="30%";
c8.innerHTML="8";
c8.style.position="absolute";
c8.style.top="62%";
c8.style.left="17%";
c9.innerHTML="9";
c9.style.position="absolute";
c9.style.top="45%";
c9.style.left="10%";
c9.style.boxShadow="6px 6px 6px black";
c10.innerHTML="10";
c10.style.position="absolute";
c10.style.top="25%";
c10.style.left="12%";
c11.innerHTML="11";
c11.style.position="absolute";
c11.style.top="10%";
c11.style.left="26%";

b.appendChild(c);
b.appendChild(c1);
b.appendChild(c2);
b.appendChild(c3);
b.appendChild(c4);
b.appendChild(c5);
b.appendChild(c6);
b.appendChild(c7);
b.appendChild(c8);
b.appendChild(c9);
b.appendChild(c10);
b.appendChild(c11);

// var x=function fun()
// {
//    time=new Date();
//    sec=time.getSeconds();
//    min=time.getMinutes();
//    hr=time.getHours();
//    sec_rotation=6*sec;
//    min_rotation=6*min;
//    hr_rotation=30*hr+min/2;
//    b1.style.transform=`rotate(${sec_rotation}deg)`;
//    b2.style.transform=`rotate(${min_rotation}deg)`;
//    b3.style.transform=`rotate(${hr_rotation}deg)`;
// }
// (1000);
// b1.appendChild(x);
// b2.appendChild(x);
// b3.appendChild(x);


var x111=setInterval(()=>{

   time=new Date();
   sec=time.getSeconds();
   min=time.getMinutes();
   hr=time.getHours();
   sec_rotation=6*sec;
   min_rotation=6*min;
   hr_rotation=30*hr+min/2;
   b1.style.transform=`rotate(${sec_rotation}deg)`;
   b2.style.transform=`rotate(${min_rotation}deg)`;
   b3.style.transform=`rotate(${hr_rotation}deg)`;
  
},1000);

b1.appendChild(x111);
b2.appendChild(x111);
b3.appendChild(x111);


// var x1=function funn()
// {
//    timee=new Date();
//    min=timee.getMinutes();
//    min_rotation=6*min;
//    b2.style.transform=`rotate(${min_rotation}deg)`;
// }
// (60000);
// b2.appendChild(x1);

// var x2=function funnn()
// {
//    timeee=new Date();
//    hr=timeee.getHours();
//    hr_rotation=30*hr+min/2;
//    b3.style.transform=`rotate(${hr_rotation}deg)`;
   
// }
// (3600000);
// b3.appendChild(x2);







