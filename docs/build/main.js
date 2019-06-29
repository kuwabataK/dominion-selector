webpackJsonp([0],{

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
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
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_card_list_card_list__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__result_result__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hammerjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, card_provider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.card_provider = card_provider;
        this.loadingCtrl = loadingCtrl;
        this.card_list = [];
        this.remove_cnt = 0; // 山札がなくなるまでループしたあとにカードリストを再構成する時に取り除いたカードの枚数の合計値
        this.yes_card_list = [];
        this.no_card_list = [];
        this.swipe_cnt = 0;
        this.ready = false;
        // 以下swaipカード用のクラス変数たち
        this.attendants = [];
        this.cardDirection = "xy";
        this.cardOverlay = {
            like: {
                backgroundColor: '#28e93b'
            },
            dislike: {
                backgroundColor: '#e92828'
            }
        };
    }
    HomePage.prototype.ionViewDidEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        loading = this.loadingCtrl.create({ content: "Loading..." });
                        return [4 /*yield*/, loading.present()];
                    case 1:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.card_provider.getRamdomCards()];
                    case 2:
                        _a.card_list = _b.sent();
                        this.attendants = [];
                        this.yes_card_list = [];
                        this.no_card_list = [];
                        this.remove_cnt = 0;
                        this.readyCardList();
                        this.ready = true;
                        loading.dismissAll();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.readyCardList = function () {
        var _this = this;
        this.swipe_cnt = 0;
        this.card_list.map(function (_card, i) {
            _this.attendants.push({
                id: i + 1,
                likeEvent: new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */](),
                destroyEvent: new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */](),
                image: 'assets/imgs/' + _card.series + '/' + _card.name + '.png'
            });
        });
    };
    HomePage.prototype.onCardInteract = function (event) {
        console.log(event);
        if (event.like) {
            this.yes_card_list.push(this.card_list[this.swipe_cnt]);
        }
        if (!event.like) {
            this.no_card_list.push(this.card_list[this.swipe_cnt]);
        }
        this.swipe_cnt++;
        if (this.yes_card_list.length >= 10) {
            console.log("終了！");
            console.log(this.yes_card_list);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__result_result__["a" /* ResultPage */], {
                cards: this.yes_card_list
            });
        }
        if (this.yes_card_list.length + this.no_card_list.length >= this.card_list.length + this.remove_cnt) {
            console.log("全部のカードが無くなりました！！");
            this.remove_cnt = this.yes_card_list.length;
            this.card_list = __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.cloneDeep(this.no_card_list);
            this.no_card_list = [];
            this.readyCardList();
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/kuwaharasouba/Documents/GitHub/dominion-selector/src/pages/home/home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Tinder Select 10</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n  <div class="flexbox" *ngIf="ready">\n    <sc-card *ngFor="let attendant of attendants" [orientation]="cardDirection" [tinder-card]="cardOverlay" [callDestroy]="attendant.destroyEvent"\n      [callLike]="attendant.likeEvent" (onLike)="onCardInteract($event)">\n      <div class="card-img">\n          <img class="dominion-card-img" [src]="attendant.image">\n      </div>\n    </sc-card>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/kuwaharasouba/Documents/GitHub/dominion-selector/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_card_list_card_list__["a" /* CardListProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TinderRemoveCardModePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_card_list_card_list__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__result_result__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the TinderRemoveCardModePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TinderRemoveCardModePage = /** @class */ (function () {
    function TinderRemoveCardModePage(navCtrl, navParams, card_provider, loadingCtrl, storage, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.card_provider = card_provider;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.player_num = 4;
        this.card_list = [];
        this.remove_cnt = 0;
        this.yes_card_list = [];
        this.no_card_list = [];
        this.swipe_cnt = 0;
        this.user_no_swipe_cnt = 0;
        this.user_yes_swipe_cnt = 0;
        this.ready = false;
        this.attendants = [];
        this.cardDirection = "xy";
        this.cardOverlay = {
            like: {
                backgroundColor: '#28e93b'
            },
            dislike: {
                backgroundColor: '#e92828'
            }
        };
    }
    TinderRemoveCardModePage.prototype.ionViewDidEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, _a, all_c;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        loading = this.loadingCtrl.create({ content: "Loading..." });
                        return [4 /*yield*/, loading.present()];
                    case 1:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.storage.getNumOfPeople()];
                    case 2:
                        _a.player_num = _b.sent();
                        return [4 /*yield*/, this.card_provider.getRamdomCards()];
                    case 3:
                        all_c = _b.sent();
                        this.card_list = all_c.slice(0, 10 + this.player_num); // とりあえず基本だけ人数+10枚読み込む
                        this.attendants = [];
                        this.yes_card_list = [];
                        this.no_card_list = [];
                        this.remove_cnt = 0;
                        this.readyCardList();
                        this.user_no_swipe_cnt = 0;
                        this.user_yes_swipe_cnt = 0;
                        this.ready = true;
                        loading.dismissAll();
                        return [2 /*return*/];
                }
            });
        });
    };
    TinderRemoveCardModePage.prototype.readyCardList = function () {
        var _this = this;
        this.swipe_cnt = 0;
        this.card_list.map(function (_card, i) {
            _this.attendants.push({
                id: i + 1,
                likeEvent: new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */](),
                destroyEvent: new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */](),
                image: 'assets/imgs/' + _card.series + '/' + _card.name + '.png'
            });
        });
    };
    TinderRemoveCardModePage.prototype.onCardInteract = function (event) {
        // yesが選ばれたときの処理
        if (event.like) {
            this.yes_card_list.push(this.card_list[this.swipe_cnt]);
            this.user_yes_swipe_cnt++;
        }
        // noが選ばれたときの処理
        if (!event.like) {
            this.no_card_list.push(this.card_list[this.swipe_cnt]);
            this.user_no_swipe_cnt++;
        }
        this.swipe_cnt++;
        if (this.card_list.length + this.remove_cnt - this.no_card_list.length <= 10) {
            console.log("終了！");
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__result_result__["a" /* ResultPage */], {
                cards: __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.difference(this.card_list, this.no_card_list)
            });
            return;
        }
        if (this.yes_card_list.length + this.no_card_list.length >= this.card_list.length + this.remove_cnt) {
            console.log("全部のカードが無くなりました！！");
            this.remove_cnt = this.no_card_list.length;
            this.card_list = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.cloneDeep(this.yes_card_list);
            this.yes_card_list = [];
            this.readyCardList();
        }
        if (this.user_yes_swipe_cnt >= 3 || this.user_no_swipe_cnt >= 1) {
            this.alertMessage("次の人に回してください");
            this.user_no_swipe_cnt = 0;
            this.user_yes_swipe_cnt = 0;
        }
    };
    /**
     * 確認ダイアログを表示します
     *
     * @param msg 表示するメッセージ
     */
    TinderRemoveCardModePage.prototype.alertMessage = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                alert = this.alertCtrl.create({
                    title: '確認',
                    message: msg,
                    buttons: [
                        {
                            text: 'OK',
                            handler: function () { }
                        }
                    ]
                });
                alert.present();
                return [2 /*return*/];
            });
        });
    };
    TinderRemoveCardModePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tinder-remove-card-mode',template:/*ion-inline-start:"/Users/kuwaharasouba/Documents/GitHub/dominion-selector/src/pages/tinder-remove-card-mode/tinder-remove-card-mode.html"*/'<!--\n  Generated template for the TinderRemoveCardModePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Tinder Remove To 10</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n    <div class="flexbox" *ngIf="ready">\n        <sc-card *ngFor="let attendant of attendants" [orientation]="cardDirection" [tinder-card]="cardOverlay" [callDestroy]="attendant.destroyEvent"\n          [callLike]="attendant.likeEvent" (onLike)="onCardInteract($event)">\n          <div class="card-img">\n              <img class="dominion-card-img" [src]="attendant.image">\n          </div>\n          <!-- <div class="user_img" [style.background-image]="attendant.asBg"></div> -->\n        </sc-card>\n      </div>\n</ion-content>\n'/*ion-inline-end:"/Users/kuwaharasouba/Documents/GitHub/dominion-selector/src/pages/tinder-remove-card-mode/tinder-remove-card-mode.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_card_list_card_list__["a" /* CardListProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], TinderRemoveCardModePage);
    return TinderRemoveCardModePage;
}());

