import { Component } from '@angular/core';
import { datasService } from '../datas.service';

@Component({
  selector: 'app-alimentation',
  templateUrl: './alimentation.component.html',
  styleUrl: './alimentation.component.scss'
})
export class AlimentationComponent {
  datas: any[] = []; // Création d'un tableau pour les produits.
  sortOrderAlimentation: string = 'asc'; 
  constructor(private datasService: datasService) {}
  ngOnInit() {
    this.datas = this.datasService.datas;
  }
}
