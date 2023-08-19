import { makeNewProject, projectBtn, projectContentCon } from "./projects-view";

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