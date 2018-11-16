import { Component, OnInit } from '@angular/core';

declare var $:any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function() {
      $('.component').css({
        marginTop: $('.navbar').innerHeight() + 20
      });

      $(window).on('scroll', function() {
        if ($(window).scrollTop() > 440 && !$('.about .arrow').hasClass('normal')) {
          $('.about .arrow').fadeIn(20, function() {
            $('.about .arrow').addClass('normal');
          });
        }
        
        if ($(window).scrollTop() > 1000 && !$('.services').hasClass('scrolled')) {
          $('.services').addClass('scrolled').find('.caption, .option').delay(3500).fadeIn();
        }

        if ($(window).scrollTop() >= 1968) {
          clearInterval(tim);
          run();
        }

        var amount = parseInt($('#amount').html());
        var amount2 = parseInt($('#amount2').html());
        var amount3 = parseInt($('#amount3').html());
        var i = 0;
        var tim, tim2, tim3;
  
        function run() {
          tim =  setInterval(() => {
                      if(i>=amount){clearInterval(tim); return;}
                      $('#amount').html(++i);
                  }, 30);

          tim2 =  setInterval(() => {
                      if(i>=amount2){clearInterval(tim2); return;}
                      $('#amount2').html(++i);
                  }, 30);
          tim3 =  setInterval(() => {
                      if(i>=amount3){clearInterval(tim3); return;}
                      $('#amount3').html(++i);
                  }, 30);
        }
      });


    });

  }

}
