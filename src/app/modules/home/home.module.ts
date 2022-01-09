import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeNewComponent } from './home-new/home-new.component';
import { JobDepartmentComponent } from './job-department/job-department.component';
import { HomeBestcompanyComponent } from './home-bestcompany/home-bestcompany.component';
import { HomeJobrecomComponent } from './home-jobrecom/home-jobrecom.component';
import { JobItComponent } from './job-it/job-it.component';
import { HomeArticleComponent } from './home-article/home-article.component';
import { JobItdetailsComponent } from './job-itdetails/job-itdetails.component';
import { JobIt3detailsComponent } from './job-it3details/job-it3details.component';
import { JobIt2detailsComponent } from './job-it2details/job-it2details.component';
import { JobBangkokComponent } from './job-bangkok/job-bangkok.component';
import { JobCentralComponent } from './job-central/job-central.component';
import { JobEasternComponent } from './job-eastern/job-eastern.component';
import { JobNortheasternComponent } from './job-northeastern/job-northeastern.component';
import { JobSouthComponent } from './job-south/job-south.component';
import { JobThenorthComponent } from './job-thenorth/job-thenorth.component';
import { JobWesternComponent } from './job-western/job-western.component';
import { Articledetail1Component } from './articledetail1/articledetail1.component';
import { Articledetail2Component } from './articledetail2/articledetail2.component';
import { Articledetail3Component } from './articledetail3/articledetail3.component';



@NgModule({
  declarations: [
    HomePageComponent,
    HomeNewComponent,
    JobDepartmentComponent,
    HomeBestcompanyComponent,
    HomeJobrecomComponent,
    JobItComponent,
    HomeArticleComponent,
    JobItdetailsComponent,
    JobIt3detailsComponent,
    JobIt2detailsComponent,
    JobBangkokComponent,
    JobCentralComponent,
    JobEasternComponent,
    JobNortheasternComponent,
    JobSouthComponent,
    JobThenorthComponent,
    JobWesternComponent,
    Articledetail1Component,
    Articledetail2Component,
    Articledetail3Component
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
