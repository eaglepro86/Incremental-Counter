const add = document.getElementById('btn-add');
const subtract = document.getElementById('btn-subtract');
let result = document.getElementById('counter__stats');
let counter = 0;

// Add function
add.addEventListener('click', () => {
    
    // Increment by one
    counter++;
    // Add the counter to result
    result.textContent = counter;
});


// Subtract fucntion
subtract.addEventListener('click', () => {
    // Decrement by one
    counter --;
    // Append the result
    result.textContent = counter;
});