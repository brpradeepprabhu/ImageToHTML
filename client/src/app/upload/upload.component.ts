import { Component, OnInit, ViewChild } from '@angular/core';
import {FileUploadModule} from 'primeng/fileupload';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  uploadedFiles: any[] = [];
  @ViewChild('fileupload') fileInput;
  constructor(private http:HttpClient) { }
  file;
  ngOnInit() {
  }
  fileChange(files: any){
    // console.log(files);
    // const files: FileList = this.fileInput.nativeElement.files;

    // this.file = files[0].nativeElement;
}
onSubmit(): void {
  const files: FileList = this.fileInput.nativeElement.files;
  if (files.length === 0) {
    return;
  };
  console.log(files)
  let _formData = new FormData();
  console.log(this.file)
  _formData.append('file', files[0], files[0].name);
  let body = _formData;
  let headers = new Headers();
  this.http.post(environment.api+"upload", body)
    .subscribe((data) => console.log(data));
}
}
