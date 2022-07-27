const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn')
// console.log(btn)
const color = document.querySelector('.color')

btn.addEventListener('click', function () {
  //get random number between 0-3 colors[1]
  const randomNumber = getRandomNumber();
  console.log(randomNumber)
  document.body.style.backgroundColor = colors[randomNumber]
  color.textContent = colors[randomNumber]
})

// console.log(document.bconsole.log(document.body)ody)\\
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}