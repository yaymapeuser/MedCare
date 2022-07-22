import { Component, OnInit } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader"

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  title = 'google-maps';

  constructor() { }

  ngOnInit(): void {

    let loader = new Loader({
      apiKey: "AIzaSyCO36Vua9XZbd44MIT-cR3gt-SxBxst3xI"
    });

    loader.load().then(() => {
      new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: 48.53559916254081, lng: 12.951015665428045 },
        zoom: 18
      });
    });

  }
}