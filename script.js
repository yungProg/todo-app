const createNewList = document.getElementById("create-list")
const addListDialog = document.getElementById("add-list-dialog") 
const closeDialog = document.querySelector(".close-btn") 
const addList = document.getElementById("add-list") 
const submitListForm = document.getElementById("add-list-form")
 

createNewList.addEventListener("click", () => {
  addListDialog.showModal()
})

closeDialog.addEventListener("click", () => {
  addListDialog.close()
})

function createNewEl(parentEl, childEl, inner, className) {
  const parentElement = document.querySelector(parentEl)
  //const childElement = document.querySelector(childEl)
  
  const el = document.createElement(childEl)
  el.setAttribute("class", className)
  el.innerHTML = inner
  parentElement.appendChild(el)
}

function renderList() {
  let listName = document.getElementById("enter-list-name").value
  let numberOfItems = 0
  createNewEl(
  ".lists",
  "button",
  `<span>Emoji</span> <p> ${listName} </p> <span id = "number-of-tasks"> ${numberOfItems} </span>`,
  "list-name"
    )
  addListDialog.close()
}


submitListForm.addEventListener("submit", (e) => {
  e.preventDefault()
  renderList()
  submitListForm.reset()
})


//welcome section
const greet = document.getElementById("greet")
const todayDate = document.querySelector(".today-date")
const newDate = new Date()
const currentHour = newDate.getHours()


switch (currentHour) {
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
  case 11:
    greet.textContent = "Good Morning, Gideon"
  break;
  case 12:
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
    greet.textContent = "Good Afternoon, Gideon"
  break;
  case 18:
  case 19:
  case 20:
  case 21:
  case 22:
  case 23:
    greet.textContent = "Good Evening, Gideon";
  break;
  default:
    greet.textContent = "Greetings, Gideon"
}

todayDate.textContent = `Today, ${newDate.toLocaleDateString("en-GB", {dateStyle: "long"})}`

const privateList = []
function addToPrivateList(param) {
  const listObj = {
    "name": param
  }
  privateList.push(listObj)
}

const listBtn = document.querySelector(".list-name")
console.log(listBtn.children[1].textContent);