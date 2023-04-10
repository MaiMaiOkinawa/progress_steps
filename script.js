const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

// Click Next btm moves to currentActive + 1
next.addEventListener('click', () => {
  currentActive++

  // Specify the last circle
  if (currentActive > circles.length) {
    currentActive = circles.length
  }
  update();
})

// Click Prev btm moves back to currentActive - 1
prev.addEventListener('click', () => {
  currentActive--

  // Specify the first circle
  if (currentActive < 1) {
    currentActive = 1
  }
  update();
})

// Adding update function
function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  // Adding progress line color
  const actives = document.querySelectorAll('.active')
  progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
  
  // Adding a function for Prev button
  if (currentActive === 1) { // If currentActive is in 1, disable Prev btn
    prev.disabled = true
  } else if (currentActive === circles.length) { // To see if currentActive is at the end
    next.disabled = true // Disable Next btn 
  } else {
    prev.disabled = false
    next.disabled = false // This means that it is in the middle
  }
}