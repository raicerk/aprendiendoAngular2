import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-api-rest',
  templateUrl: './api-rest.component.html',
  styleUrls: ['./api-rest.component.css'],
})
export class ApiRestComponent implements OnInit {

  todo = '';

  constructor(private http: Http) { }

  ngOnInit() {
    console.log("Api rest llamada");
  }

  getDatosPais(pais){
    this.http.get(`https://restcountries.eu/rest/v2/name/${pais}`)
    .map(res => res.text())
    //.map(res => res.json())
    .subscribe(
      data => {
        this.todo = data;
      },
      err => console.error(err),
      () => console.log('Api consumida')
    );
  }

  functionFinal(){
    console.log('entre');
    this.getDatosPais('chile');
    console.log('sali');
  }


}
