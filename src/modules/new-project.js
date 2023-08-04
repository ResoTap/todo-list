export { makeProject, projectsArray };

const projectsArray = [];

function makeProject(title) {
  const tasks = [];
  return {
    title,
    priority,
    tasks,
    addTask(task) {
      tasks.push(task);
    },
  };
}
console.log(makeProject("poop"));
console.log(makeProject("pee"));
