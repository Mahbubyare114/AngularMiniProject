import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SingleUserComponent } from './single-user/single-user.component';

const routes: Routes = [
  {
    path: 'header', component: HeaderComponent,
  },
  {
    path : 'Home', component: HomeComponent,
  },
  {
    path : 'about-us', component: AboutUsComponent,
  },
  {
    path : 'footer', component: FooterComponent,
  },
  {
    path : 'all-users', component: AllUsersComponent,
  },
  {
    path : 'single-user', component: SingleUserComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
