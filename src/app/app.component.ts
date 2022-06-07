import { Component, OnInit } from '@angular/core';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  titulo = 'Listado de personas';

  constructor(private loginService: LoginService){}

  ngOnInit(): void {}

  isAutenticado(){
    return this.loginService.isAutenticado();
  }

  salir(){
    this.loginService.logOut();
  }
}
