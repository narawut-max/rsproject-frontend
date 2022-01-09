import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeNewComponent } from './modules/home/home-new/home-new.component';
import { HomePageComponent } from './modules/home/home-page/home-page.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: '', component: AppComponent},
  { path: '', component: HomePageComponent},
  { path: 'home', component: HomePageComponent},
 {
   path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)   
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
