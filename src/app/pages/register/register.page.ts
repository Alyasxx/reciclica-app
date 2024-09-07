import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterPageForm } from './form/register.page.form';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm!: RegisterPageForm;
  FormBuilder!: FormBuilder;

  constructor(private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  register() {
    this.router.navigate(['home']);
  }

  private createForm() {
    this.registerForm = new RegisterPageForm(this.FormBuilder);
  }
}