//# sourceMappingURL=tinder-remove-card-mode.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_card_list_card_list__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingPage = /** @class */ (function () {
    function SettingPage(navCtrl, navParams, storage, card_provider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.card_provider = card_provider;
        this.num_of_people = 4;
        this.series = [];
    }
    SettingPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, all_cards, series_names;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.storage.getNumOfPeople()];
                    case 1:
                        _a.num_of_people = _d.sent();
                        _b = this;
                        return [4 /*yield*/, this.storage.getSeries()
                            // cardsに追加のシリーズがあったときのための処理
                        ];
                    case 2:
                        _b.series = _d.sent();
                        return [4 /*yield*/, this.card_provider.getAll()];
                    case 3:
                        all_cards = _d.sent();
                        series_names = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.uniqBy(all_cards, 'series').map(function (_c) { return _c.series; });
                        if (!(series_names.length !== this.series.length)) return [3 /*break*/, 5];
                        this.series = series_names.map(function (_s) {
                            return {
                                "name": _s,
                                "enable": true
                            };
                        });
                        return [4 /*yield*/, this.storage.setSeries(this.series)];
                    case 4:
                        _d.sent();
                        _d.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    SettingPage.prototype.selectNumOfPeople = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.setNumOfPeople(this.num_of_people)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingPage.prototype.setSeries = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.setSeries(this.series)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setting',template:/*ion-inline-start:"/Users/kuwaharasouba/Documents/GitHub/dominion-selector/src/pages/setting/setting.html"*/'<!--\n  Generated template for the SettingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Setting</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="outer-content">\n\n  <ion-list>\n    <ion-list-header>プレイ</ion-list-header>\n\n    <ion-item>\n      <ion-label>プレイ人数</ion-label>\n      <ion-select [(ngModel)]="num_of_people" (ionChange)="selectNumOfPeople()">\n        <ion-option [value]="2">2</ion-option>\n        <ion-option [value]="3">3</ion-option>\n        <ion-option [value]="4">4</ion-option>\n        <ion-option [value]="5">5</ion-option>\n        <ion-option [value]="6">6</ion-option>\n        <ion-option [value]="7">7</ion-option>\n        <ion-option [value]="8">8</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>シリーズ</ion-list-header>\n\n    <ion-item *ngFor="let s of series">\n      <ion-label>{{s.name}}</ion-label>\n      <ion-toggle [(ngModel)]="s.enable" (ionChange)="setSeries()" ></ion-toggle>\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/kuwaharasouba/Documents/GitHub/dominion-selector/src/pages/setting/setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_card_list_card_list__["a" /* CardListProvider */]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwoPickPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_card_list_card_list__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__result_result__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the TwoPickPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TwoPickPage = /** @class */ (function () {
    function TwoPickPage(navCtrl, navParams, card_provider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.card_provider = card_provider;
        this.card_list = [];
        this.yes_cards = [];
        this.upCards = [];
        this.downCards = [];
    }
    TwoPickPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.card_provider.getRamdomCards()];
                    case 1:
                        _a.card_list = _b.sent();
                        this.yes_cards = [];
                        this.setCards();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * カードが選択されたときに呼び出される関数
     * @param cards
     */
    TwoPickPage.prototype.onClickSelectCards = function (cards) {
        this.yes_cards = this.yes_cards.concat(cards);
        this.setCards();
        if (this.yes_cards.length >= 10) {
            this.finishSelect();
        }
    };
    /**
     * 表示されるカードを更新する
     */
    TwoPickPage.prototype.setCards = function () {
        this.setUpcards(this.card_list);
        this.card_list.shift();
        this.card_list.shift();
        this.setDowncards(this.card_list);
        this.card_list.shift();
        this.card_list.shift();
    };
    /**
     * 画面上部に表示されるカードを新しいカードに更新する
     * @param cards
     */
    TwoPickPage.prototype.setUpcards = function (cards) {
        this.upCards = [];
        this.upCards.push(cards[0]);
        this.upCards.push(cards[1]);
    };
    /**
     * 画面下部に表示されるカードを新しいカードに更新する
     * @param cards
     */
    TwoPickPage.prototype.setDowncards = function (cards) {
        this.downCards = [];
        this.downCards.push(cards[0]);
        this.downCards.push(cards[1]);
    };
    /**
     * カードの選択が終わったときに呼び出す関数
     */
    TwoPickPage.prototype.finishSelect = function () {
        console.log("終了！");
        console.log(this.yes_cards);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__result_result__["a" /* ResultPage */], {
            cards: this.yes_cards
        });
    };
    TwoPickPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-two-pick',template:/*ion-inline-start:"/Users/kuwaharasouba/Documents/GitHub/dominion-selector/src/pages/two-pick/two-pick.html"*/'<!--\n  Generated template for the TwoPickPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>2-pick</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-card (click)="onClickSelectCards(upCards)">  \n    <ion-card-content>\n      <ion-grid>\n\n        <ion-row>\n          <ng-container *ngFor="let card of upCards">\n            <ion-col col-6>\n              <img class="dominion-card-img" [src]="\'assets/imgs/\' + card.series + \'/\' + card.name + \'.png\'">\n            </ion-col>\n          </ng-container>\n\n        </ion-row>\n\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card (click)="onClickSelectCards(downCards)">  \n    <ion-card-content>\n      <ion-grid>\n\n        <ion-row>\n          <ng-container *ngFor="let card of downCards">\n            <ion-col col-6>\n              <img class="dominion-card-img" [src]="\'assets/imgs/\' + card.series + \'/\' + card.name + \'.png\'">\n            </ion-col>\n          </ng-container>\n\n        </ion-row>\n\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/kuwaharasouba/Documents/GitHub/dominion-selector/src/pages/two-pick/two-pick.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_card_list_card_list__["a" /* CardListProvider */]])
    ], TwoPickPage);
    return TwoPickPage;
}());

