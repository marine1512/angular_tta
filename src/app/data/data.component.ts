import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { datasService } from '../datas.service';

@Component({
  selector: 'app-data',
  template:`
  <body>
    <div class="data d-flex flex-column align-items-center">
      <div class="fiche d-flex ">
        <div class="artisan d-flex flex-column align-items-center justify-content-center px-5 py-3">
            <i class="fa-regular fa-user mb-3"></i>
          <div class="etoiles d-flex">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <p>{{ data.note }}</p>
          </div>
        </div>
        <div class="artisan-texte d-flex flex-column justify-content-center align-items-center">
          <h3>{{ data.name }}</h3>
          <h3 class="blue ">Artisan {{ data.specialty }}</h3>
          <h3>{{ data.location }}</h3>
        </div>
        <div class="artisan-about text-center d-flex align-items-center p-5">
          <p>{{ data.about }}</p>
        </div>
      </div>
    </div>
    <div class="formulaire">
      <div class="titre">
        <img src="/Line-rouge.png">
        <h2>Pour le contacter 
          <i class="fa-regular fa-circle-down"></i>
        </h2>
      </div>
      <app-formulaire/>
      <div class="artisan-mail text-center text-decoration-underline">
        <h3>Email: {{ data.email }}</h3>
      </div>
    </div>
  </body>

  `,
  styleUrl: './data.component.scss'
})
export class DataComponent {
  private route = inject(ActivatedRoute);
  datas: any[]=[]; // Création d'un tableau pour les produits.
  data: any;
  
  constructor(private datasService: datasService) {}
// Initialisation
  ngOnInit() {
    this.datas = this.datasService.datas; 
    this.route.params.subscribe( params => {
      this.data = this.datas.find(data => data.id === params['id']) 
      // Affichage des produits selon leur ID dans une route "data".
   })
}
}
