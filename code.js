 var screen=document.getElementById("screen");
 var values={prev:null,new:null}
 var opertype="";
 var isbutton=false;
 
 function number(num){
    
  
    if(isbutton){
     var result_number;
     if(values.new){
        result_number=values.new+''+num;
        values.new=result_number;
        screen.value=result_number;
     }else{
        result_number=values.prev+''+num;
        values.prev=result_number;
        screen.value=result_number;
     }
    }else{
      screen.value=num;
      if(values.prev){
         values.new=num;
        }else{
           values.prev=num;
        }
        isbutton=true;
    }
    
    
}
function operators(oper){
  opertype=oper;
  isbutton=false;
}
function equal() {

   if(!values.new){
      return;
   }
   if(values.prev&&values.new&&opertype)
      if(opertype==='+'){
         var result=Number(values.prev)+Number(values.new);
         screen.value=result;
         values.prev=result;
         
      }
      if(opertype==='-'){
         var result=Number(values.prev)-Number(values.new);
         screen.value=result;
         values.prev=result;
         
      }
      if(opertype==='*'){
         var result=Number(values.prev)*Number(values.new);
         screen.value=result;
         values.prev=result;
         
      }
      if(opertype==='/'){
         var result=Number(values.prev)/Number(values.new);
         screen.value=result;
         values.prev=result;
         
      }
      isbutton=false;
   }

