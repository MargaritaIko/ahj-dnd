export default class lockalStorage {
  save(data) {
    localStorage.setItem("tasks", JSON.stringify(data));
  }

  load() {
    return localStorage.getItem("tasks");
  }
}
