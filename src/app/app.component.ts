import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app works!';
  nombre = 'Carolina';
  quien = '';


  saludo(){
    this.nombre = this.quien;
    console.log(this.nombre);
  }
}
