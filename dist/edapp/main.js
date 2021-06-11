(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\use\Desktop\BTL\Code\edapp\src\main.ts */"zUnb");


/***/ }),

/***/ "17ij":
/*!***********************************************************************!*\
  !*** ./src/app/@theme/header-component/header-component.component.ts ***!
  \***********************************************************************/
/*! exports provided: HeaderComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponentComponent", function() { return HeaderComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class HeaderComponentComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponentComponent.ɵfac = function HeaderComponentComponent_Factory(t) { return new (t || HeaderComponentComponent)(); };
HeaderComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponentComponent, selectors: [["app-header-component"]], decls: 2, vars: 0, consts: [[1, "header"]], template: function HeaderComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ED APP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".header[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  padding-left: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXItY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDSiIsImZpbGUiOiJoZWFkZXItY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header-component',
                templateUrl: './header-component.component.html',
                styleUrls: ['./header-component.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "2n/s":
/*!********************************************!*\
  !*** ./src/app/services/encryptService.ts ***!
  \********************************************/
/*! exports provided: EncryptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncryptService", function() { return EncryptService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class EncryptService {
    encryptCeasar(key, plaintext) {
        if (key < 0) {
            return this.encryptCeasar(key + 26, plaintext);
        }
        let cipherText = "";
        for (let i = 0; i < plaintext.length; i++) {
            let c = plaintext[i];
            if (c.match(/[a-z]/i)) { //bỏ qua khác biệt a-z A-z
                const code = plaintext.charCodeAt(i);
                if (code >= 65 && code <= 90) { // Uppercase letters
                    c = String.fromCharCode(((code - 65 + key) % 26) + 65);
                }
                else if (code >= 97 && code <= 122) { // Lowercase letters
                    c = String.fromCharCode(((code - 97 + key) % 26) + 97);
                }
            }
            cipherText += c;
        }
        return cipherText;
    }
    encryptRailFence(key, plaintext) {
        let cipherText = "";
        let rail = [];
        for (let i = 0; i < key; i++) {
            rail.push([]);
            for (let j = 0; j < plaintext.length; j++) {
                rail[i][j] = "";
            }
        }
        let row = 0, col = 0;
        let flag = false; //chuyen huong khi dung top hoac bottom
        for (let i = 0; i < plaintext.length; i++) {
            if (row === 0 || row === key - 1) {
                flag = !flag;
            }
            rail[row][col] = plaintext[i];
            col++;
            row = flag ? row + 1 : row - 1;
        }
        for (let i = 0; i < key; i++) {
            for (let j = 0; j < plaintext.length; j++) {
                cipherText += rail[i][j];
            }
        }
        return cipherText;
    }
    encryptCombine(key, key_rail, plaintext) {
        let cipherText = "";
        cipherText = this.encryptRailFence(key_rail, this.encryptCeasar(key, plaintext));
        return cipherText;
    }
}
EncryptService.ɵfac = function EncryptService_Factory(t) { return new (t || EncryptService)(); };
EncryptService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EncryptService, factory: EncryptService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EncryptService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "3Vk+":
/*!********************************************!*\
  !*** ./src/app/services/decryptService.ts ***!
  \********************************************/
/*! exports provided: DecryptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecryptService", function() { return DecryptService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _analysisService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analysisService */ "Xh9K");
/* harmony import */ var _encryptService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./encryptService */ "2n/s");




