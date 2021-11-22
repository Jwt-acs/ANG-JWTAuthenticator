import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../services/login-service.service'
import swal from 'sweetalert';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username:any;
  useremail:any;
  password:any;
  response:any;
  userlastname:any;
  constructor(private loginService:LoginServiceService) { }

  ngOnInit(): void {
  }
  registerUser(){
    
    this.loginService.registeruser(this.username,this.userlastname,this.useremail,this.password).subscribe(res => {
      this.response=res

      swal(this.response);
      this.username=""
      this.username=null
      this.userlastname=""
      this.userlastname=null
      this.useremail=""
      this.useremail=null
      this.password=""
      this.password=null
    })
  }
}
