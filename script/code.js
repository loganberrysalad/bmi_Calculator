let weight = document.getElementById("weight");
let height = document.getElementById("height");
let result = document.getElementById("result");
let answer = document.getElementById("answer");
let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  let bmiInput = weight.value / Math.round(height.value * height.value) * 10000;
  result.innerText = bmiInput.toFixed(2);


  if(bmiInput < 18.5) {
    answer.innerText = "YOU ARE UNDERWEIGHT 😢"
    
  } else if (bmiInput > 18.5 && bmiInput < 24.9) {
    answer.innerText = "YOU ARE HEALTHY 😁"
    
  } else if (bmiInput > 25 && bmiInput < 29.9) {
    answer.innerText = "YOU ARE OVERWEIGHT 😕"
    
  } else {
    answer.innerText = "YOU ARE OBESE 🤐"
  }
  
})


