$(document).ready(function() {

  const form = $('#task-form');
  const taskInput = $('#task-input');
  const button = $('#task-button');
  const taskList = $('#task-list');
  var config = {
    apiKey: "AIzaSyACaqv99M7D64xjQyUFqNQiy3O4xuqX3s4",
    authDomain: "todo-app-bc73c.firebaseapp.com",
    databaseURL: "https://todo-app-bc73c.firebaseio.com",
    projectId: "todo-app-bc73c",
    storageBucket: "todo-app-bc73c.appspot.com",
    messagingSenderId: "712859701480"
  };
  firebase.initializeApp(config);

  const addTaskUI = function(id, task) {
    const newRow = `<li class="list-group-item" id="${id}">

    <div class="row">
      <div class="col-10">
        ${task}
      </div>
      <div class="col-2 text-right">
        <a href="#" class="text-right">Delete</a>
      </div>
    </div>

  </li>`;
    taskList.append(newRow);
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
    if( $('#no-task').length > 0 ) {
      $('#no-task').remove();
    }
  };
  const addNoRecordsRowIfApplicable = function() {
    if( taskList.find('li').length === 0 ) {
      taskList.append(
        '<li class="list-group-item text-center" id="no-task">No Records Found</li>'
      );
    }
  }
  const removeItemFromFirebase = function (id) {
    taskReference.child(id).remove();
  }
  const addItemToFirebase = function (taskValue) {
    const data = { task: taskValue };
    taskReference.push(data);
  }

  const taskReference = firebase.database().ref('tasks');
  taskReference.on('child_added', function (dbItem) {
    const id = dbItem.key;
    const task = dbItem.val().task;
    removeNoRecordsRowIfApplicable();
    addTaskUI( id, task );
  });

  taskInput.on('keyup', function(event) {
    const isTaskInputEmpty = taskInput.val().length === 0;
    button.attr('disabled', isTaskInputEmpty);
  });

  form.on('submit', function(event) {
    event.preventDefault();

    const task = taskInput.val();

    addItemToFirebase(task);
    removeNoRecordsRowIfApplicable();

    clearInput();
    focusOnInput();
  });

  taskList.on("click", "li a", function(event) {
    const id = $(event.target).closest('li').attr('id');

    removeItemFromFirebase(id);
    removeTaskFromUI(id);
    addNoRecordsRowIfApplicable();
  });

});