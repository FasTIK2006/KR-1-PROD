import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/AuthGuard';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import { AddCarComponent } from './add-car/add-car.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {
    path: '', component: HomeComponent,

  },
  {
    path: 'cars', component: CarsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'car/add', component: AddCarComponent, canActivate: [AuthGuard]

  },
  {
    path: 'car/:id', component: CarComponent, canActivate: [AuthGuard]

  },
  {
    path: 'aboutme', component: AboutMeComponent,

  },
  { path: 'login', component: LoginComponent, },
  { path: 'register', component: RegisterComponent },

  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
