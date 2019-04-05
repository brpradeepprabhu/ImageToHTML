import { Component, OnInit } from '@angular/core';
import {FileUploadModule} from 'primeng/fileupload';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  uploadedFiles: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  onUpload(event) {
    // tslint:disable-next-line:prefer-const
    for (let file of event.files) {
        this.uploadedFiles.push(file);
    }

}
}
