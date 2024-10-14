import { Component } from '@angular/core';
import { datasService } from '../datas.service';

@Component({
  selector: 'app-datas-all',
  templateUrl: './datas-all.component.html',
  styleUrl: './datas-all.component.scss'
})
export class DatasAllComponent {
  datas: any[] = []; // Création d'un tableau pour les produits.
  sortOrder: string = 'asc'; 
  constructor(private datasService: datasService) {}
  ngOnInit() {
    this.datas = this.datasService.datas;
  }
}
