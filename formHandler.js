import render from "./render"

export default function formHandler(event) {
    event.preventDefault()
    const listInput = document.querySelector("#text")
    if (listInput.value.trim() == "") {
        alert("Please enter a task.")
    } else {
        let tasks = [...JSON.parse(localStorage.getItem("tasks"))]
        const length = tasks.length
        tasks.push({
            value: listInput.value,
            state: false
        })
        let newTasks = tasks.map((el) => JSON.stringify(el.value))
        newTasks = [...new Set(newTasks)].map((el) => JSON.parse(el))
        if (length === newTasks.length) {
            alert("This task is already added.")
        } else {
            localStorage.setItem("tasks", JSON.stringify(tasks))
            listInput.value = ""
            render()
        }
    }
}