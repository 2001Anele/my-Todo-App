import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth'
 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
email:any;
pass:any;
  constructor(private router:Router, private auth:AngularFireAuth) { }

  ngOnInit() {
  }
log(){

  this.email=((document.getElementById("email") as HTMLInputElement).value);
  this.pass=((document.getElementById("password") as HTMLInputElement).value);

    this.auth.
    signInWithEmailAndPassword(this.email, this.pass)
      .then(userCredential => {
       
        if(userCredential.user){
          window.alert("Signed Up");
          this.router.navigateByUrl('/login');

        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert(errorMessage);
      });

  }

  move(){


  }

}







