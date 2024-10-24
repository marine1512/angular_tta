import { Component } from '@angular/core';
import { datasService } from '../datas.service';

@Component({
  selector: 'app-fabrication',
  templateUrl: './fabrication.component.html',
  styleUrl: './fabrication.component.scss'
})
export class FabricationComponent {
  datas: any[] = []; // Création d'un tableau pour les produits.
  sortOrderFabrication: string = 'asc'; // Tri des artisans selon leur catégorie.
  constructor(private datasService: datasService) {}
  // Initialisation
  ngOnInit() {
    this.datas = this.datasService.datas;
  }
}