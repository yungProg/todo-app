const createNewList = document.getElementById("create-list")
const addListDialog = document.getElementById("add-list-dialog") 
const closeDialog = document.querySelector(".close-btn") 
const addList = document.getElementById("add-list") 
 

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
  const listName = document.getElementById("enter-list").value
  let numberOfItems = 0
  createNewEl(
  ".lists",
  "button",
  `<span>Emoji</span> <p> ${listName} </p> <span id = "number-of-tasks"> ${numberOfItems} </span>`,
  "list-name"
    )
  addListDialog.close()
}

addList.addEventListener("click", renderList)