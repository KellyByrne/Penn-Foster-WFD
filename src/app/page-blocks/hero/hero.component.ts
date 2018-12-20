import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  @Input() content;
  desktopimage;
  mobileimage;
  constructor() { }

  ngOnInit() {
  }

  getBackgroundImage(imageUrl) {
    return `url(${imageUrl})`;
  }

  // // tslint:disable-next-line:use-life-cycle-interface
  // ngAfterViewInit(): void {
  //   this.desktopimage = this.content.fields.hero_image_desktop;
  //   this.mobileimage = this.content.fields.hero_image_mobile;
  // }



}
