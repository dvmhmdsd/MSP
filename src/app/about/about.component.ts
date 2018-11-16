import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function () {
      $(window).on('scroll', function() {
        if ($(window).scrollTop() > 340 && !$('#msp-azhar .arrow').hasClass('normal')) {
          $('#msp-azhar .arrow').fadeIn(20, function() {
            $('#msp-azhar .arrow').addClass('normal');
          });
        }
      });
    });
  }

}
