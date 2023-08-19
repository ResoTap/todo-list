# todo-list

Here we go!

Task 1:
Add event listener to 'modules/events.js' to handle the input of a projects name and output that input into the 'projectNameCon' div. This should event should also call the 'makeProjectContent' factory function so that an object is created for that project. The object will contain the title of the project to start.

Task 2:
Add event listener to collapsed/default view of the 'projectCon' so that when clicked it expands to show all the tasks contained within it, as well as a button to create new tasks. Each individual task will have the option to mark as complete or delete when the 'editBtn' is toggled.

Task 3:
When 'editBtn' is toggled/clicked 'projectInputBox', 'prioBtn', and all task input boxes, will be available to edit. If 'editBtn is clicked when in collapsed/default view then the project will expand.

Task 4:
When 'editBtn' is toggled/clicked and you click 'prioBtn' you will be presented with a drop down menu with a list of options to set the priority on the project/each individual task.

Task 5:
Each 'displayTaskCon' should be generated with an input box of its own, the same way as 'projectNameCon'. The tasks added should then be added to the projects object.

Task 6:
An array needs to be created to hold the project objects.

Task 7:
When completed, projects will just toggle to completed or not, and then depending on which is toggled they will move to a different place in the DOM but still reside within the same array. Tasks could be their own object within the project object that handles whether they have been marked as complete and their priority.
