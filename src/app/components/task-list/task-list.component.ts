import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(id: number): void {
    if (!id) {
      console.error('ID inválido para exclusão', id);
      return;
    }
    this.taskService.deleteTask(id).subscribe(() => this.loadTasks());
  }

  toggleTaskStatus(task: Task): void {
    const updateTask = { ...task, completo: !task.completo };
    this.taskService.updateTask(updateTask).subscribe(() => {
      this.loadTasks();
    });
  }

  editTask(task: Task): void {
    task.editar = true;
  }

  saveTask(task: Task): void {
    if (!task.titulo?.trim()) {
      alert('O título não pode ser vazio');
      return;
    }

    const updateTask: Task = {
      id: task.id,
      titulo: task.titulo,
      completo: task.completo,
    };

    this.taskService.updateTask(updateTask).subscribe(() => {
      task.editar = false;
      this.loadTasks();
    });
  }

  cancelEdit(task: Task): void {
    task.editar = false;
    this.loadTasks();
  }
}
