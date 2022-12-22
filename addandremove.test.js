/*
  * @jest-environment jsdom
 */

import ToDoList from './src/modules/ToDoList.js';
import Task from './src/modules/Task.js';

describe('Test add and remove', () => {
  test('testing adding task', () => {
    const toDoList = new ToDoList();
    const task = new Task('task 1', 0);
    toDoList.addTask(task);
    expect(toDoList.taskList.length).toBe(1);
  });
  
  test('testing remove task', () => {
    let toDoList = new ToDoList();
    let task = new Task('task 1', 0);
    toDoList.addTask(task);
    task = new Task('task 2', 1);
    toDoList.addTask(task); 
    task = new Task('task 3', 2);    
    toDoList.addTask(task);
    toDoList.removeTask(1);
    expect(toDoList.taskList.length).toBe(2);
  });
});
