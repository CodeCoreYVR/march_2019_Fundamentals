# Todo App

Have a look at the `ui-sample.png` to see what the page is meant to look.

# HTML Requirements

* Create a directory called `todo-list-app`
  so you can place all your files in it

* In an html page, make sure that set the
  page title is set to `TODO List` like it
  is in the `page-title.png` image.

* Implement a form that has a label, input
  and a button. The button **Must** submit
  the form.

* Implement a unorder list where all our
  tasks will be placed.
  
* Name the form `todo-form`

* Name the input `task-input`.

* Name the button `task-button`.

* Name the list `task-list`.

* When the user clicks on the label,
  the browser should focus on the input.

# Javascript Requirements

* Make sure that your javascript loads
  after the document is ready.

* The button should always be disabled
  for as long as the input is empty.

* Write a function (eg. `addTaskToUI`) that
  adds a task to the `task-list` unordered list.
  
  Tip: the function usage would look
  something like this:

  ```
  addTaskToUI(823, 'Task 1');
  ```

  This function could use the `.append`
  jquery function and will turn the unordered
  list to look something like:

  ```
  <ul id="task-list">
    <li id="234">
      Task 1
      <button>x</button>
    </li>
  </ul>
  ```

  see `task-added.png` as an example

* Write a function (eg. `removeTaskFromUI`) that
  removes a task from the unordered list `task-list`
  based on its id. The function is called something
  like so:

  ```
  removeTaskFromUI(876);
  ```

* When submitting the form, grab the value in the
  from `task-input` and use the `addTaskToUI` function
  to update the UI. When it comes to the li id of the
  element, generate a random number from 1 to 1000 so
  you can add a task like so:

  ```
  addTaskToUI(567, 'Task 1');
  ```

  Of course the 'Task 1' comes from the input.

* Make sure that you prevent the default
  submit behaviour so that the page doesn't
  refresh. Also, try submitting the form,
  while preventing the default and without it
  so you can see the different behaviour
  (which is that the page refreshes).

* Implement the ability print a message to the console
  for all buttons in the unordered list `task-list`,
  both already existing and dynamically added.

  Tip: There's a caveat, the `on` method as you know it
       ONLY applies event listeners to html elements
       that ALREADY EXIST in the page. This means that
       the newly generated task items will not be able to
       register to the `click` event as you know it.
       For that, read the following article that will
       help you understand how to deal with this situation:

       http://queirozf.com/entries/using-jquery-s-on-function-to-attach-handlers-to-elements-now-or-in-the-future

* Refactor the `click` event listener that applies
  to present and future buttons within the unordered
  list `task-list` so that you can grab the id
  of the applicable list item (`li`) id.

  Tip: Since the event is applied to the button, you will
  need access the `id` (using `.attr('id')`) from the
  `.parent()` element.

* Once the `todo-form` form has been submitted, clear
  the `task-input` input.

* After clearing the `task-input` input, use jquery to `.focus()`
  on the `task-input` input.
