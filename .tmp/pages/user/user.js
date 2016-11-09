var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GooglePlus } from 'ionic-native';
import { LoginPage } from '../login/login';
export var UserPage = (function () {
    function UserPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = { name: navParams.get('userName'),
            email: navParams.get('userEmail'),
            picture: navParams.get('userPicture')
        };
    }
    UserPage.prototype.doGoogleLogout = function () {
        var nav = this.navCtrl;
        GooglePlus.logout()
            .then(function (response) {
            nav.push(LoginPage);
        }, function (error) {
            console.log(error);
        });
    };
    UserPage = __decorate([
        Component({
            selector: 'page-user',template:/*ion-inline-start:"/Users/startapplabs/IonicThemes/Ionic2GoogleLogin/src/pages/user/user.html"*/'<ion-header>\n  <ion-toolbar color="primary">\n    <ion-title>\n      User\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-item>\n    <ion-label>Full Name: {{user.name}} </ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>Email: {{user.email}} </ion-label><br>\n  </ion-item>\n  <ion-item>\n    <ion-label>Profile picture:</ion-label>\n  </ion-item>\n  <ion-item>\n    <img [src]="user.picture">\n  </ion-item>\n  <ion-row>\n    <ion-col>\n      <button ion-button block (click)="doGoogleLogout()">Logout</button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/startapplabs/IonicThemes/Ionic2GoogleLogin/src/pages/user/user.html"*/
        }), 
        __metadata('design:paramtypes', [NavController, NavParams])
    ], UserPage);
    return UserPage;
}());
//# sourceMappingURL=user.js.map