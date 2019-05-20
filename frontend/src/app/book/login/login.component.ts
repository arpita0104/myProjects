import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent{
constructor(private router: Router) {}

        login(userId,psw){
        if(userId==='101' && psw ==='u1'){
            this.router.navigateByUrl('/guest');
        }else if(userId==='102' && psw ==='a1'){
            this.router.navigateByUrl('/admin');
        }
        

      }
}