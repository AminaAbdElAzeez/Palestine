let loadText = document.querySelector('.text')
let bg = document.querySelector('.home')
const panels = document.querySelectorAll('.panel')
const inputBox = document.querySelector("#input-box");
const list = document.querySelector(".list");
var topBtn = document.getElementById("top");
let load = 0;

// For Loading Home
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
//End Loading Home


// For Slider in About Section
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
// End Slider in About Section


// For Add-Todo Section
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
// End Add-Todo Section


// For Smooth Scrolling to Top
window.addEventListener("scroll" , () => {
  window.scrollY >= 100 ? topBtn.classList.add("show") : topBtn.classList.remove("show");
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
      top : 0 ,
      behavior : "smooth"
  });
});