export default class Task {
    constructor(description = '', index = 0) {
    this.description = description;
    this.description = description;
    this.completed = false;
    this.index = index;
}

set description(newDescription) {
    this.description = newDescription;
    }
    set completed(newCompleted) {
    this.completed = newCompleted;
    }
    set index(newIndex) {
    this.index = newIndex;
    }
    get description() {
    return this.description;
    }
    get completed() {
    return this.completed;
    }
    get index() {
    return this.index;
    }
    toggleCompleted() {
    this.completed = !this.completed;
    }
}