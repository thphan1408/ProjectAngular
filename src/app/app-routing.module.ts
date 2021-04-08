import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { AboutusComponent } from './body/aboutus/aboutus.component';
import { HomeComponent } from './body/home/home.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: 'footer', component:FooterComponent },
  { path: 'body', component:BodyComponent },
  { path: 'home', component:HomeComponent },
  { path: 'aboutus', component:AboutusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
