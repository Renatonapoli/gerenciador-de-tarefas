import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(
    private taskService: TaskService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(id: number): void {
    if (!id) {
      this.toastService.showToast('ID da tarefa não encontrado!', 'error');
      return;
    }
    this.taskService.deleteTask(id).subscribe(() => {
      this.loadTasks();
      this.toastService.showToast('Tarefa excluída com sucesso!', 'success');
    });
  }

  toggleTaskStatus(task: Task): void {
    const updateTask = { ...task, completo: !task.completo };
    this.taskService.updateTask(updateTask).subscribe(() => {
      this.loadTasks();
      this.toastService.showToast('Status da tarefa atualizado!', 'success');
    });
  }

  editTask(task: Task): void {
    task.editar = true;
  }

  saveTask(task: Task): void {
    if (!task.titulo?.trim()) {
      this.toastService.showToast('O título não pode ser vazio!', 'error');
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
      this.toastService.showToast('Tarefa atualizada com sucesso!', 'success');
    });
  }

  cancelEdit(task: Task): void {
    task.editar = false;
    this.loadTasks();
  }
}
