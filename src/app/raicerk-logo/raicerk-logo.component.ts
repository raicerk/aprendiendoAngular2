import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raicerk-logo',
  templateUrl: './raicerk-logo.component.html',
  styleUrls: ['./raicerk-logo.component.css']
})
export class RaicerkLogoComponent implements OnInit {

    dato = 'holiwis';

  constructor() { }

  ngOnInit() {
      console.log('inciado..');
  }

}
