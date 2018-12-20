import { Injectable } from '@angular/core';
import { butterService } from './butter-cms.service';

@Injectable({
  providedIn: 'root'
})
export class ButterContentService {

  constructor() { }

  // fetchData(programNumber) {
  //   butterService.page.retrieve('*', programNumber)
  //     .then((res) => {
  //       return res.data.data;
  //     }).catch((res) => {
  //     console.log(res);
  //   });
  // }
}
