//ANGULAR
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';

//COMPOENENTES
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { TratamientosComponent } from './components/tratamientos/tratamientos.component';
import { PreciosComponent } from './components/precios/precios.component';
import { CitaComponent } from './components/cita/cita.component';
import { QuienesComponent } from './components/quienes/quienes.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerbottomComponent } from './components/bannerbottom/bannerbottom.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { BookingComponent } from './components/booking/booking.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginReactiveComponent } from './components/login-reactive/login-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    TratamientosComponent,
    PreciosComponent,
    CitaComponent,
    QuienesComponent,
    ContactoComponent,
    BannerbottomComponent,
    MapaComponent,
    BookingComponent,
    LoginComponent,
    RegistroComponent,
    LoginReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
