$(document).ready(function() {

  const form = $('#todo-form');
  const taskInput = $('#task-input');
  const button = $('#todo-form button');
  const taskList = $('#task-list');
  const addTaskUI = function(id, task) {
    taskList.append(
      `<li id="${id}">${task} <button>x</button></li>`
    );
  }
  const removeTaskFromUI = function(id) {
    $(`#${id}`).remove();
  }
  const clearInput = function() {
    taskInput.val('');
  };
  const focusOnInput = function() {
    taskInput.focus();
  };
  const getRandomNumber = function() {
    return Math.floor(Math.random() * 1000 + 1);
  };

  taskInput.on('keyup', function(event) {
    const isTaskInputEmpty = taskInput.val().length === 0;
    button.attr('disabled', isTaskInputEmpty);
  });

  form.on('submit', function(event) {
    event.preventDefault();

    const genericId = getRandomNumber();
    const task = taskInput.val();
    
    addTaskUI(genericId, task);
    clearInput();
    focus();
  });

  taskList.on("click", "li button", function(event){
    const id = $(event.target).parent().attr('id');
    removeTaskFromUI(id);
  });

});