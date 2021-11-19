// With CodeRunner extension for VS Code installed [ formulahendry.code-runner ]:
// to run code in VS Code terminal, press:
// Ctrl + Option + N 
// remember to console.log() your return so that it prints to the terminal/console

let orientationPicker = () => Math.random() < 0.5;  
let squarePicker = () => Math.floor(Math.random() * (121 - 11) + 11);

console.log(orientationPicker());
console.log(squarePicker());
