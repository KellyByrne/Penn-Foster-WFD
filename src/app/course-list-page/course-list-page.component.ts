import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { butterService } from '../service/butter-cms.service';

@Component({
  selector: 'app-course-list-page',
  templateUrl: './course-list-page.component.html',
  styleUrls: ['./course-list-page.component.css']
})
export class CourseListPageComponent implements OnInit {
  programNumber;
  content;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.programNumber = params['coursenum'];
        butterService.page.retrieve('*', this.programNumber)
        .then((res) => {
          this.content = res.data.data;
          console.log(this.content);
        }).catch((res) => {
        console.log(res);
      });
      }
    );
  }

}
