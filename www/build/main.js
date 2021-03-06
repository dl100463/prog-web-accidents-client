webpackJsonp([1],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabsManager_tabsManager__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Login = (function () {
    function Login(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.registerCredentials = { username: '', password: '' };
    }
    Login.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Login');
    };
    Login.prototype.login = function () {
        //Api connections
        if (this.registerCredentials.username == "User" && this.registerCredentials.password == "pass") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
        }
        else if (this.registerCredentials.username == "Manager" && this.registerCredentials.password == "pass") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabsManager_tabsManager__["a" /* TabsManager */]);
        }
        else {
            console.log("User not valid");
        }
    };
    Login = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\FAC\M2\ProgServClient\Projet\Repo\Client\ionic-angular4-client\src\pages\login\login.html"*/'<ion-content padding>\n\n<ion-list>\n\n  <h2>Enter your credentials :</h2>\n\n\n\n  <form (ngSubmit)="login()" #registerForm="ngForm">\n\n      <ion-item>\n\n        <ion-label fixed>Username</ion-label>\n\n        <ion-input type="text" name="username" [(ngModel)]="registerCredentials.username" required></ion-input>\n\n      </ion-item>\n\n    \n\n      <ion-item>\n\n        <ion-label fixed>Password</ion-label>\n\n        <ion-input type="password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n\n      </ion-item>\n\n    \n\n      <button ion-button block color="primary" type="submit" [disabled]="!registerForm.form.valid">Login</button>\n\n  </form>\n\n\n\n</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\FAC\M2\ProgServClient\Projet\Repo\Client\ionic-angular4-client\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], Login);
    return Login;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		292,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\FAC\M2\ProgServClient\Projet\Repo\Client\ionic-angular4-client\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"D:\FAC\M2\ProgServClient\Projet\Repo\Client\ionic-angular4-client\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"D:\FAC\M2\ProgServClient\Projet\Repo\Client\ionic-angular4-client\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      About\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <h2>Accident preventing app</h2>\n\n    <p>This app can help you to prevent accidents.</p>\n\n    <p>You will be informed when entering a zone where accidents have happened\n\n      in the past years, so just turn on the app and let it warn you when needed !</p>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\FAC\M2\ProgServClient\Projet\Repo\Client\ionic-angular4-client\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, rest, geolocation, toast, app) {
        this.navCtrl = navCtrl;
        this.rest = rest;
        this.geolocation = geolocation;
        this.toast = toast;
        this.app = app;
        this.checkInterval = 200;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.infoWindows = [];
        this.commentsArray = [];
        this.loadMap();
    };
    HomePage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            var latPos = position.coords.latitude;
            var lngPos = position.coords.longitude;
            var latLng = new google.maps.LatLng(latPos, lngPos);
            // let latLng = new google.maps.LatLng(43.6157998, 7.0724383);
            var mapOptions = {
                center: latLng,
                zoom: 14,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            _this.loadAccidents(latPos, lngPos);
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.loadAccidents = function (latPos, lngPos) {
        var _this = this;
        this.getAccidents([latPos, lngPos]);
        // this.getAccidents([43.6157998, 7.0724383]);
        var interval1 = setInterval(function () {
            if (_this.accidents != undefined) {
                if (_this.warned == undefined) {
                    if (window.cordova) {
                        _this.toast.show("Entering accident zone\nBe careful !", '3000', 'center').subscribe(function (toast) {
                            console.log(toast);
                        });
                    }
                    else {
                        alert("ACCIDENT ZONE DETECTED\nBe careful !");
                    }
                    _this.warned = true;
                }
                clearInterval(interval1);
                _this.accidents.result.forEach(function (element) {
                    var markerCoords = {
                        lat: parseFloat(element.lat),
                        lng: parseFloat(element.lon)
                    };
                    var infowindow = new google.maps.InfoWindow({
                        content: element.adresse
                    });
                    _this.infoWindows.push(infowindow);
                    var marker = new google.maps.Marker({
                        position: markerCoords,
                        title: "Accident"
                    });
                    marker.addListener('click', function () {
                        _this.selectedAccidentID = element.accidentId;
                        _this.commentsArray = [];
                        _this.infoWindows.forEach(function (window) {
                            window.close();
                        });
                        infowindow.open(_this.map, marker);
                        _this.getComments(element.accidentId);
                        var elemList = document.querySelectorAll(".accDefined");
                        elemList.forEach(function (element) {
                            element.style.display = 'block';
                        });
                        var interval2 = setInterval(function () {
                            if (_this.comments != undefined) {
                                // console.log("Comments loaded");
                                clearInterval(interval2);
                                _this.comments.result.forEach(function (element) {
                                    _this.commentsArray.push(element.text);
                                });
                            }
                        }, _this.checkInterval);
                    });
                    marker.setMap(_this.map);
                });
            }
        }, this.checkInterval);
        this.loadTimeoutId = setTimeout(function () {
            _this.loadAccidents(latPos, lngPos);
        }, 10000);
    };
    HomePage.prototype.sendComment = function (newCom) {
        if (newCom.value != '' && this.selectedAccidentID != undefined) {
            this.commentsArray.push(newCom.value);
            this.addComment(this.selectedAccidentID, newCom.value, 'User');
        }
        else {
            console.log('Invalid input');
        }
        newCom.clearTextInput();
    };
    HomePage.prototype.getAccidents = function (coords) {
        var _this = this;
        this.rest.getAccidents(coords)
            .subscribe(function (accidents) { return _this.accidents = accidents; }, function (error) { return _this.errorMessage = error; });
    };
    HomePage.prototype.getComments = function (accId) {
        var _this = this;
        this.rest.getComments(accId)
            .subscribe(function (comments) { return _this.comments = comments; }, function (error) { return _this.errorMessage = error; });
    };
    HomePage.prototype.addComment = function (accId, text, author) {
        var _this = this;
        this.rest.addComment(accId, text, author)
            .subscribe(function (updatedComments) { return _this.updatedComments = updatedComments; }, function (error) { return _this.errorMessage = error; });
    };
    HomePage.prototype.logout = function () {
        clearTimeout(this.loadTimeoutId);
        // Api Token Logout 
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "mapElement", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\FAC\M2\ProgServClient\Projet\Repo\Client\ionic-angular4-client\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Accidents around you :</ion-title>\n\n    <ion-buttons class="logout" end>\n\n      <button small ion-button color="primary" (click)="logout()">Logout</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div #map id="map"></div> \n\n\n\n  <h6 class="accDefined">Comment list</h6>\n\n\n\n  <div id="comments">\n\n    <tr *ngFor="let c of commentsArray">\n\n      <td>&#x25cf; {{c}}</td>\n\n    </tr>\n\n  </div>\n\n\n\n  <ion-item class="accDefined">\n\n    <ion-label>New comment :</ion-label>\n\n    <ion-input type="text" #newCom></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-buttons class="accDefined" end>\n\n    <button ion-button color="primary" (click)="sendComment(newCom)">Send comment</button>\n\n  </ion-buttons>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\FAC\M2\ProgServClient\Projet\Repo\Client\ionic-angular4-client\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_add__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__homeManager_homeManager__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsManager = (function () {
    function TabsManager() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__homeManager_homeManager__["a" /* ManagerPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__add_add__["a" /* AddPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsManager = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\FAC\M2\ProgServClient\Projet\Repo\Client\ionic-angular4-client\src\pages\tabsManager\tabsManager.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Manage" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Add" tabIcon="add"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"D:\FAC\M2\ProgServClient\Projet\Repo\Client\ionic-angular4-client\src\pages\tabsManager\tabsManager.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsManager);
    return TabsManager;
}());

//# sourceMappingURL=tabsManager.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddPage = (function () {
    function AddPage(navCtrl, rest) {
        this.navCtrl = navCtrl;
        this.rest = rest;
        this.registerAccident = { address: '', department: '', gravity: '' };
        this.correctAddress = false;
    }
    AddPage.prototype.submit = function () {
        var _this = this;
        var elem = document.querySelector(".feedback");
        var geocoder = new google.maps.Geocoder();
        var addressToCode = this.registerAccident.address + ' ' + this.registerAccident.department;
        if (this.registerAccident.address != '' && this.registerAccident.department != '' && this.registerAccident.gravity != '') {
            // Checks if address is likely to be correct
            if (this.registerAccident.address.split(' ').length > 2) {
                // Checks if departement has a valid number first
                if (/^\d+$/.test(this.registerAccident.department.split(' ')[0])) {
                    geocoder.geocode({ 'address': addressToCode }, function (results, status) {
                        if (status === 'OK') {
                            _this.correctAddress = true;
                            var addressToSend = _this.registerAccident.address;
                            var departmentToSend = _this.registerAccident.department.substring(0, 2);
                            if (departmentToSend[0] == "0") {
                                departmentToSend = departmentToSend.substring(1, 2);
                            }
                            var coordToSend = {
                                lat: results[0].geometry.location.lat(),
                                lng: results[0].geometry.location.lng()
                            };
                            _this.addAccident(addressToSend, departmentToSend, coordToSend, _this.registerAccident.gravity);
                            elem.innerHTML = "Accident added !";
                            elem.style.display = 'block';
                        }
                        else {
                            elem.innerHTML = "Geocode did not function properly";
                            elem.style.display = 'block';
                        }
                    });
                }
                else {
                    elem.innerHTML = "Invalid department";
                    elem.style.display = 'block';
                }
            }
            else {
                elem.innerHTML = "Invalid address";
                elem.style.display = 'block';
            }
        }
        else {
            elem.innerHTML = "Missing fields";
            elem.style.display = 'block';
        }
        setTimeout(function () {
            elem.style.display = 'none';
        }, 2000);
    };
    AddPage.prototype.addAccident = function (add, dep, coord, grav) {
        var _this = this;
        this.rest.addAccident(add, dep, coord, grav)
            .subscribe(function (result) { return _this.result = result; }, function (error) { return _this.errorMessage = error; });
    };
    AddPage.prototype.emptyFields = function (add, dep, grav) {
        var _this = this;
        setTimeout(function () {
            if (_this.correctAddress) {
                add.clearTextInput();
                dep.clearTextInput();
                grav.clearTextInput();
                _this.correctAddress = false;
            }
        }, 2000);
    };
    AddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add',template:/*ion-inline-start:"D:\FAC\M2\ProgServClient\Projet\Repo\Client\ionic-angular4-client\src\pages\add\add.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Add\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <h2>Enter accident info :</h2>\n\n\n\n    <form (ngSubmit)="submit()" #registerForm="ngForm">\n\n        <ion-item>\n\n          <ion-label fixed>Address</ion-label>\n\n          <ion-input type="text" name="address" [(ngModel)]="registerAccident.address" #newAdd required></ion-input>\n\n        </ion-item>\n\n      \n\n        <ion-item>\n\n          <ion-label fixed>Department</ion-label>\n\n          <ion-input type="text" name="department" [(ngModel)]="registerAccident.department" #newDep required></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label fixed>Gravity</ion-label>\n\n          <ion-input type="text" name="gravity" [(ngModel)]="registerAccident.gravity" #newGrav required></ion-input>\n\n        </ion-item>\n\n      \n\n        <button ion-button block color="primary" type="submit" [disabled]="!registerForm.form.valid" (click)="emptyFields(newAdd, newDep, newGrav)">Submit</button>\n\n\n\n        <p class="feedback">Accident added !</p>\n\n    </form>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\FAC\M2\ProgServClient\Projet\Repo\Client\ionic-angular4-client\src\pages\add\add.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
    ], AddPage);
    return AddPage;
}());

//# sourceMappingURL=add.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ManagerPage = (function () {
    function ManagerPage(navCtrl, rest, geolocation, toast, app) {
        this.navCtrl = navCtrl;
        this.rest = rest;
        this.geolocation = geolocation;
        this.toast = toast;
        this.app = app;
        this.checkInterval = 200;
    }
    ManagerPage.prototype.ionViewDidLoad = function () {
        this.infoWindows = [];
        this.commentsArray = [];
        this.loadMap();
    };
    ManagerPage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            var latPos = position.coords.latitude;
            var lngPos = position.coords.longitude;
            var latLng = new google.maps.LatLng(latPos, lngPos);
            // let latLng = new google.maps.LatLng(43.6157998, 7.0724383);
            var mapOptions = {
                center: latLng,
                zoom: 14,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            _this.loadAccidents(latPos, lngPos);
        }, function (err) {
            console.log(err);
        });
    };
    ManagerPage.prototype.loadAccidents = function (latPos, lngPos) {
        var _this = this;
        this.getAccidents([latPos, lngPos]);
        // this.getAccidents([43.6157998, 7.0724383]);
        var interval1 = setInterval(function () {
            if (_this.accidents != undefined) {
                if (_this.warned == undefined) {
                    if (window.cordova) {
                        _this.toast.show("Entering accident zone\nBe careful !", '3000', 'center').subscribe(function (toast) {
                            console.log(toast);
                        });
                    }
                    else {
                        alert("ACCIDENT ZONE DETECTED\nBe careful !");
                    }
                    _this.warned = true;
                }
                clearInterval(interval1);
                _this.accidents.result.forEach(function (element) {
                    var markerCoords = {
                        lat: parseFloat(element.lat),
                        lng: parseFloat(element.lon)
                    };
                    var infowindow = new google.maps.InfoWindow({
                        content: element.adresse
                    });
                    _this.infoWindows.push(infowindow);
                    var marker = new google.maps.Marker({
                        position: markerCoords,
                        title: "Accident"
                    });
                    marker.addListener('click', function () {
                        _this.selectedAccidentID = element.accidentId;
                        _this.commentsArray = [];
                        _this.commentsId = [];
                        _this.infoWindows.forEach(function (window) {
                            window.close();
                        });
                        infowindow.open(_this.map, marker);
                        _this.getComments(element.accidentId);
                        var elemList = document.querySelectorAll(".accDefined");
                        elemList.forEach(function (element) {
                            element.style.display = 'block';
                        });
                        var interval2 = setInterval(function () {
                            if (_this.comments != undefined) {
                                // console.log("Comments loaded");
                                clearInterval(interval2);
                                _this.comments.result.forEach(function (element) {
                                    _this.commentsArray.push(element.text);
                                    _this.commentsId.push(element._id);
                                });
                            }
                        }, _this.checkInterval);
                    });
                    marker.setMap(_this.map);
                });
            }
        }, this.checkInterval);
        this.loadTimeoutId = setTimeout(function () {
            _this.loadAccidents(latPos, lngPos);
        }, 10000);
    };
    ManagerPage.prototype.sendComment = function (newCom) {
        if (newCom.value != '' && this.selectedAccidentID != undefined) {
            this.commentsArray.push(newCom.value);
            this.addComment(this.selectedAccidentID, newCom.value, 'User');
        }
        else {
            console.log('Invalid input');
        }
        newCom.clearTextInput();
    };
    ManagerPage.prototype.deleteComment = function (index) {
        var _this = this;
        var idToRemove = this.commentsId[index];
        this.commentsArray.splice(index, 1);
        this.rest.deleteComment(idToRemove, this.selectedAccidentID)
            .subscribe(function (updatedComments) { return _this.updatedComments = updatedComments; }, function (error) { return _this.errorMessage = error; });
    };
    ManagerPage.prototype.deleteAccident = function () {
        var _this = this;
        for (var i = 0; i < this.accidents.result.length; i++) {
            if (this.accidents.result[i].accidentId == this.selectedAccidentID) {
                this.accidents.result.splice(i, 1);
                break;
            }
        }
        this.rest.deleteAccident(this.selectedAccidentID)
            .subscribe(function (accidents) { return _this.updatedAccidents = accidents; }, function (error) { return _this.errorMessage = error; });
    };
    ManagerPage.prototype.getAccidents = function (coords) {
        var _this = this;
        this.rest.getAccidents(coords)
            .subscribe(function (accidents) { return _this.accidents = accidents; }, function (error) { return _this.errorMessage = error; });
    };
    ManagerPage.prototype.getComments = function (accId) {
        var _this = this;
        this.rest.getComments(accId)
            .subscribe(function (comments) { return _this.comments = comments; }, function (error) { return _this.errorMessage = error; });
    };
    ManagerPage.prototype.addComment = function (accId, text, author) {
        var _this = this;
        this.rest.addComment(accId, text, author)
            .subscribe(function (updatedComments) { return _this.updatedComments = updatedComments; }, function (error) { return _this.errorMessage = error; });
    };
    ManagerPage.prototype.logout = function () {
        clearTimeout(this.loadTimeoutId);
        // Api Token Logout 
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ManagerPage.prototype, "mapElement", void 0);
    ManagerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-manager',template:/*ion-inline-start:"D:\FAC\M2\ProgServClient\Projet\Repo\Client\ionic-angular4-client\src\pages\homeManager\homeManager.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Manage the accidents :</ion-title>\n\n    <ion-buttons class="logout" end>\n\n      <button small ion-button color="primary" (click)="logout()">Logout</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div #map id="map"></div> \n\n\n\n  <h6 class="accDefined">Comment list</h6>\n\n\n\n  <div id="comments">\n\n    <tr *ngFor="let c of commentsArray; let i = index">\n\n      <td>&#x25cf; {{c}}</td>\n\n      <td class="managerDel"><button ion-button small color="secondary" class="delete" (click)="deleteComment(i)">X</button></td>\n\n    </tr>\n\n  </div>\n\n\n\n  <ion-item class="accDefined">\n\n    <ion-label>New comment :</ion-label>\n\n    <ion-input type="text" #newCom></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-buttons class="accDefined" end>\n\n    <button ion-button color="primary" (click)="sendComment(newCom)">Send comment</button>\n\n  </ion-buttons>\n\n  <ion-buttons class="accDefined" end>\n\n    <button ion-button color="primary" (click)="deleteAccident()">Delete accident</button>\n\n  </ion-buttons>\n\n</ion-content>'/*ion-inline-end:"D:\FAC\M2\ProgServClient\Projet\Repo\Client\ionic-angular4-client\src\pages\homeManager\homeManager.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
    ], ManagerPage);
    return ManagerPage;
}());

//# sourceMappingURL=homeManager.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_add_add__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_homeManager_homeManager__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabsManager_tabsManager__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_rest_rest__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_toast__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_http__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common_http__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_add_add__["a" /* AddPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_homeManager_homeManager__["a" /* ManagerPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabsManager_tabsManager__["a" /* TabsManager */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* Login */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginModule', name: 'Login', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_add_add__["a" /* AddPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_homeManager_homeManager__["a" /* ManagerPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabsManager_tabsManager__["a" /* TabsManager */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* Login */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_toast__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_12__providers_rest_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* Login */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\FAC\M2\ProgServClient\Projet\Repo\Client\ionic-angular4-client\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\FAC\M2\ProgServClient\Projet\Repo\Client\ionic-angular4-client\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = (function () {
    function RestProvider(http) {
        this.http = http;
        this.urlBase = 'http://172.20.10.5:8000';
        console.log('Hello RestProvider Provider');
    }
    RestProvider.prototype.getAccidents = function (coords) {
        this.apiUrl1 = this.urlBase + '/getRouteByPosition?lat=' + coords[0] + '&lon=' + coords[1];
        console.log(this.apiUrl1);
        return this.http.get(this.apiUrl1)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RestProvider.prototype.getComments = function (accId) {
        this.apiUrl2 = this.urlBase + '/getCommentaryById?accidentId=' + accId;
        console.log(this.apiUrl2);
        return this.http.get(this.apiUrl2)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RestProvider.prototype.addComment = function (accId, text, author) {
        this.apiUrl3 = this.urlBase + '/addCommentary?text=' + text + '&accidentId=' + accId + '&auteur=' + author;
        console.log(this.apiUrl3);
        return this.http.get(this.apiUrl3)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RestProvider.prototype.addAccident = function (add, dep, coords, grav) {
        this.apiUrl4 = this.urlBase + '/addAccident?adresse=' + add + '&departement=' + dep + '&lat=' + coords.lat + '&lon=' + coords.lng + '&gravite=' + grav;
        console.log(this.apiUrl4);
        return this.http.get(this.apiUrl4)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RestProvider.prototype.deleteComment = function (comId, accId) {
        this.apiUrl5 = this.urlBase + '/deleteCommentary?id=' + comId + '&accidentId=' + accId;
        console.log(this.apiUrl5);
        return this.http.delete(this.apiUrl5)
            .catch(this.handleError);
    };
    RestProvider.prototype.deleteAccident = function (accId) {
        this.apiUrl6 = this.urlBase + '/deleteAccident?accidentId=' + accId;
        console.log(this.apiUrl6);
        return this.http.delete(this.apiUrl6)
            .catch(this.handleError);
    };
    RestProvider.prototype.extractData = function (res) {
        return res;
    };
    RestProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var err = error || '';
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"D:\FAC\M2\ProgServClient\Projet\Repo\Client\ionic-angular4-client\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Contact\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\FAC\M2\ProgServClient\Projet\Repo\Client\ionic-angular4-client\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map