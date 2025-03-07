import { NgpImagePickerComponent } from './ngp-image-picker.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabsComponent } from './components/tabs/tabs.component';
import { EditImageComponent } from './components/edit-image/edit-image.component';
import { BasicFiltersComponent } from './components/basic-filters/basic-filters.component';
import { CropperWrapperComponent } from './components/cropper-wrapper/cropper-wrapper.component';
@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [],
  providers: [],
})
export class NgpImagePickerModule {}
