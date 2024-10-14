import { Component } from '@angular/core';
import { datasService } from '../datas.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  datas: any[] = []; // Création d'un tableau pour les produits.
  sortOrderServices: string = 'asc'; 
  constructor(private datasService: datasService) {}
  ngOnInit() {
    this.datas = this.datasService.datas;
  }
}
