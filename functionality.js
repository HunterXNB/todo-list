import formHandler from "./formHandler"
import render from "./render"
export default function functionality() {
    if (!JSON.parse(localStorage.getItem("tasks"))) {
        localStorage.setItem("tasks", JSON.stringify([]))
    }
    const form = document.querySelector("#form")
    form.addEventListener("submit", formHandler)

    render()

}