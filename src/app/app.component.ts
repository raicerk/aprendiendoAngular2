import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app works!';
  nombre = '';
  mitexto = '';
  miclasedecss = 'azul';

  cambiar(){
    this.nombre = this.mitexto;
  }
}
