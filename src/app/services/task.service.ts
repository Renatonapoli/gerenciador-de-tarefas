import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private storageKey = 'tasks';

  constructor() {}

  private getTasksFromStorage(): Task[] {
    const tasks = localStorage.getItem(this.storageKey);
    return tasks ? JSON.parse(tasks) : [];
  }

  private saveTasksStorage(tasks: Task[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }

  getTasks(): Observable<Task[]> {
    return of(this.getTasksFromStorage());
  }

  addTask(task: Task): Observable<Task> {
    const tasks = this.getTasksFromStorage();
    task.id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
    tasks.push(task);
    this.saveTasksStorage(tasks);
    return of(task);
  }

  updateTask(updateTask: Task): Observable<Task> {
    const tasks = this.getTasksFromStorage();
    const taskIndex = tasks.findIndex((task) => task.id === updateTask.id);
    if (taskIndex > -1) {
      tasks[taskIndex] = updateTask;
      this.saveTasksStorage(tasks);
    }
    return of(updateTask);
  }

  deleteTask(id: number): Observable<void> {
    const tasks = this.getTasksFromStorage();
    const updateTasks = tasks.filter((task) => task.id !== id);
    this.saveTasksStorage(updateTasks);
    return of();
  }
}
