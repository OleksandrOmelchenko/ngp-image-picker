import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';
import { TestLibraryWrapperComponent } from '../components/test-library-wrapper/test-library-wrapper.component';
import { NgpImagePickerComponent } from "ngp-image-picker";
@NgModule({
  declarations: [AppComponent, ToolbarComponent],
  imports: [BrowserModule, BrowserAnimationsModule, TestLibraryWrapperComponent, NgpImagePickerComponent, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
