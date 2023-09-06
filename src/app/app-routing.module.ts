import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorComponent } from './color/color.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'button',
    pathMatch:'full'
  },
  {
    path:'button',
    component:ColorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
