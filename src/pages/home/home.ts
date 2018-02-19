import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  infoWindows: any[];
  coordinates: any;
  accidents: any;
  selectedAccidentID: any;
  comments: any;
  updatedComments: any;
  commentsArray: any[];
  errorMessage: string;
  checkInterval: number = 200;

  constructor(public navCtrl: NavController, public rest: RestProvider, public geolocation: Geolocation, public app: App) {

  }

  ionViewDidLoad() {
    this.infoWindows = [];
    this.commentsArray = [];
    this.loadMap();
  }
  
  loadMap(){    
 
    this.geolocation.getCurrentPosition().then((position) => {
 
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      // let latLng = new google.maps.LatLng(43.6157998, 7.0724383);
 
      let mapOptions = {
        center: latLng,
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      this.getAccidents([position.coords.latitude, position.coords.longitude]);
      // this.getAccidents([43.6157998, 7.0724383]);

      const interval1 = setInterval(() => {
        if (this.accidents != undefined) {
          // console.log("Accidents loaded");
          alert("ACCIDENT ZONE DETECTED\nBe careful !");
          clearInterval(interval1);

          this.accidents.result.forEach(element => {
            let markerCoords = {
              lat: parseFloat(element.lat),
              lng: parseFloat(element.lon)
            };
  
            var infowindow = new google.maps.InfoWindow({
              content: element.adresse
            });

            this.infoWindows.push(infowindow);
  
            let marker = new google.maps.Marker({
              position: markerCoords,
              title: "Accident"
            });
  
            marker.addListener('click', () => {
              this.selectedAccidentID = element.accidentId;
              this.commentsArray = [];              
              this.infoWindows.forEach(window => {
                window.close();
              });
              infowindow.open(this.map, marker);
              this.getComments(element.accidentId);

              const interval2 = setInterval(() => {
                if (this.comments != undefined) {
                  // console.log("Comments loaded");
                  clearInterval(interval2);
                  this.comments.result.forEach(element => {
                    this.commentsArray.push(element.text);
                  });
                }
              }, this.checkInterval);
            });
  
            marker.setMap(this.map);
            
          });
        }
      }, this.checkInterval);
    }, (err) => {
      console.log(err);
    });
  }

  sendComment(newCom: any) {
    if (newCom.value != '' && this.selectedAccidentID != undefined) {
      this.commentsArray.push(newCom.value);
      this.addComment(this.selectedAccidentID, newCom.value, 'User');
    } else {
      console.log('Invalid input');
    }
    newCom.clearTextInput();
  }

  getAccidents(coords: any) {
    this.rest.getAccidents(coords)
      .subscribe(
      accidents => this.accidents = accidents,
      error => this.errorMessage = <any>error);
  }

  getComments(accId: any) {
    this.rest.getComments(accId)
      .subscribe(
      comments => this.comments = comments,
      error => this.errorMessage = <any>error);
  }

  addComment(accId: any, text: any, author: any) {
    this.rest.addComment(accId, text, author)
      .subscribe(
      updatedComments => this.updatedComments = updatedComments,
      error => this.errorMessage = <any>error);
  }

  logout() {
    //Api Token Logout 
    const root = this.app.getRootNav();
    root.popToRoot();
  }

}