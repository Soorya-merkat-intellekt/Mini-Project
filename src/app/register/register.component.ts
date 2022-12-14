import { Component, OnInit } from '@angular/core';
import { RegisterModel } from "../Models/register.model";
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule} from "@angular/forms";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:RegisterModel = new RegisterModel();
  registerForm!: FormGroup;
  hide=true;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      'name':[this.user.name,[
        Validators.required
      ]],
      'email':[this.user.email,[
        Validators.required,
        Validators.email
      ]],
      'Contact No':[this.user.contact,[
        Validators.required
      ]],
      'password':[this.user.password,[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]]
    })
  }
  onRegisterSubmit(){
    alert(this.user.name+' '+this.user.email+' '+this.user.contact+' '+this.user.password+' ')
  }

}
