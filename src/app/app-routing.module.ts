import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './components/booking/booking.component';
import { CitaComponent } from './components/cita/cita.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { QuienesComponent } from './components/quienes/quienes.component';
import { RegistroComponent } from './components/registro/registro.component';
import { TratamientosComponent } from './components/tratamientos/tratamientos.component';

const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent},
  {path: 'tratamientos', component: TratamientosComponent},
  {path: 'cita', component: CitaComponent},
  {path: 'quienes', component: QuienesComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: '**', pathMatch:'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
