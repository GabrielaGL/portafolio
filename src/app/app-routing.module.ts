import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from './components/principal/principal.component';

const routes: Routes = [
  { path:'', redirectTo:'portfolio', pathMatch:'full' },
  { path:'portfolio', component:PrincipalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