class DecryptService {
    constructor(analysisService, encryptService) {
        this.analysisService = analysisService;
        this.encryptService = encryptService;
    }
    decryptCeasarWithoutKey(cipherText) {
        //Lấy list key có khả năng nhất dựa trên top10commonletter từ hàm analysisLetter
        let listKey = this.analysisService.analysisLetter(cipherText);
        let listPlainText = [];
        listKey.forEach(key => {
            listPlainText.push({ key: key, plainText: this.decryptCeasar(key, cipherText) });
        });
        //Tìm plaintext và key tốt nhất dựa trên top10commonword
        let result = this.analysisService.findBestKeyandPlaintText(listPlainText);
        return result;
    }
    decryptCeasar(key, cipherText) {
        let plainText = "";
        key = (26 - key) % 26;
        plainText = this.encryptService.encryptCeasar(key, cipherText);
        return plainText;
    }
    decryptRailFenceWithoutKey(cipherText) {
        //Ta dùng brute force attack, thử qua từng key cho tới khi tìm được bản rõ phù hợp
        //vì length của cipherText khoảng > 1000 từ => key có thể từ 2->length-1 (TH 1 và >=length cipherText == plaintText)
        //vì trong trường hợp mã hóa combine, với Ceasar, key có bằng bao nhiêu thì sẽ quy về giá trị từ 1->25.
        //do đó, để tránh TH lặp quá nhiều do key lớn, ta limit key từ 2->25
        let listPlainText = [];
        for (let i = 2; i <= 25; i++) {
            let plainText = this.decryptRailFence(i, cipherText);
            listPlainText.push({ key: i, plainText: plainText });
        }
        //Tìm plaintext và key tốt nhất dựa trên top10commonword
        let result = this.analysisService.findBestKeyandPlaintText(listPlainText);
        return result;
    }
    decryptRailFence(key, cipherText) {
        let rail = [];
        for (let i = 0; i < key; i++) {
            rail.push([]);
            for (let j = 0; j < cipherText.length; j++) {
                rail[i][j] = "";
            }
        }
        let flag = null;
        let row = 0, col = 0;
        for (let i = 0; i < cipherText.length; i++) {
            if (row === 0) {
                flag = true;
            }
            if (row === key - 1) {
                flag = false;
            }
            rail[row][col] = '*';
            col++;
            row = flag ? row + 1 : row - 1;
        }
        let index = 0;
        for (let i = 0; i < key; i++) {
            for (let j = 0; j < cipherText.length; j++) {
                if (rail[i][j] === '*' && index < cipherText.length) {
                    rail[i][j] = cipherText[index];
                    index++;
                }
            }
        }
        let plaintText = "";
        row = 0, col = 0;
        for (let i = 0; i < cipherText.length; i++) {
            if (row === 0)
                flag = true;
            if (row === key - 1)
                flag = false;
            if (rail[row][col] !== '*') {
                plaintText += rail[row][col];
                col++;
            }
            row = flag ? row + 1 : row - 1;
        }
        return plaintText;
    }
    decryptCombineWithoutKey(cipherText) {
        //thử qua từng key từ 2->25, giải mã bằng decryptCombine
        //phân tích bằng hàm findBestKeyandPlainText để tìm bản rõ tốt nhất.
        let listPlainText = [];
        for (let i = 2; i <= 25; i++) {
            let plainTextRail = this.decryptRailFence(i, cipherText);
            let result_ceasar = this.decryptCeasarWithoutKey(plainTextRail);
            listPlainText.push({
                key_rail: i,
                key: result_ceasar.key,
                score: result_ceasar.score,
                plainText: result_ceasar.plainText
            });
        }
        let bestScore = 0;
        let bestPlainText = "";
        let bestKey = 0;
        let bestKeyRail = 0;
        listPlainText.forEach(element => {
            let score = element.score;
            if (score > bestScore) {
                bestScore = score;
                bestPlainText = element.plainText;
                bestKey = element.key;
                bestKeyRail = element.key_rail;
            }
        });
        let result = {
            key: bestKey,
            key_rail: bestKeyRail,
            plainText: bestPlainText
        };
        return result;
    }
    decryptCombine(key, key_rail, cipherText) {
        let plaintextRailFence = this.decryptRailFence(key_rail, cipherText);
        let plaintext = this.decryptCeasar(key, plaintextRailFence);
        return plaintext;
    }
}
DecryptService.ɵfac = function DecryptService_Factory(t) { return new (t || DecryptService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_analysisService__WEBPACK_IMPORTED_MODULE_1__["AnalysisService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_encryptService__WEBPACK_IMPORTED_MODULE_2__["EncryptService"])); };
DecryptService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DecryptService, factory: DecryptService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DecryptService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _analysisService__WEBPACK_IMPORTED_MODULE_1__["AnalysisService"] }, { type: _encryptService__WEBPACK_IMPORTED_MODULE_2__["EncryptService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "tKwJ");
/* harmony import */ var _theme_header_component_header_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./@theme/header-component/header-component.component */ "17ij");
/* harmony import */ var _component_ed_component_ed_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/ed-component/ed-component.component */ "mvpO");





class AppComponent {
    constructor() {
        this.title = 'edapp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header-component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-layout-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-ed-component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutHeaderComponent"], _theme_header_component_header_component_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponentComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutColumnComponent"], _component_ed_component_ed_component_component__WEBPACK_IMPORTED_MODULE_3__["EdComponentComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Xh9K":
/*!*********************************************!*\
  !*** ./src/app/services/analysisService.ts ***!
  \*********************************************/
/*! exports provided: top10CommonLetter, top10CommonWord, AnalysisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "top10CommonLetter", function() { return top10CommonLetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "top10CommonWord", function() { return top10CommonWord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalysisService", function() { return AnalysisService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


const top10CommonLetter = ['e', 'a', 'r', 'i', 'o', 't', 'n', 's', 'l', 'c'];
const top10CommonWord = ['the', 'of', 'and', 'a', 'to', 'in', 'is', 'you', 'that', 'it'];
class AnalysisService {
    constructor() {
        this.charAnalysic = {
            a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0,
            n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0
        };
    }
    analysisLetter(cipherText) {
        let str = cipherText.toLowerCase();
        for (let i = 0; i < str.length; i++) {
            let c = str[i];
            if (c.match(/[a-z]/i)) {
                this.charAnalysic[str[i]]++;
            }
        }
        //Sort tìm letter xuất hiện nhiều nhất
        let sortable = [];
        for (let letter in this.charAnalysic) {
            sortable.push({ letter: letter, value: this.charAnalysic[letter] });
        }
        sortable.sort((a, b) => b.value - a.value);
        //ta tính list key từ top10CommonLetter.
        //return top 10 list key có thể đúng
        let listKey = [];
        let most_letter = sortable[0].letter;
        top10CommonLetter.forEach(letter => {
            let key = most_letter.charCodeAt(0) - letter.charCodeAt(0);
            key = key > 0 ? key : key + 26;
            listKey.push(key);
        });
        return listKey;
    }
    analysisWord(plainText) {
        let score = 0;
        let str = plainText.toLowerCase();
        top10CommonWord.forEach(word => {
            let regex = new RegExp("\\b" + word + "\\b", 'g');
            let word_count = str.match(regex);
            let count = word_count ? word_count.length : 0;
            score += count;
        });
        //return tổng số điểm của plaintext
        //với top10commonword, mỗi lần xuất hiện của từng từ thì được + 1 điểm.
        return score;
    }
    findBestKeyandPlaintText(listPlainText) {
        let bestScore = 0;
        let bestPlainText = "";
        let bestKey = 0;
        listPlainText.forEach(element => {
            let score = this.analysisWord(element.plainText);
            if (score > bestScore) {
                bestScore = score;
                bestPlainText = element.plainText;
                bestKey = element.key;
            }
        });
        let result = {
            score: bestScore,
            key: bestKey,
            plainText: bestPlainText
        };
        return result;
    }
}
AnalysisService.ɵfac = function AnalysisService_Factory(t) { return new (t || AnalysisService)(); };
AnalysisService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AnalysisService, factory: AnalysisService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalysisService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "tKwJ");
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/eva-icons */ "XoTT");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _theme_header_component_header_component_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./@theme/header-component/header-component.component */ "17ij");
/* harmony import */ var _component_ed_component_ed_component_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/ed-component/ed-component.component */ "mvpO");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbThemeModule"].forRoot({ name: 'default' }),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToastrModule"].forRoot(),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"],
            _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__["NbEvaIconsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbTabsetModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSelectModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbRadioModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCheckboxModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSpinnerModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _theme_header_component_header_component_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponentComponent"],
        _component_ed_component_ed_component_component__WEBPACK_IMPORTED_MODULE_9__["EdComponentComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToastrModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"],
        _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__["NbEvaIconsModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbTabsetModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSelectModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbRadioModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCheckboxModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSpinnerModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _theme_header_component_header_component_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponentComponent"],
                    _component_ed_component_ed_component_component__WEBPACK_IMPORTED_MODULE_9__["EdComponentComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbThemeModule"].forRoot({ name: 'default' }),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToastrModule"].forRoot(),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"],
                    _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__["NbEvaIconsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbTabsetModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSelectModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbRadioModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCheckboxModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSpinnerModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "mvpO":
/*!******************************************************************!*\
  !*** ./src/app/component/ed-component/ed-component.component.ts ***!
  \******************************************************************/
/*! exports provided: EdComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdComponentComponent", function() { return EdComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_services_encryptService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/encryptService */ "2n/s");
/* harmony import */ var src_app_services_decryptService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/decryptService */ "3Vk+");
/* harmony import */ var src_app_services_toastService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toastService */ "t0AZ");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "tKwJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");










