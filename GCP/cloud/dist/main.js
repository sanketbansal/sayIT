(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* MAIN PROPERTIES*/\r\n#main-chat{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: stretch;\r\n    min-width: 30%;\r\n    max-width: 30%;\r\n    max-height: 50%;\r\n    position: absolute;\r\n    right: 5%;\r\n}\r\n#fab-chat{\r\n    align-self: flex-end\r\n}\r\n#fab-chat i{\r\n    color: white;\r\n}\r\nmat-toolbar{\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n    -ms-grid-row-align: stretch;\r\n        align-self: stretch;\r\n    /*min-height: 2em !important;\r\n    /height: 3em;*/\r\n}\r\nmat-toolbar-row{\r\n    flex-wrap: wrap;\r\n    justify-content: flex-start\r\n}\r\n#tool-title{\r\n    flex: 1 0 auto;\r\n    color: white;\r\n    font-size: 20px;\r\n}\r\n#tool-button{\r\n    flex: 4 0 auto;\r\n    display:flex;\r\n    flex-direction: row;\r\n    justify-content: flex-end\r\n}\r\napp-chat{\r\n    /*margin-top: 5%;*/\r\n    flex: 4 0 auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n/* MEDIA QUERIES */\r\n@media screen and (max-width:640px) {\r\n    #main-chat{\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: stretch;\r\n\r\n        min-height: 10%;\r\n        min-width: 10%;\r\n        width: 100% !important;\r\n        height: 100% !important;\r\n        max-width: 100% !important;\r\n        max-height: 100% !important;\r\n        position: inherit !important;\r\n    }\r\n\r\n    mat-toolbar{\r\n\r\n        border-top-left-radius: 0px;\r\n        border-top-right-radius: 0px;\r\n        -ms-grid-row-align: stretch;\r\n            align-self: stretch;\r\n        /*min-height: 2em !important;\r\n        /height: 3em;*/\r\n    }\r\n\r\n    #fab-chat{\r\n        align-self: flex-end;\r\n        position: absolute;\r\n        right: 5%;\r\n        bottom: 5%;\r\n    }\r\n}\r\n@media screen and (max-height:450px) {\r\n    #main-chat{\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: stretch;\r\n\r\n        min-height: 10%;\r\n        min-width: 10%;\r\n        width: 100% !important;\r\n        height: 100% !important;\r\n        max-width: 100% !important;\r\n        max-height: 100% !important;\r\n        position: inherit !important;\r\n    }\r\n\r\n    mat-toolbar{\r\n\r\n        border-top-left-radius: 0px;\r\n        border-top-right-radius: 0px;\r\n        -ms-grid-row-align: stretch;\r\n            align-self: stretch;\r\n        /*min-height: 2em !important;\r\n        /height: 3em;*/\r\n    }\r\n\r\n    #fab-chat{\r\n        align-self: flex-end;\r\n        position: absolute;\r\n        right: 5%;\r\n        bottom: 5%;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-chat\" [style.bottom]=\"tservice.bottom\" [style.min-height]=\"tservice.minHeight\">\n  <button mat-fab color=\"primary\" (click)=\"toggle(true)\" *ngIf=\"!chat\" id=\"fab-chat\">\n      <i class=\"material-icons\">chat_bubble</i>\n  </button>\n  <mat-toolbar color=\"primary\" (mouseover)=\"mouse(false)\" *ngIf=\"chat\">\n    <mat-toolbar-row>\n      <span id=\"tool-title\">\n        <span>\n          {{ title }}\n        </span>\n      </span>\n      <div id=\"tool-button\">\n        <span id=\"mini\">\n            <button mat-icon-button color=\"warn\" (click)=\"mini(false)\">\n              <i class=\"material-icons\">remove</i>\n            </button>\n          </span>\n        <span id=\"close\">\n          <button mat-icon-button color=\"warn\" (click)=\"toggle(false)\">\n            <i class=\"material-icons\">close</i>\n          </button>\n        </span>\n      </div>\n    </mat-toolbar-row>\n  </mat-toolbar>\n  <!--i class=\"material-icons\">face</i-->\n  <!--img width=\"30%\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"-->\n  <app-chat *ngIf=\"chat\" (mouseover)=\"mouse(true)\" (mouseout)=\"mouse(false)\"></app-chat>\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/functions */ "./node_modules/@angular/fire/functions/index.js");
/* harmony import */ var _text_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text.service */ "./src/app/text.service.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./firestore.service */ "./src/app/firestore.service.ts");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main.service */ "./src/app/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Angualr Fire

// services





var AppComponent = /** @class */ (function () {
    function AppComponent(cf, tservice, aservice, mservice, fservice, service) {
        this.cf = cf;
        this.tservice = tservice;
        this.aservice = aservice;
        this.mservice = mservice;
        this.fservice = fservice;
        this.service = service;
        this.title = 'GE';
        this.chat = false;
        window.document.body.setAttribute('style', 'margin:0px !important;');
        // console.log(window.parent.document);
        this.service.callable('tags', { topic: 'depression', id: 'sanketbansal57@gmail.com' });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.toggle = function (value) {
        this.chat = value;
        this.tservice.bottom = '2.5%';
        if (value) {
            this.tservice.minHeight = '67%';
        }
        else {
            this.tservice.minHeight = '0%';
            this.tservice.chats = [];
        }
        this.mservice.listen();
        this.service.callable('publish', { topic: 'depression', post: 'I am feelig depressed' });
    };
    AppComponent.prototype.mini = function (value) {
        this.chat = value;
        this.tservice.bottom = '2.5%';
        if (value) {
            this.tservice.minHeight = '67%';
        }
        else {
            this.tservice.minHeight = '0%';
        }
    };
    AppComponent.prototype.mouse = function (value) {
        if (value) {
            console.log('mouse is over');
            // window.document.body.setAttribute('style', 'overflow:hidden; margin:0px !important;');
            window.parent.postMessage('over', '*');
        }
        else {
            console.log('mouse is out');
            // window.document.body.setAttribute('style', 'overflow:auto; margin:0px !important;');
            window.parent.postMessage('out', '*');
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_functions__WEBPACK_IMPORTED_MODULE_1__["AngularFireFunctions"], _text_service__WEBPACK_IMPORTED_MODULE_2__["TextService"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"], _firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"], _main_service__WEBPACK_IMPORTED_MODULE_6__["MainService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/messaging */ "./node_modules/@angular/fire/messaging/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/functions */ "./node_modules/@angular/fire/functions/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _text_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./text.service */ "./src/app/text.service.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _firestore_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./firestore.service */ "./src/app/firestore.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Angualr fire





// Material Design

// Component


// Service






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_12__["ChatComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                // AngularFire
                _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].firebase),
                _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_6__["AngularFireMessagingModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"].enablePersistence(),
                _angular_fire_functions__WEBPACK_IMPORTED_MODULE_9__["AngularFireFunctionsModule"],
                // Material Design
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                // Service Worker Module
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_18__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].production }),
            ],
            providers: [_text_service__WEBPACK_IMPORTED_MODULE_13__["TextService"], _message_service__WEBPACK_IMPORTED_MODULE_14__["MessageService"], _auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"], _firestore_service__WEBPACK_IMPORTED_MODULE_16__["FirestoreService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
/* harmony import */ var _firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./firestore.service */ "./src/app/firestore.service.ts");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main.service */ "./src/app/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = /** @class */ (function () {
    function AuthService(fauth, service, fservice, mservice) {
        var _this = this;
        this.fauth = fauth;
        this.service = service;
        this.fservice = fservice;
        this.mservice = mservice;
        console.log('Auth service constuctor');
        this.check()
            .subscribe(function (user) {
            if (user == null) {
                _this.login();
            }
            else {
                _this.service.authId = user.email;
                _this.mservice.requestPermission();
                _this.fservice.query();
            }
        }, function (error) { return console.log("Auth service check error " + error); });
    }
    // Authentication
    AuthService.prototype.check = function () {
        return this.fauth.user;
    };
    AuthService.prototype.login = function () {
        var _this = this;
        this.fauth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider())
            .then(function (result) {
            _this.service.authId = result.user.email;
            _this.service.userData.id = _this.service.authId;
            _this.fservice.setData()
                .then(function () { return console.log('Data written Succesfully'); })
                .catch(function (error) { return console.log("Error in wriiting data " + error); });
        })
            .catch(function (error) { return console.log("Auth service Login Error " + error); });
    };
    AuthService.prototype.logout = function () {
        return this.fauth.auth.signOut();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"], _firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"], _message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/*!*****************************************!*\
  !*** ./src/app/chat/chat.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat-text{\r\n    overflow-y: scroll;\r\n    background-color: whitesmoke;\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 15em;\r\n    flex-grow: 4;\r\n    padding: 2.5% !important;\r\n}\r\n\r\n.texts{\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 1%;\r\n    margin-left: 0px;\r\n    min-height: 2.7em;\r\n    justify-content: flex-start;\r\n    position: relative;\r\n}\r\n\r\n.message{\r\n    padding: 2.5%;\r\n    min-height: 2em;\r\n    align-self: flex-end;\r\n}\r\n\r\n.message mat-chip{\r\n    color: white !important;\r\n}\r\n\r\n.response{\r\n    margin: 2.5%;\r\n    margin-left: 0%;\r\n    padding: 2.5%;\r\n    align-self: flex-start;\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.typing_gif{\r\n    max-height:4em;\r\n    max-width:4em;\r\n    margin: .5%;\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n.logo-button{\r\n    height:20px;\r\n    width: 20px;\r\n    margin: .5% !important;\r\n    /*background-color: white*;*/\r\n}\r\n\r\n.logo{\r\n    height:15px;\r\n    width: 15px;\r\n    margin: .5%;\r\n}\r\n\r\n.text-logo{\r\n    position: absolute;\r\n    top:80%;\r\n    left: .5%;\r\n}\r\n\r\n.suggest-logo{\r\n    /*margin: 0px !important;*/\r\n    position: absolute;\r\n    top:60%;\r\n    left: 1px;\r\n}\r\n\r\n.texts-suggest{\r\n    background-color: whitesmoke;\r\n    align-self: stretch;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    margin-top:3%;\r\n    max-height: 10em;\r\n}\r\n\r\n.texts-suggest .title{\r\n    margin: 2.5%;\r\n    margin-left: 1%;\r\n    align-self: flex-start;\r\n    position: relative;\r\n}\r\n\r\n.texts-suggest .title-chip{\r\n    margin-left: 10px;\r\n}\r\n\r\n.texts-suggest .suggestion{\r\n    margin: 5px;\r\n    margin-left: 0%;\r\n    padding: 2.5%;\r\n    align-self: flex-start;\r\n}\r\n\r\n.suggestion mat-chip{\r\n    margin: 3px;\r\n}\r\n\r\n.type3{\r\n    background-color: whitesmoke;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-self: stretch;\r\n    margin:2.5%;\r\n    min-height: 5em;\r\n    max-height: 8em;\r\n    overflow:hidden;\r\n    justify-content: center;\r\n}\r\n\r\n.type3 img{\r\n    max-width:60%;\r\n    max-height: 100%;\r\n    align-self: flex-start;\r\n}\r\n\r\n.type1{\r\n    padding: 0% !important;\r\n    border-radius: 10px;\r\n    background-color: whitesmoke;\r\n    display: flex;\r\n    flex-direction: column;\r\n    \r\n    margin:2.5%;\r\n    min-height: 20em;\r\n    max-width: 60%;\r\n    align-self: flex-start;\r\n}\r\n\r\n.type1 span{\r\n    margin: 5%;\r\n    color: black;\r\n    font-size: 15px;\r\n    -ms-grid-row-align: stretch;\r\n        align-self: stretch;\r\n    flex-grow: 2;\r\n}\r\n\r\n.type1 img{\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n    max-width:100%;\r\n    max-height:100%;\r\n    -ms-grid-row-align: stretch;\r\n        align-self: stretch;\r\n    flex-grow: 2;\r\n}\r\n\r\n.type1 div{\r\n    border-top-style: solid;\r\n    border-color: gainsboro;\r\n    border-top-width: 1px; \r\n    align-self: stretch;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.type1 div a{\r\n    /*align-self: center;*/\r\n    margin-top:3px;\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n    color: rgb(42, 28, 236);\r\n    font-weight: 200;\r\n    /*flex-flow: column;*/\r\n}\r\n\r\n.chat-type{\r\n    align-self: stretch;\r\n    /*margin-top: 3px;*/ \r\n    background-color: white;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    min-height: 2.7em;\r\n    max-height: 3.4em;\r\n    padding: 2.5% !important;\r\n    padding-right: 0% !important;\r\n    /*flex-wrap: wrap*/\r\n}\r\n\r\n.chat-type  input{\r\n    flex-grow: 5;\r\n    outline: none;\r\n    border: none;\r\n    overflow-wrap: break-word;\r\n    /*border-style: solid;\r\n    border-radius: 4px;\r\n    border-color:darkslateblue !important;*/\r\n    height: 2.7em;\r\n    margin:0px !important;\r\n    color:grey;\r\n    font-size: 16px;\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n    color:gainsboro;\r\n    font-size: 16px;\r\n    opacity: 1; /* Firefox */\r\n}\r\n\r\n::-ms-input-placeholder {\r\n    color:gainsboro;\r\n    font-size: 16px;\r\n    opacity: 1; /* Firefox */\r\n}\r\n\r\n::placeholder {\r\n    color:gainsboro;\r\n    font-size: 16px;\r\n    opacity: 1; /* Firefox */\r\n}\r\n\r\n.chat-type button{\r\n    outline: none;\r\n    border:none;\r\n    /*background-color: white;*/\r\n    font-size: 16px;\r\n    margin: 2% !important;\r\n    margin-left: 10% !important;\r\n    padding: 0% !important;\r\n    color:white;\r\n    font-weight: 200;\r\n}\r\n\r\n/* MEDIA QUERIES*/\r\n\r\n@media screen and (max-width:640px) {\r\n\r\n    .chat-text{\r\n        overflow-y: scroll;\r\n        background-color: whitesmoke;\r\n        display: flex;\r\n        flex-direction: column;\r\n        flex-grow: 4\r\n    }\r\n\r\n}\r\n\r\n@media screen and (min-width:640px) and (max-width:800px) {\r\n\r\n    .chat-text{\r\n        overflow-y: scroll;\r\n        background-color: whitesmoke;\r\n        display: flex;\r\n        flex-direction: column;\r\n        flex-grow: 4\r\n    }\r\n\r\n    .chat-type{\r\n        align-self: stretch;\r\n        /*margin-top: 3px;*/ \r\n        background-color: white;\r\n        display: flex;\r\n        flex-direction: row;\r\n        justify-content: flex-start;\r\n        align-items: center;\r\n        min-height: 2.7em;\r\n        max-height: 3.4em;\r\n        padding: 2.5% !important    \r\n    }    \r\n}\r\n\r\n@media screen and (max-height:450px){\r\n    .chat-text{\r\n        overflow-y: scroll;\r\n        background-color: whitesmoke;\r\n        display: flex;\r\n        height:10em;\r\n        flex-direction: column;\r\n        flex-grow: 4\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card #chatText class=\"chat-text\">\n  <div *ngFor=\"let chat of chat_service.chats\">\n    \n    <div class=\"texts\" *ngFor=\"let text of chat.type0_\" [ngSwitch]=\"text.type\">\n      <mat-chip-list class=\"message\" *ngSwitchCase=\"'message'\">\n        <mat-chip color='primary' selected=\"true\">{{text.val}}</mat-chip>\n      </mat-chip-list>\n\n      <mat-chip-list class=\"response\" *ngSwitchCase=\"'response'\">\n        <mat-chip color='accent' selected=\"true\">{{text.val}} </mat-chip>\n      </mat-chip-list>\n\n      <mat-chip-list class=\"response\" *ngSwitchCase=\"'pre-response'\">\n        <!--mat-chip color='accent' selected=\"true\">{{text.val}}</mat-chip-->\n        <img class=\"typing_gif\" src=\"../../assets/typing.gif\">\n      </mat-chip-list>\n\n      <!--button mat-mini-fab class=\"logo-button text-logo\" *ngIf=\"text.src!=null\">\n          <img class=\"logo\" src=\"../../assets/GE.jpg\">\n      </button-->\n\n      <!--img class=\"logo logo-button text-logo\" src=\"../../assets/GE.jpg\" *ngIf=\"text.src!=null\"-->\n\n    </div>\n\n    <mat-card class=\"type1\" *ngFor=\"let suggest of chat.type1_\">\n      <img [src]=\"suggest['imageUrl']\">\n      <mat-divider></mat-divider>\n      <span>{{suggest['title']}}</span>\n      <mat-divider [inset]='true' ></mat-divider>\n      <div *ngFor=\"let suggestion of suggest['buttons']\">\n        <a mat-button target=\"_blank\" [href]=\"suggestion['postback']\" color='accent'selectable='true'>{{suggestion['text']}}</a>\n        <mat-divider [inset]='true'></mat-divider>\n      </div>\n    </mat-card>\n\n    <div class=\"type3\" *ngFor=\"let suggest of chat.type3_\">\n      <img [src]=\"suggest['imageUrl']\">\n    </div>\n\n    <div class=\"texts-suggest\" *ngFor=\"let suggest of chat.type2_\">\n      <div class=\"title\">\n        <mat-chip class=\"title-chip\" color='accent' selected=\"true\">{{suggest['title']}}</mat-chip>\n        <!--button mat-icon-button class=\"logo-button suggest-logo\" >\n          <img class=\"logo\" src=\"../../assets/GE.jpg\">\n        </button-->\n        <!--img class=\"logo logo-button suggest-logo\" src=\"../../assets/GE.jpg\"-->\n      </div>\n\n      <mat-chip-list class=\"suggestion\">\n          <mat-chip class=\"chip\" color=\"accent\" (click)=\"send(suggestion)\" *ngFor=\"let suggestion of suggest['replies']\" selectable='true'>{{suggestion}}</mat-chip>\n      </mat-chip-list>\n    </div>\n\n  </div>\n</mat-card>\n\n<!--div id=\"type3_1\"></div-->\n\n<mat-card class=\"chat-type\">\n  <input #userInput  [(ngModel)]=\"msg\" (keyup.enter)=\"send(userInput.value)\" placeholder=\"Send message here..\">\n  <button mat-raised-button color='primary' (click)=\"send(userInput.value)\">\n    Send\n    <!--i class=\"material-icons\">send</i-->\n  </button>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _text_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../text.service */ "./src/app/text.service.ts");
/* harmony import */ var _firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firestore.service */ "./src/app/firestore.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Service


// import { ViewContainerRef } from '@angular/core/src/linker/view_container_ref';
// import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
var ChatComponent = /** @class */ (function () {
    function ChatComponent(chat_service, fservice) {
        this.chat_service = chat_service;
        this.fservice = fservice;
        this.msg = null;
        this.chat_schema = {
            'id': '',
            'type0_': [],
            'type1_': [],
            'type2_': [],
            'type3_': []
        };
        this.chat_length = 0;
        window.parent.postMessage('over', '*');
    }
    ChatComponent.prototype.ngOnInit = function () {
        this.chatElement = document.getElementsByClassName('chat-text');
        // console.log(this.chatElement[0].offsetHeight);
        // console.log(this.chatElement[0].clientHeight);
    };
    ChatComponent.prototype.ngAfterViewInit = function () {
        this.chatElement[0].scrollTop = this.chatElement[0].scrollHeight;
    };
    ChatComponent.prototype.ngAfterContentInit = function () {
        // Called after ngOnInit when the component's or directive's content has been initialized.
        // Add 'implements AfterContentInit' to the class.
        console.log(this.container);
    };
    ChatComponent.prototype.send = function (value) {
        var _this = this;
        this.msg = null;
        if (this.chat_length > 0) {
            for (var _i = 0, _a = this.chat_service.chats[this.chat_length - 1].type2_; _i < _a.length; _i++) {
                var suggest = _a[_i];
                suggest['replies'] = [];
            }
        }
        this.chat_service.chats.push({
            'id': '',
            'type0_': [],
            'type1_': [],
            'type2_': [],
            'type3_': []
        });
        this.chat_length = this.chat_service.chats.length;
        console.log(this.chat_length);
        this.chat_service.chats[this.chat_length - 1].id = this.chat_length;
        this.chat_service.bottom = '2.5%';
        console.log(value);
        this.chat_service.talk(value).subscribe(function (res) {
            console.log(res);
            /* remove pre-resonse gif */
            _this.chat_service.chats[_this.chat_length - 1].type0_.pop();
            for (var _i = 0, _a = res['messages']; _i < _a.length; _i++) {
                var msg = _a[_i];
                if (msg['type'] === 2) {
                    _this.chat_service.chats[_this.chat_length - 1].type2_.push(msg);
                }
                if (msg['type'] === 0 && msg['platform'] !== 'facebook') {
                    if (msg['speech'] !== '') {
                        // tslint:disable-next-line:max-line-length
                        // tslint:disable-next-line:max-line-length
                        _this.chat_service.chats[_this.chat_length - 1].type0_.push({ 'type': 'response', 'val': msg['speech'], 'src': '../../assets/tripscam.jpeg' });
                    }
                }
                if (msg['type'] === 1) {
                    console.log('There is one type 1 message');
                    _this.chat_service.chats[_this.chat_length - 1].type1_.push(msg);
                    _this.chat_service.bottom = '2.5%';
                }
                if (msg['type'] === 3) {
                    console.log('There is one type 3 message');
                    _this.chat_service.chats[_this.chat_length - 1].type3_.push(msg);
                    _this.chat_service.bottom = '2.5%';
                }
            }
            console.log(_this.chat_service.chats);
            setTimeout(function () {
                _this.chatElement[0].scrollTop = _this.chatElement[0].scrollHeight;
                console.log('Interval set');
            }, 1);
        });
        this.chat_service.chats[this.chat_length - 1].type0_.push({ 'type': 'message', 'val': value, 'src': null });
        // tslint:disable-next-line:max-line-length
        this.chat_service.chats[this.chat_length - 1].type0_.push({ 'type': 'pre-response', 'val': 'typing...', 'src': '../../assets/tripscam.jpeg' });
        setTimeout(function () {
            _this.chatElement[0].scrollTop = _this.chatElement[0].scrollHeight;
            console.log('Interval set');
        }, 1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chatText'),
        __metadata("design:type", Object)
    ], ChatComponent.prototype, "container", void 0);
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [_text_service__WEBPACK_IMPORTED_MODULE_1__["TextService"], _firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/firestore.service.ts":
/*!**************************************!*\
  !*** ./src/app/firestore.service.ts ***!
  \**************************************/
/*! exports provided: FirestoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestoreService", function() { return FirestoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.service */ "./src/app/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FirestoreService = /** @class */ (function () {
    function FirestoreService(firestore, mservice) {
        this.firestore = firestore;
        this.mservice = mservice;
        console.log('Firestore service constuctor');
        this.userC = firestore.collection('sayit');
    }
    FirestoreService.prototype.setData = function () {
        return this.userC.doc(this.mservice.authId).set(this.mservice.userData, { merge: true });
    };
    FirestoreService.prototype.updateData = function (data) {
        return this.userC.doc(this.mservice.authId).update(data);
    };
    FirestoreService.prototype.query = function () {
        var _this = this;
        this.userC.doc(this.mservice.authId).valueChanges()
            .subscribe(function (snapshot) { _this.mservice.userData = snapshot; console.log('snapshot created'); }, function (error) { return console.log("Firestore service query error " + error); });
    };
    FirestoreService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], _main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]])
    ], FirestoreService);
    return FirestoreService;
}());



