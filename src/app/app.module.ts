import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './page-blocks/header/header.component';
import { FooterComponent } from './page-blocks/footer/footer.component';
import { HeroComponent } from './page-blocks/hero/hero.component';
import { BreadcrumbsComponent } from './page-blocks/breadcrumbs/breadcrumbs.component';
import { ParagraphInfoComponent } from './page-blocks/paragraph-info/paragraph-info.component';
import { ImageBlocksComponent } from './page-blocks/image-blocks/image-blocks.component';
import { LinkListComponent } from './page-blocks/link-list/link-list.component';
import { CourseListPageComponent } from './course-list-page/course-list-page.component';
import { CourseDescriptionPageComponent } from './course-description-page/course-description-page.component';
import { CourseAccordionComponent } from './page-blocks/course-accordion/course-accordion.component';
import { T2CourseListComponent } from './page-blocks/t2-course-list/t2-course-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    BreadcrumbsComponent,
    ParagraphInfoComponent,
    ImageBlocksComponent,
    LinkListComponent,
    CourseListPageComponent,
    CourseDescriptionPageComponent,
    CourseAccordionComponent,
    T2CourseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
