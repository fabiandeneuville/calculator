const buttons = [...document.querySelectorAll('.key')];

const buttonsList = buttons.map(button => button.dataset.key);

const screen = document.querySelector('.screen');

document.addEventListener('keydown', (e) => {
    const value = e.key;
    calculate(value)
})

document.addEventListener('click', (e) => {
    const value = e.target.dataset.key;
    calculate(value)
})

const calculate = function(value) {
    if(buttonsList.includes(value)){
        switch (value){
            case "C" : 
                screen.textContent = "";
                break;
            case "=" :
                const calcul = eval(screen.textContent);
                screen.textContent = calcul;
                break;
            default :
                screen.textContent += value
        }
    }
}

window.addEventListener('error', (e) => {
    screen.textContent = "ERROR"
})

