import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-image-blocks',
  templateUrl: './image-blocks.component.html',
  styleUrls: ['./image-blocks.component.css']
})
export class ImageBlocksComponent implements OnInit {
  @Input() content;
  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit(): void {
      $('.elect-opts .each-block').css({'box-shadow': '0 0 0.125em 0 rgba(4,49,64,0.1)'});
      $('.elect-opts .each-block').animate({ height: '275px' }, 500);
      $('.elect-opts .each-block').find('.boxtxt').animate({'height': '130px'}, 300);
      $('.elect-opts .each-block').find('.learn-more-pthwy').css({'height': '8px', 'background-color': '#4eb7e6'});
      $('.elect-opts .each-block').addClass('b-transform-off').removeClass('b-transform-on');
      $('.elect-opts .each-block').find('.learn-more-pthwy').addClass('l-transform-off').removeClass('l-transform-on');

  // learn more hover on pathways
  $('.elect-opts .each-block').hover(
   function () {
       $(this).find('.learn-more-pthwy').css({'height': '45px', 'background-color': '#0496cc' });
       $(this).css({'box-shadow': '0 0.5em 1.5em 0 rgba(4,49,64,0.2)', 'border-bottom': 'none'});
       $(this).stop().animate({height: '320px' }, 500);
       $(this).find('.boxtxt').stop().animate({'height': '150px'}, 300);
       $(this).addClass('b-transform-on').removeClass('b-transform-off');
       $(this).find('.learn-more-pthwy').addClass('l-transform-on').removeClass('l-transform-off');
   }, function () {
       $(this).css({'box-shadow': '0 0 0.125em 0 rgba(4,49,64,0.1)'});
       $(this).stop().animate({ height: '275px' }, 500);
       $(this).find('.boxtxt').stop().animate({'height': '130px'}, 300);
       $(this).find('.learn-more-pthwy').css({'height': '8px', 'background-color': '#4eb7e6'});
       $(this).addClass('b-transform-off').removeClass('b-transform-on');
       $(this).find('.learn-more-pthwy').addClass('l-transform-off').removeClass('l-transform-on');
   }
  );
  }
}
