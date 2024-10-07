import { Component } from '@angular/core';
import { datasService } from '../datas.service';

@Component({
  selector: 'app-datas',
  templateUrl: './datas.component.html',
  styleUrl: './datas.component.scss'
})
export class DatasComponent {
  datas: any[] = []; // Création d'un tableau pour les produits.
  constructor(private datasService: datasService) {}
  ngOnInit() {
    this.datas = this.datasService.datas;
  }
}
