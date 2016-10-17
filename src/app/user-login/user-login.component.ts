import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { LoginDetails } from '../models/login-details'

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  providers: [DataService]
})
export class UserLoginComponent implements OnInit {

  details:LoginDetails = {
      username:"",
      password:"",
      rememberMe:true
  };
  valid = true;
  showLogin = true;
  showCode = false;
  loading = false;

  constructor(
    private router:Router,
    private dataService:DataService) {
  }

  ngOnInit() {
  }

  onSubmitLogin():void{
    //console.log("onSubmit - " + this.details.username + " - "+ this.details.password)
    this.dataService.validateLogin(this.details).then(result => {
        if (result)
        {
          this.showLogin = false;
          this.loading = true;
          this.valid = true;
          setTimeout(()=>{
            this.loading = false;
            this.showCode  = true;
          }, 3000);

        }
        else
          this.valid = false;
          }
        );
  }

  onSubmit(): void {
      //console.log("onSubmit - " + this.details.username + " - "+ this.details.password)

      this.loading = true;
      this.showCode = false;
      setTimeout(()=>{
      this.router.navigate(['accept']);
    },2000);
  }
}
