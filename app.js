 var min_id = document.getElementById("min")
 var sec_id = document.getElementById("sec")
 var milisec_id = document.getElementById("milisec")


 var min = 0
 var sec =0
 var mil=0
 var interval2



 function  start() {
     interval2 = setInterval(timer,100)
     document.getElementById("start").setAttribute("disabled" ,true)
     document.getElementById("Pause").removeAttribute("disabled" )
     
       
 }
 

 function timer() {
     mil++
     milisec_id.innerText=mil
     if(mil>5){
         sec++
         sec_id.innerText=sec
         mil=0
     
     }
     if(sec>10){
         min++
         min_id.innerText=min
         sec=0
      
      
     }
  
 }
 

 function pause() {
     clearInterval(interval2)
     document.getElementById("start").removeAttribute("disabled")
     document.getElementById("pause").setAttribute("disabled",true)
 }
 document.write()
 function reset() {
     mil = 0
     min = 0
     sec = 0
     milisec_id.innerText = mil
     sec_id.innerText =sec
     min_id.innerText = min
     clearInterval(interval2)

     document.getElementById("start").removeAttribute("disabled")
    
     
 }
