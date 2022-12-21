/*
  * @jest-environment jsdom
 */

import ToDoList from './src/modules/ToDoList.js';
import Task from './src/modules/Task.js';

test('testing adding task', () => {
  const toDoList = new ToDoList();
  const task = new Task('task 1', 0);
  toDoList.addTask(task);
  expect(toDoList.taskList.length).toBe(1);
});