//# sourceMappingURL=two-pick.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_swipe_cards__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_card_list_card_list__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_result_result__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_hammerjs__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_setting_setting__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tinder_remove_card_mode_tinder_remove_card_mode__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_storage_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_two_pick_two_pick__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_result_result__["a" /* ResultPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tinder_remove_card_mode_tinder_remove_card_mode__["a" /* TinderRemoveCardModePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_two_pick_two_pick__["a" /* TwoPickPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1_ng2_swipe_cards__["a" /* SwipeCardsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_result_result__["a" /* ResultPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tinder_remove_card_mode_tinder_remove_card_mode__["a" /* TinderRemoveCardModePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_two_pick_two_pick__["a" /* TwoPickPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_card_list_card_list__["a" /* CardListProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_storage_storage__["a" /* StorageProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tinder_remove_card_mode_tinder_remove_card_mode__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_setting_setting__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_two_pick_two_pick__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // make HelloIonicPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Tinder Select 10', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Tinder Remove To 10', component: __WEBPACK_IMPORTED_MODULE_6__pages_tinder_remove_card_mode_tinder_remove_card_mode__["a" /* TinderRemoveCardModePage */] },
            { title: '2-Pick', component: __WEBPACK_IMPORTED_MODULE_8__pages_two_pick_two_pick__["a" /* TwoPickPage */] },
            { title: 'Setting', component: __WEBPACK_IMPORTED_MODULE_7__pages_setting_setting__["a" /* SettingPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/kuwaharasouba/Documents/GitHub/dominion-selector/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Pages</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/kuwaharasouba/Documents/GitHub/dominion-selector/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardListProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_storage__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/*
  Generated class for the CardListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CardListProvider = /** @class */ (function () {
    function CardListProvider(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    /**
     * すべてのカードリストを取得する
     */
    CardListProvider.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cards;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get("assets/json/card-list.json").toPromise()];
                    case 1:
                        cards = _a.sent();
                        return [2 /*return*/, cards.json()["cards"]];
                }
            });
        });
    };
    /**
     * Settingで指定されたシリーズのカードのみを選び出して取得する
     */
    CardListProvider.prototype.getCards = function () {
        return __awaiter(this, void 0, void 0, function () {
            var series, cards, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.getSeries()];
                    case 1:
                        series = _a.sent();
                        return [4 /*yield*/, this.getAll()];
                    case 2:
                        cards = _a.sent();
                        if (series.length === 0) {
                            return [2 /*return*/, cards];
                        }
                        res = [];
                        series.map(function (_s) {
                            if (_s.enable) {
                                res = res.concat(cards.filter(function (_card) { return _card.series === _s.name; }));
                            }
                        });
                        return [2 /*return*/, res];
                }
            });
        });
    };
    /**
     * 所得可能なカードをすべて所得し、ランダムな順番に並び替える
     *
     * @returns ランダムな順番に並び替えられた所得可能なカードのリスト
     */
    CardListProvider.prototype.getRamdomCards = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cards, i, rand, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getCards()
                        // 配列の値をランダムに入れ替える
                    ];
                    case 1:
                        cards = _b.sent();
                        // 配列の値をランダムに入れ替える
                        for (i = cards.length - 1; i >= 0; i--) {
                            rand = Math.floor(Math.random() * (i + 1));
                            // 配列の数値を入れ替える
                            _a = [cards[rand], cards[i]], cards[i] = _a[0], cards[rand] = _a[1];
                        }
                        return [2 /*return*/, cards];
                }
            });
        });
    };
    CardListProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__storage_storage__["a" /* StorageProvider */]])
    ], CardListProvider);
    return CardListProvider;
}());

