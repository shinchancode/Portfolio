const text = document.querySelector(".hpri1");
const prog="Welcome to My Website :)"

let idx = 1;
let speed = 300;

function writeText() {
    text.innerText = prog.slice(0, idx)
	idx++;
	if(idx > prog.length)
    {
      idx = 1;
    }
	setTimeout(writeText, speed);
}

// initial call
writeText();