/***/ }),

/***/ "./src/app/main.service.ts":
/*!*********************************!*\
  !*** ./src/app/main.service.ts ***!
  \*********************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/functions */ "./node_modules/@angular/fire/functions/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainService = /** @class */ (function () {
    function MainService(cf, http) {
        this.cf = cf;
        this.http = http;
        this.userData = {};
    }
    MainService.prototype.callable = function (fn, dat) {
        /*const call = this.cf.httpsCallable(fn);
        call( {topic: 'depression', blog: 'I am feelig depressed'} ).subscribe(
          (res) => console.log(` ${fn} call result ${res} `),
          (err) => console.log(` ${fn} function Error ${err}`)
        );*/
        var url = 'https://us-central1-cool-coral-204811.cloudfunctions.net/' + fn;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"](dat);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json'
        });
        this.http.post(url, { headers: headers, data: dat })
            .subscribe(function (res) { return console.log(fn + " call result " + res); }, function (err) { return console.log(fn + " function err " + err); });
    };
    MainService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_functions__WEBPACK_IMPORTED_MODULE_1__["AngularFireFunctions"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/messaging */ "./node_modules/@angular/fire/messaging/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firestore.service */ "./src/app/firestore.service.ts");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main.service */ "./src/app/main.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Service


var MessageService = /** @class */ (function () {
    function MessageService(fcm, service, fservice) {
        this.fcm = fcm;
        this.service = service;
        this.fservice = fservice;
        // firebase.initializeApp(environment.firebase);
        console.log('Message service constuctor');
    }
    MessageService.prototype.requestPermission = function () {
        var _this = this;
        this.fcm.requestToken
            .subscribe(function (token) {
            console.log(token);
            _this.service.userData.token = token;
            _this.fservice.setData()
                .then(function () { return console.log('Token written successfully'); })
                .catch(function (error) { return console.log("Message service firestore error " + error); });
        }, function (error) { return console.log("Message Servcie Token Error " + error); });
    };
    MessageService.prototype.deleteToken = function () {
        var _this = this;
        this.fcm.getToken
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (token) { return _this.fcm.deleteToken(token); }))
            .subscribe(function (token) { console.log('Deleted!'); });
    };
    MessageService.prototype.listen = function () {
        this.fcm.messages
            .subscribe(function (message) { console.log(message); });
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_messaging__WEBPACK_IMPORTED_MODULE_1__["AngularFireMessaging"], _main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"], _firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/text.service.ts":
/*!*********************************!*\
  !*** ./src/app/text.service.ts ***!
  \*********************************/
/*! exports provided: TextService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextService", function() { return TextService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { ApiAiClient } from 'api-ai-javascript';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/toPromise';
var TextService = /** @class */ (function () {
    function TextService(http) {
        this.http = http;
        this.url = 'https://us-central1-plachat-9a2af.cloudfunctions.net/dialogflow?text=';
        this.bottom = '5%';
        this.minHeight = '0%';
        this.chats = [];
        this.texts = Array();
        this.type2_ = Array();
        this.type1_ = Array();
        this.type3_ = Array();
    }
    TextService.prototype.talk = function (text) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json'
        });
        params.set('text', text);
        return this.http.get(this.url + text, { headers: headers });
    };
    TextService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TextService);
    return TextService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyA-HMbI7DCDfaUHKRnQfDR76VTOx9bH5ac',
        authDomain: 'cool-coral-204811.firebaseapp.com',
        databaseURL: 'https://cool-coral-204811.firebaseio.com',
        projectId: 'cool-coral-204811',
        storageBucket: 'cool-coral-204811.appspot.com',
        messagingSenderId: '521306863348'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\apps\sayit\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map