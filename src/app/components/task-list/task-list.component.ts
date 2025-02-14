import { TaskService } from './../../services/task.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  filterTask: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 10;

  constructor(
    private taskService: TaskService,
    private toastService: ToastService,
    private cdr: ChangeDetectorRef
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

    this.toastService.showToast('Tarefa excluída com sucesso!', 'success');
    this.tasks = this.tasks.filter((task) => task.id !== id);

    this.taskService.deleteTask(id).subscribe(() => {
      this.cdr.detectChanges();
    });
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

  filteredTasks(): Task[] {
    return this.tasks.filter((task) =>
      task.titulo.toLowerCase().includes(this.filterTask.toLowerCase())
    );
  }

  paginatedTasks(): Task[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredTasks().slice(
      startIndex,
      startIndex + this.itemsPerPage
    );
  }

  totalPages(): number {
    return Math.ceil(this.filteredTasks().length / this.itemsPerPage);
  }

  totalPagesArray(): number[] {
    return Array(this.totalPages())
      .fill(0)
      .map((_, i) => i + 1);
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage() {
    if (this.currentPage < this.totalPages()) this.currentPage++;
  }
}
