import { makeNewProject, projectBtn } from "./projects-view";

export function newProjectEvent() {
    projectBtn.addEventListener('click', () => {
        makeNewProject();
    })
};