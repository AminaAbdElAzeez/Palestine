let loadText = document.querySelector('.text')
let bg = document.querySelector('.home')
const panels = document.querySelectorAll('.panel')
const inputBox = document.querySelector("#input-box");
const list = document.querySelector(".list");
let load = 0;

let int = setInterval(blurring, 30)
function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int)
  }

  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}


panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}


function addTask() {
  if(inputBox.value === ""){
    alert("يجب ان تدخل اقتراحك لحل مشكلة القضية الفلسطينية !");
  }else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

list .addEventListener("click", (e) => {
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }
  else if (e.target.tagName ==="SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
},false)

function saveData(){
  localStorage.setItem("data",list.innerHTML)
}

function showData(){
  list.innerHTML = localStorage.getItem("data");
}
showData();