import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email = '';
  password = new FormControl('');
  user: any;
  Subscribe: any;
  constructor(private router: Router, private userService: LoginService, private toastController: ToastController) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'))
    console.log(this.user);
    if(this.user){
      this.router.navigate(['/home']);
    }
  }

  login(){
   this.userService.login(this.email, this.password.value)
  this.Subscribe ((result:any) => {
     console.log(result);

     if(result.success){
       localStorage.setItem('currentUser', JSON.stringify(result.data));
       this.router.navigate(['/home']);
     }else{
       this.presentToast(result.message);
     }
   });
  }


    async presentToast(message){
      const toast = await this.toastController.create({
        message: message,
        duration: 500
      });
      toast.present();
    }
  }


