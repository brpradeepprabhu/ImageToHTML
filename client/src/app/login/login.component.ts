import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name;
  password;
  constructor(private router: Router,private appService:AppService) {

  }

  ngOnInit() {

  }

  login() {
    const data = {
      name:this.name,
      password:this.password
    }
    this.appService.login(data).subscribe((res)=>{
      console.log(res)
    })
  }

  signUp() {
    this.router.navigate(['/register'])
  }

}
