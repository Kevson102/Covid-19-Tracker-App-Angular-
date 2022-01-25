import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SymptomsComponent } from './symptoms/symptoms.component';



const routes: Routes = [
  { path: 'navbar', component: NavbarComponent},
  { path: 'homepage',  component: HomepageComponent},
  { path: '', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'symptoms', component: SymptomsComponent },

  



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

