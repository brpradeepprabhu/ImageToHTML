import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
name;
password;
cpassword;
email;
  constructor(private apiService:AppService,private router: Router) { }

  ngOnInit() {
  }
  
  register(){
    const data= {
      name:this.name,
      password:this.password,
      email:this.email    
    }
    this.apiService.register(data).subscribe((data=>{
      console.log(data)
      this.router.navigate(['/login'])
    }))
  }
}
