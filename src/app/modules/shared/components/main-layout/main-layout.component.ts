import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-main-layout',
  standalone: false,
  templateUrl: 'main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent implements OnInit {
  ngOnInit(): void {
        // Open close right sidebar
        $('.right-sidebar-toggle').on('click', function (e) {
          e.preventDefault();
          $('#right-sidebar').toggleClass('sidebar-open');
      });

      $(window).scroll(function () {
        let pos = $(window).scrollTop();
        if (pos! > 0 && !$('body').hasClass('fixed-nav')) {
            $('#right-sidebar').addClass('sidebar-top');
        } else {
            $('#right-sidebar').removeClass('sidebar-top');
        }
    });
  }

}
