import { makeNewProject, projectBtn } from "./projects-view";
import { displayUserInput } from "./new-project"

export function makeNewProjectEvent() {
    projectBtn.addEventListener('click', () => {
        makeNewProject();
    })
};

export function deleteProjectEvent() {
    const projectContentCon = document.getElementById("projectContentCon");
  
    projectContentCon.addEventListener('click', event => {
      if (event.target.classList.contains('deleteBtn')) {
        const projectCon = event.target.closest('.projectCon');
        if (projectCon) {
          projectCon.remove();
        }
      }
    });
}

const { projectCon } = makeNewProject();

export function addProjectNameEvent() {
  const projectContentCon = document.getElementById("projectContentCon");
  
  projectContentCon.addEventListener('input', event => {
    if (event.target.classList.contains('projectInputField')) {
      const projectCon = event.target.closest('projectCon');
      if (projectCon) {
        displayUserInput(event);
      }
    }
  })
}