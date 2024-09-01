import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPageForm } from './login.page.form';
import { AppState } from '@capacitor/app';
import { Store } from '@ngrx/store';
import { hide, show } from 'src/store/loading/loading.actions';
import { recoverPassword, recoverPasswordFail, recoverPasswordSuccess } from 'src/store/login/login.actions';
import { LoginState } from 'src/store/login/LoginState';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<AppState>,
    private toastController: ToastController, private authService: AuthService) {
    this.form = new FormGroup({});
  }

  ngOnInit() {
  this.form = new LoginPageForm(this.formBuilder).createForm();

  this.store.select((state: AppState) => state.login).subscribe(async loginState => {
    this.onIsRecoveredPassword(loginState);
    this.onIsRecoveringPassword(loginState);
    this.onIsRecoverPasswordFail(loginState);
  })
}

private async onIsRecoverPasswordFail(loginState: LoginState) {
  if (loginState.error) {
    this.store.dispatch(hide());
    const toaster = await this.toastController.create({
      position: "bottom",
      message: loginState.error.message,
      color: "danger"
    });
    toaster.present();
}
}
private onIsRecoveringPassword(loginState: LoginState) {
  if (loginState.isRecoveringPassword) {
    this.store.dispatch(show());

    this.authService.recoverEmailPassword(this.form.get('email')?.value).subscribe(() =>{
      this.store.dispatch(recoverPasswordSuccess());
    }, error =>{
      this.store.dispatch(recoverPasswordFail({error}))
    });
  }
}
private async onIsRecoveredPassword(loginState: LoginState) {
  if (loginState.isRecoveredPassword) {
    this.store.dispatch(hide());
    const toaster = await this.toastController.create({
      position: "bottom",
      message: 'Recovery email sent',
      color: "primary"
    });
    toaster.present();
  }
}

forgotEmailPassword() {
  this.store.dispatch(recoverPassword());
}

  login(){
    this.router.navigate(['home']);
  }
  register(){
    this.router.navigate(['register']);
  }
}
