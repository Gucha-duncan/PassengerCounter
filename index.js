let count=0;
let increment=document.getElementById('increment-btn');
let counted=document.getElementById('count-element');
let decrement=document.getElementById('decrement-btn');
let saving=document.getElementById('saving-btn');
let entries=document.getElementById('entries');


increment.onclick=function(){
  count +=1;
  counted.innerText=count;
}

decrement.onclick=function(){

  if(count===0){
    counted.innerText=0;
  }
  else if(count>0){
    count -=1;
  counted.innerText=count;
  }
}
saving.onclick= function(){
  let entrycounter=count + " , ";

   entries.textContent +=entrycounter
   count=0;
   counted.textContent=0;
}
