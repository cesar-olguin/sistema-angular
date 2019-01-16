import { Component, OnInit } from '@angular/core';
//import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
//private loginService: LoginService
  ngOnInit() {
  }

  // logeo() {
  //   this.loginService.login('cesar@correo.com', 'e10adc3949ba59abbe56e057f20f883e').subscribe(
  //     res => {
  //       console.log(res);
  //     });
  // }

}
