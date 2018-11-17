import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function () {
      $('.card-slider button').click( function(e) {
        e.stopPropagation();
        $(this).parents('.card').addClass('rotate').siblings().removeClass('rotate');
      });

      $('.cards').click( function() {
        $('.card').removeClass('rotate');
      });
    });
  }

}
