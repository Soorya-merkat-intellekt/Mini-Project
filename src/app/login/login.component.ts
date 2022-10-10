// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup ,Validators} from '@angular/forms';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   hideForm:FormGroup | any
//   section=false;

//   constructor() { }
//   ngOnInit(): void {
//     this.hideForm = new FormGroup({
//       'name': new FormControl(null,Validators.required),
//       'mail id': new FormControl(null,Validators.required),
//       'phone no': new FormControl(null,Validators.required),
//       'Password': new FormControl(null,Validators.required),
//       'Comfirm password': new FormControl(null,Validators.required),
//       'mail': new FormControl(null,Validators.required),
//       'pass': new FormControl(null,Validators.required)
//     })
//   }
//   hideUser(){
//     console.log(this.hideForm)
//   }
// }
import { Component, OnInit } from '@angular/core';
import { LoginModel } from "../Models/login.model";
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule} from "@angular/forms";
@Component({
  selector: 'app-register',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:LoginModel = new LoginModel();
  loginForm!: FormGroup;
  hide=true;
  constructor(private formBuilder:FormBuilder) { }
  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      'email':[this.user.email,[
        Validators.required,
        Validators.email
      ]],
      'password':[this.user.password,[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]]
    })
  }
  onLoginSubmit(){
    alert(this.user.email+' '+this.user.password+' ')
  }

}
