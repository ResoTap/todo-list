import { makeProject, projectsArray } from "./modules/new-project";
import {
  makeHeader,
  makeProjectContent,
  makeFooter,
} from "./modules/projects-view";
import { makeNewProjectEvent, deleteProjectEvent, addProjectNameEvent } from "./modules/events";
import "./style.css";
import "normalize.css";

makeHeader();
makeProjectContent();
makeNewProjectEvent();
addProjectNameEvent();
deleteProjectEvent();
makeFooter();

console.log("hola");
