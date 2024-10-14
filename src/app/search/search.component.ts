import { Component } from '@angular/core';
import { datasService } from '../datas.service';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  datas: any[] = []; // Création d'un tableau pour les produits.
  searchTerm: string = ''; // Fonction de recherche.
  constructor(private datasService: datasService) {}
  ngOnInit() {
    this.datas = this.datasService.datas;
  }
}
