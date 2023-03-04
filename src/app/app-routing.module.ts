import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/pages/components/home/home.component';
import { AboutComponent } from './core/pages/components/about/about.component';

const PAGE: string = 'Dark Theme';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: `${PAGE} - Home`
  },
  {
    path: 'sobre',
    component: AboutComponent,
    title: `${PAGE} - Sobre`
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
