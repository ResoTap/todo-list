import { makeNewProject, projectBtn } from "./projects-view";

export function makeNewProjectEvent() {
    projectBtn.addEventListener('click', () => {
        makeNewProject();
    })
};

export function deleteProjectEvent() {
    const projects = document.querySelectorAll('.projectCon');
  
    projects.forEach(project => {
      const deleteBtn = project.querySelector('.deleteBtn');
  
      if (deleteBtn) {
        deleteBtn.addEventListener('click', () => {
          project.remove();
        });
      }
    });
  }