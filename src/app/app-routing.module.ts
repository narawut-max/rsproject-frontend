import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeNewComponent } from './modules/home/home-new/home-new.component';
import { HomePageComponent } from './modules/home/home-page/home-page.component';
import { HomeArticleComponent } from './modules/home/home-article/home-article.component';
import { JobItdetailsComponent } from './modules/home/job-itdetails/job-itdetails.component';
import { JobIt3detailsComponent } from './modules/home/job-it3details/job-it3details.component';
import { JobIt2detailsComponent } from './modules/home/job-it2details/job-it2details.component';
import { JobBangkokComponent } from './modules/home/job-bangkok/job-bangkok.component';
import { JobCentralComponent } from './modules/home/job-central/job-central.component';
import { JobEasternComponent } from './modules/home/job-eastern/job-eastern.component';
import { JobNortheasternComponent } from './modules/home/job-northeastern/job-northeastern.component';
import { JobSouthComponent } from './modules/home/job-south/job-south.component';
import { JobThenorthComponent } from './modules/home/job-thenorth/job-thenorth.component';
import { JobWesternComponent } from './modules/home/job-western/job-western.component';
import { Articledetail1Component } from './modules/home/articledetail1/articledetail1.component';
import { Articledetail2Component } from './modules/home/articledetail2/articledetail2.component';
import { Articledetail3Component } from './modules/home/articledetail3/articledetail3.component';
import { HomeJobrecomComponent } from './modules/home/home-jobrecom/home-jobrecom.component';
import { JobItComponent } from './modules/home/job-it/job-it.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: '', component: AppComponent},
  { path: '', component: HomePageComponent},
  { path: 'home', component: HomePageComponent},
 {
   path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)   
 },
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
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
