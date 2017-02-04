/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function order()
{
Dosa=30.00;
Puri=45;
Idly=25;
Bajji=35;
Home=10.00;
Shop=8.00;
result=false;
sizes=false;
qun=false;
total=0.0;
time=Math.round((Math.random()*18)+26);
//alert(time);
var m=parseInt(document.getElementById("num").value);
var c=document.getElementById("types").value;
 document.getElementById("dd").innerHTML=" ";
       document.getElementById("disp").innerHTML=" ";


//alert(m);

if(c=="Dosa")
{
total+=30;
  //alert(cost);
  result=true;
}
else if(c=="Puri")
{
total+=45;
 //alert(cost);
 result=true;
}
else if(c=="Idly")
{
    total+=25;
    //alert(cost);
    result=true;
}
else if(c=="Bajji")
{

    total+=35;
    //alert(cost);
    result=true;
}
else if(c=="none")
{
    result=false;
    alert("please select Tiffin");  
   
    
}
if(document.getElementById("Shop").checked)
{
    total+=3;
   // alert(cost);
    sizes=true;
}
else if(document.getElementById("Home").checked)
{
    total+=11;
   // alert(cost);
    sizes=true;
}

else
{
    sizes=false;
    alert("please select the Service");   
    
}
if(document.getElementById("onions").checked)
{
    total+=5;
   // alert(cost);
}
if(document.getElementById("lemon").checked)
{
    total+=2;
    //alert(cost);
}
if(m>0&&m<11)
{
qun=true;
        
}
else
     {

        alert("please select Quantity(1-10)");  
        
     }
    if(result==true&&sizes==true&&qun==true)
     {
         
     var tt=m*total;
       document.getElementById("dd").innerHTML="The Total Cost is $"+tt.toFixed(2);
       
       
     }
     
}
window.onload=function()
{
document.getElementById("submit").onclick=order;


    
};


