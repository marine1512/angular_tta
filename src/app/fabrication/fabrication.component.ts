import { Component } from '@angular/core';
import { datasService } from '../datas.service';

@Component({
  selector: 'app-fabrication',
  templateUrl: './fabrication.component.html',
  styleUrl: './fabrication.component.scss'
})
export class FabricationComponent {
  datas: any[] = []; // Création d'un tableau pour les produits.
  sortOrderFabrication: string = 'asc'; 
  constructor(private datasService: datasService) {}
  ngOnInit() {
    this.datas = this.datasService.datas;
  }
}
