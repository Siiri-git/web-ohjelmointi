var tasks = [];
const ulEl = document.getElementById("ulList")

function updateList() {
    ulEl.innerHTML = "";
    
    tasks.forEach(task => {
        ulEl.innerHTML += `<li> ${task} </li>`;
    });
}

function addList() {
    const newTask = document.getElementById("smth").value;

    if (newTask != "") {
        tasks.push(newTask);
    }
    updateList();
}