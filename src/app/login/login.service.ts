import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../credentials.firebase";

@Injectable()
export class LoginService{

  token: string;

  constructor(private router: Router){}

  login(email:string, password: string){
    signInWithEmailAndPassword(auth, email, password)
      .then(response => {
        auth.currentUser?.getIdToken().then(
          token => {
            console.log(token);
            this.token = token;
            this.router.navigate(['/']);
          }
        )
      })
  }

  getIdToken(){
    return this.token;
  }

  isAutenticado(){
    return this.token != null;
  }

  logOut(){
    signOut(auth).then( () => {
      this.token == null;
      this.router.navigate(['login']);
      }
    ).catch(error => console.log("error logOut: "+error))
  }

}
