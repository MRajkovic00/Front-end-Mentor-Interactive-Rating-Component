const ratings=document.querySelectorAll(".rating");
const container1=document.querySelector(".container1");
const container2=document.querySelector(".container2");
const btn=document.getElementById("btn");
const rating=document.getElementById("rated");

btn.addEventListener("click", () => {
  container1.style.display="none";
  container2.style.display="block";
 
})

ratings.forEach((ratings) => {
  ratings.addEventListener("click", ()=> {
    rating.innerHTML=ratings.innerHTML;
  })
})
