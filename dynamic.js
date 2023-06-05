// Retrieve the counter value from local storage
var counter = localStorage.getItem('counter');

// Check if the counter value exists in local storage
if (counter) {
  document.getElementById("counter").textContent = counter;
} else {
  // If the counter value doesn't exist, set it to 0
  counter = 0;
}

function increment() {
  counter++;
  document.getElementById("counter").textContent = counter;
  // Store the updated counter value in local storage
  localStorage.setItem('counter', counter);
}

function decrement() {
  counter--;
  document.getElementById("counter").textContent = counter;
  // Store the updated counter value in local storage
  localStorage.setItem('counter', counter);
}
