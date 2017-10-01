webpackJsonp([2],{

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(485);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsPageModule = (function () {
    function SettingsPageModule() {
    }
    return SettingsPageModule;
}());
SettingsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]),
        ],
    })
], SettingsPageModule);

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_user_user__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams, userProvider, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.modalCtrl = modalCtrl;
        this.userData = [];
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        this.getUserProfile();
    };
    SettingsPage.prototype.getUserProfile = function () {
        var _this = this;
        this.userProvider.loadUserProfile().then(function (userData) {
            _this.userData.push(userData);
        });
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"C:\Users\Sanchez\Desktop\ng4_ionic3\FireChat\src\pages\settings\settings.html"*/'<ion-content>\n\n    <ion-item-divider color="light" class="divider">User Profile</ion-item-divider>\n\n    <ion-item *ngFor="let user of userData; let i = index">\n\n        <ion-avatar item-start>\n\n          <img src="{{user.photo}}" *ngIf="user.photo;else photo;">\n\n          <ng-template #photo><span class="icon-circle">{{user.displayName.charAt(0)}}</span></ng-template>\n\n          <span [class]="user.status"></span>\n\n        </ion-avatar>\n\n        <ion-label>\n\n          <h3>{{user.displayName}}</h3>\n\n          <p>{{user.email}}</p>\n\n        </ion-label>\n\n        <!-- <button ion-button item-end icon-left icon-only small color="light-blue">\n\n          <ion-icon name="create"></ion-icon>\n\n        </button> -->\n\n    </ion-item>\n\n    <ion-item-divider color="light" class="divider">System Settings</ion-item-divider>\n\n    <ion-item>\n\n      <ion-label><ion-icon name="ios-contact"></ion-icon> User Account</ion-label>\n\n    </ion-item>\n\n    <!-- <ion-item>\n\n      <ion-label><ion-icon name="notifications"></ion-icon> Notifications</ion-label>\n\n      <ion-toggle disabled checked="false"></ion-toggle>\n\n    </ion-item> -->\n\n    <ion-item>\n\n      <ion-label><ion-icon name="notifications"></ion-icon> Notifications</ion-label>\n\n      <ion-toggle checked="false"></ion-toggle>\n\n    </ion-item>\n\n    <ion-item-divider color="light" class="divider">More</ion-item-divider>\n\n    <ion-item>\n\n      <ion-label><ion-icon name="information-circle"></ion-icon> About FireChat</ion-label>\n\n    </ion-item>\n\n\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sanchez\Desktop\ng4_ionic3\FireChat\src\pages\settings\settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__providers_user_user__["a" /* UserProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=2.js.map