//Problem: User interaction doesn't work
//Solution: Add interactivity so the user can manage daily tasks.

var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks

//New Task List Item
var createNewTaskElement = function(taskString) {
  //Create List Item
  var ListItem = document.createElement("li");
  //input (checkbox)
  var checkBox = document.createElement("input"); //checkbox
  //label
  var label = document.createElement("label");
  //input (text)
  var editInput = document.createElement("input"); //text
  //button.edit
  var editButton = document.createElement("button");
  //button.delete
  var deleteButton = document.createElement("button");

    //Each element needs modifying
    //Each element needs appending
  return listItem;
}

//Add a new task
var addTask = function() {
  console.log("Add task...");
  //Create a new list item with the text from the #new-task:
  var ListItem = createNewTaskElement("Some new Task");

  //Append listItem to incompleteTasksHolder

}

//Edit existing task
var editTask = function() {
  console.log("Edit task...");

  //When the Edit button is pressed
    //if the class of the parent is .editMode
      //Switch from .editMode
      //label text become the input's value
    //else
      //Switch to .editMode
      //input value becomes the label's text

    //Toggle .editMode on the parent
}

//Delete an existing task
var deleteTask = function() {
  console.log("Delete task...");

  //When the Delete button is pressed
    //Remove the parent list item from the ul
}

//Mark a task as complete
var taskCompleted = function() {
  console.log("Task complete...");

  //When the checkbox is checked
    //Append the task list item to the #completed-tasks
}

//Mark a task as incomplete
var taskIncomplete = function() {
  console.log("Task incomplete task...");

  //When the checkbox is unchecked
    //Append the task list item to the #incomplete-tasks
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  console.log("Bind list item events");
  //Select taskListItem's children
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");

  //Bind editTask to edit button
  editButton.onclick = editTask;

  //Bind deleteTask to delete button
  deleteButton.onclick = deleteTask;

  //Bind checkBoxEventHandler to checkbox
  checkBox.onchange = checkBoxEventHandler;
}

//Set the click handler to the addTask function
addButton.onclick = addTask;

//Cycle over incompleteTasksHolder ul list items
for ( var i = 0; i < incompleteTasksHolder.children.length; i++ ) {
  //Bind events to list item's children (taskCompleted)
  bindTaskEvents( incompleteTasksHolder.children[i], taskCompleted );
}

//Cycle over completedTasksHolder ul list items
for ( var i = 0; i < completedTasksHolder.children.length; i++ ) {
  bindTaskEvents( completedTasksHolder.children[i], taskIncomplete);
}

