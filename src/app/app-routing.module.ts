import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { DatasAllComponent } from './datas-all/datas-all.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "datas/:id", component: DataComponent},
  { path: "datas", component: DatasAllComponent},
  { path: "*", component: NotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
