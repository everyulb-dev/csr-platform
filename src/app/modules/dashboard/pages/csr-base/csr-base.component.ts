import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-csr-base',
  templateUrl: './csr-base.component.html',
  styleUrls: ['./csr-base.component.css']
})
export class CsrBaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  ngAfterViewInit() {
    document.querySelector('body').setAttribute("style", "background-color: #fff;");
  }

}
