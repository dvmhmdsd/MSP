import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-notfound404',
  templateUrl: './notfound404.component.html',
  styleUrls: ['./notfound404.component.css']
})
export class Notfound404Component implements OnInit {

  constructor(private routing: Router) { }

  ngOnInit() {
  }

  goHome() {
    this.routing.navigate(['/home']);
  }

}
