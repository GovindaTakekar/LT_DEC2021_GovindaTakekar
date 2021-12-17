document.querySelectorAll(".story-btn").forEach(btn=>{
   btn.addEventListener("click" , ()=>{
       btn.classList.toggle("change")
       btn.nextElementSibling.classList.toggle("change")
   })
})

// var randomColor = Math.floor(Math.random()*16777215).toString(16);


// document.querySelector(".floating-bg").addEventListener("click" , ()=>{
  
//     document.querySelector(".floating-bg").style.backgroundColor = "#" + randomColor;

// })