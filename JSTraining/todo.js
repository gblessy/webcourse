var todos =["Buy new turtle"];

var input = prompt("What would you like to do?")

while (input !== "quit") {
//handle input
if (input === "list") {
	listTodos();
} else
if (input === "new") {
	addTodo();
} else if (input === "delete"){
	deleteTodo();
}
//ask again for new input
input = prompt("What would you like to do?")
}

console.log("OK, You quit the app");

function listTodos(){
	console.log("*********")
	todos.forEach(function(todo, i){
		console.log(i + ":" + todo);
	} );
	console.log("*********");
}

function addTodo() {
	var newToDo = prompt("Enter new task");
	todos.push(newToDo);
}

function deleteTodo(){
	//ask for index of todo to be deleted.
	var index = prompt ("Enter index of todo to delete")
	//delete todo
	//splice()
	todos.splice(index, 1);
	console.log("Deleted Todo");
}