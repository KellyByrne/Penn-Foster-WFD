import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-course-accordion',
  templateUrl: './course-accordion.component.html',
  styleUrls: ['./course-accordion.component.css']
})
export class CourseAccordionComponent implements OnInit {
  @Input() content;
  constructor() { }

  ngOnInit() {
  }

}
