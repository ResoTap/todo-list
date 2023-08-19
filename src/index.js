import { makeProject, projectsArray } from "./modules/new-project";
import {
  makeHeader,
  makeProjectContent,
  makeFooter,
  makeNewProject,
} from "./modules/projects-view";
import { newProjectEvent } from "./modules/events";
import "./style.css";
import "normalize.css";

makeHeader();
makeProjectContent();
newProjectEvent();
makeFooter();

console.log("hola");
