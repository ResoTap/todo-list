import { makeProject, projectsArray } from "./modules/new-project";
import {
  makeHeader,
  makeProjectContent,
  makeFooter,
  makeNewProject,
} from "./modules/projects-view";
import "./style.css";
import "normalize.css";

makeHeader();
makeProjectContent();
makeNewProject();
makeFooter();

console.log("hola");
