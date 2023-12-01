const clk = document.querySelector("#clock");

setInterval(() => {
    // let date = new Date();
    // clk.innerHTML = date.toLocaleTimeString();
    clk.innerHTML = new Date().toLocaleTimeString();
}, 1000);