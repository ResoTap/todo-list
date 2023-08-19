import { makeProject, projectsArray } from "./modules/new-project";
import {
  makeHeader,
  makeProjectContent,
  makeFooter,
  makeNewProject,
} from "./modules/projects-view";
import { makeNewProjectEvent } from "./modules/events";
import "./style.css";
import "normalize.css";

makeHeader();
makeProjectContent();
makeNewProjectEvent();
makeFooter();

console.log("hola");
