const plus= document.querySelectorAll(".plus");
const minus= document.querySelectorAll(".minus");
const ans= document.querySelectorAll(".ans");


for(let i=0; i<plus.length; i++){
   plus[i].addEventListener("click", ()=>{
      plus[i].classList.toggle("ans");
      minus[i].classList.toggle("ans");
      ans[i].classList.toggle("ans");
   })
}