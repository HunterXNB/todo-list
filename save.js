import render from "./render"

export default function save() {
    const tasks = [...document.querySelectorAll(".task")].map(el => {
        return {
            value: el.querySelector(".content input").value.trim(),
            state: el.classList.contains("done")
        }
    })
    localStorage.setItem("tasks", JSON.stringify(tasks))
    render()
}