import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginServiceService } from '../../services/login-service.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  firstName:any;
  showauth:boolean=false
  auth:any;
  authnumber:any;
  profRes:any;
  successMessage:any;
  authnumbers:any;
  uid:any;
  checkterms:any;
  username:any;
  lastname:any;
  email:any;
  constructor(private router:Router,private loginService:LoginServiceService) { 
    this.auth=sessionStorage.getItem('auth');
    this.uid=sessionStorage.getItem('uid');
    this.username=sessionStorage.getItem('name');
    this.lastname=sessionStorage.getItem('lastname');
    this.email=sessionStorage.getItem('email');
  }

  ngOnInit(): void {

  }
  activateauth(){
      this.showauth=true;
  }
  update(){
    sessionStorage.setItem('name',this.username)
    sessionStorage.setItem('lastname',this.lastname)
    sessionStorage.setItem('email',this.email)
    this.loginService.updateprofile(this.uid,this.username,this.lastname,this.email).subscribe(
      success=>{
      this.profRes=success
      swal(this.profRes);
      sessionStorage.setItem('auth','no')
      this.auth=sessionStorage.getItem('auth');
          }
    );
  }
 getuniq(){
  
     var applicationname='JWTAuthenticator'; 

    this.loginService.getdeviceuniqid(this.email,applicationname).subscribe(
      success=>{
      this.profRes =success
      console.log(this.profRes);
      for (let key of this.profRes) {
        console.log("object:", key);
         this.successMessage=key.msg;
        this.authnumbers=key.appUniqeID;
          }
         
              this.updateauth();
              sessionStorage.setItem('auth','yes')
            
    

      });
   
  }
  updateauth(){
    debugger;
  
      var q=2;

    this.loginService.authdata(this.uid,this.authnumbers,q).subscribe(
      success=>{
      this.profRes =success
      swal(success);
     
      });
   
  }
  selectauth(){

   

  }
  noauth(){
    debugger;
      var q=1;
    
      this.loginService.noauthdata(this.uid,q).subscribe(
        success=>{
        this.profRes=success
        swal(this.profRes);
        sessionStorage.setItem('auth','no')
        this.auth=sessionStorage.getItem('auth');
            }
      );
  }
  logout(){
    this.router.navigate(['/']); 
  }
}