//# sourceMappingURL=card-list.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var StorageProvider = /** @class */ (function () {
    function StorageProvider(storage) {
        this.storage = storage;
    }
    StorageProvider.prototype.getNumOfPeople = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get("NUM_OF_PEOPLE")];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, (res == null ? 4 : res)];
                }
            });
        });
    };
    StorageProvider.prototype.setNumOfPeople = function (num_of_people) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.set("NUM_OF_PEOPLE", num_of_people)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageProvider.prototype.getSeries = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get("SERIES")];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, (res == null ? [] : res)];
                }
            });
        });
    };
    StorageProvider.prototype.setSeries = function (series) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.set("SERIES", series)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], StorageProvider);
    return StorageProvider;
}());

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResultPage = /** @class */ (function () {
    function ResultPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view_mode = "cards";
        this.cards = [];
        this.cards = this.navParams.get('cards');
        this.cards.sort(function (a, b) { return a.cost - b.cost; });
    }
    ResultPage.prototype.ionViewDidLoad = function () {
    };
    ResultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-result',template:/*ion-inline-start:"/Users/kuwaharasouba/Documents/GitHub/dominion-selector/src/pages/result/result.html"*/'<!--\n  Generated template for the ResultPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>result</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="view_mode">\n      <ion-segment-button value="cards">\n          <ion-icon name="ios-images"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value="list">\n        <ion-icon name="ios-list"></ion-icon>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <ng-container *ngIf="view_mode === \'cards\'">\n    <div class="flexbox">\n\n      <ion-grid>\n\n        <ion-row>\n          <ng-container *ngFor="let card of cards">\n            <ion-col col-6>\n              <img class="dominion-card-img" [src]="\'assets/imgs/\' + card.series + \'/\' + card.name + \'.png\'">\n            </ion-col>\n          </ng-container>\n\n        </ion-row>\n\n      </ion-grid>\n\n\n    </div>\n  </ng-container>\n\n  <ng-container *ngIf="view_mode === \'list\'">\n    <ion-list>\n      <ion-item *ngFor="let card of cards">\n        <ion-label>{{card.name}} </ion-label>\n        <ion-badge *ngIf="card.cost <= 2" class="low-num" item-end>{{card.cost}}</ion-badge>\n        <ion-badge *ngIf="card.cost === 3" class="low-middle-num" item-end>{{card.cost}}</ion-badge>\n        <ion-badge *ngIf="card.cost === 4" class="middle-num" item-end>{{card.cost}}</ion-badge>\n        <ion-badge *ngIf="card.cost === 5" class="high-num" item-end>{{card.cost}}</ion-badge>\n        <ion-badge *ngIf="card.cost >= 6" class="very-high-num" item-end>{{card.cost}}</ion-badge>\n      </ion-item>\n    </ion-list>\n\n  </ng-container>\n\n</ion-content>'/*ion-inline-end:"/Users/kuwaharasouba/Documents/GitHub/dominion-selector/src/pages/result/result.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ResultPage);
    return ResultPage;
}());

//# sourceMappingURL=result.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map