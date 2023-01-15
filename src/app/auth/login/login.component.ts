import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

loginForm!:FormGroup
  // loginForm=this.formBuilder.group({
  //   email:['',[Validators.required]],
  //   password:['',[Validators.required]]
  // });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
        email: ['', [Validators.required,Validators.email]],
        password: ['', Validators.required],
    });
}


onSubmit() {

  if (this.loginForm.valid) {

    const email = this.loginForm.controls['email'].value
    const password = this.loginForm.controls['password'].value;
    console.log(email,password);
   
  }

}
}
