import { Component } from '@angular/core';
import { datasService } from '../datas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  datas: any[] = []; // Création d'un tableau pour les produits.
  searchTerm: string = ''; // Fonction de recherche.
  constructor(private datasService: datasService, private route : ActivatedRoute) {}
  // Initialisation de la fonction pour tri des datas
  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.searchTerm = params['term'];
      this.datas = this.datasService.datas;
    })
  }
}
