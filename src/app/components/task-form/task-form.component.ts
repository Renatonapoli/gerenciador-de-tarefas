import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent {
  @Output() taskAdded = new EventEmitter<void>();
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.taskForm = this.fb.group({
      titulo: ['', [Validators.required]],
    });
  }

  addTask(): void {
    if (this.taskForm.valid) {
      const newTask: Omit<Task, 'id'> = {
        titulo: this.taskForm.value.titulo,
        completo: false,
      };
      this.taskService.addTask(newTask as Task).subscribe(() => {
        this.taskAdded.emit();
        this.taskForm.reset();
      });
    }
  }
}
