import { makeNewProject } from "./projects-view";
export { makeProject, projectsArray, displayUserInput };

const projectsArray = [];

function makeProject(title) {
  const tasks = [];
  return {
    title,
    tasks,
    addTask(task) {
      tasks.push(task);
    },
  };
}

const { projectCon } = makeNewProject();

function displayUserInput(event) {
  const target = event.target;
  if (target.tagName === 'INPUT') {
    const projectOutputField = projectCon.querySelector('.projectOutputField');
    const inputValue = target.value;
    projectOutputField.textContent = inputValue;
  }
}

console.log(makeProject("poop"));
console.log(makeProject("pee"));
