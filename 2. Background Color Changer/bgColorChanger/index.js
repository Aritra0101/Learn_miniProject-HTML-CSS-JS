const btns = document.querySelectorAll(".button");
const body = document.querySelector("body");

btns.forEach( (btn) => {
    btn.addEventListener('click', (e) => {
        // switch (e.target.id) {
        //   case "grey":
        //     body.style.backgroundColor = e.target.id;
        //     break;
        //   case "white":
        //     body.style.backgroundColor = e.target.id;
        //     break;
        //   case "red":
        //     body.style.backgroundColor = e.target.id;
        //     break;
        //   case "green":
        //     body.style.backgroundColor = e.target.id;
        //     break;
        //   case "blue":
        //     body.style.backgroundColor = e.target.id;
        //     break;
        //   case "yellow":
        //     body.style.backgroundColor = e.target.id;
        //     break;

        //   default:
        //     break;
        // }
        body.style.backgroundColor = e.target.id;
    });
});