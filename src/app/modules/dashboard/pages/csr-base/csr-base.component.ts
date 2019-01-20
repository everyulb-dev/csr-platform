import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-csr-base',
  templateUrl: './csr-base.component.html',
  styleUrls: ['./csr-base.component.css']
})
export class CsrBaseComponent implements OnInit {

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  ngAfterViewInit() {
    document.querySelector('body').setAttribute("style", "background-color: #fff;");
  }

  openOptionsMenu() {
    this.trigger.openMenu();
  }

  logout(): void {
    this.router.navigate(['login']);
  }

}
