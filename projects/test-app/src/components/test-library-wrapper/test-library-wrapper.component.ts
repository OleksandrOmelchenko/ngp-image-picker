import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImagePickerConf, NgpImagePickerComponent, NgpImagePickerModule } from 'ngp-image-picker';

@Component({
  selector: 'app-test-library-wrapper',
  templateUrl: './test-library-wrapper.component.html',
  styleUrls: ['./test-library-wrapper.component.scss'],
  imports: [NgpImagePickerModule, NgpImagePickerComponent, FormsModule, CommonModule],
})
export class TestLibraryWrapperComponent implements OnInit {
  config2: ImagePickerConf = {
    borderRadius: '8px',
    language: 'ua',
    width: '330px',
    objectFit: 'contain',
    aspectRatio: 4 / 3,
    compressInitial: null,
    format: 'webp',
  };
  initialImage: string = "https://localhost:7213/images/hare.jpg";
  // initialImage: string = "https://local-spaces.fra1.digitaloceanspaces.com/test.jpg";
  imageSrc: any = '';
  constructor() { }

  ngOnInit(): void {
  }

  onImageChanged(dataUri: string) {
    this.imageSrc = dataUri;
  }
}
