import { makeNewProject, projectBtn } from "./projects-view";

export function makeNewProjectEvent() {
    projectBtn.addEventListener('click', () => {
        makeNewProject();
    })
};

export function deleteProjectEvent() {
    const projectDOMElements = makeNewProject();
    const deleteButtons = projectDOMElements.querySelectorAll('.deleteBtn');
    
    deleteButtons.forEach(deleteBtn => {
        deleteBtn.addEventListener('click', () => {
            const projectCon = deleteBtn.closest('#projectCon');
            if (projectCon) {
                projectCon.remove();
            }
        })
    })
}