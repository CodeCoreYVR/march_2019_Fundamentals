$(document).ready(function() {

  const form = $('#task-form');
  const taskInput = $('#task-input');
  const button = $('#task-button');
  const taskList = $('#task-list');
  const noTaskRow = $('#no-task');
  const addTaskUI = function(id, task) {
    taskList.append(
      `<li class="list-group-item" id="${id}">

      <div class="row">
        <div class="col-10">
          ${task}
        </div>
        <div class="col-2 text-right">
          <a href="#" class="text-right">Delete</a>
        </div>
      </div>

    </li>`
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
  const removeNoRecordsRowIfApplicable = function() {
    if( noTaskRow.length > 0 ) {
      noTaskRow.remove();
    }
  };
  const addNoRecordsRowIfApplicable = function() {
    if( taskList.find('li').length === 0 ) {
      taskList.append(
        '<li class="list-group-item text-center" id="no-task">No Records Found</li>'
      );
    }
  }

  taskInput.on('keyup', function(event) {
    const isTaskInputEmpty = taskInput.val().length === 0;
    button.attr('disabled', isTaskInputEmpty);
  });

  form.on('submit', function(event) {
    event.preventDefault();

    const genericId = getRandomNumber();
    const task = taskInput.val();

    removeNoRecordsRowIfApplicable();
    addTaskUI(genericId, task);
    clearInput();
    focusOnInput();
  });

  taskList.on("click", "li a", function(event){
    const id = $(event.target).closest('li').attr('id');
    removeTaskFromUI(id);
    addNoRecordsRowIfApplicable();
  });

});