export { makeHeader, makeProjectContent, makeFooter, makeNewProject };

export const content = document.createElement("div");
export const projectBtn = document.createElement("button");

function makeHeader() {
  const header = document.createElement("div");
  const projectBtnCon = document.createElement('div');
  const titleCon = document.createElement('div');
  const todoTitle = document.createElement("div");
  const rightHeaderCon = document.createElement('div');

  header.classList.add("header");
  projectBtnCon.classList.add('projectBtnCon');
  projectBtn.classList.add("projectBtn");
  titleCon.classList.add('titleCon');
  todoTitle.classList.add("todoTitle");
  rightHeaderCon.classList.add('rightHeaderCon');
  content.id = "content";

  document.body.appendChild(content);
  content.appendChild(header);
  header.appendChild(projectBtnCon)
  projectBtnCon.appendChild(projectBtn);
  header.appendChild(titleCon);
  titleCon.appendChild(todoTitle);
  header.appendChild(rightHeaderCon);

  projectBtn.textContent = "New Project";
  todoTitle.innerHTML = "<h2>Todo List</h2>";
}

const projectContentCon = document.createElement("div");

function makeProjectContent() {
  projectContentCon.id = "projectContentCon";

  content.appendChild(projectContentCon);
}

function makeFooter() {
  const footerCon = document.createElement("div");
  const footerContent = document.createElement("a");

  footerCon.classList.add("footerCon");
  footerContent.classList.add("footerContent");

  content.appendChild(footerCon);
  footerCon.appendChild(footerContent);

  footerContent.href = 'https://github.com/ResoTap';
  footerContent.textContent = 'My GitHub Page';
  footerContent.target = '_blank';
}

function makeNewProject() {
  const projectCon = document.createElement("div");
  const projectNameCon = document.createElement("div");
  const projectInputField = document.createElement("input");
  const projectOutputField = document.createElement('div');
  const displayTaskCon = document.createElement("div");
  const buttonCon = document.createElement("div");
  const editBtn = document.createElement("button");
  const prioBtn = document.createElement("button");
  const completeBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  projectCon.classList.add("projectCon");
  projectNameCon.classList.add("projectNameCon");
  projectInputField.classList.add("projectInputField");
  projectOutputField.classList.add("projectOutputField");
  displayTaskCon.classList.add("displayTaskBox");
  buttonCon.classList.add("buttonCon");
  editBtn.classList.add("editBtn");
  prioBtn.classList.add("prioBtn");
  completeBtn.classList.add("completeBtn");
  deleteBtn.classList.add("deleteBtn");

  projectContentCon.appendChild(projectCon);
  projectCon.appendChild(projectNameCon);
  projectNameCon.appendChild(projectInputField);
  projectNameCon.appendChild(projectOutputField);
  projectCon.appendChild(displayTaskCon);
  projectCon.appendChild(buttonCon);
  buttonCon.appendChild(editBtn);
  buttonCon.appendChild(prioBtn);
  buttonCon.appendChild(completeBtn);
  buttonCon.appendChild(deleteBtn);

  projectInputField.type = 'text';
  projectInputField.placeholder = 'Project name...'

  editBtn.textContent = "Edit";
  prioBtn.textContent = "Priority";
  completeBtn.textContent = "Complete";
  deleteBtn.textContent = "Delete";

  return { projectCon };
}
