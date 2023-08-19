import { makeNewProject, projectBtn } from "./projects-view";

export function makeNewProjectEvent() {
    projectBtn.addEventListener('click', () => {
        makeNewProject();
    })
};

function deleteProjectEvent() {
    deleteBtn.addEventListener('click', () => {
        const projectDOMElements = makeNewProject();
    })
}