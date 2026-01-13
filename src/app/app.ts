import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzColorPickerModule } from 'ng-zorro-antd/color-picker';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { NzDividerComponent } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule, NzSelectOptionInterface } from 'ng-zorro-antd/select';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@Component({
  selector: 'app-root',
  imports: [
    NzColorPickerModule,
    NzRowDirective,
    NzColDirective,
    NzDividerComponent,
    ReactiveFormsModule,
    NzButtonModule,
    NzFormModule,
    NzSelectModule,
    FormsModule,
    NzAlertModule,
    NzDropDownModule,
    NzIconModule,
    NzInputModule,
    NzSpaceModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('nz-zorro-theme-demo');
  private formBuilder = inject(FormBuilder);
  private nzConfigService = inject(NzConfigService);
  options: NzSelectOptionInterface[] = [
    {
      value: 'zhejiang',
      label: 'Zhejiang'
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu'
    }
  ];

  colorForm = this.formBuilder.group({
    colorPicker: ['#3a6ef2']
  });

  submitForm(): void {
    this.nzConfigService.set('theme', {
      primaryColor: this.colorForm.value.colorPicker as string
    });
  }
}
