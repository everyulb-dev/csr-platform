import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(event: Event): void {
    event.preventDefault();
    this.email = this.email.trim();
    this.password = this.password.trim();
    if(this.email === "everyulb" && this.password === "everyulb"){
      this.router.navigate(['dashboard']);
    } else {
      alert('Wrong Credentials');
    }
  }

}
