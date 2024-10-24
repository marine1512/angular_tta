import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.scss'
})
export class FormulaireComponent {
  // Fonction envoie de mail
  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_5id4fcn', 'template_nhkdcg9', e.target as HTMLFormElement, {
        publicKey: 'ic6YSvJuTWnMUU3AY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Message envoyé !") // Message affiché si tout se passe bien
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }

}
