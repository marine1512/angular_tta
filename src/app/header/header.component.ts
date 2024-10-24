import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',

})
export class HeaderComponent {
 constructor(private router : Router) {}
 // déclaration de la fonction de recherche par Nom, Ville ou Spécialité
 searchArtisan(searchTerm: string = '') { 
   this.router.navigate(['/search', {term: searchTerm}]); 
   // Fonction appelé dans la route "/search"
 }
}