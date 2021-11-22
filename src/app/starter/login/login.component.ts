import { Component , OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginServiceService } from '../../services/login-service.service'
import 'rxjs/add/operator/map';
import swal from 'sweetalert';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  providers:[LoginServiceService]
})
export class LoginComponent implements OnInit {
  username:any;
  password:any;
  users:any;
  User:any;
  userid:any;
  auth_code:any;
  deviceuniqid:any;
  myform:boolean=true;
  mybutton:boolean=false;
  authcode:any;
  getCode:any;
  auth:any;
  name:any;
  email:any;
  lastname:any;
  constructor(private router:Router,private loginService:LoginServiceService){}
  ngOnInit() {}
  ValidateUser(){
     debugger;
    this.loginService.ValidateUser(this.username,this.password).subscribe(res => {
      this.users=res
      
      for (let key of this.users) {
         this.userid=key.uid;
         this.auth_code = key.auth;
         this.deviceuniqid=key.deviceuniqid;
         this.name=key.name;
         this.email=key.email;
         this.lastname=key.lastname;

      }
          sessionStorage.setItem('auth',this.auth_code)
          sessionStorage.setItem('uid',this.userid)
          sessionStorage.setItem('name',this.name)

          sessionStorage.setItem('email',this.email)
          sessionStorage.setItem('lastname',this.lastname)
          if(this.auth_code === "yes"){
            //this.userservice.alertMsg("Auth is Yes")
              this.myform = false; 
              this.mybutton=true;
              
            }
            else{
                   
                    this.router.navigate(['/profile']);
                  
           
            }
         
         },
        error=>{
          
        }
      );
    
      // this.router.navigateByUrl['/dashboard']
  
  }
  sendcode(){
    var applicationname='JWTAuthenticator'; 
    this.loginService.sendcode(this.username,applicationname).subscribe(res => {
      this.users=res
      swal({
        title: "Sorry?",
        text: "Please check email for QRcode",
        icon: "success",
        
      });
     
    })
  } 
  
  confirm(){
    var q = 2;
    this.loginService.verifyCode(this.authcode,this.deviceuniqid,q).subscribe(
      res=>{
        this.getCode = res
       
          for (let key of this.getCode) {
            console.log("object:", key);
              
              this.auth = key.msg;
          }
         
          //sessionStorage.setItem('authcode',this.auth)
         
          if(this.auth =='failed'){
            swal({
              title: "Sorry?",
              text: "Please check entered code",
              icon: "warning",
              dangerMode: true,
            });
             
           }else {
           
            this.router.navigate(['/profile']);
         }

      }
     
    )
  }
  

}