function EdComponentComponent_nb_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r10.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", type_r10.name, "");
} }
function EdComponentComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Text:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "textarea", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EdComponentComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "File:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EdComponentComponent_div_16_Template_input_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.handleFileInput($event.target.files); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EdComponentComponent_nb_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r13.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", type_r13.name, "");
} }
function EdComponentComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Key Ceasar:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Key Rail Fence:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EdComponentComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Key:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EdComponentComponent_nb_option_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r14.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", type_r14.name, "");
} }
function EdComponentComponent_div_41_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EdComponentComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-checkbox", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Key:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EdComponentComponent_div_41_div_6_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.form.get("form2").get("has_key").value);
} }
function EdComponentComponent_div_52_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Key Ceasar:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Key Rail Fence:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EdComponentComponent_div_52_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Key:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EdComponentComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EdComponentComponent_div_52_div_1_Template, 11, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EdComponentComponent_div_52_div_2_Template, 6, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r8.encryptionType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 3);
} }
function EdComponentComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "textarea", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class EdComponentComponent {
    constructor(encryptService, decryptService, toastrService, fb) {
        this.encryptService = encryptService;
        this.decryptService = decryptService;
        this.toastrService = toastrService;
        this.fb = fb;
        this.inputType = 1; //Input Type
        this.encryptionType = 1;
        //Encryption List
        this.encryptionList = [
            { value: 1, name: 'Ceasar cipher' },
            { value: 2, name: 'Rail fence cipher' },
            { value: 3, name: 'Combine cipher' }
        ];
        //Input Type
        this.inputTypeList = [
            { value: 1, name: 'Text' },
            { value: 2, name: 'File' },
        ];
    }
    ngOnInit() {
        this.form = this.fb.group({
            form1: this.fb.group({
                inputType: '',
                name: '',
                file: '',
                text: '',
                numberLetter: 0
            }),
            form2: this.fb.group({
                encryptionType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                has_key: '',
                key: '',
                key_rail: '',
            }),
            form3: this.fb.group({
                name: '',
                show_text: '',
                text: '',
                key: '',
                key_rail: '',
            })
        });
        this.form.get('form1').get('text').valueChanges.subscribe(value => {
            this.dataInput = value;
            this.form.get('form1').get('numberLetter').setValue(value.length);
        });
        this.form.get('form1').get('inputType').valueChanges.subscribe(value => {
            if (value === 1) { //text
                this.form.get('form1').get('file').setValue('');
            }
            else {
                this.form.get('form1').get('text').setValue('');
                this.form.get('form3').get('show_text').setValue(false);
            }
            this.inputType = value;
        });
    }
    onChangeTab(event) {
        this.type = event.tabTitle;
        if (event.tabTitle === "Encrypt") {
            this.form.setValue({
                form1: {
                    name: 'PLAIN TEXT',
                    inputType: this.inputType,
                    file: '',
                    text: '',
                    numberLetter: 0
                },
                form2: {
                    encryptionType: this.encryptionType,
                    has_key: true,
                    key: '',
                    key_rail: '',
                },
                form3: {
                    name: 'CIPHER TEXT',
                    show_text: true,
                    text: '',
                    key: '',
                    key_rail: '',
                }
            });
        }
        else {
            this.form.setValue({
                form1: {
                    name: 'CIPHER TEXT',
                    inputType: this.inputType,
                    file: '',
                    text: '',
                    numberLetter: 0
                },
                form2: {
                    encryptionType: this.encryptionType,
                    has_key: true,
                    key: '',
                    key_rail: '',
                },
                form3: {
                    name: 'PLAIN TEXT',
                    show_text: true,
                    text: '',
                    key: '',
                    key_rail: '',
                }
            });
            this.form.get('form2').get('has_key').setValue(false);
        }
    }
    onChangeEncryptionType(event) {
        this.encryptionType = event;
        this.form.get('form3').get('text').setValue('');
    }
    handleFileInput(files) {
        let file = files[0];
        let fileReader = new FileReader();
        fileReader.onload = () => {
            this.dataInput = fileReader.result;
            this.form.get('form1').get('numberLetter').setValue(this.dataInput.length);
        };
        fileReader.readAsText(file);
    }
    handleFileExport() {
        if (this.dataOutput) {
            const data = this.dataOutput;
            var blob = new Blob([data], { type: "text/plain;charset=utf-8" });
            file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"](blob, "text.txt");
        }
        else {
            this.toastrService.showToast('warning', 'Warning!', 'Not output data');
        }
    }
    onConfirm() {
        if (this.type === "Encrypt") {
            this.onEncrypt();
            this.toastrService.showToast('success', 'Success', '');
        }
        else {
            this.onDecrypt();
            this.toastrService.showToast('success', 'Success', '');
        }
    }
    onEncrypt() {
        const key = this.form.get('form2').get('key').value;
        switch (this.encryptionType) {
            case 1: //Ceasar
                this.dataOutput = this.encryptService.encryptCeasar(key, this.dataInput);
                break;
            case 2: //Rail fence
                this.dataOutput = this.encryptService.encryptRailFence(key, this.dataInput);
                break;
            case 3: //Combine
                const key_rail = this.form.get('form2').get('key_rail').value;
                this.dataOutput = this.encryptService.encryptCombine(key, key_rail, this.dataInput);
        }
        this.form.get('form3').get('text').setValue(this.dataOutput);
        this.form.get('form3').get('key').setValue(this.form.get('form2').get('key').value);
    }
    onDecrypt() {
        const has_key = this.form.get('form2').get('has_key').value;
        if (has_key) {
            const key = this.form.get('form2').get('key').value;
            switch (this.encryptionType) {
                case 1: //Ceasar
                    this.dataOutput = this.decryptService.decryptCeasar(key, this.dataInput);
                    break;
                case 2: //Rail fence
                    this.dataOutput = this.decryptService.decryptRailFence(key, this.dataInput);
                    break;
                case 3: //Combine
                    const key_rail = this.form.get('form2').get('key_rail').value;
                    this.dataOutput = this.decryptService.decryptCombine(key, key_rail, this.dataInput);
            }
            this.form.get('form3').get('key').setValue(this.form.get('form2').get('key').value);
            this.form.get('form3').get('text').setValue(this.dataOutput);
        }
        else {
            let result;
            switch (this.encryptionType) {
                case 1: //Ceasar
                    result = this.decryptService.decryptCeasarWithoutKey(this.dataInput);
                    break;
                case 2: //Rail fence
                    result = this.decryptService.decryptRailFenceWithoutKey(this.dataInput);
                    break;
                case 3: //Combine
                    result = this.decryptService.decryptCombineWithoutKey(this.dataInput);
            }
            this.dataOutput = result.plainText;
            this.form.get('form3').get('text').setValue(result.plainText);
            this.form.get('form3').get('key').setValue(result.key);
            this.form.get('form3').get('key_rail').setValue(result.key_rail);
        }
    }
}
EdComponentComponent.ɵfac = function EdComponentComponent_Factory(t) { return new (t || EdComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_encryptService__WEBPACK_IMPORTED_MODULE_3__["EncryptService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_decryptService__WEBPACK_IMPORTED_MODULE_4__["DecryptService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
EdComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EdComponentComponent, selectors: [["app-ed-component"]], decls: 63, vars: 17, consts: [[3, "formGroup"], [1, "card-row"], ["formGroupName", "form1", 1, "card-col"], ["accent", "primary"], [1, "row"], [1, "form-group"], ["for", "input-inputType", 1, "label"], ["fullWidth", "", "formControlName", "inputType", "name", "inputType", "id", "input-inputType"], [3, "value", 4, "ngFor", "ngForOf"], [3, "ngSwitch"], ["class", "row", 4, "ngSwitchCase"], ["for", "input-number-letter", 1, "label"], ["formGroupName", "form2", 1, "card-col", "tab"], ["fullWidth", "", 3, "changeTab"], ["tabTitle", "Encrypt"], ["for", "input-encryption-type", 1, "label"], ["fullWidth", "", "formControlName", "encryptionType", "name", "encryptionType", "id", "input-encryptionType", 3, "selectedChange"], [4, "ngSwitchCase"], ["class", "row", 4, "ngSwitchDefault"], ["tabTitle", "Decrypt"], [4, "ngIf"], [1, "btn-confirm"], ["nbButton", "", "status", "primary", 3, "disabled", "click"], ["formGroupName", "form3", 1, "card-col"], [3, "ngSwitch", 4, "ngIf"], ["formControlName", "show_text"], ["for", "input-show_text", 1, "label"], [2, "text-align", "center"], ["nbButton", "", "outline", "", "status", "primary", 3, "disabled", "click"], ["icon", "download-outline"], [3, "value"], ["for", "input-text", 1, "label"], ["nbInput", "", "fullWidth", "", "formControlName", "text", "name", "text", "id", "input-text", 1, "form-control", 2, "height", "270px"], ["for", "input-file", 1, "label"], ["nbInput", "", "fullWidth", "", "type", "file", "formControlName", "file", 1, "form-control", 3, "change"], ["type", "number", "nbInput", "", "fullWidth", "", "formControlName", "key", "autocomplete", "off", 2, "text-align", "center"], ["for", "input-encryption-type-1", 1, "label"], ["type", "number", "nbInput", "", "fullWidth", "", "formControlName", "key_rail", "autocomplete", "off", 2, "text-align", "center"], ["formControlName", "has_key"], [4, "ngSwitchDefault"], ["for", "input-key-output", 1, "label"], ["nbInput", "", "fullWidth", "", "formControlName", "key", "autocomplete", "off", "readonly", "", 2, "text-align", "center"], ["nbInput", "", "fullWidth", "", "formControlName", "key_rail", "autocomplete", "off", "readonly", "", 2, "text-align", "center"], ["nbInput", "", "fullWidth", "", "formControlName", "text", "autocomplete", "off", "readonly", "", 2, "height", "270px"]], template: function EdComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Input Type:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nb-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EdComponentComponent_nb_option_13_Template, 2, 2, "nb-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EdComponentComponent_div_15_Template, 5, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EdComponentComponent_div_16_Template, 5, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nb-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nb-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nb-tabset", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changeTab", function EdComponentComponent_Template_nb_tabset_changeTab_23_listener($event) { return ctx.onChangeTab($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nb-tab", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Encryption Type:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nb-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChange", function EdComponentComponent_Template_nb_select_selectedChange_29_listener($event) { return ctx.onChangeEncryptionType($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, EdComponentComponent_nb_option_30_Template, 2, 2, "nb-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, EdComponentComponent_div_32_Template, 13, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, EdComponentComponent_div_33_Template, 6, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "nb-tab", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Encryption Type:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "nb-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChange", function EdComponentComponent_Template_nb_select_selectedChange_39_listener($event) { return ctx.onChangeEncryptionType($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, EdComponentComponent_nb_option_40_Template, 2, 2, "nb-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, EdComponentComponent_div_41_Template, 7, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "nb-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EdComponentComponent_Template_button_click_44_listener() { return ctx.onConfirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "nb-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, EdComponentComponent_div_52_Template, 3, 2, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "nb-checkbox", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Text:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, EdComponentComponent_div_58_Template, 2, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "nb-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EdComponentComponent_Template_button_click_61_listener() { return ctx.handleFileExport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "nb-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.form.get("form1").get("name").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.inputTypeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.form.get("form1").get("inputType").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.form.get("form1").get("numberLetter").value, " chars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.encryptionList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.encryptionType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.encryptionList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.encryptionType !== 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.dataInput || ctx.form.get("form2").get("has_key").value && ctx.form.get("form2").get("key").value === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.form.get("form3").get("name").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "Decrypt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("form3").get("show_text").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.dataOutput);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardFooterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbTabsetComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbTabComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCheckboxComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbOptionComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"]], styles: ["@media (min-width: 1080px) {\n  .card-row[_ngcontent-%COMP%] {\n    display: flex;\n    margin: 0 -0.5rem;\n  }\n\n  .card-col[_ngcontent-%COMP%] {\n    flex: 1 0;\n    margin: 0 0.5rem;\n  }\n\n  .card-col.tab[_ngcontent-%COMP%] {\n    max-width: 26%;\n  }\n}\n.btn-confirm[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxlZC1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNJLGFBQUE7SUFDQSxpQkFBQTtFQUNOOztFQUVFO0lBQ0ksU0FBQTtJQUNBLGdCQUFBO0VBQ047O0VBRUU7SUFDSSxjQUFBO0VBQ047QUFDRjtBQUVBO0VBQ0ksa0JBQUE7QUFBSiIsImZpbGUiOiJlZC1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogMTA4MHB4KSB7IFxyXG4gICAgLmNhcmQtcm93IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbjogMCAtMC41cmVtO1xyXG4gICAgfVxyXG4gICAgICBcclxuICAgIC5jYXJkLWNvbCB7XHJcbiAgICAgICAgZmxleDogMSAwO1xyXG4gICAgICAgIG1hcmdpbjogMCAwLjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtY29sLnRhYiB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyNiU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4tY29uZmlybSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EdComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ed-component',
                templateUrl: './ed-component.component.html',
                styleUrls: ['./ed-component.component.scss']
            }]
    }], function () { return [{ type: src_app_services_encryptService__WEBPACK_IMPORTED_MODULE_3__["EncryptService"] }, { type: src_app_services_decryptService__WEBPACK_IMPORTED_MODULE_4__["DecryptService"] }, { type: src_app_services_toastService__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "t0AZ":
/*!******************************************!*\
  !*** ./src/app/services/toastService.ts ***!
  \******************************************/
/*! exports provided: ToastrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrService", function() { return ToastrService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "tKwJ");




class ToastrService {
    constructor(toastrService) {
        this.toastrService = toastrService;
        this.index = 1;
        this.destroyByClick = true;
        this.duration = 2000;
        this.hasIcon = true;
        this.position = _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbGlobalPhysicalPosition"].TOP_RIGHT;
        this.preventDuplicates = false;
        this.status = 'primary';
    }
    showToast(type, title, body) {
        const config = {
            status: type,
            destroyByClick: this.destroyByClick,
            duration: this.duration,
            hasIcon: this.hasIcon,
            position: this.position,
            preventDuplicates: this.preventDuplicates,
        };
        const titleContent = title ? title : '';
        this.index += 1;
        this.toastrService.show(body, titleContent, config);
    }
}
ToastrService.ɵfac = function ToastrService_Factory(t) { return new (t || ToastrService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"])); };
ToastrService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToastrService, factory: ToastrService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastrService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map