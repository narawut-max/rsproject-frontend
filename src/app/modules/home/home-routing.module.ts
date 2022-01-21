import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeNewComponent } from './home-new/home-new.component';
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

const routes: Routes = [
  {
    path: '',
    component: HomeNewComponent,
  },
  {
    path: 'homepage',
    component: HomePageComponent,
  },
  {
    path: 'jobrecom',
    component: HomeJobrecomComponent,
  },
  {
    path: 'jobit',
    component: JobItComponent,
  },
  {
    path: 'article',
    component: HomeArticleComponent,
  },
  {
    path: 'details',
    component: JobItdetailsComponent,
  },
  {
    path: 'details2',
    component: JobIt2detailsComponent,
  },
  {
    path: 'details3',
    component: JobIt3detailsComponent,
  },
  {
    path: 'jobbangkok',
    component: JobBangkokComponent,
  },
  {
    path: 'jobcentral',
    component: JobCentralComponent,
  },
  {
    path: 'jobeastern',
    component: JobEasternComponent,
  },
  {
    path: 'jobnortheastern',
    component: JobNortheasternComponent,
  },
  {
    path: 'jobsouth',
    component: JobSouthComponent,
  },
  {
    path: 'jobnorth',
    component: JobThenorthComponent,
  },
  {
    path: 'jobwestern',
    component: JobWesternComponent,
  },
  {
    path: 'acticledetail1',
    component: Articledetail1Component,
  },
  {
    path: 'acticledetail2',
    component: Articledetail2Component,
  },
  {
    path: 'acticledetail3',
    component: Articledetail3Component,
  },
  {
    path: 'hr',
    component: HomeNewComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
