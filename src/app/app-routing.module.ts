import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { DatasAllComponent } from './datas-all/datas-all.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BatimentComponent } from './batiment/batiment.component';
import { ServicesComponent } from './services/services.component';
import { FabricationComponent } from './fabrication/fabrication.component';
import { AlimentationComponent } from './alimentation/alimentation.component';
import { SearchComponent } from './search/search.component';



const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "datas/:id", component: DataComponent},
  { path: "datas", component: DatasAllComponent},
  { path: "batiment", component: BatimentComponent},
  { path: "services", component: ServicesComponent},
  { path: "fabrication", component: FabricationComponent},
  { path: "alimentation", component: AlimentationComponent},
  { path: "search", component: SearchComponent},
  { path: "**", component: NotFoundComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
