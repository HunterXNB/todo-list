import remove from "./delete"
import done from "./done"
import edit from "./edit"
export default function render() {
    const tasksContainer = document.querySelector(".tasks-container")
    let tasks = [...JSON.parse(localStorage.getItem("tasks"))]
    tasks = [...tasks.filter(el => !el.state).sort((a, b) => a.value > b.value ? 1 : -1), ...tasks.filter(el => el.state).sort((a, b) => a.value > b.value ? 1 : -1)].map((el, i) => `<div title="${el.value}" class="task${el.state ? " done" : ""}">
          <div class="content">
            <p>${i + 1}- </p> 
            <input type="text" class="text" readonly value="${el.value}" />
          </div>
          <div class="actions">
            <button class="save hidden">SAVE</button>
            <button class="edit">EDIT</button>
            <button class="del">DELETE</button>
          </div>
        </div>`)
    tasksContainer.innerHTML = tasks.join("")
    edit()
    remove()
    done()
}