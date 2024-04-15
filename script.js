const userInfo = {
    name: "Gideon"
}

const displayDate = document.getElementById("today-date");
const displayGreeting = document.getElementById("greetings");
const listForm = document.getElementById("add-new-list");
const closeListForm = document.getElementById("close-list-form-btn");
const displayForm = document.querySelector(".hidden");
const listTitle = document.getElementById("list-title");
const listItems = document.getElementById("list-nums");
const listContainer = document.getElementById("list-container")

const myDate = new Date();
const hour = myDate.getHours()

displayDate.innerText = `Today, ${myDate.toDateString()}`

const greetUser = () => {
    if (hour > 3 && hour < 12){
        displayGreeting.innerText = `Good Morning, ${userInfo.name}! 👋🏽`
    }else if (hour > 11 && hour < 18) {
        displayGreeting.innerText = `Good Afternoon, ${userInfo.name}! 👋🏽`
    }else {
        displayGreeting.innerText = `Good Evening, ${userInfo.name}! 👋🏽`
    }
}
greetUser()

function closeForm() {
    displayForm.classList.toggle("hidden")
}

function createNewList() {
    console.log(listTitle.value)
    listContainer.innerHTML += `
    <button class="category">
        <span class="emoji">🚗</span>
        <p class="cat">${listTitle.value}</p>
        <span class="items-in-cat">26</span>
    </button>
    `
    closeForm()
}