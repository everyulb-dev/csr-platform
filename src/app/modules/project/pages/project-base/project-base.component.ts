import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-base',
  templateUrl: './project-base.component.html',
  styleUrls: ['./project-base.component.css']
})
export class ProjectBaseComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDashboard(): void {
    this.router.navigate(['dashboard']);
  }

  logout(): void {
    this.router.navigate(['login']);
  }
}
