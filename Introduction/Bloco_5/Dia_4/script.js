window.onload = function(){
    document.body.className = localStorage.getItem("background");
    contentColor.className = localStorage.getItem("font-color");
    if (localStorage.getItem("font-size") == "font-normal" || localStorage.getItem("font-size") == null) {
        for (let count in contentSize) {
            contentSize[count].className = "font-normal";
        }
    } else {
        for (let count in contentSize)
            contentSize[count].className = "font-large";
    }
};

const buttonBackground = document.querySelector("#button-background");
buttonBackground.addEventListener("click", function() {
    if (document.body.className == "background-white" || document.body.className == "") {
        document.body.className = "background-matte";
        localStorage.setItem("background", "background-matte");
    } else {
        document.body.className = "background-white";
        localStorage.setItem("background", "background-white");
    }
    
})

const buttonFontColor = document.querySelector("#button-fontcolor");
let contentColor = document.querySelector("#content");
buttonFontColor.addEventListener("click", function() {
    if (contentColor.className == "font-black" || contentColor.className == "") {
        contentColor.className = "font-grey";
        localStorage.setItem("font-color", "font-grey");
    } else {
        contentColor.className = "font-black";
        localStorage.setItem("font-color", "font-black");
    }
})

const buttonFontSize = document.querySelector("#button-fontsize");
let contentSize = document.querySelectorAll("p");
console.log(contentSize);
buttonFontSize.addEventListener("click", function() {
    if (contentSize[0].className == "font-normal" || contentSize[0].className == "") {
        for (let count in contentSize) {
            contentSize[count].className = "font-large";
        }
        localStorage.setItem("font-size", "font-large");
    } else {
        for (let count in contentSize) {
            contentSize[count].className = "font-normal";
        }
        localStorage.setItem("font-size", "font-normal");
    }
})

// <button id="button-fontsize">Mudar o tamanho da fonte</button>
// <button id="button-spacing">Mudar o espaçamento</button>
// <button id="button-fontfamily">Mudar a fonte</button> */}