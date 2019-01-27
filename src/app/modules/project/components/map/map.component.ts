import { Component, OnInit, ViewChild } from '@angular/core';
import { MapsAPILoader, AgmMap } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: number = 29.030626; 
  lng: number = 79.387705;
  zoomLevel = 14;
  zoomPosition: google.maps.ControlPosition;
  streetViewPosition: google.maps.ControlPosition;
  mapTypeControlPosition: google.maps.ControlPosition;
  @ViewChild(AgmMap) map: AgmMap;

  public mapStyles = [
    {
    "featureType": "poi",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
      ]
    }
  ];

  markersData: Array<any> = [];

  constructor(public mapsApiLoader: MapsAPILoader,){
    this.mapsApiLoader.load().then(() => {
      this.zoomPosition = google.maps.ControlPosition.BOTTOM_LEFT;
      this.streetViewPosition = google.maps.ControlPosition.BOTTOM_LEFT;
      this.mapTypeControlPosition = google.maps.ControlPosition.BOTTOM_LEFT;
    });
  }

    ngOnInit(){
    }

}
