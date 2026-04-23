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
    const taskAmount = document.getElementById("nmbr").value;
    if (newTask != "") {
        for (var i = 0; i < taskAmount; i++) {
        tasks.push(newTask);
        };
    updateList();        
    }
}