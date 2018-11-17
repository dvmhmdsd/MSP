import { Component, OnInit } from '@angular/core';

declare var $:any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  name: string;
  email: string;
  message: string;
  
  ngOnInit() {
    $(function() {
      $(window).on('scroll', function() {

        if ($(window).scrollTop() > 80) {
          $('.navbar').addClass('navbar--scrolled');
          $('.navbar-brand img').attr('src', '../assets/img/logo2.png');
        } else {
          $('.navbar').removeClass('navbar--scrolled');
          $('.navbar-brand img').attr('src', '../assets/img/logo.png');
        }
      });

      $('input, textarea').removeClass('wrong');
      /* scroll to top button */
      var scrollButton = $("#scroll");

  $(window).scroll(function() {
    if ($(this).scrollTop() >= 200) {
      scrollButton.fadeIn();
    } else {
      scrollButton.fadeOut();
    }
  });

  scrollButton.click(function() {
    $("html, body").animate({ scrollTop: 0 })
  });

      
    });
  }

}
