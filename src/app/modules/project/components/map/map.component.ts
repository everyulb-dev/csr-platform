import { Component, OnInit, ViewChild } from '@angular/core';
import { MapsAPILoader, AgmMap } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: number = 30.204074; 
  lng: number = 78.228707;
  zoomLevel = 14;
  zoomPosition: google.maps.ControlPosition;
  streetViewPosition: google.maps.ControlPosition;
  mapTypeControlPosition: google.maps.ControlPosition;
  @ViewChild(AgmMap) map: AgmMap;

  imgBaseURL = "https://clbhogpur.everyulb.com/dashboard/img/map_icon/";
  markersData = [
    {
      lat: 30.224920,
      lng: 78.266491,
      type: 'village',
      villageID: '1',
      title: 'Gadool',
      icon: this.imgBaseURL+"village1.png"
    }, {
      lat:30.208715,
      lng:78.233520,
      type: 'village',
      villageID: '2',
      title: 'Bagi',
      icon: this.imgBaseURL+"village2.png"
    }, {
      lat:30.207961,
      lng:78.232861,
      type: 'village',
      villageID: '3',
      title: 'Bhogpur',
      icon: this.imgBaseURL+"village3.png"
    }, {
      lat:30.180703,
      lng:78.220556,
      type: 'village',
      villageID: '4',
      title: 'Ranipokhri Grant',
      icon: this.imgBaseURL+"village4.png"
    }, {
      lat:30.200872,
      lng:78.223406,
      type: 'village',
      villageID: '5',
      title: 'Sarangdhar wala',
      icon: this.imgBaseURL+"village5.png"
    }, {
      lat:30.208003,
      lng:78.229681,
      type: 'village',
      villageID: '6',
      title: 'Rakhwal Gaon',
      icon: this.imgBaseURL+"village6.png"
    }, {
      lat:30.181219,
      lng:78.210586,
      type: 'village',
      villageID: '7',
      title: 'Ranipokhari',
      icon: this.imgBaseURL+"village7.png"
    }, {
      lat:30.209901,
      lng:78.258115,
      type: 'village',
      villageID: '8',
      title: 'Kodsi',
      icon: this.imgBaseURL+"village8.png"
    },
    {
      lat:30.215194,
      lng:78.234639,
      type: 'waste',
      des: 'Waste open dump point â€“ Nathuwala area',
      img: '1.jpg',
      icon: this.imgBaseURL+"trash.png"
    },
    {
      lat:30.210194,
      lng:78.233417,
      type: 'waste',
      des: 'Old  dustbin site â€“ Rakhwal Gaon',
      img: '3.jpg',
      icon: this.imgBaseURL+"trash.png"
    },
    {
      lat:30.209901,
      lng:78.258115,
      type: 'waste',
      des: 'Waste flowing  thorugh in Northuwala Channel',
      img: '4.jpg',
      icon: this.imgBaseURL+"trash.png"
    },
    {
      lat:30.215111,
      lng:78.233000,
      type: 'waste',
      des: 'Waste open dump in Basantpur slope in  Naurthwala area',
      img: '5.jpg',
      icon: this.imgBaseURL+"trash.png"
    },
    {
      lat:30.209901,
      lng:78.258115,
      type: 'waste',
      des: 'Waste open dump in Basantpur slope in  Naurthwala area',
      img: '5.jpg',
      icon: this.imgBaseURL+"trash.png"
    },
    {
      lat:30.215111,
      lng:78.233000,
      type: 'waste',
      des: 'Waste open dump in Basantpur road side',
      img: '6.jpg',
      icon: this.imgBaseURL+"trash.png"
    },
    {
      lat:30.214861,
      lng:78.233278,
      type: 'waste',
      des: 'Waste open dump in Banghai Baghi road side',
      img: '7.jpg',
      icon: this.imgBaseURL+"trash.png"
    },
    {
      lat:30.183139,
      lng:78.209333,
      type: 'waste',
      des: 'Waste open dump : Ranipokhare Highway opposite to Semwal children academy',
      img: '8.jpg',
      icon: this.imgBaseURL+"trash.png"
    },
    {
      lat: 30.188083,
      lng:  78.204167,
      type: 'waste',
      des: 'Waste open dump : Ranipokhari Grant Haat Bazaar',
      img: '9.jpg',
      icon: this.imgBaseURL+"trash.png"
    },
    {
      lat:30.188139,
      lng:78.204333,
      type: 'waste',
      des: 'Waste open dump  : Ranipokhare Grant-HUT Dumping and Incineration Site',
      img: '10.jpg',
      icon: this.imgBaseURL+"trash.png"
    },
    {
      lat:30.180972,
      lng:78.213194,
      type: 'waste',
      des: 'Waste open dump : Ranipokhari Main Chowk Waste  near channel ',
      img: '11.jpg',
      icon: this.imgBaseURL+"trash.png"
    },
    {
      lat:30.180972,
      lng:78.213194,
      type: 'waste',
      des: 'Waste open dump : Ranipokhare Main Chowk waste troughed in open area  ',
      img: '12.jpg',
      icon: this.imgBaseURL+"trash.png"
    },
    {
      lat:30.181028,
      lng:78.215278,
      type: 'waste',
      des: 'Waste open dump : Yoga Park Ranipokhare Waste Dumping point ',
      img: '13.jpg',
      icon: this.imgBaseURL+"trash.png"
    },
    {
      lat:30.181028,
      lng:78.215278,
      type: 'waste',
      des: ' Waste open dump : Yoga Park Ranipokhare  Road Side Waste',
      img: '14.jpg',
      icon: this.imgBaseURL+"trash.png"
    },
    {
      lat:30.177806,
      lng:78.216278,
      type: 'waste',
      des: 'Waste open dump - Himani Wedding Hall Waste near Compound Wall',
      img: '15.jpg',
      icon: this.imgBaseURL+"trash.png"
    },
    {
      lat:30.344388,
      lng:78.347359,
      type: 'waste',
      des: 'Proposed segregation centre : Rakhwalgaon',
      img: '16.jpg',
      icon: this.imgBaseURL+"seg.png"
    },
    {
      lat:30.2096880,
      lng:78.2372980,
      type: 'waste',
      des: 'Shed No. 2 Rakhwalgaon construction completed',
      img: 'june15.jpeg',
      icon: this.imgBaseURL+"seg.png"
    },
    {
      lat:30.214608,
      lng:78.22895,
      type: 'waste',
      des: 'New proposed processing site at Gadool: Newly proposed site near jaghat was visit by our team to look into locals objecting to the processing site location. The land is now changed to near Gadool village due to its coming under the flood zone. NOC from Gram Panchayat Gadool has been submitted to SDM',
      img: 'june4.jpeg',
      icon: this.imgBaseURL+"seg.png"
    },
    {
      lat:30.355573,
      lng:78.356371,
      type: 'waste',
      des: ' Segregation point for Sarangdharwala   ',
      img: '17.jpg',
      icon: this.imgBaseURL+"seg.png"
    },
    {
      lat:30.212861,
      lng:78.234889,
      type: 'waste',
      des: 'Under construction waste segregation centre',
      img: '18.jpg',
      icon: this.imgBaseURL+"seg.png"
    }
  ];
  currentMarkerDetails = this.markersData[0];

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

  constructor(public mapsApiLoader: MapsAPILoader,){
    this.mapsApiLoader.load().then(() => {
      this.zoomPosition = google.maps.ControlPosition.BOTTOM_LEFT;
      this.streetViewPosition = google.maps.ControlPosition.BOTTOM_LEFT;
      this.mapTypeControlPosition = google.maps.ControlPosition.BOTTOM_LEFT;
    });
  }

    ngOnInit(){
    }

    markerClicked(markerDetails: any): void {
      this.currentMarkerDetails = markerDetails;
      this.currentMarkerDetails['img'] = this.imgBaseURL + this.currentMarkerDetails['img'];
      console.log(this.currentMarkerDetails);
    }

}
