import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastSubject = new Subject<{ message: string; type: string }>();
  toastEmiter = this.toastSubject.asObservable();

  showToast(message: string, type: string): void {
    this.toastSubject.next({ message, type });
  }
}
