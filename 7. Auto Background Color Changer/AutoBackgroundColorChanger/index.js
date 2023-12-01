const genRandomColor = () => {
    let hex = "0123456789ABCDEF"
    let color = "#"

    for(let i = 0; i < 6; i++) {
        let ind = Math.floor(Math.random() * 16)

        color += hex[ind]
    }

    return color;
}

let intervalId;
const startChangingColor = () => {
    if(!intervalId) {
        intervalId = setInterval(changeColor, 1000);
    }

    function changeColor() {
        document.body.style.background = genRandomColor();
    }
}

const stopChangingColor = () => {
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)