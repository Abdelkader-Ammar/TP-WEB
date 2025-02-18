let date=document.getElementById("date");
let task=document.getElementById("task");
let b=document.getElementById("add");
const tableBody = document.getElementById("taskTableBody");
let n =1;
b.addEventListener("click",add);

function add(){
    if (!date.value || !task.value){
        alert("Please fill in all fields");
        return;

    }
    tel=newRow = document.createElement("tr");
    newRow.innerHTML = `
    <td>${n}</td>
    <td>${date.value}</td>
    <td>${task.value}</td>
    <td class="text-center">
        <input type="checkbox" class="form-check-input mark-done">
    </td>`
    //Je n’ai pas pu ajouter la corbeille pour supprimer les tâches, alors j’ai trouvé cette solution
    n++;

    tableBody.appendChild(newRow);
    document.getElementById("date").value = "";
    document.getElementById("task").value = "";
}


