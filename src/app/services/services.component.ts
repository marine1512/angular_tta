import { Component } from '@angular/core';
import { datasService } from '../datas.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  datas: any[] = []; // Création d'un tableau pour les produits.
  sortOrderServices: string = 'asc'; // Tri des artisans selon leur catégorie.
  constructor(private datasService: datasService) {}
  // Initialisation 
  ngOnInit() {
    this.datas = this.datasService.datas;
  }
}
