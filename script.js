let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map(button => {
    button.addEventListener('click', (event) => {
        if (event.target.innerText === 'AC') {
            display.innerText = '';
        }
        else if (event.target.innerText === '⇐') {
            display.innerText = display.innerText.slice(0, -1);
        }
        else if (event.target.innerText === '=') {
            try {
                display.innerText = eval(display.innerText);
            }
            catch {
                display.innerText = "Invalid format used";
            }
        }
        else if (event.target.innerText) {
            display.innerText += event.target.innerText;
        }
    })
})