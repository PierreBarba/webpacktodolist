/*
  * @jest-environment jsdom
 */

import ToDoList from './ToDoList.js';
import Task from './Task.js';

describe('Testing edit and clear function', () => {
    test('Testing edit task description', ()=> {
        const toDoList = new ToDoList();
        const task = new Task('todo 1', 0);
        toDoList.addTask(task);
        task.setDescription ='tarea 1';
        expect(task.description).toBe('tarea 1');
    })
    
    test('testing complete task', () => {
        const toDoList = new ToDoList();
        let task = new Task('task 1', 0);
        toDoList.addTask(task);
        task.toggleCompleted();
        expect(toDoList.taskList[0].completed).toBeTruthy();
    })
});