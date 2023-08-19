export { makeHeader, makeProjectContent, makeFooter, makeNewProject };

export const content = document.createElement("div");

function makeHeader() {
  const header = document.createElement("div");
  const projectBtnCon = document.createElement('div');
  const projectBtn = document.createElement("button");
  const titleCon = document.createElement('titleCon');
  const todoTitle = document.createElement("div");

  header.classList.add("header");
  projectBtnCon.classList.add('projectBtnCon');
  projectBtn.classList.add("projectBtn");
  todoTitle.classList.add("todoTitle");
  content.id = "content";

  document.body.appendChild(content);
  content.appendChild(header);
  header.appendChild(projectBtnCon)
  projectBtnCon.appendChild(projectBtn);
  header.appendChild(todoTitle);

  projectBtn.textContent = "New Project";
  todoTitle.innerHTML = "<h1>Todo List</h1>";
}

const projectContentCon = document.createElement("div");

function makeProjectContent() {
  projectContentCon.classList.add("projectContentCon");

  content.appendChild(projectContentCon);
}

function makeFooter() {
  const footerCon = document.createElement("div");
  const footerContent = document.createElement("div");

  footerCon.classList.add("footerCon");
  footerContent.classList.add("footerContent");

  content.appendChild(footerCon);
  footerCon.appendChild(footerContent);

  footerContent.textContent = "https://github.com/ResoTap";
}

function makeNewProject() {
  const projectCon = document.createElement("div");
  const projectNameCon = document.createElement("div");
  const projectInputBox = document.createElement("input");
  const displayTaskCon = document.createElement("div");
  const buttonCon = document.createElement("div");
  const editBtn = document.createElement("button");
  const prioBtn = document.createElement("button");
  const completeBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  projectCon.classList.add("projectCon");
  projectNameCon.classList.add("projectNameCon");
  projectInputBox.classList.add("projectInputBox");
  displayTaskCon.classList.add("displayTaskBox");
  buttonCon.classList.add("buttonCon");
  editBtn.classList.add("editBtn");
  prioBtn.classList.add("prioBtn");
  completeBtn.classList.add("completeBtn");
  deleteBtn.classList.add("deleteBtn");

  projectContentCon.appendChild(projectCon);
  projectCon.appendChild(projectNameCon);
  projectNameCon.appendChild(projectInputBox);
  projectCon.appendChild(displayTaskCon);
  projectCon.appendChild(buttonCon);
  buttonCon.appendChild(editBtn);
  buttonCon.appendChild(prioBtn);
  buttonCon.appendChild(completeBtn);
  buttonCon.appendChild(deleteBtn);

  editBtn.textContent = "Edit";
  prioBtn.textContent = "Priority";
  completeBtn.textContent = "Complete";
  deleteBtn.textContent = "Delete";
}
