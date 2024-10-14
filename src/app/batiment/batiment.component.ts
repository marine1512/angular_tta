import { Component } from '@angular/core';
import { datasService } from '../datas.service';

@Component({
  selector: 'app-batiment',
  templateUrl: './batiment.component.html',
  styleUrl: './batiment.component.scss'
})
export class BatimentComponent {
  datas: any[] = []; // Création d'un tableau pour les produits.
  sortOrderBatiment: string = 'asc'; 
  constructor(private datasService: datasService) {}
  ngOnInit() {
    this.datas = this.datasService.datas;
  }
}