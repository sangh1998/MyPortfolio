function cursor(){
    let cursor = document.querySelector(".cursor");
    let body = document.querySelector("body")

    body.addEventListener("mousemove",(e)=>{
        cursor.style.left = e.clientX + 'px';
         cursor.style.top = e.clientY + 'px';
    });
}



// cursor();

function progressBar(){
  let number = document.getElementById("number");
   let count = 0;

   setInterval(()=>{

    if(count == 65){
        clearInterval();
    }else{
       let w = count+=1;
        number.innerHTML = w + "%"
    }
   }, 30)
}
function progressBar1(){
    let number = document.getElementById("number1");
     let count = 0;
  
     setInterval(()=>{
  
      if(count == 60){
          clearInterval();
      }else{
         let w = count+=1;
          number.innerHTML = w + "%"
      }
     }, 30)
  }
  function progressBar2(){
    let number = document.getElementById("number2");
     let count = 0;
  
     setInterval(()=>{
  
      if(count == 50){
          clearInterval();
      }else{
         let w = count+=1;
          number.innerHTML = w + "%"
      }
     }, 30)
  }
  function progressBar3(){
    let number = document.getElementById("number3");
     let count = 0;
  
     setInterval(()=>{
  
      if(count == 70){
          clearInterval();
      }else{
         let w = count+=1;
          number.innerHTML = w + "%"
      }
     }, 30)
  }

  function scrollNavbar(){
    window.addEventListener('scroll', function() {
        var navbar = document.querySelector('#navbar');
        var scrollPosition = window.scrollY;
      
        if (scrollPosition > 200) {
         let ok = navbar.classList.add('fixed');
         console.log(ok);
        } else {
          navbar.classList.remove('fixed');
        }
      });
  }
progressBar();
progressBar1();
progressBar2();
progressBar3();
scrollNavbar();