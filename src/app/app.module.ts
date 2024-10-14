import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DatasComponent } from './datas/datas.component';
import { TopPipe } from './top.pipe';
import { DataComponent } from './data/data.component';
import { DatasAllComponent } from './datas-all/datas-all.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BatimentComponent } from './batiment/batiment.component';
import { CategoryPipe } from './category.pipe';
import { ServicesComponent } from './services/services.component';
import { Category2Pipe } from './category-2.pipe';
import { Category3Pipe } from './category-3.pipe';
import { FabricationComponent } from './fabrication/fabrication.component';
import { Category4Pipe } from './category-4.pipe';
import { AlimentationComponent } from './alimentation/alimentation.component';
import { SearchComponent } from './search/search.component';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DatasComponent,
    TopPipe,
    DataComponent,
    DatasAllComponent,
    NotFoundComponent,
    BatimentComponent,
    CategoryPipe,
    ServicesComponent,
    Category2Pipe,
    Category3Pipe,
    FabricationComponent,
    Category4Pipe,
    AlimentationComponent,
    SearchComponent,
    FilterPipe,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
