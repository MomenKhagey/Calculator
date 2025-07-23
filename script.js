let scr = document.querySelector(".screen_area");
let calcontainer = document.querySelector(".calc-container");

calcontainer.addEventListener("click", (e) => {
  if (e.target.nodeName == "BUTTON") {
    switch (e.target.textContent) {
      case "C":
        clear();
        break;
      case "DEL":
        DelLastNum();
        break;
      case "=":
        calcute();
        break;
      default:
        addtion(e.target.textContent);
        break;
    }
  }
});

// Function To Clear ALl NUm

function clear() {
  scr.textContent = "";
}

// Function To Add NUm to Scr
function addtion(val) {
  scr.textContent += val;
}

// Function To Del Last  NUm

function DelLastNum() {
  scr.textContent = scr.textContent.slice(0, -1);
}

// Function To Calcute The Num
function calcute() {
  try {
    let result = math.evaluate(scr.textContent);
    scr.textContent = result;
  } catch (error) {
    scr.textContent = "Invaild Operation";
  }
}
