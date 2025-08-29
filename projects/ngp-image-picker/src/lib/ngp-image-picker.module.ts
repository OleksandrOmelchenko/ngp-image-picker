import { NgpImagePickerComponent } from './ngp-image-picker.component';
import { NgModule } from '@angular/core';
import { CommonModule, NgIf, NgStyle } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgpImagePickerComponent, CommonModule, NgIf, NgStyle],
  exports: [NgpImagePickerComponent],
  providers: [],
})
export class NgpImagePickerModule { }
