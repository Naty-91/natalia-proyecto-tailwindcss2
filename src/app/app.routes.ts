import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { RegistrationComponent } from './features/registration/registration.component';
import { SupermercadoBaratoComponent } from './features/supermercado-barato/supermercado-barato.component';
import { ProductoVendidoComponent } from './features/producto-vendido/producto-vendido.component'; 


export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'register',component:RegistrationComponent},
    {path:'buscador',component:SupermercadoBaratoComponent},
    {path:'',component:ProductoVendidoComponent}
  
];

