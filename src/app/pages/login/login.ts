import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../providers/auth.service';

import { UserData } from '../../providers/user-data';
import { UserOptions } from '../../interfaces/user-options';


import { ToastController } from '@ionic/angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login: UserOptions = { username: '', password: '' };
  submitted = false;

  constructor(
    private authService: AuthService,
    public userData: UserData,
    public router: Router,
    public toastController: ToastController
  ) { }

  onLogin(form: NgForm) {
    this.submitted = true;
    if (form.invalid) {
      return;
    }

    if (form.valid) {
      this.userData.login(form.value.username);
      this.authService.login(form.value.username, form.value.password);
    }
  }


  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }



}

