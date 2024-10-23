import { Component, Output } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',

})
export class HeaderComponent {
 @Output() searchTermBis : string = '';
}
