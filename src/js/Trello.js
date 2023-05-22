export default class Trello {
  constructor() {
    this.toDoTasks = document.querySelector("#todo .item-tasks");
    this.inProgressTasks = document.querySelector("#in-progress .item-tasks");
    this.doneTasks = document.querySelector("#done .item-tasks");
  }

  addTask(parentEl, value) {
    const itemTask = document.createElement("div");
    itemTask.className = "item-task";
    itemTask.innerHTML = `
      ${value}
      <div class="del-task hidden">&#x2716;</div>
    `;
    parentEl.appendChild(itemTask);
  }

  addArrTask(parentEl, arr) {
    for (let i = 0; i < arr.length; i += 1) {
      this.addTask(parentEl, arr[i]);
    }
  }

  initTasks(initData) {
    this.addArrTask(this.toDoTasks, initData.todo);
    this.addArrTask(this.inProgressTasks, initData.inProgress);
    this.addArrTask(this.doneTasks, initData.done);
  }
}
