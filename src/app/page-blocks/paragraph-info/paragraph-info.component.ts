import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paragraph-info',
  templateUrl: './paragraph-info.component.html',
  styleUrls: ['./paragraph-info.component.css']
})
export class ParagraphInfoComponent implements OnInit {
  @Input() content;
  constructor() { }

  ngOnInit() {
  }

}
