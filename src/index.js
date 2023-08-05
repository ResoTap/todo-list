import { makeProject, projectsArray } from "./modules/new-project";
import {
  makeHeader,
  makeProjectContent,
  makeFooter,
} from "./modules/projects-view";

makeHeader();
makeProjectContent();
makeFooter();

console.log("hola");
