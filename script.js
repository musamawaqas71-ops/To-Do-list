function addtask() {
let input = document.getElementById("todo");
let taskText = input.value;

if(taskText === "") {
    alert("pehlai kuch likhai!");
    return;
}

let li = document.createElement("li");
li.innerText = taskText ;

li.onclick = function() {
    li.classList.toggle("completed");
};

let deleteBtn = document.createElement("button");
deleteBtn.innerText = "Delete";
deleteBtn.classList.add("delete-Btn");

deleteBtn.onclick = function(event) {
    event.stopPropagation();
    li.remove();
};
li.appendChild(deleteBtn);
document.getElementById("ul").appendChild(li);
input.value = "";

}