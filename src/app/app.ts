import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzColorPickerModule } from 'ng-zorro-antd/color-picker';
import { NzDividerComponent } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-root',
  imports: [
    NzColorPickerModule,
    NzRowDirective,
    NzColDirective,
    NzDividerComponent,
    ReactiveFormsModule,
    NzButtonModule,
    NzFormModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('nz-zorro-theme-demo');
  private formBuilder = inject(FormBuilder);

  colorForm = this.formBuilder.group({
    colorPicker: ['#1677ff']
  });

  submitForm(): void {
    console.log(this.colorForm.value)
  }
}
