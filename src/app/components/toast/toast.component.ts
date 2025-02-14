import { Component } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent {
  toastMessage: string = '';
  toastType: string = '';
  showToastMessage: boolean = false;

  constructor(private toastService: ToastService) {
    this.toastService.toastEmiter.subscribe((data) => {
      this.toastMessage = data.message;
      this.toastType = data.type;
      this.showToastMessage = true;

      setTimeout(() => {
        this.hideToast();
      }, 4000);
    });
  }

  hideToast(): void {
    this.showToastMessage = false;
  }
}
