"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8784);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);





let HomePage = class HomePage {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.filtro = '';
        this.animales = this.httpClient.get('https://raw.githubusercontent.com/jmangam/Archivo-Json-animales/main/animales.json');
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Listado de animales\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-input [(ngModel)]=\"filtro\" placeholder=\"Introduce el tipo de animal\">\n  </ion-input>\n <ion-grid>\n  <ion-row>\n    <ng-container *ngFor=\"let animal of animales | async\">\n      <ion-col *ngIf=\"filtro=='' || filtro == animal.Tipo\" size-xl=\"2\" size-lg=\"2\" size-md=\"4\" size-sm=\"6\" size-xs=\"12\">\n        <ion-card >\n          <ion-card-content>\n            <ion-avatar>\n              <img [src]=\"animal.Imagen\">\n            </ion-avatar>\n          <h1>{{animal.Nombre}}</h1>\n            <h2>{{animal.Tipo}}</h2>\n            <p>{{animal.Ubicacion}}</p>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ng-container>\n  </ion-row>\n </ion-grid>\n</ion-content>\n";

/***/ }),

/***/ 8784:
/*!********************************************************!*\
  !*** ./node_modules/@angular/common/fesm2015/http.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTTP_INTERCEPTORS": () => (/* binding */ HTTP_INTERCEPTORS),
/* harmony export */   "HttpBackend": () => (/* binding */ HttpBackend),
/* harmony export */   "HttpClient": () => (/* binding */ HttpClient),
/* harmony export */   "HttpClientJsonpModule": () => (/* binding */ HttpClientJsonpModule),
/* harmony export */   "HttpClientModule": () => (/* binding */ HttpClientModule),
/* harmony export */   "HttpClientXsrfModule": () => (/* binding */ HttpClientXsrfModule),
/* harmony export */   "HttpContext": () => (/* binding */ HttpContext),
/* harmony export */   "HttpContextToken": () => (/* binding */ HttpContextToken),
/* harmony export */   "HttpErrorResponse": () => (/* binding */ HttpErrorResponse),
/* harmony export */   "HttpEventType": () => (/* binding */ HttpEventType),
/* harmony export */   "HttpHandler": () => (/* binding */ HttpHandler),
/* harmony export */   "HttpHeaderResponse": () => (/* binding */ HttpHeaderResponse),
/* harmony export */   "HttpHeaders": () => (/* binding */ HttpHeaders),
/* harmony export */   "HttpParams": () => (/* binding */ HttpParams),
/* harmony export */   "HttpRequest": () => (/* binding */ HttpRequest),
/* harmony export */   "HttpResponse": () => (/* binding */ HttpResponse),
/* harmony export */   "HttpResponseBase": () => (/* binding */ HttpResponseBase),
/* harmony export */   "HttpUrlEncodingCodec": () => (/* binding */ HttpUrlEncodingCodec),
/* harmony export */   "HttpXhrBackend": () => (/* binding */ HttpXhrBackend),
/* harmony export */   "HttpXsrfTokenExtractor": () => (/* binding */ HttpXsrfTokenExtractor),
/* harmony export */   "JsonpClientBackend": () => (/* binding */ JsonpClientBackend),
/* harmony export */   "JsonpInterceptor": () => (/* binding */ JsonpInterceptor),
/* harmony export */   "XhrFactory": () => (/* binding */ XhrFactory),
/* harmony export */   "ɵHttpInterceptingHandler": () => (/* binding */ HttpInterceptingHandler)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1133);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);
/**
 * @license Angular v14.2.8
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */






/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
 * `HttpResponse`.
 *
 * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
 * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
 * `HttpBackend`.
 *
 * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
 *
 * @publicApi
 */

class HttpHandler {}
/**
 * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
 *
 * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
 *
 * When injected, `HttpBackend` dispatches requests directly to the backend, without going
 * through the interceptor chain.
 *
 * @publicApi
 */


class HttpBackend {}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Represents the header configuration options for an HTTP request.
 * Instances are immutable. Modifying methods return a cloned
 * instance with the change. The original object is never changed.
 *
 * @publicApi
 */


class HttpHeaders {
  /**  Constructs a new HTTP header object with the given values.*/
  constructor(headers) {
    /**
     * Internal map of lowercased header names to the normalized
     * form of the name (the form seen first).
     */
    this.normalizedNames = new Map();
    /**
     * Queued updates to be materialized the next initialization.
     */

    this.lazyUpdate = null;

    if (!headers) {
      this.headers = new Map();
    } else if (typeof headers === 'string') {
      this.lazyInit = () => {
        this.headers = new Map();
        headers.split('\n').forEach(line => {
          const index = line.indexOf(':');

          if (index > 0) {
            const name = line.slice(0, index);
            const key = name.toLowerCase();
            const value = line.slice(index + 1).trim();
            this.maybeSetNormalizedName(name, key);

            if (this.headers.has(key)) {
              this.headers.get(key).push(value);
            } else {
              this.headers.set(key, [value]);
            }
          }
        });
      };
    } else {
      this.lazyInit = () => {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
          assertValidHeaders(headers);
        }

        this.headers = new Map();
        Object.keys(headers).forEach(name => {
          let values = headers[name];
          const key = name.toLowerCase();

          if (typeof values === 'string') {
            values = [values];
          }

          if (values.length > 0) {
            this.headers.set(key, values);
            this.maybeSetNormalizedName(name, key);
          }
        });
      };
    }
  }
  /**
   * Checks for existence of a given header.
   *
   * @param name The header name to check for existence.
   *
   * @returns True if the header exists, false otherwise.
   */


  has(name) {
    this.init();
    return this.headers.has(name.toLowerCase());
  }
  /**
   * Retrieves the first value of a given header.
   *
   * @param name The header name.
   *
   * @returns The value string if the header exists, null otherwise
   */


  get(name) {
    this.init();
    const values = this.headers.get(name.toLowerCase());
    return values && values.length > 0 ? values[0] : null;
  }
  /**
   * Retrieves the names of the headers.
   *
   * @returns A list of header names.
   */


  keys() {
    this.init();
    return Array.from(this.normalizedNames.values());
  }
  /**
   * Retrieves a list of values for a given header.
   *
   * @param name The header name from which to retrieve values.
   *
   * @returns A string of values if the header exists, null otherwise.
   */


  getAll(name) {
    this.init();
    return this.headers.get(name.toLowerCase()) || null;
  }
  /**
   * Appends a new value to the existing set of values for a header
   * and returns them in a clone of the original instance.
   *
   * @param name The header name for which to append the values.
   * @param value The value to append.
   *
   * @returns A clone of the HTTP headers object with the value appended to the given header.
   */


  append(name, value) {
    return this.clone({
      name,
      value,
      op: 'a'
    });
  }
  /**
   * Sets or modifies a value for a given header in a clone of the original instance.
   * If the header already exists, its value is replaced with the given value
   * in the returned object.
   *
   * @param name The header name.
   * @param value The value or values to set or override for the given header.
   *
   * @returns A clone of the HTTP headers object with the newly set header value.
   */


  set(name, value) {
    return this.clone({
      name,
      value,
      op: 's'
    });
  }
  /**
   * Deletes values for a given header in a clone of the original instance.
   *
   * @param name The header name.
   * @param value The value or values to delete for the given header.
   *
   * @returns A clone of the HTTP headers object with the given value deleted.
   */


  delete(name, value) {
    return this.clone({
      name,
      value,
      op: 'd'
    });
  }

  maybeSetNormalizedName(name, lcName) {
    if (!this.normalizedNames.has(lcName)) {
      this.normalizedNames.set(lcName, name);
    }
  }

  init() {
    if (!!this.lazyInit) {
      if (this.lazyInit instanceof HttpHeaders) {
        this.copyFrom(this.lazyInit);
      } else {
        this.lazyInit();
      }

      this.lazyInit = null;

      if (!!this.lazyUpdate) {
        this.lazyUpdate.forEach(update => this.applyUpdate(update));
        this.lazyUpdate = null;
      }
    }
  }

  copyFrom(other) {
    other.init();
    Array.from(other.headers.keys()).forEach(key => {
      this.headers.set(key, other.headers.get(key));
      this.normalizedNames.set(key, other.normalizedNames.get(key));
    });
  }

  clone(update) {
    const clone = new HttpHeaders();
    clone.lazyInit = !!this.lazyInit && this.lazyInit instanceof HttpHeaders ? this.lazyInit : this;
    clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
    return clone;
  }

  applyUpdate(update) {
    const key = update.name.toLowerCase();

    switch (update.op) {
      case 'a':
      case 's':
        let value = update.value;

        if (typeof value === 'string') {
          value = [value];
        }

        if (value.length === 0) {
          return;
        }

        this.maybeSetNormalizedName(update.name, key);
        const base = (update.op === 'a' ? this.headers.get(key) : undefined) || [];
        base.push(...value);
        this.headers.set(key, base);
        break;

      case 'd':
        const toDelete = update.value;

        if (!toDelete) {
          this.headers.delete(key);
          this.normalizedNames.delete(key);
        } else {
          let existing = this.headers.get(key);

          if (!existing) {
            return;
          }

          existing = existing.filter(value => toDelete.indexOf(value) === -1);

          if (existing.length === 0) {
            this.headers.delete(key);
            this.normalizedNames.delete(key);
          } else {
            this.headers.set(key, existing);
          }
        }

        break;
    }
  }
  /**
   * @internal
   */


  forEach(fn) {
    this.init();
    Array.from(this.normalizedNames.keys()).forEach(key => fn(this.normalizedNames.get(key), this.headers.get(key)));
  }

}
/**
 * Verifies that the headers object has the right shape: the values
 * must be either strings or arrays. Throws an error if an invalid
 * header value is present.
 */


function assertValidHeaders(headers) {
  for (const [key, value] of Object.entries(headers)) {
    if (typeof value !== 'string' && !Array.isArray(value)) {
      throw new Error(`Unexpected value of the \`${key}\` header provided. ` + `Expecting either a string or an array, but got: \`${value}\`.`);
    }
  }
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Provides encoding and decoding of URL parameter and query-string values.
 *
 * Serializes and parses URL parameter keys and values to encode and decode them.
 * If you pass URL query parameters without encoding,
 * the query parameters can be misinterpreted at the receiving end.
 *
 *
 * @publicApi
 */


class HttpUrlEncodingCodec {
  /**
   * Encodes a key name for a URL parameter or query-string.
   * @param key The key name.
   * @returns The encoded key name.
   */
  encodeKey(key) {
    return standardEncoding(key);
  }
  /**
   * Encodes the value of a URL parameter or query-string.
   * @param value The value.
   * @returns The encoded value.
   */


  encodeValue(value) {
    return standardEncoding(value);
  }
  /**
   * Decodes an encoded URL parameter or query-string key.
   * @param key The encoded key name.
   * @returns The decoded key name.
   */


  decodeKey(key) {
    return decodeURIComponent(key);
  }
  /**
   * Decodes an encoded URL parameter or query-string value.
   * @param value The encoded value.
   * @returns The decoded value.
   */


  decodeValue(value) {
    return decodeURIComponent(value);
  }

}

function paramParser(rawParams, codec) {
  const map = new Map();

  if (rawParams.length > 0) {
    // The `window.location.search` can be used while creating an instance of the `HttpParams` class
    // (e.g. `new HttpParams({ fromString: window.location.search })`). The `window.location.search`
    // may start with the `?` char, so we strip it if it's present.
    const params = rawParams.replace(/^\?/, '').split('&');
    params.forEach(param => {
      const eqIdx = param.indexOf('=');
      const [key, val] = eqIdx == -1 ? [codec.decodeKey(param), ''] : [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))];
      const list = map.get(key) || [];
      list.push(val);
      map.set(key, list);
    });
  }

  return map;
}
/**
 * Encode input string with standard encodeURIComponent and then un-encode specific characters.
 */


const STANDARD_ENCODING_REGEX = /%(\d[a-f0-9])/gi;
const STANDARD_ENCODING_REPLACEMENTS = {
  '40': '@',
  '3A': ':',
  '24': '$',
  '2C': ',',
  '3B': ';',
  '3D': '=',
  '3F': '?',
  '2F': '/'
};

function standardEncoding(v) {
  return encodeURIComponent(v).replace(STANDARD_ENCODING_REGEX, (s, t) => {
    var _a;

    return (_a = STANDARD_ENCODING_REPLACEMENTS[t]) !== null && _a !== void 0 ? _a : s;
  });
}

function valueToString(value) {
  return `${value}`;
}
/**
 * An HTTP request/response body that represents serialized parameters,
 * per the MIME type `application/x-www-form-urlencoded`.
 *
 * This class is immutable; all mutation operations return a new instance.
 *
 * @publicApi
 */


class HttpParams {
  constructor(options = {}) {
    this.updates = null;
    this.cloneFrom = null;
    this.encoder = options.encoder || new HttpUrlEncodingCodec();

    if (!!options.fromString) {
      if (!!options.fromObject) {
        throw new Error(`Cannot specify both fromString and fromObject.`);
      }

      this.map = paramParser(options.fromString, this.encoder);
    } else if (!!options.fromObject) {
      this.map = new Map();
      Object.keys(options.fromObject).forEach(key => {
        const value = options.fromObject[key]; // convert the values to strings

        const values = Array.isArray(value) ? value.map(valueToString) : [valueToString(value)];
        this.map.set(key, values);
      });
    } else {
      this.map = null;
    }
  }
  /**
   * Reports whether the body includes one or more values for a given parameter.
   * @param param The parameter name.
   * @returns True if the parameter has one or more values,
   * false if it has no value or is not present.
   */


  has(param) {
    this.init();
    return this.map.has(param);
  }
  /**
   * Retrieves the first value for a parameter.
   * @param param The parameter name.
   * @returns The first value of the given parameter,
   * or `null` if the parameter is not present.
   */


  get(param) {
    this.init();
    const res = this.map.get(param);
    return !!res ? res[0] : null;
  }
  /**
   * Retrieves all values for a  parameter.
   * @param param The parameter name.
   * @returns All values in a string array,
   * or `null` if the parameter not present.
   */


  getAll(param) {
    this.init();
    return this.map.get(param) || null;
  }
  /**
   * Retrieves all the parameters for this body.
   * @returns The parameter names in a string array.
   */


  keys() {
    this.init();
    return Array.from(this.map.keys());
  }
  /**
   * Appends a new value to existing values for a parameter.
   * @param param The parameter name.
   * @param value The new value to add.
   * @return A new body with the appended value.
   */


  append(param, value) {
    return this.clone({
      param,
      value,
      op: 'a'
    });
  }
  /**
   * Constructs a new body with appended values for the given parameter name.
   * @param params parameters and values
   * @return A new body with the new value.
   */


  appendAll(params) {
    const updates = [];
    Object.keys(params).forEach(param => {
      const value = params[param];

      if (Array.isArray(value)) {
        value.forEach(_value => {
          updates.push({
            param,
            value: _value,
            op: 'a'
          });
        });
      } else {
        updates.push({
          param,
          value: value,
          op: 'a'
        });
      }
    });
    return this.clone(updates);
  }
  /**
   * Replaces the value for a parameter.
   * @param param The parameter name.
   * @param value The new value.
   * @return A new body with the new value.
   */


  set(param, value) {
    return this.clone({
      param,
      value,
      op: 's'
    });
  }
  /**
   * Removes a given value or all values from a parameter.
   * @param param The parameter name.
   * @param value The value to remove, if provided.
   * @return A new body with the given value removed, or with all values
   * removed if no value is specified.
   */


  delete(param, value) {
    return this.clone({
      param,
      value,
      op: 'd'
    });
  }
  /**
   * Serializes the body to an encoded string, where key-value pairs (separated by `=`) are
   * separated by `&`s.
   */


  toString() {
    this.init();
    return this.keys().map(key => {
      const eKey = this.encoder.encodeKey(key); // `a: ['1']` produces `'a=1'`
      // `b: []` produces `''`
      // `c: ['1', '2']` produces `'c=1&c=2'`

      return this.map.get(key).map(value => eKey + '=' + this.encoder.encodeValue(value)).join('&');
    }) // filter out empty values because `b: []` produces `''`
    // which results in `a=1&&c=1&c=2` instead of `a=1&c=1&c=2` if we don't
    .filter(param => param !== '').join('&');
  }

  clone(update) {
    const clone = new HttpParams({
      encoder: this.encoder
    });
    clone.cloneFrom = this.cloneFrom || this;
    clone.updates = (this.updates || []).concat(update);
    return clone;
  }

  init() {
    if (this.map === null) {
      this.map = new Map();
    }

    if (this.cloneFrom !== null) {
      this.cloneFrom.init();
      this.cloneFrom.keys().forEach(key => this.map.set(key, this.cloneFrom.map.get(key)));
      this.updates.forEach(update => {
        switch (update.op) {
          case 'a':
          case 's':
            const base = (update.op === 'a' ? this.map.get(update.param) : undefined) || [];
            base.push(valueToString(update.value));
            this.map.set(update.param, base);
            break;

          case 'd':
            if (update.value !== undefined) {
              let base = this.map.get(update.param) || [];
              const idx = base.indexOf(valueToString(update.value));

              if (idx !== -1) {
                base.splice(idx, 1);
              }

              if (base.length > 0) {
                this.map.set(update.param, base);
              } else {
                this.map.delete(update.param);
              }
            } else {
              this.map.delete(update.param);
              break;
            }

        }
      });
      this.cloneFrom = this.updates = null;
    }
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * A token used to manipulate and access values stored in `HttpContext`.
 *
 * @publicApi
 */


class HttpContextToken {
  constructor(defaultValue) {
    this.defaultValue = defaultValue;
  }

}
/**
 * Http context stores arbitrary user defined values and ensures type safety without
 * actually knowing the types. It is backed by a `Map` and guarantees that keys do not clash.
 *
 * This context is mutable and is shared between cloned requests unless explicitly specified.
 *
 * @usageNotes
 *
 * ### Usage Example
 *
 * ```typescript
 * // inside cache.interceptors.ts
 * export const IS_CACHE_ENABLED = new HttpContextToken<boolean>(() => false);
 *
 * export class CacheInterceptor implements HttpInterceptor {
 *
 *   intercept(req: HttpRequest<any>, delegate: HttpHandler): Observable<HttpEvent<any>> {
 *     if (req.context.get(IS_CACHE_ENABLED) === true) {
 *       return ...;
 *     }
 *     return delegate.handle(req);
 *   }
 * }
 *
 * // inside a service
 *
 * this.httpClient.get('/api/weather', {
 *   context: new HttpContext().set(IS_CACHE_ENABLED, true)
 * }).subscribe(...);
 * ```
 *
 * @publicApi
 */


class HttpContext {
  constructor() {
    this.map = new Map();
  }
  /**
   * Store a value in the context. If a value is already present it will be overwritten.
   *
   * @param token The reference to an instance of `HttpContextToken`.
   * @param value The value to store.
   *
   * @returns A reference to itself for easy chaining.
   */


  set(token, value) {
    this.map.set(token, value);
    return this;
  }
  /**
   * Retrieve the value associated with the given token.
   *
   * @param token The reference to an instance of `HttpContextToken`.
   *
   * @returns The stored value or default if one is defined.
   */


  get(token) {
    if (!this.map.has(token)) {
      this.map.set(token, token.defaultValue());
    }

    return this.map.get(token);
  }
  /**
   * Delete the value associated with the given token.
   *
   * @param token The reference to an instance of `HttpContextToken`.
   *
   * @returns A reference to itself for easy chaining.
   */


  delete(token) {
    this.map.delete(token);
    return this;
  }
  /**
   * Checks for existence of a given token.
   *
   * @param token The reference to an instance of `HttpContextToken`.
   *
   * @returns True if the token exists, false otherwise.
   */


  has(token) {
    return this.map.has(token);
  }
  /**
   * @returns a list of tokens currently stored in the context.
   */


  keys() {
    return this.map.keys();
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Determine whether the given HTTP method may include a body.
 */


function mightHaveBody(method) {
  switch (method) {
    case 'DELETE':
    case 'GET':
    case 'HEAD':
    case 'OPTIONS':
    case 'JSONP':
      return false;

    default:
      return true;
  }
}
/**
 * Safely assert whether the given value is an ArrayBuffer.
 *
 * In some execution environments ArrayBuffer is not defined.
 */


function isArrayBuffer(value) {
  return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
}
/**
 * Safely assert whether the given value is a Blob.
 *
 * In some execution environments Blob is not defined.
 */


function isBlob(value) {
  return typeof Blob !== 'undefined' && value instanceof Blob;
}
/**
 * Safely assert whether the given value is a FormData instance.
 *
 * In some execution environments FormData is not defined.
 */


function isFormData(value) {
  return typeof FormData !== 'undefined' && value instanceof FormData;
}
/**
 * Safely assert whether the given value is a URLSearchParams instance.
 *
 * In some execution environments URLSearchParams is not defined.
 */


function isUrlSearchParams(value) {
  return typeof URLSearchParams !== 'undefined' && value instanceof URLSearchParams;
}
/**
 * An outgoing HTTP request with an optional typed body.
 *
 * `HttpRequest` represents an outgoing request, including URL, method,
 * headers, body, and other request configuration options. Instances should be
 * assumed to be immutable. To modify a `HttpRequest`, the `clone`
 * method should be used.
 *
 * @publicApi
 */


class HttpRequest {
  constructor(method, url, third, fourth) {
    this.url = url;
    /**
     * The request body, or `null` if one isn't set.
     *
     * Bodies are not enforced to be immutable, as they can include a reference to any
     * user-defined data type. However, interceptors should take care to preserve
     * idempotence by treating them as such.
     */

    this.body = null;
    /**
     * Whether this request should be made in a way that exposes progress events.
     *
     * Progress events are expensive (change detection runs on each event) and so
     * they should only be requested if the consumer intends to monitor them.
     */

    this.reportProgress = false;
    /**
     * Whether this request should be sent with outgoing credentials (cookies).
     */

    this.withCredentials = false;
    /**
     * The expected response type of the server.
     *
     * This is used to parse the response appropriately before returning it to
     * the requestee.
     */

    this.responseType = 'json';
    this.method = method.toUpperCase(); // Next, need to figure out which argument holds the HttpRequestInit
    // options, if any.

    let options; // Check whether a body argument is expected. The only valid way to omit
    // the body argument is to use a known no-body method like GET.

    if (mightHaveBody(this.method) || !!fourth) {
      // Body is the third argument, options are the fourth.
      this.body = third !== undefined ? third : null;
      options = fourth;
    } else {
      // No body required, options are the third argument. The body stays null.
      options = third;
    } // If options have been passed, interpret them.


    if (options) {
      // Normalize reportProgress and withCredentials.
      this.reportProgress = !!options.reportProgress;
      this.withCredentials = !!options.withCredentials; // Override default response type of 'json' if one is provided.

      if (!!options.responseType) {
        this.responseType = options.responseType;
      } // Override headers if they're provided.


      if (!!options.headers) {
        this.headers = options.headers;
      }

      if (!!options.context) {
        this.context = options.context;
      }

      if (!!options.params) {
        this.params = options.params;
      }
    } // If no headers have been passed in, construct a new HttpHeaders instance.


    if (!this.headers) {
      this.headers = new HttpHeaders();
    } // If no context have been passed in, construct a new HttpContext instance.


    if (!this.context) {
      this.context = new HttpContext();
    } // If no parameters have been passed in, construct a new HttpUrlEncodedParams instance.


    if (!this.params) {
      this.params = new HttpParams();
      this.urlWithParams = url;
    } else {
      // Encode the parameters to a string in preparation for inclusion in the URL.
      const params = this.params.toString();

      if (params.length === 0) {
        // No parameters, the visible URL is just the URL given at creation time.
        this.urlWithParams = url;
      } else {
        // Does the URL already have query parameters? Look for '?'.
        const qIdx = url.indexOf('?'); // There are 3 cases to handle:
        // 1) No existing parameters -> append '?' followed by params.
        // 2) '?' exists and is followed by existing query string ->
        //    append '&' followed by params.
        // 3) '?' exists at the end of the url -> append params directly.
        // This basically amounts to determining the character, if any, with
        // which to join the URL and parameters.

        const sep = qIdx === -1 ? '?' : qIdx < url.length - 1 ? '&' : '';
        this.urlWithParams = url + sep + params;
      }
    }
  }
  /**
   * Transform the free-form body into a serialized format suitable for
   * transmission to the server.
   */


  serializeBody() {
    // If no body is present, no need to serialize it.
    if (this.body === null) {
      return null;
    } // Check whether the body is already in a serialized form. If so,
    // it can just be returned directly.


    if (isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) || isUrlSearchParams(this.body) || typeof this.body === 'string') {
      return this.body;
    } // Check whether the body is an instance of HttpUrlEncodedParams.


    if (this.body instanceof HttpParams) {
      return this.body.toString();
    } // Check whether the body is an object or array, and serialize with JSON if so.


    if (typeof this.body === 'object' || typeof this.body === 'boolean' || Array.isArray(this.body)) {
      return JSON.stringify(this.body);
    } // Fall back on toString() for everything else.


    return this.body.toString();
  }
  /**
   * Examine the body and attempt to infer an appropriate MIME type
   * for it.
   *
   * If no such type can be inferred, this method will return `null`.
   */


  detectContentTypeHeader() {
    // An empty body has no content type.
    if (this.body === null) {
      return null;
    } // FormData bodies rely on the browser's content type assignment.


    if (isFormData(this.body)) {
      return null;
    } // Blobs usually have their own content type. If it doesn't, then
    // no type can be inferred.


    if (isBlob(this.body)) {
      return this.body.type || null;
    } // Array buffers have unknown contents and thus no type can be inferred.


    if (isArrayBuffer(this.body)) {
      return null;
    } // Technically, strings could be a form of JSON data, but it's safe enough
    // to assume they're plain strings.


    if (typeof this.body === 'string') {
      return 'text/plain';
    } // `HttpUrlEncodedParams` has its own content-type.


    if (this.body instanceof HttpParams) {
      return 'application/x-www-form-urlencoded;charset=UTF-8';
    } // Arrays, objects, boolean and numbers will be encoded as JSON.


    if (typeof this.body === 'object' || typeof this.body === 'number' || typeof this.body === 'boolean') {
      return 'application/json';
    } // No type could be inferred.


    return null;
  }

  clone(update = {}) {
    var _a; // For method, url, and responseType, take the current value unless
    // it is overridden in the update hash.


    const method = update.method || this.method;
    const url = update.url || this.url;
    const responseType = update.responseType || this.responseType; // The body is somewhat special - a `null` value in update.body means
    // whatever current body is present is being overridden with an empty
    // body, whereas an `undefined` value in update.body implies no
    // override.

    const body = update.body !== undefined ? update.body : this.body; // Carefully handle the boolean options to differentiate between
    // `false` and `undefined` in the update args.

    const withCredentials = update.withCredentials !== undefined ? update.withCredentials : this.withCredentials;
    const reportProgress = update.reportProgress !== undefined ? update.reportProgress : this.reportProgress; // Headers and params may be appended to if `setHeaders` or
    // `setParams` are used.

    let headers = update.headers || this.headers;
    let params = update.params || this.params; // Pass on context if needed

    const context = (_a = update.context) !== null && _a !== void 0 ? _a : this.context; // Check whether the caller has asked to add headers.

    if (update.setHeaders !== undefined) {
      // Set every requested header.
      headers = Object.keys(update.setHeaders).reduce((headers, name) => headers.set(name, update.setHeaders[name]), headers);
    } // Check whether the caller has asked to set params.


    if (update.setParams) {
      // Set every requested param.
      params = Object.keys(update.setParams).reduce((params, param) => params.set(param, update.setParams[param]), params);
    } // Finally, construct the new HttpRequest using the pieces from above.


    return new HttpRequest(method, url, body, {
      params,
      headers,
      context,
      reportProgress,
      responseType,
      withCredentials
    });
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Type enumeration for the different kinds of `HttpEvent`.
 *
 * @publicApi
 */


var HttpEventType;

(function (HttpEventType) {
  /**
   * The request was sent out over the wire.
   */
  HttpEventType[HttpEventType["Sent"] = 0] = "Sent";
  /**
   * An upload progress event was received.
   */

  HttpEventType[HttpEventType["UploadProgress"] = 1] = "UploadProgress";
  /**
   * The response status code and headers were received.
   */

  HttpEventType[HttpEventType["ResponseHeader"] = 2] = "ResponseHeader";
  /**
   * A download progress event was received.
   */

  HttpEventType[HttpEventType["DownloadProgress"] = 3] = "DownloadProgress";
  /**
   * The full response including the body was received.
   */

  HttpEventType[HttpEventType["Response"] = 4] = "Response";
  /**
   * A custom event from an interceptor or a backend.
   */

  HttpEventType[HttpEventType["User"] = 5] = "User";
})(HttpEventType || (HttpEventType = {}));
/**
 * Base class for both `HttpResponse` and `HttpHeaderResponse`.
 *
 * @publicApi
 */


class HttpResponseBase {
  /**
   * Super-constructor for all responses.
   *
   * The single parameter accepted is an initialization hash. Any properties
   * of the response passed there will override the default values.
   */
  constructor(init, defaultStatus = 200
  /* HttpStatusCode.Ok */
  , defaultStatusText = 'OK') {
    // If the hash has values passed, use them to initialize the response.
    // Otherwise use the default values.
    this.headers = init.headers || new HttpHeaders();
    this.status = init.status !== undefined ? init.status : defaultStatus;
    this.statusText = init.statusText || defaultStatusText;
    this.url = init.url || null; // Cache the ok value to avoid defining a getter.

    this.ok = this.status >= 200 && this.status < 300;
  }

}
/**
 * A partial HTTP response which only includes the status and header data,
 * but no response body.
 *
 * `HttpHeaderResponse` is a `HttpEvent` available on the response
 * event stream, only when progress events are requested.
 *
 * @publicApi
 */


class HttpHeaderResponse extends HttpResponseBase {
  /**
   * Create a new `HttpHeaderResponse` with the given parameters.
   */
  constructor(init = {}) {
    super(init);
    this.type = HttpEventType.ResponseHeader;
  }
  /**
   * Copy this `HttpHeaderResponse`, overriding its contents with the
   * given parameter hash.
   */


  clone(update = {}) {
    // Perform a straightforward initialization of the new HttpHeaderResponse,
    // overriding the current parameters with new ones if given.
    return new HttpHeaderResponse({
      headers: update.headers || this.headers,
      status: update.status !== undefined ? update.status : this.status,
      statusText: update.statusText || this.statusText,
      url: update.url || this.url || undefined
    });
  }

}
/**
 * A full HTTP response, including a typed response body (which may be `null`
 * if one was not returned).
 *
 * `HttpResponse` is a `HttpEvent` available on the response event
 * stream.
 *
 * @publicApi
 */


class HttpResponse extends HttpResponseBase {
  /**
   * Construct a new `HttpResponse`.
   */
  constructor(init = {}) {
    super(init);
    this.type = HttpEventType.Response;
    this.body = init.body !== undefined ? init.body : null;
  }

  clone(update = {}) {
    return new HttpResponse({
      body: update.body !== undefined ? update.body : this.body,
      headers: update.headers || this.headers,
      status: update.status !== undefined ? update.status : this.status,
      statusText: update.statusText || this.statusText,
      url: update.url || this.url || undefined
    });
  }

}
/**
 * A response that represents an error or failure, either from a
 * non-successful HTTP status, an error while executing the request,
 * or some other failure which occurred during the parsing of the response.
 *
 * Any error returned on the `Observable` response stream will be
 * wrapped in an `HttpErrorResponse` to provide additional context about
 * the state of the HTTP layer when the error occurred. The error property
 * will contain either a wrapped Error object or the error response returned
 * from the server.
 *
 * @publicApi
 */


class HttpErrorResponse extends HttpResponseBase {
  constructor(init) {
    // Initialize with a default status of 0 / Unknown Error.
    super(init, 0, 'Unknown Error');
    this.name = 'HttpErrorResponse';
    /**
     * Errors are never okay, even when the status code is in the 2xx success range.
     */

    this.ok = false; // If the response was successful, then this was a parse error. Otherwise, it was
    // a protocol-level failure of some sort. Either the request failed in transit
    // or the server returned an unsuccessful status code.

    if (this.status >= 200 && this.status < 300) {
      this.message = `Http failure during parsing for ${init.url || '(unknown url)'}`;
    } else {
      this.message = `Http failure response for ${init.url || '(unknown url)'}: ${init.status} ${init.statusText}`;
    }

    this.error = init.error || null;
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Constructs an instance of `HttpRequestOptions<T>` from a source `HttpMethodOptions` and
 * the given `body`. This function clones the object and adds the body.
 *
 * Note that the `responseType` *options* value is a String that identifies the
 * single data type of the response.
 * A single overload version of the method handles each response type.
 * The value of `responseType` cannot be a union, as the combined signature could imply.
 *
 */


function addBody(options, body) {
  return {
    body,
    headers: options.headers,
    context: options.context,
    observe: options.observe,
    params: options.params,
    reportProgress: options.reportProgress,
    responseType: options.responseType,
    withCredentials: options.withCredentials
  };
}
/**
 * Performs HTTP requests.
 * This service is available as an injectable class, with methods to perform HTTP requests.
 * Each request method has multiple signatures, and the return type varies based on
 * the signature that is called (mainly the values of `observe` and `responseType`).
 *
 * Note that the `responseType` *options* value is a String that identifies the
 * single data type of the response.
 * A single overload version of the method handles each response type.
 * The value of `responseType` cannot be a union, as the combined signature could imply.

 *
 * @usageNotes
 * Sample HTTP requests for the [Tour of Heroes](/tutorial/toh-pt0) application.
 *
 * ### HTTP Request Example
 *
 * ```
 *  // GET heroes whose name contains search term
 * searchHeroes(term: string): observable<Hero[]>{
 *
 *  const params = new HttpParams({fromString: 'name=term'});
 *    return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
 * }
 * ```
 *
 * Alternatively, the parameter string can be used without invoking HttpParams
 * by directly joining to the URL.
 * ```
 * this.httpClient.request('GET', this.heroesUrl + '?' + 'name=term', {responseType:'json'});
 * ```
 *
 *
 * ### JSONP Example
 * ```
 * requestJsonp(url, callback = 'callback') {
 *  return this.httpClient.jsonp(this.heroesURL, callback);
 * }
 * ```
 *
 * ### PATCH Example
 * ```
 * // PATCH one of the heroes' name
 * patchHero (id: number, heroName: string): Observable<{}> {
 * const url = `${this.heroesUrl}/${id}`;   // PATCH api/heroes/42
 *  return this.httpClient.patch(url, {name: heroName}, httpOptions)
 *    .pipe(catchError(this.handleError('patchHero')));
 * }
 * ```
 *
 * @see [HTTP Guide](guide/http)
 * @see [HTTP Request](api/common/http/HttpRequest)
 *
 * @publicApi
 */


class HttpClient {
  constructor(handler) {
    this.handler = handler;
  }
  /**
   * Constructs an observable for a generic HTTP request that, when subscribed,
   * fires the request through the chain of registered interceptors and on to the
   * server.
   *
   * You can pass an `HttpRequest` directly as the only parameter. In this case,
   * the call returns an observable of the raw `HttpEvent` stream.
   *
   * Alternatively you can pass an HTTP method as the first parameter,
   * a URL string as the second, and an options hash containing the request body as the third.
   * See `addBody()`. In this case, the specified `responseType` and `observe` options determine the
   * type of returned observable.
   *   * The `responseType` value determines how a successful response body is parsed.
   *   * If `responseType` is the default `json`, you can pass a type interface for the resulting
   * object as a type parameter to the call.
   *
   * The `observe` value determines the return type, according to what you are interested in
   * observing.
   *   * An `observe` value of events returns an observable of the raw `HttpEvent` stream, including
   * progress events by default.
   *   * An `observe` value of response returns an observable of `HttpResponse<T>`,
   * where the `T` parameter depends on the `responseType` and any optionally provided type
   * parameter.
   *   * An `observe` value of body returns an observable of `<T>` with the same `T` body type.
   *
   */


  request(first, url, options = {}) {
    let req; // First, check whether the primary argument is an instance of `HttpRequest`.

    if (first instanceof HttpRequest) {
      // It is. The other arguments must be undefined (per the signatures) and can be
      // ignored.
      req = first;
    } else {
      // It's a string, so it represents a URL. Construct a request based on it,
      // and incorporate the remaining arguments (assuming `GET` unless a method is
      // provided.
      // Figure out the headers.
      let headers = undefined;

      if (options.headers instanceof HttpHeaders) {
        headers = options.headers;
      } else {
        headers = new HttpHeaders(options.headers);
      } // Sort out parameters.


      let params = undefined;

      if (!!options.params) {
        if (options.params instanceof HttpParams) {
          params = options.params;
        } else {
          params = new HttpParams({
            fromObject: options.params
          });
        }
      } // Construct the request.


      req = new HttpRequest(first, url, options.body !== undefined ? options.body : null, {
        headers,
        context: options.context,
        params,
        reportProgress: options.reportProgress,
        // By default, JSON is assumed to be returned for all calls.
        responseType: options.responseType || 'json',
        withCredentials: options.withCredentials
      });
    } // Start with an Observable.of() the initial request, and run the handler (which
    // includes all interceptors) inside a concatMap(). This way, the handler runs
    // inside an Observable chain, which causes interceptors to be re-run on every
    // subscription (this also makes retries re-run the handler, including interceptors).


    const events$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.concatMap)(req => this.handler.handle(req))); // If coming via the API signature which accepts a previously constructed HttpRequest,
    // the only option is to get the event stream. Otherwise, return the event stream if
    // that is what was requested.

    if (first instanceof HttpRequest || options.observe === 'events') {
      return events$;
    } // The requested stream contains either the full response or the body. In either
    // case, the first step is to filter the event stream to extract a stream of
    // responses(s).


    const res$ = events$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(event => event instanceof HttpResponse)); // Decide which stream to return.

    switch (options.observe || 'body') {
      case 'body':
        // The requested stream is the body. Map the response stream to the response
        // body. This could be done more simply, but a misbehaving interceptor might
        // transform the response body into a different format and ignore the requested
        // responseType. Guard against this by validating that the response is of the
        // requested type.
        switch (req.responseType) {
          case 'arraybuffer':
            return res$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
              // Validate that the body is an ArrayBuffer.
              if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                throw new Error('Response is not an ArrayBuffer.');
              }

              return res.body;
            }));

          case 'blob':
            return res$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
              // Validate that the body is a Blob.
              if (res.body !== null && !(res.body instanceof Blob)) {
                throw new Error('Response is not a Blob.');
              }

              return res.body;
            }));

          case 'text':
            return res$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
              // Validate that the body is a string.
              if (res.body !== null && typeof res.body !== 'string') {
                throw new Error('Response is not a string.');
              }

              return res.body;
            }));

          case 'json':
          default:
            // No validation needed for JSON responses, as they can be of any type.
            return res$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => res.body));
        }

      case 'response':
        // The response stream was requested directly, so return it.
        return res$;

      default:
        // Guard against new future observe types being added.
        throw new Error(`Unreachable: unhandled observe type ${options.observe}}`);
    }
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `DELETE` request to execute on the server. See the individual overloads for
   * details on the return type.
   *
   * @param url     The endpoint URL.
   * @param options The HTTP options to send with the request.
   *
   */


  delete(url, options = {}) {
    return this.request('DELETE', url, options);
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `GET` request to execute on the server. See the individual overloads for
   * details on the return type.
   */


  get(url, options = {}) {
    return this.request('GET', url, options);
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `HEAD` request to execute on the server. The `HEAD` method returns
   * meta information about the resource without transferring the
   * resource itself. See the individual overloads for
   * details on the return type.
   */


  head(url, options = {}) {
    return this.request('HEAD', url, options);
  }
  /**
   * Constructs an `Observable` that, when subscribed, causes a request with the special method
   * `JSONP` to be dispatched via the interceptor pipeline.
   * The [JSONP pattern](https://en.wikipedia.org/wiki/JSONP) works around limitations of certain
   * API endpoints that don't support newer,
   * and preferable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) protocol.
   * JSONP treats the endpoint API as a JavaScript file and tricks the browser to process the
   * requests even if the API endpoint is not located on the same domain (origin) as the client-side
   * application making the request.
   * The endpoint API must support JSONP callback for JSONP requests to work.
   * The resource API returns the JSON response wrapped in a callback function.
   * You can pass the callback function name as one of the query parameters.
   * Note that JSONP requests can only be used with `GET` requests.
   *
   * @param url The resource URL.
   * @param callbackParam The callback function name.
   *
   */


  jsonp(url, callbackParam) {
    return this.request('JSONP', url, {
      params: new HttpParams().append(callbackParam, 'JSONP_CALLBACK'),
      observe: 'body',
      responseType: 'json'
    });
  }
  /**
   * Constructs an `Observable` that, when subscribed, causes the configured
   * `OPTIONS` request to execute on the server. This method allows the client
   * to determine the supported HTTP methods and other capabilities of an endpoint,
   * without implying a resource action. See the individual overloads for
   * details on the return type.
   */


  options(url, options = {}) {
    return this.request('OPTIONS', url, options);
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `PATCH` request to execute on the server. See the individual overloads for
   * details on the return type.
   */


  patch(url, body, options = {}) {
    return this.request('PATCH', url, addBody(options, body));
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `POST` request to execute on the server. The server responds with the location of
   * the replaced resource. See the individual overloads for
   * details on the return type.
   */


  post(url, body, options = {}) {
    return this.request('POST', url, addBody(options, body));
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `PUT` request to execute on the server. The `PUT` method replaces an existing resource
   * with a new set of values.
   * See the individual overloads for details on the return type.
   */


  put(url, body, options = {}) {
    return this.request('PUT', url, addBody(options, body));
  }

}

HttpClient.ɵfac = function HttpClient_Factory(t) {
  return new (t || HttpClient)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](HttpHandler));
};

HttpClient.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: HttpClient,
  factory: HttpClient.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpClient, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], function () {
    return [{
      type: HttpHandler
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
 *
 *
 */


class HttpInterceptorHandler {
  constructor(next, interceptor) {
    this.next = next;
    this.interceptor = interceptor;
  }

  handle(req) {
    return this.interceptor.intercept(req, this.next);
  }

}
/**
 * A multi-provider token that represents the array of registered
 * `HttpInterceptor` objects.
 *
 * @publicApi
 */


const HTTP_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.InjectionToken('HTTP_INTERCEPTORS');

class NoopInterceptor {
  intercept(req, next) {
    return next.handle(req);
  }

}

NoopInterceptor.ɵfac = function NoopInterceptor_Factory(t) {
  return new (t || NoopInterceptor)();
};

NoopInterceptor.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: NoopInterceptor,
  factory: NoopInterceptor.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NoopInterceptor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Every request made through JSONP needs a callback name that's unique across the
// whole page. Each request is assigned an id and the callback name is constructed
// from that. The next id to be assigned is tracked in a global variable here that
// is shared among all applications on the page.


let nextRequestId = 0;
/**
 * When a pending <script> is unsubscribed we'll move it to this document, so it won't be
 * executed.
 */

let foreignDocument; // Error text given when a JSONP script is injected, but doesn't invoke the callback
// passed in its URL.

const JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.'; // Error text given when a request is passed to the JsonpClientBackend that doesn't
// have a request method JSONP.

const JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.';
const JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.'; // Error text given when a request is passed to the JsonpClientBackend that has
// headers set

const JSONP_ERR_HEADERS_NOT_SUPPORTED = 'JSONP requests do not support headers.';
/**
 * DI token/abstract type representing a map of JSONP callbacks.
 *
 * In the browser, this should always be the `window` object.
 *
 *
 */

class JsonpCallbackContext {}
/**
 * Processes an `HttpRequest` with the JSONP method,
 * by performing JSONP style requests.
 * @see `HttpHandler`
 * @see `HttpXhrBackend`
 *
 * @publicApi
 */


class JsonpClientBackend {
  constructor(callbackMap, document) {
    this.callbackMap = callbackMap;
    this.document = document;
    /**
     * A resolved promise that can be used to schedule microtasks in the event handlers.
     */

    this.resolvedPromise = Promise.resolve();
  }
  /**
   * Get the name of the next callback method, by incrementing the global `nextRequestId`.
   */


  nextCallback() {
    return `ng_jsonp_callback_${nextRequestId++}`;
  }
  /**
   * Processes a JSONP request and returns an event stream of the results.
   * @param req The request object.
   * @returns An observable of the response events.
   *
   */


  handle(req) {
    // Firstly, check both the method and response type. If either doesn't match
    // then the request was improperly routed here and cannot be handled.
    if (req.method !== 'JSONP') {
      throw new Error(JSONP_ERR_WRONG_METHOD);
    } else if (req.responseType !== 'json') {
      throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
    } // Check the request headers. JSONP doesn't support headers and
    // cannot set any that were supplied.


    if (req.headers.keys().length > 0) {
      throw new Error(JSONP_ERR_HEADERS_NOT_SUPPORTED);
    } // Everything else happens inside the Observable boundary.


    return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(observer => {
      // The first step to make a request is to generate the callback name, and replace the
      // callback placeholder in the URL with the name. Care has to be taken here to ensure
      // a trailing &, if matched, gets inserted back into the URL in the correct place.
      const callback = this.nextCallback();
      const url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, `=${callback}$1`); // Construct the <script> tag and point it at the URL.

      const node = this.document.createElement('script');
      node.src = url; // A JSONP request requires waiting for multiple callbacks. These variables
      // are closed over and track state across those callbacks.
      // The response object, if one has been received, or null otherwise.

      let body = null; // Whether the response callback has been called.

      let finished = false; // Set the response callback in this.callbackMap (which will be the window
      // object in the browser. The script being loaded via the <script> tag will
      // eventually call this callback.

      this.callbackMap[callback] = data => {
        // Data has been received from the JSONP script. Firstly, delete this callback.
        delete this.callbackMap[callback]; // Set state to indicate data was received.

        body = data;
        finished = true;
      }; // cleanup() is a utility closure that removes the <script> from the page and
      // the response callback from the window. This logic is used in both the
      // success, error, and cancellation paths, so it's extracted out for convenience.


      const cleanup = () => {
        // Remove the <script> tag if it's still on the page.
        if (node.parentNode) {
          node.parentNode.removeChild(node);
        } // Remove the response callback from the callbackMap (window object in the
        // browser).


        delete this.callbackMap[callback];
      }; // onLoad() is the success callback which runs after the response callback
      // if the JSONP script loads successfully. The event itself is unimportant.
      // If something went wrong, onLoad() may run without the response callback
      // having been invoked.


      const onLoad = event => {
        // We wrap it in an extra Promise, to ensure the microtask
        // is scheduled after the loaded endpoint has executed any potential microtask itself,
        // which is not guaranteed in Internet Explorer and EdgeHTML. See issue #39496
        this.resolvedPromise.then(() => {
          // Cleanup the page.
          cleanup(); // Check whether the response callback has run.

          if (!finished) {
            // It hasn't, something went wrong with the request. Return an error via
            // the Observable error path. All JSONP errors have status 0.
            observer.error(new HttpErrorResponse({
              url,
              status: 0,
              statusText: 'JSONP Error',
              error: new Error(JSONP_ERR_NO_CALLBACK)
            }));
            return;
          } // Success. body either contains the response body or null if none was
          // returned.


          observer.next(new HttpResponse({
            body,
            status: 200
            /* HttpStatusCode.Ok */
            ,
            statusText: 'OK',
            url
          })); // Complete the stream, the response is over.

          observer.complete();
        });
      }; // onError() is the error callback, which runs if the script returned generates
      // a Javascript error. It emits the error via the Observable error channel as
      // a HttpErrorResponse.


      const onError = error => {
        cleanup(); // Wrap the error in a HttpErrorResponse.

        observer.error(new HttpErrorResponse({
          error,
          status: 0,
          statusText: 'JSONP Error',
          url
        }));
      }; // Subscribe to both the success (load) and error events on the <script> tag,
      // and add it to the page.


      node.addEventListener('load', onLoad);
      node.addEventListener('error', onError);
      this.document.body.appendChild(node); // The request has now been successfully sent.

      observer.next({
        type: HttpEventType.Sent
      }); // Cancellation handler.

      return () => {
        if (!finished) {
          this.removeListeners(node);
        } // And finally, clean up the page.


        cleanup();
      };
    });
  }

  removeListeners(script) {
    // Issue #34818
    // Changing <script>'s ownerDocument will prevent it from execution.
    // https://html.spec.whatwg.org/multipage/scripting.html#execute-the-script-block
    if (!foreignDocument) {
      foreignDocument = this.document.implementation.createHTMLDocument();
    }

    foreignDocument.adoptNode(script);
  }

}

JsonpClientBackend.ɵfac = function JsonpClientBackend_Factory(t) {
  return new (t || JsonpClientBackend)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](JsonpCallbackContext), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT));
};

JsonpClientBackend.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: JsonpClientBackend,
  factory: JsonpClientBackend.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](JsonpClientBackend, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], function () {
    return [{
      type: JsonpCallbackContext
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT]
      }]
    }];
  }, null);
})();
/**
 * Identifies requests with the method JSONP and
 * shifts them to the `JsonpClientBackend`.
 *
 * @see `HttpInterceptor`
 *
 * @publicApi
 */


class JsonpInterceptor {
  constructor(jsonp) {
    this.jsonp = jsonp;
  }
  /**
   * Identifies and handles a given JSONP request.
   * @param req The outgoing request object to handle.
   * @param next The next interceptor in the chain, or the backend
   * if no interceptors remain in the chain.
   * @returns An observable of the event stream.
   */


  intercept(req, next) {
    if (req.method === 'JSONP') {
      return this.jsonp.handle(req);
    } // Fall through for normal HTTP requests.


    return next.handle(req);
  }

}

JsonpInterceptor.ɵfac = function JsonpInterceptor_Factory(t) {
  return new (t || JsonpInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](JsonpClientBackend));
};

JsonpInterceptor.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: JsonpInterceptor,
  factory: JsonpInterceptor.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](JsonpInterceptor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], function () {
    return [{
      type: JsonpClientBackend
    }];
  }, null);
})();

const XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Determine an appropriate URL for the response, by checking either
 * XMLHttpRequest.responseURL or the X-Request-URL header.
 */

function getResponseUrl(xhr) {
  if ('responseURL' in xhr && xhr.responseURL) {
    return xhr.responseURL;
  }

  if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
    return xhr.getResponseHeader('X-Request-URL');
  }

  return null;
}
/**
 * Uses `XMLHttpRequest` to send requests to a backend server.
 * @see `HttpHandler`
 * @see `JsonpClientBackend`
 *
 * @publicApi
 */


class HttpXhrBackend {
  constructor(xhrFactory) {
    this.xhrFactory = xhrFactory;
  }
  /**
   * Processes a request and returns a stream of response events.
   * @param req The request object.
   * @returns An observable of the response events.
   */


  handle(req) {
    // Quick check to give a better error message when a user attempts to use
    // HttpClient.jsonp() without installing the HttpClientJsonpModule
    if (req.method === 'JSONP') {
      throw new Error(`Attempted to construct Jsonp request without HttpClientJsonpModule installed.`);
    } // Everything happens on Observable subscription.


    return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(observer => {
      // Start by setting up the XHR object with request method, URL, and withCredentials flag.
      const xhr = this.xhrFactory.build();
      xhr.open(req.method, req.urlWithParams);

      if (!!req.withCredentials) {
        xhr.withCredentials = true;
      } // Add all the requested headers.


      req.headers.forEach((name, values) => xhr.setRequestHeader(name, values.join(','))); // Add an Accept header if one isn't present already.

      if (!req.headers.has('Accept')) {
        xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
      } // Auto-detect the Content-Type header if one isn't present already.


      if (!req.headers.has('Content-Type')) {
        const detectedType = req.detectContentTypeHeader(); // Sometimes Content-Type detection fails.

        if (detectedType !== null) {
          xhr.setRequestHeader('Content-Type', detectedType);
        }
      } // Set the responseType if one was requested.


      if (req.responseType) {
        const responseType = req.responseType.toLowerCase(); // JSON responses need to be processed as text. This is because if the server
        // returns an XSSI-prefixed JSON response, the browser will fail to parse it,
        // xhr.response will be null, and xhr.responseText cannot be accessed to
        // retrieve the prefixed JSON data in order to strip the prefix. Thus, all JSON
        // is parsed by first requesting text and then applying JSON.parse.

        xhr.responseType = responseType !== 'json' ? responseType : 'text';
      } // Serialize the request body if one is present. If not, this will be set to null.


      const reqBody = req.serializeBody(); // If progress events are enabled, response headers will be delivered
      // in two events - the HttpHeaderResponse event and the full HttpResponse
      // event. However, since response headers don't change in between these
      // two events, it doesn't make sense to parse them twice. So headerResponse
      // caches the data extracted from the response whenever it's first parsed,
      // to ensure parsing isn't duplicated.

      let headerResponse = null; // partialFromXhr extracts the HttpHeaderResponse from the current XMLHttpRequest
      // state, and memoizes it into headerResponse.

      const partialFromXhr = () => {
        if (headerResponse !== null) {
          return headerResponse;
        }

        const statusText = xhr.statusText || 'OK'; // Parse headers from XMLHttpRequest - this step is lazy.

        const headers = new HttpHeaders(xhr.getAllResponseHeaders()); // Read the response URL from the XMLHttpResponse instance and fall back on the
        // request URL.

        const url = getResponseUrl(xhr) || req.url; // Construct the HttpHeaderResponse and memoize it.

        headerResponse = new HttpHeaderResponse({
          headers,
          status: xhr.status,
          statusText,
          url
        });
        return headerResponse;
      }; // Next, a few closures are defined for the various events which XMLHttpRequest can
      // emit. This allows them to be unregistered as event listeners later.
      // First up is the load event, which represents a response being fully available.


      const onLoad = () => {
        // Read response state from the memoized partial data.
        let {
          headers,
          status,
          statusText,
          url
        } = partialFromXhr(); // The body will be read out if present.

        let body = null;

        if (status !== 204
        /* HttpStatusCode.NoContent */
        ) {
          // Use XMLHttpRequest.response if set, responseText otherwise.
          body = typeof xhr.response === 'undefined' ? xhr.responseText : xhr.response;
        } // Normalize another potential bug (this one comes from CORS).


        if (status === 0) {
          status = !!body ? 200
          /* HttpStatusCode.Ok */
          : 0;
        } // ok determines whether the response will be transmitted on the event or
        // error channel. Unsuccessful status codes (not 2xx) will always be errors,
        // but a successful status code can still result in an error if the user
        // asked for JSON data and the body cannot be parsed as such.


        let ok = status >= 200 && status < 300; // Check whether the body needs to be parsed as JSON (in many cases the browser
        // will have done that already).

        if (req.responseType === 'json' && typeof body === 'string') {
          // Save the original body, before attempting XSSI prefix stripping.
          const originalBody = body;
          body = body.replace(XSSI_PREFIX, '');

          try {
            // Attempt the parse. If it fails, a parse error should be delivered to the user.
            body = body !== '' ? JSON.parse(body) : null;
          } catch (error) {
            // Since the JSON.parse failed, it's reasonable to assume this might not have been a
            // JSON response. Restore the original body (including any XSSI prefix) to deliver
            // a better error response.
            body = originalBody; // If this was an error request to begin with, leave it as a string, it probably
            // just isn't JSON. Otherwise, deliver the parsing error to the user.

            if (ok) {
              // Even though the response status was 2xx, this is still an error.
              ok = false; // The parse error contains the text of the body that failed to parse.

              body = {
                error,
                text: body
              };
            }
          }
        }

        if (ok) {
          // A successful response is delivered on the event stream.
          observer.next(new HttpResponse({
            body,
            headers,
            status,
            statusText,
            url: url || undefined
          })); // The full body has been received and delivered, no further events
          // are possible. This request is complete.

          observer.complete();
        } else {
          // An unsuccessful request is delivered on the error channel.
          observer.error(new HttpErrorResponse({
            // The error in this case is the response body (error from the server).
            error: body,
            headers,
            status,
            statusText,
            url: url || undefined
          }));
        }
      }; // The onError callback is called when something goes wrong at the network level.
      // Connection timeout, DNS error, offline, etc. These are actual errors, and are
      // transmitted on the error channel.


      const onError = error => {
        const {
          url
        } = partialFromXhr();
        const res = new HttpErrorResponse({
          error,
          status: xhr.status || 0,
          statusText: xhr.statusText || 'Unknown Error',
          url: url || undefined
        });
        observer.error(res);
      }; // The sentHeaders flag tracks whether the HttpResponseHeaders event
      // has been sent on the stream. This is necessary to track if progress
      // is enabled since the event will be sent on only the first download
      // progress event.


      let sentHeaders = false; // The download progress event handler, which is only registered if
      // progress events are enabled.

      const onDownProgress = event => {
        // Send the HttpResponseHeaders event if it hasn't been sent already.
        if (!sentHeaders) {
          observer.next(partialFromXhr());
          sentHeaders = true;
        } // Start building the download progress event to deliver on the response
        // event stream.


        let progressEvent = {
          type: HttpEventType.DownloadProgress,
          loaded: event.loaded
        }; // Set the total number of bytes in the event if it's available.

        if (event.lengthComputable) {
          progressEvent.total = event.total;
        } // If the request was for text content and a partial response is
        // available on XMLHttpRequest, include it in the progress event
        // to allow for streaming reads.


        if (req.responseType === 'text' && !!xhr.responseText) {
          progressEvent.partialText = xhr.responseText;
        } // Finally, fire the event.


        observer.next(progressEvent);
      }; // The upload progress event handler, which is only registered if
      // progress events are enabled.


      const onUpProgress = event => {
        // Upload progress events are simpler. Begin building the progress
        // event.
        let progress = {
          type: HttpEventType.UploadProgress,
          loaded: event.loaded
        }; // If the total number of bytes being uploaded is available, include
        // it.

        if (event.lengthComputable) {
          progress.total = event.total;
        } // Send the event.


        observer.next(progress);
      }; // By default, register for load and error events.


      xhr.addEventListener('load', onLoad);
      xhr.addEventListener('error', onError);
      xhr.addEventListener('timeout', onError);
      xhr.addEventListener('abort', onError); // Progress events are only enabled if requested.

      if (req.reportProgress) {
        // Download progress is always enabled if requested.
        xhr.addEventListener('progress', onDownProgress); // Upload progress depends on whether there is a body to upload.

        if (reqBody !== null && xhr.upload) {
          xhr.upload.addEventListener('progress', onUpProgress);
        }
      } // Fire the request, and notify the event stream that it was fired.


      xhr.send(reqBody);
      observer.next({
        type: HttpEventType.Sent
      }); // This is the return from the Observable function, which is the
      // request cancellation handler.

      return () => {
        // On a cancellation, remove all registered event listeners.
        xhr.removeEventListener('error', onError);
        xhr.removeEventListener('abort', onError);
        xhr.removeEventListener('load', onLoad);
        xhr.removeEventListener('timeout', onError);

        if (req.reportProgress) {
          xhr.removeEventListener('progress', onDownProgress);

          if (reqBody !== null && xhr.upload) {
            xhr.upload.removeEventListener('progress', onUpProgress);
          }
        } // Finally, abort the in-flight request.


        if (xhr.readyState !== xhr.DONE) {
          xhr.abort();
        }
      };
    });
  }

}

HttpXhrBackend.ɵfac = function HttpXhrBackend_Factory(t) {
  return new (t || HttpXhrBackend)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.XhrFactory));
};

HttpXhrBackend.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: HttpXhrBackend,
  factory: HttpXhrBackend.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpXhrBackend, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], function () {
    return [{
      type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.XhrFactory
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const XSRF_COOKIE_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.InjectionToken('XSRF_COOKIE_NAME');
const XSRF_HEADER_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.InjectionToken('XSRF_HEADER_NAME');
/**
 * Retrieves the current XSRF token to use with the next outgoing request.
 *
 * @publicApi
 */

class HttpXsrfTokenExtractor {}
/**
 * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
 */


class HttpXsrfCookieExtractor {
  constructor(doc, platform, cookieName) {
    this.doc = doc;
    this.platform = platform;
    this.cookieName = cookieName;
    this.lastCookieString = '';
    this.lastToken = null;
    /**
     * @internal for testing
     */

    this.parseCount = 0;
  }

  getToken() {
    if (this.platform === 'server') {
      return null;
    }

    const cookieString = this.doc.cookie || '';

    if (cookieString !== this.lastCookieString) {
      this.parseCount++;
      this.lastToken = (0,_angular_common__WEBPACK_IMPORTED_MODULE_6__["ɵparseCookieValue"])(cookieString, this.cookieName);
      this.lastCookieString = cookieString;
    }

    return this.lastToken;
  }

}

HttpXsrfCookieExtractor.ɵfac = function HttpXsrfCookieExtractor_Factory(t) {
  return new (t || HttpXsrfCookieExtractor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](XSRF_COOKIE_NAME));
};

HttpXsrfCookieExtractor.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: HttpXsrfCookieExtractor,
  factory: HttpXsrfCookieExtractor.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpXsrfCookieExtractor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
        args: [XSRF_COOKIE_NAME]
      }]
    }];
  }, null);
})();
/**
 * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
 */


class HttpXsrfInterceptor {
  constructor(tokenService, headerName) {
    this.tokenService = tokenService;
    this.headerName = headerName;
  }

  intercept(req, next) {
    const lcUrl = req.url.toLowerCase(); // Skip both non-mutating requests and absolute URLs.
    // Non-mutating requests don't require a token, and absolute URLs require special handling
    // anyway as the cookie set
    // on our origin is not the same as the token expected by another origin.

    if (req.method === 'GET' || req.method === 'HEAD' || lcUrl.startsWith('http://') || lcUrl.startsWith('https://')) {
      return next.handle(req);
    }

    const token = this.tokenService.getToken(); // Be careful not to overwrite an existing header of the same name.

    if (token !== null && !req.headers.has(this.headerName)) {
      req = req.clone({
        headers: req.headers.set(this.headerName, token)
      });
    }

    return next.handle(req);
  }

}

HttpXsrfInterceptor.ɵfac = function HttpXsrfInterceptor_Factory(t) {
  return new (t || HttpXsrfInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](HttpXsrfTokenExtractor), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](XSRF_HEADER_NAME));
};

HttpXsrfInterceptor.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: HttpXsrfInterceptor,
  factory: HttpXsrfInterceptor.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpXsrfInterceptor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], function () {
    return [{
      type: HttpXsrfTokenExtractor
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
        args: [XSRF_HEADER_NAME]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * An injectable `HttpHandler` that applies multiple interceptors
 * to a request before passing it to the given `HttpBackend`.
 *
 * The interceptors are loaded lazily from the injector, to allow
 * interceptors to themselves inject classes depending indirectly
 * on `HttpInterceptingHandler` itself.
 * @see `HttpInterceptor`
 */


class HttpInterceptingHandler {
  constructor(backend, injector) {
    this.backend = backend;
    this.injector = injector;
    this.chain = null;
  }

  handle(req) {
    if (this.chain === null) {
      const interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
      this.chain = interceptors.reduceRight((next, interceptor) => new HttpInterceptorHandler(next, interceptor), this.backend);
    }

    return this.chain.handle(req);
  }

}

HttpInterceptingHandler.ɵfac = function HttpInterceptingHandler_Factory(t) {
  return new (t || HttpInterceptingHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](HttpBackend), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector));
};

HttpInterceptingHandler.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: HttpInterceptingHandler,
  factory: HttpInterceptingHandler.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpInterceptingHandler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], function () {
    return [{
      type: HttpBackend
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector
    }];
  }, null);
})();
/**
 * Constructs an `HttpHandler` that applies interceptors
 * to a request before passing it to the given `HttpBackend`.
 *
 * Use as a factory function within `HttpClientModule`.
 *
 *
 */


function interceptingHandler(backend, interceptors = []) {
  if (!interceptors) {
    return backend;
  }

  return interceptors.reduceRight((next, interceptor) => new HttpInterceptorHandler(next, interceptor), backend);
}
/**
 * Factory function that determines where to store JSONP callbacks.
 *
 * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
 * in test environments. In that case, callbacks are stored on an anonymous object instead.
 *
 *
 */


function jsonpCallbackContext() {
  if (typeof window === 'object') {
    return window;
  }

  return {};
}
/**
 * Configures XSRF protection support for outgoing requests.
 *
 * For a server that supports a cookie-based XSRF protection system,
 * use directly to configure XSRF protection with the correct
 * cookie and header names.
 *
 * If no names are supplied, the default cookie name is `XSRF-TOKEN`
 * and the default header name is `X-XSRF-TOKEN`.
 *
 * @publicApi
 */


class HttpClientXsrfModule {
  /**
   * Disable the default XSRF protection.
   */
  static disable() {
    return {
      ngModule: HttpClientXsrfModule,
      providers: [{
        provide: HttpXsrfInterceptor,
        useClass: NoopInterceptor
      }]
    };
  }
  /**
   * Configure XSRF protection.
   * @param options An object that can specify either or both
   * cookie name or header name.
   * - Cookie name default is `XSRF-TOKEN`.
   * - Header name default is `X-XSRF-TOKEN`.
   *
   */


  static withOptions(options = {}) {
    return {
      ngModule: HttpClientXsrfModule,
      providers: [options.cookieName ? {
        provide: XSRF_COOKIE_NAME,
        useValue: options.cookieName
      } : [], options.headerName ? {
        provide: XSRF_HEADER_NAME,
        useValue: options.headerName
      } : []]
    };
  }

}

HttpClientXsrfModule.ɵfac = function HttpClientXsrfModule_Factory(t) {
  return new (t || HttpClientXsrfModule)();
};

HttpClientXsrfModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: HttpClientXsrfModule
});
HttpClientXsrfModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [HttpXsrfInterceptor, {
    provide: HTTP_INTERCEPTORS,
    useExisting: HttpXsrfInterceptor,
    multi: true
  }, {
    provide: HttpXsrfTokenExtractor,
    useClass: HttpXsrfCookieExtractor
  }, {
    provide: XSRF_COOKIE_NAME,
    useValue: 'XSRF-TOKEN'
  }, {
    provide: XSRF_HEADER_NAME,
    useValue: 'X-XSRF-TOKEN'
  }]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpClientXsrfModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
    args: [{
      providers: [HttpXsrfInterceptor, {
        provide: HTTP_INTERCEPTORS,
        useExisting: HttpXsrfInterceptor,
        multi: true
      }, {
        provide: HttpXsrfTokenExtractor,
        useClass: HttpXsrfCookieExtractor
      }, {
        provide: XSRF_COOKIE_NAME,
        useValue: 'XSRF-TOKEN'
      }, {
        provide: XSRF_HEADER_NAME,
        useValue: 'X-XSRF-TOKEN'
      }]
    }]
  }], null, null);
})();
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for XSRF. Automatically imported by `HttpClientModule`.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * @publicApi
 */


class HttpClientModule {}

HttpClientModule.ɵfac = function HttpClientModule_Factory(t) {
  return new (t || HttpClientModule)();
};

HttpClientModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: HttpClientModule,
  imports: [HttpClientXsrfModule]
});
HttpClientModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [HttpClient, {
    provide: HttpHandler,
    useClass: HttpInterceptingHandler
  }, HttpXhrBackend, {
    provide: HttpBackend,
    useExisting: HttpXhrBackend
  }],
  imports: [HttpClientXsrfModule.withOptions({
    cookieName: 'XSRF-TOKEN',
    headerName: 'X-XSRF-TOKEN'
  })]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpClientModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
    args: [{
      /**
       * Optional configuration for XSRF protection.
       */
      imports: [HttpClientXsrfModule.withOptions({
        cookieName: 'XSRF-TOKEN',
        headerName: 'X-XSRF-TOKEN'
      })],

      /**
       * Configures the [dependency injector](guide/glossary#injector) where it is imported
       * with supporting services for HTTP communications.
       */
      providers: [HttpClient, {
        provide: HttpHandler,
        useClass: HttpInterceptingHandler
      }, HttpXhrBackend, {
        provide: HttpBackend,
        useExisting: HttpXhrBackend
      }]
    }]
  }], null, null);
})();
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for JSONP.
 * Without this module, Jsonp requests reach the backend
 * with method JSONP, where they are rejected.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * @publicApi
 */


class HttpClientJsonpModule {}

HttpClientJsonpModule.ɵfac = function HttpClientJsonpModule_Factory(t) {
  return new (t || HttpClientJsonpModule)();
};

HttpClientJsonpModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: HttpClientJsonpModule
});
HttpClientJsonpModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [JsonpClientBackend, {
    provide: JsonpCallbackContext,
    useFactory: jsonpCallbackContext
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: JsonpInterceptor,
    multi: true
  }]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpClientJsonpModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
    args: [{
      providers: [JsonpClientBackend, {
        provide: JsonpCallbackContext,
        useFactory: jsonpCallbackContext
      }, {
        provide: HTTP_INTERCEPTORS,
        useClass: JsonpInterceptor,
        multi: true
      }]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * A wrapper around the `XMLHttpRequest` constructor.
 *
 * @publicApi
 * @see `XhrFactory`
 * @deprecated
 * `XhrFactory` has moved, please import `XhrFactory` from `@angular/common` instead.
 */


const XhrFactory = _angular_common__WEBPACK_IMPORTED_MODULE_6__.XhrFactory;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUU7TUFBakUsQ0FITztJQURaLENBQUQ7RUFGNkcsQ0FBRCxDQUE5SDtBQUFBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBTXhTLFVBQVUsR0FBR0MsdURBQW5CO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyIuL3NyYy9hcHAvaG9tZS9ob21lLXJvdXRpbmcubW9kdWxlLnRzIiwiLi9zcmMvYXBwL2hvbWUvaG9tZS5tb2R1bGUudHMiLCIuL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2UudHMiLCIuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb21tb24vZmVzbTIwMTUvaHR0cC5tanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEhvbWVQYWdlIH0gZnJvbSAnLi9ob21lLnBhZ2UnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIGNvbXBvbmVudDogSG9tZVBhZ2UsXG4gIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVQYWdlUm91dGluZ01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSG9tZVBhZ2UgfSBmcm9tICcuL2hvbWUucGFnZSc7XG5cbmltcG9ydCB7IEhvbWVQYWdlUm91dGluZ01vZHVsZSB9IGZyb20gJy4vaG9tZS1yb3V0aW5nLm1vZHVsZSc7XG5cbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBJb25pY01vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIEhvbWVQYWdlUm91dGluZ01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtIb21lUGFnZV1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZVBhZ2VNb2R1bGUge31cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7bWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1ob21lJyxcbiAgdGVtcGxhdGVVcmw6ICdob21lLnBhZ2UuaHRtbCcsXG4gIHN0eWxlVXJsczogWydob21lLnBhZ2Uuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBIb21lUGFnZSB7XG5cbiAgYW5pbWFsZXM6IGFueTtcbiAgZmlsdHJvOiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQpIHtcbiAgICB0aGlzLmFuaW1hbGVzID0gdGhpcy5odHRwQ2xpZW50LmdldCgnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2ptYW5nYW0vQXJjaGl2by1Kc29uLWFuaW1hbGVzL21haW4vYW5pbWFsZXMuanNvbicpO1xuICB9XG5cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2UgQW5ndWxhciB2MTQuMi44XG4gKiAoYykgMjAxMC0yMDIyIEdvb2dsZSBMTEMuIGh0dHBzOi8vYW5ndWxhci5pby9cbiAqIExpY2Vuc2U6IE1JVFxuICovXG5cbmltcG9ydCAqIGFzIGkxIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBET0NVTUVOVCwgybVwYXJzZUNvb2tpZVZhbHVlLCBYaHJGYWN0b3J5IGFzIFhockZhY3RvcnkkMSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgKiBhcyBpMCBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBJbmplY3QsIFBMQVRGT1JNX0lELCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgb2YsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNvbmNhdE1hcCwgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLyoqXG4gKiBUcmFuc2Zvcm1zIGFuIGBIdHRwUmVxdWVzdGAgaW50byBhIHN0cmVhbSBvZiBgSHR0cEV2ZW50YHMsIG9uZSBvZiB3aGljaCB3aWxsIGxpa2VseSBiZSBhXG4gKiBgSHR0cFJlc3BvbnNlYC5cbiAqXG4gKiBgSHR0cEhhbmRsZXJgIGlzIGluamVjdGFibGUuIFdoZW4gaW5qZWN0ZWQsIHRoZSBoYW5kbGVyIGluc3RhbmNlIGRpc3BhdGNoZXMgcmVxdWVzdHMgdG8gdGhlXG4gKiBmaXJzdCBpbnRlcmNlcHRvciBpbiB0aGUgY2hhaW4sIHdoaWNoIGRpc3BhdGNoZXMgdG8gdGhlIHNlY29uZCwgZXRjLCBldmVudHVhbGx5IHJlYWNoaW5nIHRoZVxuICogYEh0dHBCYWNrZW5kYC5cbiAqXG4gKiBJbiBhbiBgSHR0cEludGVyY2VwdG9yYCwgdGhlIGBIdHRwSGFuZGxlcmAgcGFyYW1ldGVyIGlzIHRoZSBuZXh0IGludGVyY2VwdG9yIGluIHRoZSBjaGFpbi5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmNsYXNzIEh0dHBIYW5kbGVyIHtcbn1cbi8qKlxuICogQSBmaW5hbCBgSHR0cEhhbmRsZXJgIHdoaWNoIHdpbGwgZGlzcGF0Y2ggdGhlIHJlcXVlc3QgdmlhIGJyb3dzZXIgSFRUUCBBUElzIHRvIGEgYmFja2VuZC5cbiAqXG4gKiBJbnRlcmNlcHRvcnMgc2l0IGJldHdlZW4gdGhlIGBIdHRwQ2xpZW50YCBpbnRlcmZhY2UgYW5kIHRoZSBgSHR0cEJhY2tlbmRgLlxuICpcbiAqIFdoZW4gaW5qZWN0ZWQsIGBIdHRwQmFja2VuZGAgZGlzcGF0Y2hlcyByZXF1ZXN0cyBkaXJlY3RseSB0byB0aGUgYmFja2VuZCwgd2l0aG91dCBnb2luZ1xuICogdGhyb3VnaCB0aGUgaW50ZXJjZXB0b3IgY2hhaW4uXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5jbGFzcyBIdHRwQmFja2VuZCB7XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBoZWFkZXIgY29uZmlndXJhdGlvbiBvcHRpb25zIGZvciBhbiBIVFRQIHJlcXVlc3QuXG4gKiBJbnN0YW5jZXMgYXJlIGltbXV0YWJsZS4gTW9kaWZ5aW5nIG1ldGhvZHMgcmV0dXJuIGEgY2xvbmVkXG4gKiBpbnN0YW5jZSB3aXRoIHRoZSBjaGFuZ2UuIFRoZSBvcmlnaW5hbCBvYmplY3QgaXMgbmV2ZXIgY2hhbmdlZC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmNsYXNzIEh0dHBIZWFkZXJzIHtcbiAgICAvKiogIENvbnN0cnVjdHMgYSBuZXcgSFRUUCBoZWFkZXIgb2JqZWN0IHdpdGggdGhlIGdpdmVuIHZhbHVlcy4qL1xuICAgIGNvbnN0cnVjdG9yKGhlYWRlcnMpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludGVybmFsIG1hcCBvZiBsb3dlcmNhc2VkIGhlYWRlciBuYW1lcyB0byB0aGUgbm9ybWFsaXplZFxuICAgICAgICAgKiBmb3JtIG9mIHRoZSBuYW1lICh0aGUgZm9ybSBzZWVuIGZpcnN0KS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubm9ybWFsaXplZE5hbWVzID0gbmV3IE1hcCgpO1xuICAgICAgICAvKipcbiAgICAgICAgICogUXVldWVkIHVwZGF0ZXMgdG8gYmUgbWF0ZXJpYWxpemVkIHRoZSBuZXh0IGluaXRpYWxpemF0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5sYXp5VXBkYXRlID0gbnVsbDtcbiAgICAgICAgaWYgKCFoZWFkZXJzKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGhlYWRlcnMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aGlzLmxhenlJbml0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgICAgICBoZWFkZXJzLnNwbGl0KCdcXG4nKS5mb3JFYWNoKGxpbmUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gbGluZS5zbGljZSgwLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGxpbmUuc2xpY2UoaW5kZXggKyAxKS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1heWJlU2V0Tm9ybWFsaXplZE5hbWUobmFtZSwga2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhlYWRlcnMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYWRlcnMuZ2V0KGtleSkucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KGtleSwgW3ZhbHVlXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxhenlJbml0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbmdEZXZNb2RlID09PSAndW5kZWZpbmVkJyB8fCBuZ0Rldk1vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXJ0VmFsaWRIZWFkZXJzKGhlYWRlcnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoaGVhZGVycykuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlcyA9IGhlYWRlcnNbbmFtZV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgPSBbdmFsdWVzXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoa2V5LCB2YWx1ZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXliZVNldE5vcm1hbGl6ZWROYW1lKG5hbWUsIGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGZvciBleGlzdGVuY2Ugb2YgYSBnaXZlbiBoZWFkZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgaGVhZGVyIG5hbWUgdG8gY2hlY2sgZm9yIGV4aXN0ZW5jZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGhlYWRlciBleGlzdHMsIGZhbHNlIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBoYXMobmFtZSkge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhZGVycy5oYXMobmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHRoZSBmaXJzdCB2YWx1ZSBvZiBhIGdpdmVuIGhlYWRlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBoZWFkZXIgbmFtZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFRoZSB2YWx1ZSBzdHJpbmcgaWYgdGhlIGhlYWRlciBleGlzdHMsIG51bGwgb3RoZXJ3aXNlXG4gICAgICovXG4gICAgZ2V0KG5hbWUpIHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuaGVhZGVycy5nZXQobmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlcyAmJiB2YWx1ZXMubGVuZ3RoID4gMCA/IHZhbHVlc1swXSA6IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB0aGUgbmFtZXMgb2YgdGhlIGhlYWRlcnMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBBIGxpc3Qgb2YgaGVhZGVyIG5hbWVzLlxuICAgICAqL1xuICAgIGtleXMoKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLm5vcm1hbGl6ZWROYW1lcy52YWx1ZXMoKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBhIGxpc3Qgb2YgdmFsdWVzIGZvciBhIGdpdmVuIGhlYWRlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBoZWFkZXIgbmFtZSBmcm9tIHdoaWNoIHRvIHJldHJpZXZlIHZhbHVlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIEEgc3RyaW5nIG9mIHZhbHVlcyBpZiB0aGUgaGVhZGVyIGV4aXN0cywgbnVsbCBvdGhlcndpc2UuXG4gICAgICovXG4gICAgZ2V0QWxsKG5hbWUpIHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYWRlcnMuZ2V0KG5hbWUudG9Mb3dlckNhc2UoKSkgfHwgbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQXBwZW5kcyBhIG5ldyB2YWx1ZSB0byB0aGUgZXhpc3Rpbmcgc2V0IG9mIHZhbHVlcyBmb3IgYSBoZWFkZXJcbiAgICAgKiBhbmQgcmV0dXJucyB0aGVtIGluIGEgY2xvbmUgb2YgdGhlIG9yaWdpbmFsIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIGhlYWRlciBuYW1lIGZvciB3aGljaCB0byBhcHBlbmQgdGhlIHZhbHVlcy5cbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIGFwcGVuZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIEEgY2xvbmUgb2YgdGhlIEhUVFAgaGVhZGVycyBvYmplY3Qgd2l0aCB0aGUgdmFsdWUgYXBwZW5kZWQgdG8gdGhlIGdpdmVuIGhlYWRlci5cbiAgICAgKi9cbiAgICBhcHBlbmQobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoeyBuYW1lLCB2YWx1ZSwgb3A6ICdhJyB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyBvciBtb2RpZmllcyBhIHZhbHVlIGZvciBhIGdpdmVuIGhlYWRlciBpbiBhIGNsb25lIG9mIHRoZSBvcmlnaW5hbCBpbnN0YW5jZS5cbiAgICAgKiBJZiB0aGUgaGVhZGVyIGFscmVhZHkgZXhpc3RzLCBpdHMgdmFsdWUgaXMgcmVwbGFjZWQgd2l0aCB0aGUgZ2l2ZW4gdmFsdWVcbiAgICAgKiBpbiB0aGUgcmV0dXJuZWQgb2JqZWN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIGhlYWRlciBuYW1lLlxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgb3IgdmFsdWVzIHRvIHNldCBvciBvdmVycmlkZSBmb3IgdGhlIGdpdmVuIGhlYWRlci5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIEEgY2xvbmUgb2YgdGhlIEhUVFAgaGVhZGVycyBvYmplY3Qgd2l0aCB0aGUgbmV3bHkgc2V0IGhlYWRlciB2YWx1ZS5cbiAgICAgKi9cbiAgICBzZXQobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoeyBuYW1lLCB2YWx1ZSwgb3A6ICdzJyB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVsZXRlcyB2YWx1ZXMgZm9yIGEgZ2l2ZW4gaGVhZGVyIGluIGEgY2xvbmUgb2YgdGhlIG9yaWdpbmFsIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIGhlYWRlciBuYW1lLlxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgb3IgdmFsdWVzIHRvIGRlbGV0ZSBmb3IgdGhlIGdpdmVuIGhlYWRlci5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIEEgY2xvbmUgb2YgdGhlIEhUVFAgaGVhZGVycyBvYmplY3Qgd2l0aCB0aGUgZ2l2ZW4gdmFsdWUgZGVsZXRlZC5cbiAgICAgKi9cbiAgICBkZWxldGUobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoeyBuYW1lLCB2YWx1ZSwgb3A6ICdkJyB9KTtcbiAgICB9XG4gICAgbWF5YmVTZXROb3JtYWxpemVkTmFtZShuYW1lLCBsY05hbWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLm5vcm1hbGl6ZWROYW1lcy5oYXMobGNOYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5ub3JtYWxpemVkTmFtZXMuc2V0KGxjTmFtZSwgbmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgaWYgKCEhdGhpcy5sYXp5SW5pdCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubGF6eUluaXQgaW5zdGFuY2VvZiBIdHRwSGVhZGVycykge1xuICAgICAgICAgICAgICAgIHRoaXMuY29weUZyb20odGhpcy5sYXp5SW5pdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxhenlJbml0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxhenlJbml0ID0gbnVsbDtcbiAgICAgICAgICAgIGlmICghIXRoaXMubGF6eVVwZGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubGF6eVVwZGF0ZS5mb3JFYWNoKHVwZGF0ZSA9PiB0aGlzLmFwcGx5VXBkYXRlKHVwZGF0ZSkpO1xuICAgICAgICAgICAgICAgIHRoaXMubGF6eVVwZGF0ZSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29weUZyb20ob3RoZXIpIHtcbiAgICAgICAgb3RoZXIuaW5pdCgpO1xuICAgICAgICBBcnJheS5mcm9tKG90aGVyLmhlYWRlcnMua2V5cygpKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KGtleSwgb3RoZXIuaGVhZGVycy5nZXQoa2V5KSk7XG4gICAgICAgICAgICB0aGlzLm5vcm1hbGl6ZWROYW1lcy5zZXQoa2V5LCBvdGhlci5ub3JtYWxpemVkTmFtZXMuZ2V0KGtleSkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2xvbmUodXBkYXRlKSB7XG4gICAgICAgIGNvbnN0IGNsb25lID0gbmV3IEh0dHBIZWFkZXJzKCk7XG4gICAgICAgIGNsb25lLmxhenlJbml0ID1cbiAgICAgICAgICAgICghIXRoaXMubGF6eUluaXQgJiYgdGhpcy5sYXp5SW5pdCBpbnN0YW5jZW9mIEh0dHBIZWFkZXJzKSA/IHRoaXMubGF6eUluaXQgOiB0aGlzO1xuICAgICAgICBjbG9uZS5sYXp5VXBkYXRlID0gKHRoaXMubGF6eVVwZGF0ZSB8fCBbXSkuY29uY2F0KFt1cGRhdGVdKTtcbiAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgIH1cbiAgICBhcHBseVVwZGF0ZSh1cGRhdGUpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gdXBkYXRlLm5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgc3dpdGNoICh1cGRhdGUub3ApIHtcbiAgICAgICAgICAgIGNhc2UgJ2EnOlxuICAgICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdXBkYXRlLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gW3ZhbHVlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubWF5YmVTZXROb3JtYWxpemVkTmFtZSh1cGRhdGUubmFtZSwga2V5KTtcbiAgICAgICAgICAgICAgICBjb25zdCBiYXNlID0gKHVwZGF0ZS5vcCA9PT0gJ2EnID8gdGhpcy5oZWFkZXJzLmdldChrZXkpIDogdW5kZWZpbmVkKSB8fCBbXTtcbiAgICAgICAgICAgICAgICBiYXNlLnB1c2goLi4udmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoa2V5LCBiYXNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2QnOlxuICAgICAgICAgICAgICAgIGNvbnN0IHRvRGVsZXRlID0gdXBkYXRlLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICghdG9EZWxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJzLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vcm1hbGl6ZWROYW1lcy5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBleGlzdGluZyA9IHRoaXMuaGVhZGVycy5nZXQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFleGlzdGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nID0gZXhpc3RpbmcuZmlsdGVyKHZhbHVlID0+IHRvRGVsZXRlLmluZGV4T2YodmFsdWUpID09PSAtMSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChleGlzdGluZy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVycy5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9ybWFsaXplZE5hbWVzLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJzLnNldChrZXksIGV4aXN0aW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBmb3JFYWNoKGZuKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICBBcnJheS5mcm9tKHRoaXMubm9ybWFsaXplZE5hbWVzLmtleXMoKSlcbiAgICAgICAgICAgIC5mb3JFYWNoKGtleSA9PiBmbih0aGlzLm5vcm1hbGl6ZWROYW1lcy5nZXQoa2V5KSwgdGhpcy5oZWFkZXJzLmdldChrZXkpKSk7XG4gICAgfVxufVxuLyoqXG4gKiBWZXJpZmllcyB0aGF0IHRoZSBoZWFkZXJzIG9iamVjdCBoYXMgdGhlIHJpZ2h0IHNoYXBlOiB0aGUgdmFsdWVzXG4gKiBtdXN0IGJlIGVpdGhlciBzdHJpbmdzIG9yIGFycmF5cy4gVGhyb3dzIGFuIGVycm9yIGlmIGFuIGludmFsaWRcbiAqIGhlYWRlciB2YWx1ZSBpcyBwcmVzZW50LlxuICovXG5mdW5jdGlvbiBhc3NlcnRWYWxpZEhlYWRlcnMoaGVhZGVycykge1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGhlYWRlcnMpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIHZhbHVlIG9mIHRoZSBcXGAke2tleX1cXGAgaGVhZGVyIHByb3ZpZGVkLiBgICtcbiAgICAgICAgICAgICAgICBgRXhwZWN0aW5nIGVpdGhlciBhIHN0cmluZyBvciBhbiBhcnJheSwgYnV0IGdvdDogXFxgJHt2YWx1ZX1cXGAuYCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLyoqXG4gKiBQcm92aWRlcyBlbmNvZGluZyBhbmQgZGVjb2Rpbmcgb2YgVVJMIHBhcmFtZXRlciBhbmQgcXVlcnktc3RyaW5nIHZhbHVlcy5cbiAqXG4gKiBTZXJpYWxpemVzIGFuZCBwYXJzZXMgVVJMIHBhcmFtZXRlciBrZXlzIGFuZCB2YWx1ZXMgdG8gZW5jb2RlIGFuZCBkZWNvZGUgdGhlbS5cbiAqIElmIHlvdSBwYXNzIFVSTCBxdWVyeSBwYXJhbWV0ZXJzIHdpdGhvdXQgZW5jb2RpbmcsXG4gKiB0aGUgcXVlcnkgcGFyYW1ldGVycyBjYW4gYmUgbWlzaW50ZXJwcmV0ZWQgYXQgdGhlIHJlY2VpdmluZyBlbmQuXG4gKlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuY2xhc3MgSHR0cFVybEVuY29kaW5nQ29kZWMge1xuICAgIC8qKlxuICAgICAqIEVuY29kZXMgYSBrZXkgbmFtZSBmb3IgYSBVUkwgcGFyYW1ldGVyIG9yIHF1ZXJ5LXN0cmluZy5cbiAgICAgKiBAcGFyYW0ga2V5IFRoZSBrZXkgbmFtZS5cbiAgICAgKiBAcmV0dXJucyBUaGUgZW5jb2RlZCBrZXkgbmFtZS5cbiAgICAgKi9cbiAgICBlbmNvZGVLZXkoa2V5KSB7XG4gICAgICAgIHJldHVybiBzdGFuZGFyZEVuY29kaW5nKGtleSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVuY29kZXMgdGhlIHZhbHVlIG9mIGEgVVJMIHBhcmFtZXRlciBvciBxdWVyeS1zdHJpbmcuXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZS5cbiAgICAgKiBAcmV0dXJucyBUaGUgZW5jb2RlZCB2YWx1ZS5cbiAgICAgKi9cbiAgICBlbmNvZGVWYWx1ZSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gc3RhbmRhcmRFbmNvZGluZyh2YWx1ZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlY29kZXMgYW4gZW5jb2RlZCBVUkwgcGFyYW1ldGVyIG9yIHF1ZXJ5LXN0cmluZyBrZXkuXG4gICAgICogQHBhcmFtIGtleSBUaGUgZW5jb2RlZCBrZXkgbmFtZS5cbiAgICAgKiBAcmV0dXJucyBUaGUgZGVjb2RlZCBrZXkgbmFtZS5cbiAgICAgKi9cbiAgICBkZWNvZGVLZXkoa2V5KSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoa2V5KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVjb2RlcyBhbiBlbmNvZGVkIFVSTCBwYXJhbWV0ZXIgb3IgcXVlcnktc3RyaW5nIHZhbHVlLlxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgZW5jb2RlZCB2YWx1ZS5cbiAgICAgKiBAcmV0dXJucyBUaGUgZGVjb2RlZCB2YWx1ZS5cbiAgICAgKi9cbiAgICBkZWNvZGVWYWx1ZSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBwYXJhbVBhcnNlcihyYXdQYXJhbXMsIGNvZGVjKSB7XG4gICAgY29uc3QgbWFwID0gbmV3IE1hcCgpO1xuICAgIGlmIChyYXdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyBUaGUgYHdpbmRvdy5sb2NhdGlvbi5zZWFyY2hgIGNhbiBiZSB1c2VkIHdoaWxlIGNyZWF0aW5nIGFuIGluc3RhbmNlIG9mIHRoZSBgSHR0cFBhcmFtc2AgY2xhc3NcbiAgICAgICAgLy8gKGUuZy4gYG5ldyBIdHRwUGFyYW1zKHsgZnJvbVN0cmluZzogd2luZG93LmxvY2F0aW9uLnNlYXJjaCB9KWApLiBUaGUgYHdpbmRvdy5sb2NhdGlvbi5zZWFyY2hgXG4gICAgICAgIC8vIG1heSBzdGFydCB3aXRoIHRoZSBgP2AgY2hhciwgc28gd2Ugc3RyaXAgaXQgaWYgaXQncyBwcmVzZW50LlxuICAgICAgICBjb25zdCBwYXJhbXMgPSByYXdQYXJhbXMucmVwbGFjZSgvXlxcPy8sICcnKS5zcGxpdCgnJicpO1xuICAgICAgICBwYXJhbXMuZm9yRWFjaCgocGFyYW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVxSWR4ID0gcGFyYW0uaW5kZXhPZignPScpO1xuICAgICAgICAgICAgY29uc3QgW2tleSwgdmFsXSA9IGVxSWR4ID09IC0xID9cbiAgICAgICAgICAgICAgICBbY29kZWMuZGVjb2RlS2V5KHBhcmFtKSwgJyddIDpcbiAgICAgICAgICAgICAgICBbY29kZWMuZGVjb2RlS2V5KHBhcmFtLnNsaWNlKDAsIGVxSWR4KSksIGNvZGVjLmRlY29kZVZhbHVlKHBhcmFtLnNsaWNlKGVxSWR4ICsgMSkpXTtcbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBtYXAuZ2V0KGtleSkgfHwgW107XG4gICAgICAgICAgICBsaXN0LnB1c2godmFsKTtcbiAgICAgICAgICAgIG1hcC5zZXQoa2V5LCBsaXN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBtYXA7XG59XG4vKipcbiAqIEVuY29kZSBpbnB1dCBzdHJpbmcgd2l0aCBzdGFuZGFyZCBlbmNvZGVVUklDb21wb25lbnQgYW5kIHRoZW4gdW4tZW5jb2RlIHNwZWNpZmljIGNoYXJhY3RlcnMuXG4gKi9cbmNvbnN0IFNUQU5EQVJEX0VOQ09ESU5HX1JFR0VYID0gLyUoXFxkW2EtZjAtOV0pL2dpO1xuY29uc3QgU1RBTkRBUkRfRU5DT0RJTkdfUkVQTEFDRU1FTlRTID0ge1xuICAgICc0MCc6ICdAJyxcbiAgICAnM0EnOiAnOicsXG4gICAgJzI0JzogJyQnLFxuICAgICcyQyc6ICcsJyxcbiAgICAnM0InOiAnOycsXG4gICAgJzNEJzogJz0nLFxuICAgICczRic6ICc/JyxcbiAgICAnMkYnOiAnLycsXG59O1xuZnVuY3Rpb24gc3RhbmRhcmRFbmNvZGluZyh2KSB7XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2KS5yZXBsYWNlKFNUQU5EQVJEX0VOQ09ESU5HX1JFR0VYLCAocywgdCkgPT4geyB2YXIgX2E7IHJldHVybiAoX2EgPSBTVEFOREFSRF9FTkNPRElOR19SRVBMQUNFTUVOVFNbdF0pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHM7IH0pO1xufVxuZnVuY3Rpb24gdmFsdWVUb1N0cmluZyh2YWx1ZSkge1xuICAgIHJldHVybiBgJHt2YWx1ZX1gO1xufVxuLyoqXG4gKiBBbiBIVFRQIHJlcXVlc3QvcmVzcG9uc2UgYm9keSB0aGF0IHJlcHJlc2VudHMgc2VyaWFsaXplZCBwYXJhbWV0ZXJzLFxuICogcGVyIHRoZSBNSU1FIHR5cGUgYGFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZGAuXG4gKlxuICogVGhpcyBjbGFzcyBpcyBpbW11dGFibGU7IGFsbCBtdXRhdGlvbiBvcGVyYXRpb25zIHJldHVybiBhIG5ldyBpbnN0YW5jZS5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmNsYXNzIEh0dHBQYXJhbXMge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgICAgICB0aGlzLnVwZGF0ZXMgPSBudWxsO1xuICAgICAgICB0aGlzLmNsb25lRnJvbSA9IG51bGw7XG4gICAgICAgIHRoaXMuZW5jb2RlciA9IG9wdGlvbnMuZW5jb2RlciB8fCBuZXcgSHR0cFVybEVuY29kaW5nQ29kZWMoKTtcbiAgICAgICAgaWYgKCEhb3B0aW9ucy5mcm9tU3RyaW5nKSB7XG4gICAgICAgICAgICBpZiAoISFvcHRpb25zLmZyb21PYmplY3QpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBzcGVjaWZ5IGJvdGggZnJvbVN0cmluZyBhbmQgZnJvbU9iamVjdC5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubWFwID0gcGFyYW1QYXJzZXIob3B0aW9ucy5mcm9tU3RyaW5nLCB0aGlzLmVuY29kZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCEhb3B0aW9ucy5mcm9tT2JqZWN0KSB7XG4gICAgICAgICAgICB0aGlzLm1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMuZnJvbU9iamVjdCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gb3B0aW9ucy5mcm9tT2JqZWN0W2tleV07XG4gICAgICAgICAgICAgICAgLy8gY29udmVydCB0aGUgdmFsdWVzIHRvIHN0cmluZ3NcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlLm1hcCh2YWx1ZVRvU3RyaW5nKSA6IFt2YWx1ZVRvU3RyaW5nKHZhbHVlKV07XG4gICAgICAgICAgICAgICAgdGhpcy5tYXAuc2V0KGtleSwgdmFsdWVzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tYXAgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlcG9ydHMgd2hldGhlciB0aGUgYm9keSBpbmNsdWRlcyBvbmUgb3IgbW9yZSB2YWx1ZXMgZm9yIGEgZ2l2ZW4gcGFyYW1ldGVyLlxuICAgICAqIEBwYXJhbSBwYXJhbSBUaGUgcGFyYW1ldGVyIG5hbWUuXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgcGFyYW1ldGVyIGhhcyBvbmUgb3IgbW9yZSB2YWx1ZXMsXG4gICAgICogZmFsc2UgaWYgaXQgaGFzIG5vIHZhbHVlIG9yIGlzIG5vdCBwcmVzZW50LlxuICAgICAqL1xuICAgIGhhcyhwYXJhbSkge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwLmhhcyhwYXJhbSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB0aGUgZmlyc3QgdmFsdWUgZm9yIGEgcGFyYW1ldGVyLlxuICAgICAqIEBwYXJhbSBwYXJhbSBUaGUgcGFyYW1ldGVyIG5hbWUuXG4gICAgICogQHJldHVybnMgVGhlIGZpcnN0IHZhbHVlIG9mIHRoZSBnaXZlbiBwYXJhbWV0ZXIsXG4gICAgICogb3IgYG51bGxgIGlmIHRoZSBwYXJhbWV0ZXIgaXMgbm90IHByZXNlbnQuXG4gICAgICovXG4gICAgZ2V0KHBhcmFtKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICBjb25zdCByZXMgPSB0aGlzLm1hcC5nZXQocGFyYW0pO1xuICAgICAgICByZXR1cm4gISFyZXMgPyByZXNbMF0gOiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgYWxsIHZhbHVlcyBmb3IgYSAgcGFyYW1ldGVyLlxuICAgICAqIEBwYXJhbSBwYXJhbSBUaGUgcGFyYW1ldGVyIG5hbWUuXG4gICAgICogQHJldHVybnMgQWxsIHZhbHVlcyBpbiBhIHN0cmluZyBhcnJheSxcbiAgICAgKiBvciBgbnVsbGAgaWYgdGhlIHBhcmFtZXRlciBub3QgcHJlc2VudC5cbiAgICAgKi9cbiAgICBnZXRBbGwocGFyYW0pIHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcC5nZXQocGFyYW0pIHx8IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBhbGwgdGhlIHBhcmFtZXRlcnMgZm9yIHRoaXMgYm9keS5cbiAgICAgKiBAcmV0dXJucyBUaGUgcGFyYW1ldGVyIG5hbWVzIGluIGEgc3RyaW5nIGFycmF5LlxuICAgICAqL1xuICAgIGtleXMoKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLm1hcC5rZXlzKCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBcHBlbmRzIGEgbmV3IHZhbHVlIHRvIGV4aXN0aW5nIHZhbHVlcyBmb3IgYSBwYXJhbWV0ZXIuXG4gICAgICogQHBhcmFtIHBhcmFtIFRoZSBwYXJhbWV0ZXIgbmFtZS5cbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIG5ldyB2YWx1ZSB0byBhZGQuXG4gICAgICogQHJldHVybiBBIG5ldyBib2R5IHdpdGggdGhlIGFwcGVuZGVkIHZhbHVlLlxuICAgICAqL1xuICAgIGFwcGVuZChwYXJhbSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoeyBwYXJhbSwgdmFsdWUsIG9wOiAnYScgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdHMgYSBuZXcgYm9keSB3aXRoIGFwcGVuZGVkIHZhbHVlcyBmb3IgdGhlIGdpdmVuIHBhcmFtZXRlciBuYW1lLlxuICAgICAqIEBwYXJhbSBwYXJhbXMgcGFyYW1ldGVycyBhbmQgdmFsdWVzXG4gICAgICogQHJldHVybiBBIG5ldyBib2R5IHdpdGggdGhlIG5ldyB2YWx1ZS5cbiAgICAgKi9cbiAgICBhcHBlbmRBbGwocGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZXMgPSBbXTtcbiAgICAgICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKHBhcmFtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcGFyYW1zW3BhcmFtXTtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLmZvckVhY2goX3ZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlcy5wdXNoKHsgcGFyYW0sIHZhbHVlOiBfdmFsdWUsIG9wOiAnYScgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVzLnB1c2goeyBwYXJhbSwgdmFsdWU6IHZhbHVlLCBvcDogJ2EnIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUodXBkYXRlcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlcGxhY2VzIHRoZSB2YWx1ZSBmb3IgYSBwYXJhbWV0ZXIuXG4gICAgICogQHBhcmFtIHBhcmFtIFRoZSBwYXJhbWV0ZXIgbmFtZS5cbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIG5ldyB2YWx1ZS5cbiAgICAgKiBAcmV0dXJuIEEgbmV3IGJvZHkgd2l0aCB0aGUgbmV3IHZhbHVlLlxuICAgICAqL1xuICAgIHNldChwYXJhbSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoeyBwYXJhbSwgdmFsdWUsIG9wOiAncycgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBnaXZlbiB2YWx1ZSBvciBhbGwgdmFsdWVzIGZyb20gYSBwYXJhbWV0ZXIuXG4gICAgICogQHBhcmFtIHBhcmFtIFRoZSBwYXJhbWV0ZXIgbmFtZS5cbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIHJlbW92ZSwgaWYgcHJvdmlkZWQuXG4gICAgICogQHJldHVybiBBIG5ldyBib2R5IHdpdGggdGhlIGdpdmVuIHZhbHVlIHJlbW92ZWQsIG9yIHdpdGggYWxsIHZhbHVlc1xuICAgICAqIHJlbW92ZWQgaWYgbm8gdmFsdWUgaXMgc3BlY2lmaWVkLlxuICAgICAqL1xuICAgIGRlbGV0ZShwYXJhbSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoeyBwYXJhbSwgdmFsdWUsIG9wOiAnZCcgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlcmlhbGl6ZXMgdGhlIGJvZHkgdG8gYW4gZW5jb2RlZCBzdHJpbmcsIHdoZXJlIGtleS12YWx1ZSBwYWlycyAoc2VwYXJhdGVkIGJ5IGA9YCkgYXJlXG4gICAgICogc2VwYXJhdGVkIGJ5IGAmYHMuXG4gICAgICovXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5rZXlzKClcbiAgICAgICAgICAgIC5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVLZXkgPSB0aGlzLmVuY29kZXIuZW5jb2RlS2V5KGtleSk7XG4gICAgICAgICAgICAvLyBgYTogWycxJ11gIHByb2R1Y2VzIGAnYT0xJ2BcbiAgICAgICAgICAgIC8vIGBiOiBbXWAgcHJvZHVjZXMgYCcnYFxuICAgICAgICAgICAgLy8gYGM6IFsnMScsICcyJ11gIHByb2R1Y2VzIGAnYz0xJmM9MidgXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0KGtleSkubWFwKHZhbHVlID0+IGVLZXkgKyAnPScgKyB0aGlzLmVuY29kZXIuZW5jb2RlVmFsdWUodmFsdWUpKVxuICAgICAgICAgICAgICAgIC5qb2luKCcmJyk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAvLyBmaWx0ZXIgb3V0IGVtcHR5IHZhbHVlcyBiZWNhdXNlIGBiOiBbXWAgcHJvZHVjZXMgYCcnYFxuICAgICAgICAgICAgLy8gd2hpY2ggcmVzdWx0cyBpbiBgYT0xJiZjPTEmYz0yYCBpbnN0ZWFkIG9mIGBhPTEmYz0xJmM9MmAgaWYgd2UgZG9uJ3RcbiAgICAgICAgICAgIC5maWx0ZXIocGFyYW0gPT4gcGFyYW0gIT09ICcnKVxuICAgICAgICAgICAgLmpvaW4oJyYnKTtcbiAgICB9XG4gICAgY2xvbmUodXBkYXRlKSB7XG4gICAgICAgIGNvbnN0IGNsb25lID0gbmV3IEh0dHBQYXJhbXMoeyBlbmNvZGVyOiB0aGlzLmVuY29kZXIgfSk7XG4gICAgICAgIGNsb25lLmNsb25lRnJvbSA9IHRoaXMuY2xvbmVGcm9tIHx8IHRoaXM7XG4gICAgICAgIGNsb25lLnVwZGF0ZXMgPSAodGhpcy51cGRhdGVzIHx8IFtdKS5jb25jYXQodXBkYXRlKTtcbiAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICBpZiAodGhpcy5tYXAgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMubWFwID0gbmV3IE1hcCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNsb25lRnJvbSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5jbG9uZUZyb20uaW5pdCgpO1xuICAgICAgICAgICAgdGhpcy5jbG9uZUZyb20ua2V5cygpLmZvckVhY2goa2V5ID0+IHRoaXMubWFwLnNldChrZXksIHRoaXMuY2xvbmVGcm9tLm1hcC5nZXQoa2V5KSkpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVzLmZvckVhY2godXBkYXRlID0+IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHVwZGF0ZS5vcCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdhJzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiYXNlID0gKHVwZGF0ZS5vcCA9PT0gJ2EnID8gdGhpcy5tYXAuZ2V0KHVwZGF0ZS5wYXJhbSkgOiB1bmRlZmluZWQpIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZS5wdXNoKHZhbHVlVG9TdHJpbmcodXBkYXRlLnZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcC5zZXQodXBkYXRlLnBhcmFtLCBiYXNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1cGRhdGUudmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBiYXNlID0gdGhpcy5tYXAuZ2V0KHVwZGF0ZS5wYXJhbSkgfHwgW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gYmFzZS5pbmRleE9mKHZhbHVlVG9TdHJpbmcodXBkYXRlLnZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlkeCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZS5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhc2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcC5zZXQodXBkYXRlLnBhcmFtLCBiYXNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFwLmRlbGV0ZSh1cGRhdGUucGFyYW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFwLmRlbGV0ZSh1cGRhdGUucGFyYW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5jbG9uZUZyb20gPSB0aGlzLnVwZGF0ZXMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbi8qKlxuICogQSB0b2tlbiB1c2VkIHRvIG1hbmlwdWxhdGUgYW5kIGFjY2VzcyB2YWx1ZXMgc3RvcmVkIGluIGBIdHRwQ29udGV4dGAuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5jbGFzcyBIdHRwQ29udGV4dFRva2VuIHtcbiAgICBjb25zdHJ1Y3RvcihkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0VmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgfVxufVxuLyoqXG4gKiBIdHRwIGNvbnRleHQgc3RvcmVzIGFyYml0cmFyeSB1c2VyIGRlZmluZWQgdmFsdWVzIGFuZCBlbnN1cmVzIHR5cGUgc2FmZXR5IHdpdGhvdXRcbiAqIGFjdHVhbGx5IGtub3dpbmcgdGhlIHR5cGVzLiBJdCBpcyBiYWNrZWQgYnkgYSBgTWFwYCBhbmQgZ3VhcmFudGVlcyB0aGF0IGtleXMgZG8gbm90IGNsYXNoLlxuICpcbiAqIFRoaXMgY29udGV4dCBpcyBtdXRhYmxlIGFuZCBpcyBzaGFyZWQgYmV0d2VlbiBjbG9uZWQgcmVxdWVzdHMgdW5sZXNzIGV4cGxpY2l0bHkgc3BlY2lmaWVkLlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKlxuICogIyMjIFVzYWdlIEV4YW1wbGVcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiAvLyBpbnNpZGUgY2FjaGUuaW50ZXJjZXB0b3JzLnRzXG4gKiBleHBvcnQgY29uc3QgSVNfQ0FDSEVfRU5BQkxFRCA9IG5ldyBIdHRwQ29udGV4dFRva2VuPGJvb2xlYW4+KCgpID0+IGZhbHNlKTtcbiAqXG4gKiBleHBvcnQgY2xhc3MgQ2FjaGVJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gKlxuICogICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBkZWxlZ2F0ZTogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gKiAgICAgaWYgKHJlcS5jb250ZXh0LmdldChJU19DQUNIRV9FTkFCTEVEKSA9PT0gdHJ1ZSkge1xuICogICAgICAgcmV0dXJuIC4uLjtcbiAqICAgICB9XG4gKiAgICAgcmV0dXJuIGRlbGVnYXRlLmhhbmRsZShyZXEpO1xuICogICB9XG4gKiB9XG4gKlxuICogLy8gaW5zaWRlIGEgc2VydmljZVxuICpcbiAqIHRoaXMuaHR0cENsaWVudC5nZXQoJy9hcGkvd2VhdGhlcicsIHtcbiAqICAgY29udGV4dDogbmV3IEh0dHBDb250ZXh0KCkuc2V0KElTX0NBQ0hFX0VOQUJMRUQsIHRydWUpXG4gKiB9KS5zdWJzY3JpYmUoLi4uKTtcbiAqIGBgYFxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuY2xhc3MgSHR0cENvbnRleHQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1hcCA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3RvcmUgYSB2YWx1ZSBpbiB0aGUgY29udGV4dC4gSWYgYSB2YWx1ZSBpcyBhbHJlYWR5IHByZXNlbnQgaXQgd2lsbCBiZSBvdmVyd3JpdHRlbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0b2tlbiBUaGUgcmVmZXJlbmNlIHRvIGFuIGluc3RhbmNlIG9mIGBIdHRwQ29udGV4dFRva2VuYC5cbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIHN0b3JlLlxuICAgICAqXG4gICAgICogQHJldHVybnMgQSByZWZlcmVuY2UgdG8gaXRzZWxmIGZvciBlYXN5IGNoYWluaW5nLlxuICAgICAqL1xuICAgIHNldCh0b2tlbiwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5tYXAuc2V0KHRva2VuLCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZSB0aGUgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIHRoZSBnaXZlbiB0b2tlbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0b2tlbiBUaGUgcmVmZXJlbmNlIHRvIGFuIGluc3RhbmNlIG9mIGBIdHRwQ29udGV4dFRva2VuYC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFRoZSBzdG9yZWQgdmFsdWUgb3IgZGVmYXVsdCBpZiBvbmUgaXMgZGVmaW5lZC5cbiAgICAgKi9cbiAgICBnZXQodG9rZW4pIHtcbiAgICAgICAgaWYgKCF0aGlzLm1hcC5oYXModG9rZW4pKSB7XG4gICAgICAgICAgICB0aGlzLm1hcC5zZXQodG9rZW4sIHRva2VuLmRlZmF1bHRWYWx1ZSgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0KHRva2VuKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVsZXRlIHRoZSB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIHRva2VuLlxuICAgICAqXG4gICAgICogQHBhcmFtIHRva2VuIFRoZSByZWZlcmVuY2UgdG8gYW4gaW5zdGFuY2Ugb2YgYEh0dHBDb250ZXh0VG9rZW5gLlxuICAgICAqXG4gICAgICogQHJldHVybnMgQSByZWZlcmVuY2UgdG8gaXRzZWxmIGZvciBlYXN5IGNoYWluaW5nLlxuICAgICAqL1xuICAgIGRlbGV0ZSh0b2tlbikge1xuICAgICAgICB0aGlzLm1hcC5kZWxldGUodG9rZW4pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGZvciBleGlzdGVuY2Ugb2YgYSBnaXZlbiB0b2tlbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0b2tlbiBUaGUgcmVmZXJlbmNlIHRvIGFuIGluc3RhbmNlIG9mIGBIdHRwQ29udGV4dFRva2VuYC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHRva2VuIGV4aXN0cywgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIGhhcyh0b2tlbikge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXAuaGFzKHRva2VuKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybnMgYSBsaXN0IG9mIHRva2VucyBjdXJyZW50bHkgc3RvcmVkIGluIHRoZSBjb250ZXh0LlxuICAgICAqL1xuICAgIGtleXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcC5rZXlzKCk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIEhUVFAgbWV0aG9kIG1heSBpbmNsdWRlIGEgYm9keS5cbiAqL1xuZnVuY3Rpb24gbWlnaHRIYXZlQm9keShtZXRob2QpIHtcbiAgICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgICAgICBjYXNlICdERUxFVEUnOlxuICAgICAgICBjYXNlICdHRVQnOlxuICAgICAgICBjYXNlICdIRUFEJzpcbiAgICAgICAgY2FzZSAnT1BUSU9OUyc6XG4gICAgICAgIGNhc2UgJ0pTT05QJzpcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cbi8qKlxuICogU2FmZWx5IGFzc2VydCB3aGV0aGVyIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlci5cbiAqXG4gKiBJbiBzb21lIGV4ZWN1dGlvbiBlbnZpcm9ubWVudHMgQXJyYXlCdWZmZXIgaXMgbm90IGRlZmluZWQuXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyO1xufVxuLyoqXG4gKiBTYWZlbHkgYXNzZXJ0IHdoZXRoZXIgdGhlIGdpdmVuIHZhbHVlIGlzIGEgQmxvYi5cbiAqXG4gKiBJbiBzb21lIGV4ZWN1dGlvbiBlbnZpcm9ubWVudHMgQmxvYiBpcyBub3QgZGVmaW5lZC5cbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSBpbnN0YW5jZW9mIEJsb2I7XG59XG4vKipcbiAqIFNhZmVseSBhc3NlcnQgd2hldGhlciB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBGb3JtRGF0YSBpbnN0YW5jZS5cbiAqXG4gKiBJbiBzb21lIGV4ZWN1dGlvbiBlbnZpcm9ubWVudHMgRm9ybURhdGEgaXMgbm90IGRlZmluZWQuXG4gKi9cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSBpbnN0YW5jZW9mIEZvcm1EYXRhO1xufVxuLyoqXG4gKiBTYWZlbHkgYXNzZXJ0IHdoZXRoZXIgdGhlIGdpdmVuIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIGluc3RhbmNlLlxuICpcbiAqIEluIHNvbWUgZXhlY3V0aW9uIGVudmlyb25tZW50cyBVUkxTZWFyY2hQYXJhbXMgaXMgbm90IGRlZmluZWQuXG4gKi9cbmZ1bmN0aW9uIGlzVXJsU2VhcmNoUGFyYW1zKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zO1xufVxuLyoqXG4gKiBBbiBvdXRnb2luZyBIVFRQIHJlcXVlc3Qgd2l0aCBhbiBvcHRpb25hbCB0eXBlZCBib2R5LlxuICpcbiAqIGBIdHRwUmVxdWVzdGAgcmVwcmVzZW50cyBhbiBvdXRnb2luZyByZXF1ZXN0LCBpbmNsdWRpbmcgVVJMLCBtZXRob2QsXG4gKiBoZWFkZXJzLCBib2R5LCBhbmQgb3RoZXIgcmVxdWVzdCBjb25maWd1cmF0aW9uIG9wdGlvbnMuIEluc3RhbmNlcyBzaG91bGQgYmVcbiAqIGFzc3VtZWQgdG8gYmUgaW1tdXRhYmxlLiBUbyBtb2RpZnkgYSBgSHR0cFJlcXVlc3RgLCB0aGUgYGNsb25lYFxuICogbWV0aG9kIHNob3VsZCBiZSB1c2VkLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuY2xhc3MgSHR0cFJlcXVlc3Qge1xuICAgIGNvbnN0cnVjdG9yKG1ldGhvZCwgdXJsLCB0aGlyZCwgZm91cnRoKSB7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHJlcXVlc3QgYm9keSwgb3IgYG51bGxgIGlmIG9uZSBpc24ndCBzZXQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEJvZGllcyBhcmUgbm90IGVuZm9yY2VkIHRvIGJlIGltbXV0YWJsZSwgYXMgdGhleSBjYW4gaW5jbHVkZSBhIHJlZmVyZW5jZSB0byBhbnlcbiAgICAgICAgICogdXNlci1kZWZpbmVkIGRhdGEgdHlwZS4gSG93ZXZlciwgaW50ZXJjZXB0b3JzIHNob3VsZCB0YWtlIGNhcmUgdG8gcHJlc2VydmVcbiAgICAgICAgICogaWRlbXBvdGVuY2UgYnkgdHJlYXRpbmcgdGhlbSBhcyBzdWNoLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5ib2R5ID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZXRoZXIgdGhpcyByZXF1ZXN0IHNob3VsZCBiZSBtYWRlIGluIGEgd2F5IHRoYXQgZXhwb3NlcyBwcm9ncmVzcyBldmVudHMuXG4gICAgICAgICAqXG4gICAgICAgICAqIFByb2dyZXNzIGV2ZW50cyBhcmUgZXhwZW5zaXZlIChjaGFuZ2UgZGV0ZWN0aW9uIHJ1bnMgb24gZWFjaCBldmVudCkgYW5kIHNvXG4gICAgICAgICAqIHRoZXkgc2hvdWxkIG9ubHkgYmUgcmVxdWVzdGVkIGlmIHRoZSBjb25zdW1lciBpbnRlbmRzIHRvIG1vbml0b3IgdGhlbS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucmVwb3J0UHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZXRoZXIgdGhpcyByZXF1ZXN0IHNob3VsZCBiZSBzZW50IHdpdGggb3V0Z29pbmcgY3JlZGVudGlhbHMgKGNvb2tpZXMpLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy53aXRoQ3JlZGVudGlhbHMgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBleHBlY3RlZCByZXNwb25zZSB0eXBlIG9mIHRoZSBzZXJ2ZXIuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgaXMgdXNlZCB0byBwYXJzZSB0aGUgcmVzcG9uc2UgYXBwcm9wcmlhdGVseSBiZWZvcmUgcmV0dXJuaW5nIGl0IHRvXG4gICAgICAgICAqIHRoZSByZXF1ZXN0ZWUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBtZXRob2QudG9VcHBlckNhc2UoKTtcbiAgICAgICAgLy8gTmV4dCwgbmVlZCB0byBmaWd1cmUgb3V0IHdoaWNoIGFyZ3VtZW50IGhvbGRzIHRoZSBIdHRwUmVxdWVzdEluaXRcbiAgICAgICAgLy8gb3B0aW9ucywgaWYgYW55LlxuICAgICAgICBsZXQgb3B0aW9ucztcbiAgICAgICAgLy8gQ2hlY2sgd2hldGhlciBhIGJvZHkgYXJndW1lbnQgaXMgZXhwZWN0ZWQuIFRoZSBvbmx5IHZhbGlkIHdheSB0byBvbWl0XG4gICAgICAgIC8vIHRoZSBib2R5IGFyZ3VtZW50IGlzIHRvIHVzZSBhIGtub3duIG5vLWJvZHkgbWV0aG9kIGxpa2UgR0VULlxuICAgICAgICBpZiAobWlnaHRIYXZlQm9keSh0aGlzLm1ldGhvZCkgfHwgISFmb3VydGgpIHtcbiAgICAgICAgICAgIC8vIEJvZHkgaXMgdGhlIHRoaXJkIGFyZ3VtZW50LCBvcHRpb25zIGFyZSB0aGUgZm91cnRoLlxuICAgICAgICAgICAgdGhpcy5ib2R5ID0gKHRoaXJkICE9PSB1bmRlZmluZWQpID8gdGhpcmQgOiBudWxsO1xuICAgICAgICAgICAgb3B0aW9ucyA9IGZvdXJ0aDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIE5vIGJvZHkgcmVxdWlyZWQsIG9wdGlvbnMgYXJlIHRoZSB0aGlyZCBhcmd1bWVudC4gVGhlIGJvZHkgc3RheXMgbnVsbC5cbiAgICAgICAgICAgIG9wdGlvbnMgPSB0aGlyZDtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBvcHRpb25zIGhhdmUgYmVlbiBwYXNzZWQsIGludGVycHJldCB0aGVtLlxuICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgICAgLy8gTm9ybWFsaXplIHJlcG9ydFByb2dyZXNzIGFuZCB3aXRoQ3JlZGVudGlhbHMuXG4gICAgICAgICAgICB0aGlzLnJlcG9ydFByb2dyZXNzID0gISFvcHRpb25zLnJlcG9ydFByb2dyZXNzO1xuICAgICAgICAgICAgdGhpcy53aXRoQ3JlZGVudGlhbHMgPSAhIW9wdGlvbnMud2l0aENyZWRlbnRpYWxzO1xuICAgICAgICAgICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCByZXNwb25zZSB0eXBlIG9mICdqc29uJyBpZiBvbmUgaXMgcHJvdmlkZWQuXG4gICAgICAgICAgICBpZiAoISFvcHRpb25zLnJlc3BvbnNlVHlwZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2VUeXBlID0gb3B0aW9ucy5yZXNwb25zZVR5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBPdmVycmlkZSBoZWFkZXJzIGlmIHRoZXkncmUgcHJvdmlkZWQuXG4gICAgICAgICAgICBpZiAoISFvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoISFvcHRpb25zLmNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQgPSBvcHRpb25zLmNvbnRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoISFvcHRpb25zLnBhcmFtcykge1xuICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zID0gb3B0aW9ucy5wYXJhbXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgbm8gaGVhZGVycyBoYXZlIGJlZW4gcGFzc2VkIGluLCBjb25zdHJ1Y3QgYSBuZXcgSHR0cEhlYWRlcnMgaW5zdGFuY2UuXG4gICAgICAgIGlmICghdGhpcy5oZWFkZXJzKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBubyBjb250ZXh0IGhhdmUgYmVlbiBwYXNzZWQgaW4sIGNvbnN0cnVjdCBhIG5ldyBIdHRwQ29udGV4dCBpbnN0YW5jZS5cbiAgICAgICAgaWYgKCF0aGlzLmNvbnRleHQpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dCA9IG5ldyBIdHRwQ29udGV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIG5vIHBhcmFtZXRlcnMgaGF2ZSBiZWVuIHBhc3NlZCBpbiwgY29uc3RydWN0IGEgbmV3IEh0dHBVcmxFbmNvZGVkUGFyYW1zIGluc3RhbmNlLlxuICAgICAgICBpZiAoIXRoaXMucGFyYW1zKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XG4gICAgICAgICAgICB0aGlzLnVybFdpdGhQYXJhbXMgPSB1cmw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBFbmNvZGUgdGhlIHBhcmFtZXRlcnMgdG8gYSBzdHJpbmcgaW4gcHJlcGFyYXRpb24gZm9yIGluY2x1c2lvbiBpbiB0aGUgVVJMLlxuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gdGhpcy5wYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGlmIChwYXJhbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gTm8gcGFyYW1ldGVycywgdGhlIHZpc2libGUgVVJMIGlzIGp1c3QgdGhlIFVSTCBnaXZlbiBhdCBjcmVhdGlvbiB0aW1lLlxuICAgICAgICAgICAgICAgIHRoaXMudXJsV2l0aFBhcmFtcyA9IHVybDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIERvZXMgdGhlIFVSTCBhbHJlYWR5IGhhdmUgcXVlcnkgcGFyYW1ldGVycz8gTG9vayBmb3IgJz8nLlxuICAgICAgICAgICAgICAgIGNvbnN0IHFJZHggPSB1cmwuaW5kZXhPZignPycpO1xuICAgICAgICAgICAgICAgIC8vIFRoZXJlIGFyZSAzIGNhc2VzIHRvIGhhbmRsZTpcbiAgICAgICAgICAgICAgICAvLyAxKSBObyBleGlzdGluZyBwYXJhbWV0ZXJzIC0+IGFwcGVuZCAnPycgZm9sbG93ZWQgYnkgcGFyYW1zLlxuICAgICAgICAgICAgICAgIC8vIDIpICc/JyBleGlzdHMgYW5kIGlzIGZvbGxvd2VkIGJ5IGV4aXN0aW5nIHF1ZXJ5IHN0cmluZyAtPlxuICAgICAgICAgICAgICAgIC8vICAgIGFwcGVuZCAnJicgZm9sbG93ZWQgYnkgcGFyYW1zLlxuICAgICAgICAgICAgICAgIC8vIDMpICc/JyBleGlzdHMgYXQgdGhlIGVuZCBvZiB0aGUgdXJsIC0+IGFwcGVuZCBwYXJhbXMgZGlyZWN0bHkuXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBiYXNpY2FsbHkgYW1vdW50cyB0byBkZXRlcm1pbmluZyB0aGUgY2hhcmFjdGVyLCBpZiBhbnksIHdpdGhcbiAgICAgICAgICAgICAgICAvLyB3aGljaCB0byBqb2luIHRoZSBVUkwgYW5kIHBhcmFtZXRlcnMuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VwID0gcUlkeCA9PT0gLTEgPyAnPycgOiAocUlkeCA8IHVybC5sZW5ndGggLSAxID8gJyYnIDogJycpO1xuICAgICAgICAgICAgICAgIHRoaXMudXJsV2l0aFBhcmFtcyA9IHVybCArIHNlcCArIHBhcmFtcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBUcmFuc2Zvcm0gdGhlIGZyZWUtZm9ybSBib2R5IGludG8gYSBzZXJpYWxpemVkIGZvcm1hdCBzdWl0YWJsZSBmb3JcbiAgICAgKiB0cmFuc21pc3Npb24gdG8gdGhlIHNlcnZlci5cbiAgICAgKi9cbiAgICBzZXJpYWxpemVCb2R5KCkge1xuICAgICAgICAvLyBJZiBubyBib2R5IGlzIHByZXNlbnQsIG5vIG5lZWQgdG8gc2VyaWFsaXplIGl0LlxuICAgICAgICBpZiAodGhpcy5ib2R5ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayB3aGV0aGVyIHRoZSBib2R5IGlzIGFscmVhZHkgaW4gYSBzZXJpYWxpemVkIGZvcm0uIElmIHNvLFxuICAgICAgICAvLyBpdCBjYW4ganVzdCBiZSByZXR1cm5lZCBkaXJlY3RseS5cbiAgICAgICAgaWYgKGlzQXJyYXlCdWZmZXIodGhpcy5ib2R5KSB8fCBpc0Jsb2IodGhpcy5ib2R5KSB8fCBpc0Zvcm1EYXRhKHRoaXMuYm9keSkgfHxcbiAgICAgICAgICAgIGlzVXJsU2VhcmNoUGFyYW1zKHRoaXMuYm9keSkgfHwgdHlwZW9mIHRoaXMuYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJvZHk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgd2hldGhlciB0aGUgYm9keSBpcyBhbiBpbnN0YW5jZSBvZiBIdHRwVXJsRW5jb2RlZFBhcmFtcy5cbiAgICAgICAgaWYgKHRoaXMuYm9keSBpbnN0YW5jZW9mIEh0dHBQYXJhbXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJvZHkudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayB3aGV0aGVyIHRoZSBib2R5IGlzIGFuIG9iamVjdCBvciBhcnJheSwgYW5kIHNlcmlhbGl6ZSB3aXRoIEpTT04gaWYgc28uXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5ib2R5ID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdGhpcy5ib2R5ID09PSAnYm9vbGVhbicgfHxcbiAgICAgICAgICAgIEFycmF5LmlzQXJyYXkodGhpcy5ib2R5KSkge1xuICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuYm9keSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmFsbCBiYWNrIG9uIHRvU3RyaW5nKCkgZm9yIGV2ZXJ5dGhpbmcgZWxzZS5cbiAgICAgICAgcmV0dXJuIHRoaXMuYm9keS50b1N0cmluZygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFeGFtaW5lIHRoZSBib2R5IGFuZCBhdHRlbXB0IHRvIGluZmVyIGFuIGFwcHJvcHJpYXRlIE1JTUUgdHlwZVxuICAgICAqIGZvciBpdC5cbiAgICAgKlxuICAgICAqIElmIG5vIHN1Y2ggdHlwZSBjYW4gYmUgaW5mZXJyZWQsIHRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuIGBudWxsYC5cbiAgICAgKi9cbiAgICBkZXRlY3RDb250ZW50VHlwZUhlYWRlcigpIHtcbiAgICAgICAgLy8gQW4gZW1wdHkgYm9keSBoYXMgbm8gY29udGVudCB0eXBlLlxuICAgICAgICBpZiAodGhpcy5ib2R5ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyBGb3JtRGF0YSBib2RpZXMgcmVseSBvbiB0aGUgYnJvd3NlcidzIGNvbnRlbnQgdHlwZSBhc3NpZ25tZW50LlxuICAgICAgICBpZiAoaXNGb3JtRGF0YSh0aGlzLmJvZHkpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyBCbG9icyB1c3VhbGx5IGhhdmUgdGhlaXIgb3duIGNvbnRlbnQgdHlwZS4gSWYgaXQgZG9lc24ndCwgdGhlblxuICAgICAgICAvLyBubyB0eXBlIGNhbiBiZSBpbmZlcnJlZC5cbiAgICAgICAgaWYgKGlzQmxvYih0aGlzLmJvZHkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ib2R5LnR5cGUgfHwgbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyBBcnJheSBidWZmZXJzIGhhdmUgdW5rbm93biBjb250ZW50cyBhbmQgdGh1cyBubyB0eXBlIGNhbiBiZSBpbmZlcnJlZC5cbiAgICAgICAgaWYgKGlzQXJyYXlCdWZmZXIodGhpcy5ib2R5KSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGVjaG5pY2FsbHksIHN0cmluZ3MgY291bGQgYmUgYSBmb3JtIG9mIEpTT04gZGF0YSwgYnV0IGl0J3Mgc2FmZSBlbm91Z2hcbiAgICAgICAgLy8gdG8gYXNzdW1lIHRoZXkncmUgcGxhaW4gc3RyaW5ncy5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3RleHQvcGxhaW4nO1xuICAgICAgICB9XG4gICAgICAgIC8vIGBIdHRwVXJsRW5jb2RlZFBhcmFtc2AgaGFzIGl0cyBvd24gY29udGVudC10eXBlLlxuICAgICAgICBpZiAodGhpcy5ib2R5IGluc3RhbmNlb2YgSHR0cFBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD1VVEYtOCc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXJyYXlzLCBvYmplY3RzLCBib29sZWFuIGFuZCBudW1iZXJzIHdpbGwgYmUgZW5jb2RlZCBhcyBKU09OLlxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuYm9keSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHRoaXMuYm9keSA9PT0gJ251bWJlcicgfHxcbiAgICAgICAgICAgIHR5cGVvZiB0aGlzLmJvZHkgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgcmV0dXJuICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgfVxuICAgICAgICAvLyBObyB0eXBlIGNvdWxkIGJlIGluZmVycmVkLlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY2xvbmUodXBkYXRlID0ge30pIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAvLyBGb3IgbWV0aG9kLCB1cmwsIGFuZCByZXNwb25zZVR5cGUsIHRha2UgdGhlIGN1cnJlbnQgdmFsdWUgdW5sZXNzXG4gICAgICAgIC8vIGl0IGlzIG92ZXJyaWRkZW4gaW4gdGhlIHVwZGF0ZSBoYXNoLlxuICAgICAgICBjb25zdCBtZXRob2QgPSB1cGRhdGUubWV0aG9kIHx8IHRoaXMubWV0aG9kO1xuICAgICAgICBjb25zdCB1cmwgPSB1cGRhdGUudXJsIHx8IHRoaXMudXJsO1xuICAgICAgICBjb25zdCByZXNwb25zZVR5cGUgPSB1cGRhdGUucmVzcG9uc2VUeXBlIHx8IHRoaXMucmVzcG9uc2VUeXBlO1xuICAgICAgICAvLyBUaGUgYm9keSBpcyBzb21ld2hhdCBzcGVjaWFsIC0gYSBgbnVsbGAgdmFsdWUgaW4gdXBkYXRlLmJvZHkgbWVhbnNcbiAgICAgICAgLy8gd2hhdGV2ZXIgY3VycmVudCBib2R5IGlzIHByZXNlbnQgaXMgYmVpbmcgb3ZlcnJpZGRlbiB3aXRoIGFuIGVtcHR5XG4gICAgICAgIC8vIGJvZHksIHdoZXJlYXMgYW4gYHVuZGVmaW5lZGAgdmFsdWUgaW4gdXBkYXRlLmJvZHkgaW1wbGllcyBub1xuICAgICAgICAvLyBvdmVycmlkZS5cbiAgICAgICAgY29uc3QgYm9keSA9ICh1cGRhdGUuYm9keSAhPT0gdW5kZWZpbmVkKSA/IHVwZGF0ZS5ib2R5IDogdGhpcy5ib2R5O1xuICAgICAgICAvLyBDYXJlZnVsbHkgaGFuZGxlIHRoZSBib29sZWFuIG9wdGlvbnMgdG8gZGlmZmVyZW50aWF0ZSBiZXR3ZWVuXG4gICAgICAgIC8vIGBmYWxzZWAgYW5kIGB1bmRlZmluZWRgIGluIHRoZSB1cGRhdGUgYXJncy5cbiAgICAgICAgY29uc3Qgd2l0aENyZWRlbnRpYWxzID0gKHVwZGF0ZS53aXRoQ3JlZGVudGlhbHMgIT09IHVuZGVmaW5lZCkgPyB1cGRhdGUud2l0aENyZWRlbnRpYWxzIDogdGhpcy53aXRoQ3JlZGVudGlhbHM7XG4gICAgICAgIGNvbnN0IHJlcG9ydFByb2dyZXNzID0gKHVwZGF0ZS5yZXBvcnRQcm9ncmVzcyAhPT0gdW5kZWZpbmVkKSA/IHVwZGF0ZS5yZXBvcnRQcm9ncmVzcyA6IHRoaXMucmVwb3J0UHJvZ3Jlc3M7XG4gICAgICAgIC8vIEhlYWRlcnMgYW5kIHBhcmFtcyBtYXkgYmUgYXBwZW5kZWQgdG8gaWYgYHNldEhlYWRlcnNgIG9yXG4gICAgICAgIC8vIGBzZXRQYXJhbXNgIGFyZSB1c2VkLlxuICAgICAgICBsZXQgaGVhZGVycyA9IHVwZGF0ZS5oZWFkZXJzIHx8IHRoaXMuaGVhZGVycztcbiAgICAgICAgbGV0IHBhcmFtcyA9IHVwZGF0ZS5wYXJhbXMgfHwgdGhpcy5wYXJhbXM7XG4gICAgICAgIC8vIFBhc3Mgb24gY29udGV4dCBpZiBuZWVkZWRcbiAgICAgICAgY29uc3QgY29udGV4dCA9IChfYSA9IHVwZGF0ZS5jb250ZXh0KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiB0aGlzLmNvbnRleHQ7XG4gICAgICAgIC8vIENoZWNrIHdoZXRoZXIgdGhlIGNhbGxlciBoYXMgYXNrZWQgdG8gYWRkIGhlYWRlcnMuXG4gICAgICAgIGlmICh1cGRhdGUuc2V0SGVhZGVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBTZXQgZXZlcnkgcmVxdWVzdGVkIGhlYWRlci5cbiAgICAgICAgICAgIGhlYWRlcnMgPVxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHVwZGF0ZS5zZXRIZWFkZXJzKVxuICAgICAgICAgICAgICAgICAgICAucmVkdWNlKChoZWFkZXJzLCBuYW1lKSA9PiBoZWFkZXJzLnNldChuYW1lLCB1cGRhdGUuc2V0SGVhZGVyc1tuYW1lXSksIGhlYWRlcnMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENoZWNrIHdoZXRoZXIgdGhlIGNhbGxlciBoYXMgYXNrZWQgdG8gc2V0IHBhcmFtcy5cbiAgICAgICAgaWYgKHVwZGF0ZS5zZXRQYXJhbXMpIHtcbiAgICAgICAgICAgIC8vIFNldCBldmVyeSByZXF1ZXN0ZWQgcGFyYW0uXG4gICAgICAgICAgICBwYXJhbXMgPSBPYmplY3Qua2V5cyh1cGRhdGUuc2V0UGFyYW1zKVxuICAgICAgICAgICAgICAgIC5yZWR1Y2UoKHBhcmFtcywgcGFyYW0pID0+IHBhcmFtcy5zZXQocGFyYW0sIHVwZGF0ZS5zZXRQYXJhbXNbcGFyYW1dKSwgcGFyYW1zKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaW5hbGx5LCBjb25zdHJ1Y3QgdGhlIG5ldyBIdHRwUmVxdWVzdCB1c2luZyB0aGUgcGllY2VzIGZyb20gYWJvdmUuXG4gICAgICAgIHJldHVybiBuZXcgSHR0cFJlcXVlc3QobWV0aG9kLCB1cmwsIGJvZHksIHtcbiAgICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICAgIGhlYWRlcnMsXG4gICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgcmVwb3J0UHJvZ3Jlc3MsXG4gICAgICAgICAgICByZXNwb25zZVR5cGUsXG4gICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHMsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG4vKipcbiAqIFR5cGUgZW51bWVyYXRpb24gZm9yIHRoZSBkaWZmZXJlbnQga2luZHMgb2YgYEh0dHBFdmVudGAuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG52YXIgSHR0cEV2ZW50VHlwZTtcbihmdW5jdGlvbiAoSHR0cEV2ZW50VHlwZSkge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXF1ZXN0IHdhcyBzZW50IG91dCBvdmVyIHRoZSB3aXJlLlxuICAgICAqL1xuICAgIEh0dHBFdmVudFR5cGVbSHR0cEV2ZW50VHlwZVtcIlNlbnRcIl0gPSAwXSA9IFwiU2VudFwiO1xuICAgIC8qKlxuICAgICAqIEFuIHVwbG9hZCBwcm9ncmVzcyBldmVudCB3YXMgcmVjZWl2ZWQuXG4gICAgICovXG4gICAgSHR0cEV2ZW50VHlwZVtIdHRwRXZlbnRUeXBlW1wiVXBsb2FkUHJvZ3Jlc3NcIl0gPSAxXSA9IFwiVXBsb2FkUHJvZ3Jlc3NcIjtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzcG9uc2Ugc3RhdHVzIGNvZGUgYW5kIGhlYWRlcnMgd2VyZSByZWNlaXZlZC5cbiAgICAgKi9cbiAgICBIdHRwRXZlbnRUeXBlW0h0dHBFdmVudFR5cGVbXCJSZXNwb25zZUhlYWRlclwiXSA9IDJdID0gXCJSZXNwb25zZUhlYWRlclwiO1xuICAgIC8qKlxuICAgICAqIEEgZG93bmxvYWQgcHJvZ3Jlc3MgZXZlbnQgd2FzIHJlY2VpdmVkLlxuICAgICAqL1xuICAgIEh0dHBFdmVudFR5cGVbSHR0cEV2ZW50VHlwZVtcIkRvd25sb2FkUHJvZ3Jlc3NcIl0gPSAzXSA9IFwiRG93bmxvYWRQcm9ncmVzc1wiO1xuICAgIC8qKlxuICAgICAqIFRoZSBmdWxsIHJlc3BvbnNlIGluY2x1ZGluZyB0aGUgYm9keSB3YXMgcmVjZWl2ZWQuXG4gICAgICovXG4gICAgSHR0cEV2ZW50VHlwZVtIdHRwRXZlbnRUeXBlW1wiUmVzcG9uc2VcIl0gPSA0XSA9IFwiUmVzcG9uc2VcIjtcbiAgICAvKipcbiAgICAgKiBBIGN1c3RvbSBldmVudCBmcm9tIGFuIGludGVyY2VwdG9yIG9yIGEgYmFja2VuZC5cbiAgICAgKi9cbiAgICBIdHRwRXZlbnRUeXBlW0h0dHBFdmVudFR5cGVbXCJVc2VyXCJdID0gNV0gPSBcIlVzZXJcIjtcbn0pKEh0dHBFdmVudFR5cGUgfHwgKEh0dHBFdmVudFR5cGUgPSB7fSkpO1xuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBib3RoIGBIdHRwUmVzcG9uc2VgIGFuZCBgSHR0cEhlYWRlclJlc3BvbnNlYC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmNsYXNzIEh0dHBSZXNwb25zZUJhc2Uge1xuICAgIC8qKlxuICAgICAqIFN1cGVyLWNvbnN0cnVjdG9yIGZvciBhbGwgcmVzcG9uc2VzLlxuICAgICAqXG4gICAgICogVGhlIHNpbmdsZSBwYXJhbWV0ZXIgYWNjZXB0ZWQgaXMgYW4gaW5pdGlhbGl6YXRpb24gaGFzaC4gQW55IHByb3BlcnRpZXNcbiAgICAgKiBvZiB0aGUgcmVzcG9uc2UgcGFzc2VkIHRoZXJlIHdpbGwgb3ZlcnJpZGUgdGhlIGRlZmF1bHQgdmFsdWVzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGluaXQsIGRlZmF1bHRTdGF0dXMgPSAyMDAgLyogSHR0cFN0YXR1c0NvZGUuT2sgKi8sIGRlZmF1bHRTdGF0dXNUZXh0ID0gJ09LJykge1xuICAgICAgICAvLyBJZiB0aGUgaGFzaCBoYXMgdmFsdWVzIHBhc3NlZCwgdXNlIHRoZW0gdG8gaW5pdGlhbGl6ZSB0aGUgcmVzcG9uc2UuXG4gICAgICAgIC8vIE90aGVyd2lzZSB1c2UgdGhlIGRlZmF1bHQgdmFsdWVzLlxuICAgICAgICB0aGlzLmhlYWRlcnMgPSBpbml0LmhlYWRlcnMgfHwgbmV3IEh0dHBIZWFkZXJzKCk7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gaW5pdC5zdGF0dXMgIT09IHVuZGVmaW5lZCA/IGluaXQuc3RhdHVzIDogZGVmYXVsdFN0YXR1cztcbiAgICAgICAgdGhpcy5zdGF0dXNUZXh0ID0gaW5pdC5zdGF0dXNUZXh0IHx8IGRlZmF1bHRTdGF0dXNUZXh0O1xuICAgICAgICB0aGlzLnVybCA9IGluaXQudXJsIHx8IG51bGw7XG4gICAgICAgIC8vIENhY2hlIHRoZSBvayB2YWx1ZSB0byBhdm9pZCBkZWZpbmluZyBhIGdldHRlci5cbiAgICAgICAgdGhpcy5vayA9IHRoaXMuc3RhdHVzID49IDIwMCAmJiB0aGlzLnN0YXR1cyA8IDMwMDtcbiAgICB9XG59XG4vKipcbiAqIEEgcGFydGlhbCBIVFRQIHJlc3BvbnNlIHdoaWNoIG9ubHkgaW5jbHVkZXMgdGhlIHN0YXR1cyBhbmQgaGVhZGVyIGRhdGEsXG4gKiBidXQgbm8gcmVzcG9uc2UgYm9keS5cbiAqXG4gKiBgSHR0cEhlYWRlclJlc3BvbnNlYCBpcyBhIGBIdHRwRXZlbnRgIGF2YWlsYWJsZSBvbiB0aGUgcmVzcG9uc2VcbiAqIGV2ZW50IHN0cmVhbSwgb25seSB3aGVuIHByb2dyZXNzIGV2ZW50cyBhcmUgcmVxdWVzdGVkLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuY2xhc3MgSHR0cEhlYWRlclJlc3BvbnNlIGV4dGVuZHMgSHR0cFJlc3BvbnNlQmFzZSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBIdHRwSGVhZGVyUmVzcG9uc2VgIHdpdGggdGhlIGdpdmVuIHBhcmFtZXRlcnMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoaW5pdCA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGluaXQpO1xuICAgICAgICB0aGlzLnR5cGUgPSBIdHRwRXZlbnRUeXBlLlJlc3BvbnNlSGVhZGVyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb3B5IHRoaXMgYEh0dHBIZWFkZXJSZXNwb25zZWAsIG92ZXJyaWRpbmcgaXRzIGNvbnRlbnRzIHdpdGggdGhlXG4gICAgICogZ2l2ZW4gcGFyYW1ldGVyIGhhc2guXG4gICAgICovXG4gICAgY2xvbmUodXBkYXRlID0ge30pIHtcbiAgICAgICAgLy8gUGVyZm9ybSBhIHN0cmFpZ2h0Zm9yd2FyZCBpbml0aWFsaXphdGlvbiBvZiB0aGUgbmV3IEh0dHBIZWFkZXJSZXNwb25zZSxcbiAgICAgICAgLy8gb3ZlcnJpZGluZyB0aGUgY3VycmVudCBwYXJhbWV0ZXJzIHdpdGggbmV3IG9uZXMgaWYgZ2l2ZW4uXG4gICAgICAgIHJldHVybiBuZXcgSHR0cEhlYWRlclJlc3BvbnNlKHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHVwZGF0ZS5oZWFkZXJzIHx8IHRoaXMuaGVhZGVycyxcbiAgICAgICAgICAgIHN0YXR1czogdXBkYXRlLnN0YXR1cyAhPT0gdW5kZWZpbmVkID8gdXBkYXRlLnN0YXR1cyA6IHRoaXMuc3RhdHVzLFxuICAgICAgICAgICAgc3RhdHVzVGV4dDogdXBkYXRlLnN0YXR1c1RleHQgfHwgdGhpcy5zdGF0dXNUZXh0LFxuICAgICAgICAgICAgdXJsOiB1cGRhdGUudXJsIHx8IHRoaXMudXJsIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuLyoqXG4gKiBBIGZ1bGwgSFRUUCByZXNwb25zZSwgaW5jbHVkaW5nIGEgdHlwZWQgcmVzcG9uc2UgYm9keSAod2hpY2ggbWF5IGJlIGBudWxsYFxuICogaWYgb25lIHdhcyBub3QgcmV0dXJuZWQpLlxuICpcbiAqIGBIdHRwUmVzcG9uc2VgIGlzIGEgYEh0dHBFdmVudGAgYXZhaWxhYmxlIG9uIHRoZSByZXNwb25zZSBldmVudFxuICogc3RyZWFtLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuY2xhc3MgSHR0cFJlc3BvbnNlIGV4dGVuZHMgSHR0cFJlc3BvbnNlQmFzZSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0IGEgbmV3IGBIdHRwUmVzcG9uc2VgLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGluaXQgPSB7fSkge1xuICAgICAgICBzdXBlcihpbml0KTtcbiAgICAgICAgdGhpcy50eXBlID0gSHR0cEV2ZW50VHlwZS5SZXNwb25zZTtcbiAgICAgICAgdGhpcy5ib2R5ID0gaW5pdC5ib2R5ICE9PSB1bmRlZmluZWQgPyBpbml0LmJvZHkgOiBudWxsO1xuICAgIH1cbiAgICBjbG9uZSh1cGRhdGUgPSB7fSkge1xuICAgICAgICByZXR1cm4gbmV3IEh0dHBSZXNwb25zZSh7XG4gICAgICAgICAgICBib2R5OiAodXBkYXRlLmJvZHkgIT09IHVuZGVmaW5lZCkgPyB1cGRhdGUuYm9keSA6IHRoaXMuYm9keSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHVwZGF0ZS5oZWFkZXJzIHx8IHRoaXMuaGVhZGVycyxcbiAgICAgICAgICAgIHN0YXR1czogKHVwZGF0ZS5zdGF0dXMgIT09IHVuZGVmaW5lZCkgPyB1cGRhdGUuc3RhdHVzIDogdGhpcy5zdGF0dXMsXG4gICAgICAgICAgICBzdGF0dXNUZXh0OiB1cGRhdGUuc3RhdHVzVGV4dCB8fCB0aGlzLnN0YXR1c1RleHQsXG4gICAgICAgICAgICB1cmw6IHVwZGF0ZS51cmwgfHwgdGhpcy51cmwgfHwgdW5kZWZpbmVkLFxuICAgICAgICB9KTtcbiAgICB9XG59XG4vKipcbiAqIEEgcmVzcG9uc2UgdGhhdCByZXByZXNlbnRzIGFuIGVycm9yIG9yIGZhaWx1cmUsIGVpdGhlciBmcm9tIGFcbiAqIG5vbi1zdWNjZXNzZnVsIEhUVFAgc3RhdHVzLCBhbiBlcnJvciB3aGlsZSBleGVjdXRpbmcgdGhlIHJlcXVlc3QsXG4gKiBvciBzb21lIG90aGVyIGZhaWx1cmUgd2hpY2ggb2NjdXJyZWQgZHVyaW5nIHRoZSBwYXJzaW5nIG9mIHRoZSByZXNwb25zZS5cbiAqXG4gKiBBbnkgZXJyb3IgcmV0dXJuZWQgb24gdGhlIGBPYnNlcnZhYmxlYCByZXNwb25zZSBzdHJlYW0gd2lsbCBiZVxuICogd3JhcHBlZCBpbiBhbiBgSHR0cEVycm9yUmVzcG9uc2VgIHRvIHByb3ZpZGUgYWRkaXRpb25hbCBjb250ZXh0IGFib3V0XG4gKiB0aGUgc3RhdGUgb2YgdGhlIEhUVFAgbGF5ZXIgd2hlbiB0aGUgZXJyb3Igb2NjdXJyZWQuIFRoZSBlcnJvciBwcm9wZXJ0eVxuICogd2lsbCBjb250YWluIGVpdGhlciBhIHdyYXBwZWQgRXJyb3Igb2JqZWN0IG9yIHRoZSBlcnJvciByZXNwb25zZSByZXR1cm5lZFxuICogZnJvbSB0aGUgc2VydmVyLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuY2xhc3MgSHR0cEVycm9yUmVzcG9uc2UgZXh0ZW5kcyBIdHRwUmVzcG9uc2VCYXNlIHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0KSB7XG4gICAgICAgIC8vIEluaXRpYWxpemUgd2l0aCBhIGRlZmF1bHQgc3RhdHVzIG9mIDAgLyBVbmtub3duIEVycm9yLlxuICAgICAgICBzdXBlcihpbml0LCAwLCAnVW5rbm93biBFcnJvcicpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnSHR0cEVycm9yUmVzcG9uc2UnO1xuICAgICAgICAvKipcbiAgICAgICAgICogRXJyb3JzIGFyZSBuZXZlciBva2F5LCBldmVuIHdoZW4gdGhlIHN0YXR1cyBjb2RlIGlzIGluIHRoZSAyeHggc3VjY2VzcyByYW5nZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMub2sgPSBmYWxzZTtcbiAgICAgICAgLy8gSWYgdGhlIHJlc3BvbnNlIHdhcyBzdWNjZXNzZnVsLCB0aGVuIHRoaXMgd2FzIGEgcGFyc2UgZXJyb3IuIE90aGVyd2lzZSwgaXQgd2FzXG4gICAgICAgIC8vIGEgcHJvdG9jb2wtbGV2ZWwgZmFpbHVyZSBvZiBzb21lIHNvcnQuIEVpdGhlciB0aGUgcmVxdWVzdCBmYWlsZWQgaW4gdHJhbnNpdFxuICAgICAgICAvLyBvciB0aGUgc2VydmVyIHJldHVybmVkIGFuIHVuc3VjY2Vzc2Z1bCBzdGF0dXMgY29kZS5cbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzID49IDIwMCAmJiB0aGlzLnN0YXR1cyA8IDMwMCkge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gYEh0dHAgZmFpbHVyZSBkdXJpbmcgcGFyc2luZyBmb3IgJHtpbml0LnVybCB8fCAnKHVua25vd24gdXJsKSd9YDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IGBIdHRwIGZhaWx1cmUgcmVzcG9uc2UgZm9yICR7aW5pdC51cmwgfHwgJyh1bmtub3duIHVybCknfTogJHtpbml0LnN0YXR1c30gJHtpbml0LnN0YXR1c1RleHR9YDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVycm9yID0gaW5pdC5lcnJvciB8fCBudWxsO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG4vKipcbiAqIENvbnN0cnVjdHMgYW4gaW5zdGFuY2Ugb2YgYEh0dHBSZXF1ZXN0T3B0aW9uczxUPmAgZnJvbSBhIHNvdXJjZSBgSHR0cE1ldGhvZE9wdGlvbnNgIGFuZFxuICogdGhlIGdpdmVuIGBib2R5YC4gVGhpcyBmdW5jdGlvbiBjbG9uZXMgdGhlIG9iamVjdCBhbmQgYWRkcyB0aGUgYm9keS5cbiAqXG4gKiBOb3RlIHRoYXQgdGhlIGByZXNwb25zZVR5cGVgICpvcHRpb25zKiB2YWx1ZSBpcyBhIFN0cmluZyB0aGF0IGlkZW50aWZpZXMgdGhlXG4gKiBzaW5nbGUgZGF0YSB0eXBlIG9mIHRoZSByZXNwb25zZS5cbiAqIEEgc2luZ2xlIG92ZXJsb2FkIHZlcnNpb24gb2YgdGhlIG1ldGhvZCBoYW5kbGVzIGVhY2ggcmVzcG9uc2UgdHlwZS5cbiAqIFRoZSB2YWx1ZSBvZiBgcmVzcG9uc2VUeXBlYCBjYW5ub3QgYmUgYSB1bmlvbiwgYXMgdGhlIGNvbWJpbmVkIHNpZ25hdHVyZSBjb3VsZCBpbXBseS5cbiAqXG4gKi9cbmZ1bmN0aW9uIGFkZEJvZHkob3B0aW9ucywgYm9keSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGJvZHksXG4gICAgICAgIGhlYWRlcnM6IG9wdGlvbnMuaGVhZGVycyxcbiAgICAgICAgY29udGV4dDogb3B0aW9ucy5jb250ZXh0LFxuICAgICAgICBvYnNlcnZlOiBvcHRpb25zLm9ic2VydmUsXG4gICAgICAgIHBhcmFtczogb3B0aW9ucy5wYXJhbXMsXG4gICAgICAgIHJlcG9ydFByb2dyZXNzOiBvcHRpb25zLnJlcG9ydFByb2dyZXNzLFxuICAgICAgICByZXNwb25zZVR5cGU6IG9wdGlvbnMucmVzcG9uc2VUeXBlLFxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IG9wdGlvbnMud2l0aENyZWRlbnRpYWxzLFxuICAgIH07XG59XG4vKipcbiAqIFBlcmZvcm1zIEhUVFAgcmVxdWVzdHMuXG4gKiBUaGlzIHNlcnZpY2UgaXMgYXZhaWxhYmxlIGFzIGFuIGluamVjdGFibGUgY2xhc3MsIHdpdGggbWV0aG9kcyB0byBwZXJmb3JtIEhUVFAgcmVxdWVzdHMuXG4gKiBFYWNoIHJlcXVlc3QgbWV0aG9kIGhhcyBtdWx0aXBsZSBzaWduYXR1cmVzLCBhbmQgdGhlIHJldHVybiB0eXBlIHZhcmllcyBiYXNlZCBvblxuICogdGhlIHNpZ25hdHVyZSB0aGF0IGlzIGNhbGxlZCAobWFpbmx5IHRoZSB2YWx1ZXMgb2YgYG9ic2VydmVgIGFuZCBgcmVzcG9uc2VUeXBlYCkuXG4gKlxuICogTm90ZSB0aGF0IHRoZSBgcmVzcG9uc2VUeXBlYCAqb3B0aW9ucyogdmFsdWUgaXMgYSBTdHJpbmcgdGhhdCBpZGVudGlmaWVzIHRoZVxuICogc2luZ2xlIGRhdGEgdHlwZSBvZiB0aGUgcmVzcG9uc2UuXG4gKiBBIHNpbmdsZSBvdmVybG9hZCB2ZXJzaW9uIG9mIHRoZSBtZXRob2QgaGFuZGxlcyBlYWNoIHJlc3BvbnNlIHR5cGUuXG4gKiBUaGUgdmFsdWUgb2YgYHJlc3BvbnNlVHlwZWAgY2Fubm90IGJlIGEgdW5pb24sIGFzIHRoZSBjb21iaW5lZCBzaWduYXR1cmUgY291bGQgaW1wbHkuXG5cbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICogU2FtcGxlIEhUVFAgcmVxdWVzdHMgZm9yIHRoZSBbVG91ciBvZiBIZXJvZXNdKC90dXRvcmlhbC90b2gtcHQwKSBhcHBsaWNhdGlvbi5cbiAqXG4gKiAjIyMgSFRUUCBSZXF1ZXN0IEV4YW1wbGVcbiAqXG4gKiBgYGBcbiAqICAvLyBHRVQgaGVyb2VzIHdob3NlIG5hbWUgY29udGFpbnMgc2VhcmNoIHRlcm1cbiAqIHNlYXJjaEhlcm9lcyh0ZXJtOiBzdHJpbmcpOiBvYnNlcnZhYmxlPEhlcm9bXT57XG4gKlxuICogIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHtmcm9tU3RyaW5nOiAnbmFtZT10ZXJtJ30pO1xuICogICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5yZXF1ZXN0KCdHRVQnLCB0aGlzLmhlcm9lc1VybCwge3Jlc3BvbnNlVHlwZTonanNvbicsIHBhcmFtc30pO1xuICogfVxuICogYGBgXG4gKlxuICogQWx0ZXJuYXRpdmVseSwgdGhlIHBhcmFtZXRlciBzdHJpbmcgY2FuIGJlIHVzZWQgd2l0aG91dCBpbnZva2luZyBIdHRwUGFyYW1zXG4gKiBieSBkaXJlY3RseSBqb2luaW5nIHRvIHRoZSBVUkwuXG4gKiBgYGBcbiAqIHRoaXMuaHR0cENsaWVudC5yZXF1ZXN0KCdHRVQnLCB0aGlzLmhlcm9lc1VybCArICc/JyArICduYW1lPXRlcm0nLCB7cmVzcG9uc2VUeXBlOidqc29uJ30pO1xuICogYGBgXG4gKlxuICpcbiAqICMjIyBKU09OUCBFeGFtcGxlXG4gKiBgYGBcbiAqIHJlcXVlc3RKc29ucCh1cmwsIGNhbGxiYWNrID0gJ2NhbGxiYWNrJykge1xuICogIHJldHVybiB0aGlzLmh0dHBDbGllbnQuanNvbnAodGhpcy5oZXJvZXNVUkwsIGNhbGxiYWNrKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqICMjIyBQQVRDSCBFeGFtcGxlXG4gKiBgYGBcbiAqIC8vIFBBVENIIG9uZSBvZiB0aGUgaGVyb2VzJyBuYW1lXG4gKiBwYXRjaEhlcm8gKGlkOiBudW1iZXIsIGhlcm9OYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PiB7XG4gKiBjb25zdCB1cmwgPSBgJHt0aGlzLmhlcm9lc1VybH0vJHtpZH1gOyAgIC8vIFBBVENIIGFwaS9oZXJvZXMvNDJcbiAqICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnBhdGNoKHVybCwge25hbWU6IGhlcm9OYW1lfSwgaHR0cE9wdGlvbnMpXG4gKiAgICAucGlwZShjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IoJ3BhdGNoSGVybycpKSk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAc2VlIFtIVFRQIEd1aWRlXShndWlkZS9odHRwKVxuICogQHNlZSBbSFRUUCBSZXF1ZXN0XShhcGkvY29tbW9uL2h0dHAvSHR0cFJlcXVlc3QpXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5jbGFzcyBIdHRwQ2xpZW50IHtcbiAgICBjb25zdHJ1Y3RvcihoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdHMgYW4gb2JzZXJ2YWJsZSBmb3IgYSBnZW5lcmljIEhUVFAgcmVxdWVzdCB0aGF0LCB3aGVuIHN1YnNjcmliZWQsXG4gICAgICogZmlyZXMgdGhlIHJlcXVlc3QgdGhyb3VnaCB0aGUgY2hhaW4gb2YgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnMgYW5kIG9uIHRvIHRoZVxuICAgICAqIHNlcnZlci5cbiAgICAgKlxuICAgICAqIFlvdSBjYW4gcGFzcyBhbiBgSHR0cFJlcXVlc3RgIGRpcmVjdGx5IGFzIHRoZSBvbmx5IHBhcmFtZXRlci4gSW4gdGhpcyBjYXNlLFxuICAgICAqIHRoZSBjYWxsIHJldHVybnMgYW4gb2JzZXJ2YWJsZSBvZiB0aGUgcmF3IGBIdHRwRXZlbnRgIHN0cmVhbS5cbiAgICAgKlxuICAgICAqIEFsdGVybmF0aXZlbHkgeW91IGNhbiBwYXNzIGFuIEhUVFAgbWV0aG9kIGFzIHRoZSBmaXJzdCBwYXJhbWV0ZXIsXG4gICAgICogYSBVUkwgc3RyaW5nIGFzIHRoZSBzZWNvbmQsIGFuZCBhbiBvcHRpb25zIGhhc2ggY29udGFpbmluZyB0aGUgcmVxdWVzdCBib2R5IGFzIHRoZSB0aGlyZC5cbiAgICAgKiBTZWUgYGFkZEJvZHkoKWAuIEluIHRoaXMgY2FzZSwgdGhlIHNwZWNpZmllZCBgcmVzcG9uc2VUeXBlYCBhbmQgYG9ic2VydmVgIG9wdGlvbnMgZGV0ZXJtaW5lIHRoZVxuICAgICAqIHR5cGUgb2YgcmV0dXJuZWQgb2JzZXJ2YWJsZS5cbiAgICAgKiAgICogVGhlIGByZXNwb25zZVR5cGVgIHZhbHVlIGRldGVybWluZXMgaG93IGEgc3VjY2Vzc2Z1bCByZXNwb25zZSBib2R5IGlzIHBhcnNlZC5cbiAgICAgKiAgICogSWYgYHJlc3BvbnNlVHlwZWAgaXMgdGhlIGRlZmF1bHQgYGpzb25gLCB5b3UgY2FuIHBhc3MgYSB0eXBlIGludGVyZmFjZSBmb3IgdGhlIHJlc3VsdGluZ1xuICAgICAqIG9iamVjdCBhcyBhIHR5cGUgcGFyYW1ldGVyIHRvIHRoZSBjYWxsLlxuICAgICAqXG4gICAgICogVGhlIGBvYnNlcnZlYCB2YWx1ZSBkZXRlcm1pbmVzIHRoZSByZXR1cm4gdHlwZSwgYWNjb3JkaW5nIHRvIHdoYXQgeW91IGFyZSBpbnRlcmVzdGVkIGluXG4gICAgICogb2JzZXJ2aW5nLlxuICAgICAqICAgKiBBbiBgb2JzZXJ2ZWAgdmFsdWUgb2YgZXZlbnRzIHJldHVybnMgYW4gb2JzZXJ2YWJsZSBvZiB0aGUgcmF3IGBIdHRwRXZlbnRgIHN0cmVhbSwgaW5jbHVkaW5nXG4gICAgICogcHJvZ3Jlc3MgZXZlbnRzIGJ5IGRlZmF1bHQuXG4gICAgICogICAqIEFuIGBvYnNlcnZlYCB2YWx1ZSBvZiByZXNwb25zZSByZXR1cm5zIGFuIG9ic2VydmFibGUgb2YgYEh0dHBSZXNwb25zZTxUPmAsXG4gICAgICogd2hlcmUgdGhlIGBUYCBwYXJhbWV0ZXIgZGVwZW5kcyBvbiB0aGUgYHJlc3BvbnNlVHlwZWAgYW5kIGFueSBvcHRpb25hbGx5IHByb3ZpZGVkIHR5cGVcbiAgICAgKiBwYXJhbWV0ZXIuXG4gICAgICogICAqIEFuIGBvYnNlcnZlYCB2YWx1ZSBvZiBib2R5IHJldHVybnMgYW4gb2JzZXJ2YWJsZSBvZiBgPFQ+YCB3aXRoIHRoZSBzYW1lIGBUYCBib2R5IHR5cGUuXG4gICAgICpcbiAgICAgKi9cbiAgICByZXF1ZXN0KGZpcnN0LCB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBsZXQgcmVxO1xuICAgICAgICAvLyBGaXJzdCwgY2hlY2sgd2hldGhlciB0aGUgcHJpbWFyeSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBgSHR0cFJlcXVlc3RgLlxuICAgICAgICBpZiAoZmlyc3QgaW5zdGFuY2VvZiBIdHRwUmVxdWVzdCkge1xuICAgICAgICAgICAgLy8gSXQgaXMuIFRoZSBvdGhlciBhcmd1bWVudHMgbXVzdCBiZSB1bmRlZmluZWQgKHBlciB0aGUgc2lnbmF0dXJlcykgYW5kIGNhbiBiZVxuICAgICAgICAgICAgLy8gaWdub3JlZC5cbiAgICAgICAgICAgIHJlcSA9IGZpcnN0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gSXQncyBhIHN0cmluZywgc28gaXQgcmVwcmVzZW50cyBhIFVSTC4gQ29uc3RydWN0IGEgcmVxdWVzdCBiYXNlZCBvbiBpdCxcbiAgICAgICAgICAgIC8vIGFuZCBpbmNvcnBvcmF0ZSB0aGUgcmVtYWluaW5nIGFyZ3VtZW50cyAoYXNzdW1pbmcgYEdFVGAgdW5sZXNzIGEgbWV0aG9kIGlzXG4gICAgICAgICAgICAvLyBwcm92aWRlZC5cbiAgICAgICAgICAgIC8vIEZpZ3VyZSBvdXQgdGhlIGhlYWRlcnMuXG4gICAgICAgICAgICBsZXQgaGVhZGVycyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmhlYWRlcnMgaW5zdGFuY2VvZiBIdHRwSGVhZGVycykge1xuICAgICAgICAgICAgICAgIGhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTb3J0IG91dCBwYXJhbWV0ZXJzLlxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmICghIW9wdGlvbnMucGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMucGFyYW1zIGluc3RhbmNlb2YgSHR0cFBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbXMgPSBvcHRpb25zLnBhcmFtcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHsgZnJvbU9iamVjdDogb3B0aW9ucy5wYXJhbXMgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ29uc3RydWN0IHRoZSByZXF1ZXN0LlxuICAgICAgICAgICAgcmVxID0gbmV3IEh0dHBSZXF1ZXN0KGZpcnN0LCB1cmwsIChvcHRpb25zLmJvZHkgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuYm9keSA6IG51bGwpLCB7XG4gICAgICAgICAgICAgICAgaGVhZGVycyxcbiAgICAgICAgICAgICAgICBjb250ZXh0OiBvcHRpb25zLmNvbnRleHQsXG4gICAgICAgICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgICAgICAgIHJlcG9ydFByb2dyZXNzOiBvcHRpb25zLnJlcG9ydFByb2dyZXNzLFxuICAgICAgICAgICAgICAgIC8vIEJ5IGRlZmF1bHQsIEpTT04gaXMgYXNzdW1lZCB0byBiZSByZXR1cm5lZCBmb3IgYWxsIGNhbGxzLlxuICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogb3B0aW9ucy5yZXNwb25zZVR5cGUgfHwgJ2pzb24nLFxuICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogb3B0aW9ucy53aXRoQ3JlZGVudGlhbHMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTdGFydCB3aXRoIGFuIE9ic2VydmFibGUub2YoKSB0aGUgaW5pdGlhbCByZXF1ZXN0LCBhbmQgcnVuIHRoZSBoYW5kbGVyICh3aGljaFxuICAgICAgICAvLyBpbmNsdWRlcyBhbGwgaW50ZXJjZXB0b3JzKSBpbnNpZGUgYSBjb25jYXRNYXAoKS4gVGhpcyB3YXksIHRoZSBoYW5kbGVyIHJ1bnNcbiAgICAgICAgLy8gaW5zaWRlIGFuIE9ic2VydmFibGUgY2hhaW4sIHdoaWNoIGNhdXNlcyBpbnRlcmNlcHRvcnMgdG8gYmUgcmUtcnVuIG9uIGV2ZXJ5XG4gICAgICAgIC8vIHN1YnNjcmlwdGlvbiAodGhpcyBhbHNvIG1ha2VzIHJldHJpZXMgcmUtcnVuIHRoZSBoYW5kbGVyLCBpbmNsdWRpbmcgaW50ZXJjZXB0b3JzKS5cbiAgICAgICAgY29uc3QgZXZlbnRzJCA9IG9mKHJlcSkucGlwZShjb25jYXRNYXAoKHJlcSkgPT4gdGhpcy5oYW5kbGVyLmhhbmRsZShyZXEpKSk7XG4gICAgICAgIC8vIElmIGNvbWluZyB2aWEgdGhlIEFQSSBzaWduYXR1cmUgd2hpY2ggYWNjZXB0cyBhIHByZXZpb3VzbHkgY29uc3RydWN0ZWQgSHR0cFJlcXVlc3QsXG4gICAgICAgIC8vIHRoZSBvbmx5IG9wdGlvbiBpcyB0byBnZXQgdGhlIGV2ZW50IHN0cmVhbS4gT3RoZXJ3aXNlLCByZXR1cm4gdGhlIGV2ZW50IHN0cmVhbSBpZlxuICAgICAgICAvLyB0aGF0IGlzIHdoYXQgd2FzIHJlcXVlc3RlZC5cbiAgICAgICAgaWYgKGZpcnN0IGluc3RhbmNlb2YgSHR0cFJlcXVlc3QgfHwgb3B0aW9ucy5vYnNlcnZlID09PSAnZXZlbnRzJykge1xuICAgICAgICAgICAgcmV0dXJuIGV2ZW50cyQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhlIHJlcXVlc3RlZCBzdHJlYW0gY29udGFpbnMgZWl0aGVyIHRoZSBmdWxsIHJlc3BvbnNlIG9yIHRoZSBib2R5LiBJbiBlaXRoZXJcbiAgICAgICAgLy8gY2FzZSwgdGhlIGZpcnN0IHN0ZXAgaXMgdG8gZmlsdGVyIHRoZSBldmVudCBzdHJlYW0gdG8gZXh0cmFjdCBhIHN0cmVhbSBvZlxuICAgICAgICAvLyByZXNwb25zZXMocykuXG4gICAgICAgIGNvbnN0IHJlcyQgPSBldmVudHMkLnBpcGUoZmlsdGVyKChldmVudCkgPT4gZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpKTtcbiAgICAgICAgLy8gRGVjaWRlIHdoaWNoIHN0cmVhbSB0byByZXR1cm4uXG4gICAgICAgIHN3aXRjaCAob3B0aW9ucy5vYnNlcnZlIHx8ICdib2R5Jykge1xuICAgICAgICAgICAgY2FzZSAnYm9keSc6XG4gICAgICAgICAgICAgICAgLy8gVGhlIHJlcXVlc3RlZCBzdHJlYW0gaXMgdGhlIGJvZHkuIE1hcCB0aGUgcmVzcG9uc2Ugc3RyZWFtIHRvIHRoZSByZXNwb25zZVxuICAgICAgICAgICAgICAgIC8vIGJvZHkuIFRoaXMgY291bGQgYmUgZG9uZSBtb3JlIHNpbXBseSwgYnV0IGEgbWlzYmVoYXZpbmcgaW50ZXJjZXB0b3IgbWlnaHRcbiAgICAgICAgICAgICAgICAvLyB0cmFuc2Zvcm0gdGhlIHJlc3BvbnNlIGJvZHkgaW50byBhIGRpZmZlcmVudCBmb3JtYXQgYW5kIGlnbm9yZSB0aGUgcmVxdWVzdGVkXG4gICAgICAgICAgICAgICAgLy8gcmVzcG9uc2VUeXBlLiBHdWFyZCBhZ2FpbnN0IHRoaXMgYnkgdmFsaWRhdGluZyB0aGF0IHRoZSByZXNwb25zZSBpcyBvZiB0aGVcbiAgICAgICAgICAgICAgICAvLyByZXF1ZXN0ZWQgdHlwZS5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlcS5yZXNwb25zZVR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYXJyYXlidWZmZXInOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcyQucGlwZShtYXAoKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFZhbGlkYXRlIHRoYXQgdGhlIGJvZHkgaXMgYW4gQXJyYXlCdWZmZXIuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5ib2R5ICE9PSBudWxsICYmICEocmVzLmJvZHkgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXNwb25zZSBpcyBub3QgYW4gQXJyYXlCdWZmZXIuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuYm9keTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYmxvYic6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzJC5waXBlKG1hcCgocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVmFsaWRhdGUgdGhhdCB0aGUgYm9keSBpcyBhIEJsb2IuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5ib2R5ICE9PSBudWxsICYmICEocmVzLmJvZHkgaW5zdGFuY2VvZiBCbG9iKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Jlc3BvbnNlIGlzIG5vdCBhIEJsb2IuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuYm9keTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzJC5waXBlKG1hcCgocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVmFsaWRhdGUgdGhhdCB0aGUgYm9keSBpcyBhIHN0cmluZy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmJvZHkgIT09IG51bGwgJiYgdHlwZW9mIHJlcy5ib2R5ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Jlc3BvbnNlIGlzIG5vdCBhIHN0cmluZy4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5ib2R5O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdqc29uJzpcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vIHZhbGlkYXRpb24gbmVlZGVkIGZvciBKU09OIHJlc3BvbnNlcywgYXMgdGhleSBjYW4gYmUgb2YgYW55IHR5cGUuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzJC5waXBlKG1hcCgocmVzKSA9PiByZXMuYm9keSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ3Jlc3BvbnNlJzpcbiAgICAgICAgICAgICAgICAvLyBUaGUgcmVzcG9uc2Ugc3RyZWFtIHdhcyByZXF1ZXN0ZWQgZGlyZWN0bHksIHNvIHJldHVybiBpdC5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzJDtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgLy8gR3VhcmQgYWdhaW5zdCBuZXcgZnV0dXJlIG9ic2VydmUgdHlwZXMgYmVpbmcgYWRkZWQuXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnJlYWNoYWJsZTogdW5oYW5kbGVkIG9ic2VydmUgdHlwZSAke29wdGlvbnMub2JzZXJ2ZX19YCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0cyBhbiBvYnNlcnZhYmxlIHRoYXQsIHdoZW4gc3Vic2NyaWJlZCwgY2F1c2VzIHRoZSBjb25maWd1cmVkXG4gICAgICogYERFTEVURWAgcmVxdWVzdCB0byBleGVjdXRlIG9uIHRoZSBzZXJ2ZXIuIFNlZSB0aGUgaW5kaXZpZHVhbCBvdmVybG9hZHMgZm9yXG4gICAgICogZGV0YWlscyBvbiB0aGUgcmV0dXJuIHR5cGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsICAgICBUaGUgZW5kcG9pbnQgVVJMLlxuICAgICAqIEBwYXJhbSBvcHRpb25zIFRoZSBIVFRQIG9wdGlvbnMgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0LlxuICAgICAqXG4gICAgICovXG4gICAgZGVsZXRlKHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ0RFTEVURScsIHVybCwgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdHMgYW4gb2JzZXJ2YWJsZSB0aGF0LCB3aGVuIHN1YnNjcmliZWQsIGNhdXNlcyB0aGUgY29uZmlndXJlZFxuICAgICAqIGBHRVRgIHJlcXVlc3QgdG8gZXhlY3V0ZSBvbiB0aGUgc2VydmVyLiBTZWUgdGhlIGluZGl2aWR1YWwgb3ZlcmxvYWRzIGZvclxuICAgICAqIGRldGFpbHMgb24gdGhlIHJldHVybiB0eXBlLlxuICAgICAqL1xuICAgIGdldCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KCdHRVQnLCB1cmwsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RzIGFuIG9ic2VydmFibGUgdGhhdCwgd2hlbiBzdWJzY3JpYmVkLCBjYXVzZXMgdGhlIGNvbmZpZ3VyZWRcbiAgICAgKiBgSEVBRGAgcmVxdWVzdCB0byBleGVjdXRlIG9uIHRoZSBzZXJ2ZXIuIFRoZSBgSEVBRGAgbWV0aG9kIHJldHVybnNcbiAgICAgKiBtZXRhIGluZm9ybWF0aW9uIGFib3V0IHRoZSByZXNvdXJjZSB3aXRob3V0IHRyYW5zZmVycmluZyB0aGVcbiAgICAgKiByZXNvdXJjZSBpdHNlbGYuIFNlZSB0aGUgaW5kaXZpZHVhbCBvdmVybG9hZHMgZm9yXG4gICAgICogZGV0YWlscyBvbiB0aGUgcmV0dXJuIHR5cGUuXG4gICAgICovXG4gICAgaGVhZCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KCdIRUFEJywgdXJsLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0cyBhbiBgT2JzZXJ2YWJsZWAgdGhhdCwgd2hlbiBzdWJzY3JpYmVkLCBjYXVzZXMgYSByZXF1ZXN0IHdpdGggdGhlIHNwZWNpYWwgbWV0aG9kXG4gICAgICogYEpTT05QYCB0byBiZSBkaXNwYXRjaGVkIHZpYSB0aGUgaW50ZXJjZXB0b3IgcGlwZWxpbmUuXG4gICAgICogVGhlIFtKU09OUCBwYXR0ZXJuXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9KU09OUCkgd29ya3MgYXJvdW5kIGxpbWl0YXRpb25zIG9mIGNlcnRhaW5cbiAgICAgKiBBUEkgZW5kcG9pbnRzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBuZXdlcixcbiAgICAgKiBhbmQgcHJlZmVyYWJsZSBbQ09SU10oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9DT1JTKSBwcm90b2NvbC5cbiAgICAgKiBKU09OUCB0cmVhdHMgdGhlIGVuZHBvaW50IEFQSSBhcyBhIEphdmFTY3JpcHQgZmlsZSBhbmQgdHJpY2tzIHRoZSBicm93c2VyIHRvIHByb2Nlc3MgdGhlXG4gICAgICogcmVxdWVzdHMgZXZlbiBpZiB0aGUgQVBJIGVuZHBvaW50IGlzIG5vdCBsb2NhdGVkIG9uIHRoZSBzYW1lIGRvbWFpbiAob3JpZ2luKSBhcyB0aGUgY2xpZW50LXNpZGVcbiAgICAgKiBhcHBsaWNhdGlvbiBtYWtpbmcgdGhlIHJlcXVlc3QuXG4gICAgICogVGhlIGVuZHBvaW50IEFQSSBtdXN0IHN1cHBvcnQgSlNPTlAgY2FsbGJhY2sgZm9yIEpTT05QIHJlcXVlc3RzIHRvIHdvcmsuXG4gICAgICogVGhlIHJlc291cmNlIEFQSSByZXR1cm5zIHRoZSBKU09OIHJlc3BvbnNlIHdyYXBwZWQgaW4gYSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgKiBZb3UgY2FuIHBhc3MgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIG5hbWUgYXMgb25lIG9mIHRoZSBxdWVyeSBwYXJhbWV0ZXJzLlxuICAgICAqIE5vdGUgdGhhdCBKU09OUCByZXF1ZXN0cyBjYW4gb25seSBiZSB1c2VkIHdpdGggYEdFVGAgcmVxdWVzdHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSByZXNvdXJjZSBVUkwuXG4gICAgICogQHBhcmFtIGNhbGxiYWNrUGFyYW0gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIG5hbWUuXG4gICAgICpcbiAgICAgKi9cbiAgICBqc29ucCh1cmwsIGNhbGxiYWNrUGFyYW0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdCgnSlNPTlAnLCB1cmwsIHtcbiAgICAgICAgICAgIHBhcmFtczogbmV3IEh0dHBQYXJhbXMoKS5hcHBlbmQoY2FsbGJhY2tQYXJhbSwgJ0pTT05QX0NBTExCQUNLJyksXG4gICAgICAgICAgICBvYnNlcnZlOiAnYm9keScsXG4gICAgICAgICAgICByZXNwb25zZVR5cGU6ICdqc29uJyxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdHMgYW4gYE9ic2VydmFibGVgIHRoYXQsIHdoZW4gc3Vic2NyaWJlZCwgY2F1c2VzIHRoZSBjb25maWd1cmVkXG4gICAgICogYE9QVElPTlNgIHJlcXVlc3QgdG8gZXhlY3V0ZSBvbiB0aGUgc2VydmVyLiBUaGlzIG1ldGhvZCBhbGxvd3MgdGhlIGNsaWVudFxuICAgICAqIHRvIGRldGVybWluZSB0aGUgc3VwcG9ydGVkIEhUVFAgbWV0aG9kcyBhbmQgb3RoZXIgY2FwYWJpbGl0aWVzIG9mIGFuIGVuZHBvaW50LFxuICAgICAqIHdpdGhvdXQgaW1wbHlpbmcgYSByZXNvdXJjZSBhY3Rpb24uIFNlZSB0aGUgaW5kaXZpZHVhbCBvdmVybG9hZHMgZm9yXG4gICAgICogZGV0YWlscyBvbiB0aGUgcmV0dXJuIHR5cGUuXG4gICAgICovXG4gICAgb3B0aW9ucyh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KCdPUFRJT05TJywgdXJsLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0cyBhbiBvYnNlcnZhYmxlIHRoYXQsIHdoZW4gc3Vic2NyaWJlZCwgY2F1c2VzIHRoZSBjb25maWd1cmVkXG4gICAgICogYFBBVENIYCByZXF1ZXN0IHRvIGV4ZWN1dGUgb24gdGhlIHNlcnZlci4gU2VlIHRoZSBpbmRpdmlkdWFsIG92ZXJsb2FkcyBmb3JcbiAgICAgKiBkZXRhaWxzIG9uIHRoZSByZXR1cm4gdHlwZS5cbiAgICAgKi9cbiAgICBwYXRjaCh1cmwsIGJvZHksIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KCdQQVRDSCcsIHVybCwgYWRkQm9keShvcHRpb25zLCBib2R5KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdHMgYW4gb2JzZXJ2YWJsZSB0aGF0LCB3aGVuIHN1YnNjcmliZWQsIGNhdXNlcyB0aGUgY29uZmlndXJlZFxuICAgICAqIGBQT1NUYCByZXF1ZXN0IHRvIGV4ZWN1dGUgb24gdGhlIHNlcnZlci4gVGhlIHNlcnZlciByZXNwb25kcyB3aXRoIHRoZSBsb2NhdGlvbiBvZlxuICAgICAqIHRoZSByZXBsYWNlZCByZXNvdXJjZS4gU2VlIHRoZSBpbmRpdmlkdWFsIG92ZXJsb2FkcyBmb3JcbiAgICAgKiBkZXRhaWxzIG9uIHRoZSByZXR1cm4gdHlwZS5cbiAgICAgKi9cbiAgICBwb3N0KHVybCwgYm9keSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ1BPU1QnLCB1cmwsIGFkZEJvZHkob3B0aW9ucywgYm9keSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RzIGFuIG9ic2VydmFibGUgdGhhdCwgd2hlbiBzdWJzY3JpYmVkLCBjYXVzZXMgdGhlIGNvbmZpZ3VyZWRcbiAgICAgKiBgUFVUYCByZXF1ZXN0IHRvIGV4ZWN1dGUgb24gdGhlIHNlcnZlci4gVGhlIGBQVVRgIG1ldGhvZCByZXBsYWNlcyBhbiBleGlzdGluZyByZXNvdXJjZVxuICAgICAqIHdpdGggYSBuZXcgc2V0IG9mIHZhbHVlcy5cbiAgICAgKiBTZWUgdGhlIGluZGl2aWR1YWwgb3ZlcmxvYWRzIGZvciBkZXRhaWxzIG9uIHRoZSByZXR1cm4gdHlwZS5cbiAgICAgKi9cbiAgICBwdXQodXJsLCBib2R5LCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdCgnUFVUJywgdXJsLCBhZGRCb2R5KG9wdGlvbnMsIGJvZHkpKTtcbiAgICB9XG59XG5IdHRwQ2xpZW50Lsm1ZmFjID0gaTAuybXJtW5nRGVjbGFyZUZhY3RvcnkoeyBtaW5WZXJzaW9uOiBcIjEyLjAuMFwiLCB2ZXJzaW9uOiBcIjE0LjIuOFwiLCBuZ0ltcG9ydDogaTAsIHR5cGU6IEh0dHBDbGllbnQsIGRlcHM6IFt7IHRva2VuOiBIdHRwSGFuZGxlciB9XSwgdGFyZ2V0OiBpMC7Jtcm1RmFjdG9yeVRhcmdldC5JbmplY3RhYmxlIH0pO1xuSHR0cENsaWVudC7JtXByb3YgPSBpMC7Jtcm1bmdEZWNsYXJlSW5qZWN0YWJsZSh7IG1pblZlcnNpb246IFwiMTIuMC4wXCIsIHZlcnNpb246IFwiMTQuMi44XCIsIG5nSW1wb3J0OiBpMCwgdHlwZTogSHR0cENsaWVudCB9KTtcbmkwLsm1ybVuZ0RlY2xhcmVDbGFzc01ldGFkYXRhKHsgbWluVmVyc2lvbjogXCIxMi4wLjBcIiwgdmVyc2lvbjogXCIxNC4yLjhcIiwgbmdJbXBvcnQ6IGkwLCB0eXBlOiBIdHRwQ2xpZW50LCBkZWNvcmF0b3JzOiBbe1xuICAgICAgICAgICAgdHlwZTogSW5qZWN0YWJsZVxuICAgICAgICB9XSwgY3RvclBhcmFtZXRlcnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFt7IHR5cGU6IEh0dHBIYW5kbGVyIH1dOyB9IH0pO1xuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbi8qKlxuICogYEh0dHBIYW5kbGVyYCB3aGljaCBhcHBsaWVzIGFuIGBIdHRwSW50ZXJjZXB0b3JgIHRvIGFuIGBIdHRwUmVxdWVzdGAuXG4gKlxuICpcbiAqL1xuY2xhc3MgSHR0cEludGVyY2VwdG9ySGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IobmV4dCwgaW50ZXJjZXB0b3IpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gbmV4dDtcbiAgICAgICAgdGhpcy5pbnRlcmNlcHRvciA9IGludGVyY2VwdG9yO1xuICAgIH1cbiAgICBoYW5kbGUocmVxKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVyY2VwdG9yLmludGVyY2VwdChyZXEsIHRoaXMubmV4dCk7XG4gICAgfVxufVxuLyoqXG4gKiBBIG11bHRpLXByb3ZpZGVyIHRva2VuIHRoYXQgcmVwcmVzZW50cyB0aGUgYXJyYXkgb2YgcmVnaXN0ZXJlZFxuICogYEh0dHBJbnRlcmNlcHRvcmAgb2JqZWN0cy5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmNvbnN0IEhUVFBfSU5URVJDRVBUT1JTID0gbmV3IEluamVjdGlvblRva2VuKCdIVFRQX0lOVEVSQ0VQVE9SUycpO1xuY2xhc3MgTm9vcEludGVyY2VwdG9yIHtcbiAgICBpbnRlcmNlcHQocmVxLCBuZXh0KSB7XG4gICAgICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xuICAgIH1cbn1cbk5vb3BJbnRlcmNlcHRvci7JtWZhYyA9IGkwLsm1ybVuZ0RlY2xhcmVGYWN0b3J5KHsgbWluVmVyc2lvbjogXCIxMi4wLjBcIiwgdmVyc2lvbjogXCIxNC4yLjhcIiwgbmdJbXBvcnQ6IGkwLCB0eXBlOiBOb29wSW50ZXJjZXB0b3IsIGRlcHM6IFtdLCB0YXJnZXQ6IGkwLsm1ybVGYWN0b3J5VGFyZ2V0LkluamVjdGFibGUgfSk7XG5Ob29wSW50ZXJjZXB0b3IuybVwcm92ID0gaTAuybXJtW5nRGVjbGFyZUluamVjdGFibGUoeyBtaW5WZXJzaW9uOiBcIjEyLjAuMFwiLCB2ZXJzaW9uOiBcIjE0LjIuOFwiLCBuZ0ltcG9ydDogaTAsIHR5cGU6IE5vb3BJbnRlcmNlcHRvciB9KTtcbmkwLsm1ybVuZ0RlY2xhcmVDbGFzc01ldGFkYXRhKHsgbWluVmVyc2lvbjogXCIxMi4wLjBcIiwgdmVyc2lvbjogXCIxNC4yLjhcIiwgbmdJbXBvcnQ6IGkwLCB0eXBlOiBOb29wSW50ZXJjZXB0b3IsIGRlY29yYXRvcnM6IFt7XG4gICAgICAgICAgICB0eXBlOiBJbmplY3RhYmxlXG4gICAgICAgIH1dIH0pO1xuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbi8vIEV2ZXJ5IHJlcXVlc3QgbWFkZSB0aHJvdWdoIEpTT05QIG5lZWRzIGEgY2FsbGJhY2sgbmFtZSB0aGF0J3MgdW5pcXVlIGFjcm9zcyB0aGVcbi8vIHdob2xlIHBhZ2UuIEVhY2ggcmVxdWVzdCBpcyBhc3NpZ25lZCBhbiBpZCBhbmQgdGhlIGNhbGxiYWNrIG5hbWUgaXMgY29uc3RydWN0ZWRcbi8vIGZyb20gdGhhdC4gVGhlIG5leHQgaWQgdG8gYmUgYXNzaWduZWQgaXMgdHJhY2tlZCBpbiBhIGdsb2JhbCB2YXJpYWJsZSBoZXJlIHRoYXRcbi8vIGlzIHNoYXJlZCBhbW9uZyBhbGwgYXBwbGljYXRpb25zIG9uIHRoZSBwYWdlLlxubGV0IG5leHRSZXF1ZXN0SWQgPSAwO1xuLyoqXG4gKiBXaGVuIGEgcGVuZGluZyA8c2NyaXB0PiBpcyB1bnN1YnNjcmliZWQgd2UnbGwgbW92ZSBpdCB0byB0aGlzIGRvY3VtZW50LCBzbyBpdCB3b24ndCBiZVxuICogZXhlY3V0ZWQuXG4gKi9cbmxldCBmb3JlaWduRG9jdW1lbnQ7XG4vLyBFcnJvciB0ZXh0IGdpdmVuIHdoZW4gYSBKU09OUCBzY3JpcHQgaXMgaW5qZWN0ZWQsIGJ1dCBkb2Vzbid0IGludm9rZSB0aGUgY2FsbGJhY2tcbi8vIHBhc3NlZCBpbiBpdHMgVVJMLlxuY29uc3QgSlNPTlBfRVJSX05PX0NBTExCQUNLID0gJ0pTT05QIGluamVjdGVkIHNjcmlwdCBkaWQgbm90IGludm9rZSBjYWxsYmFjay4nO1xuLy8gRXJyb3IgdGV4dCBnaXZlbiB3aGVuIGEgcmVxdWVzdCBpcyBwYXNzZWQgdG8gdGhlIEpzb25wQ2xpZW50QmFja2VuZCB0aGF0IGRvZXNuJ3Rcbi8vIGhhdmUgYSByZXF1ZXN0IG1ldGhvZCBKU09OUC5cbmNvbnN0IEpTT05QX0VSUl9XUk9OR19NRVRIT0QgPSAnSlNPTlAgcmVxdWVzdHMgbXVzdCB1c2UgSlNPTlAgcmVxdWVzdCBtZXRob2QuJztcbmNvbnN0IEpTT05QX0VSUl9XUk9OR19SRVNQT05TRV9UWVBFID0gJ0pTT05QIHJlcXVlc3RzIG11c3QgdXNlIEpzb24gcmVzcG9uc2UgdHlwZS4nO1xuLy8gRXJyb3IgdGV4dCBnaXZlbiB3aGVuIGEgcmVxdWVzdCBpcyBwYXNzZWQgdG8gdGhlIEpzb25wQ2xpZW50QmFja2VuZCB0aGF0IGhhc1xuLy8gaGVhZGVycyBzZXRcbmNvbnN0IEpTT05QX0VSUl9IRUFERVJTX05PVF9TVVBQT1JURUQgPSAnSlNPTlAgcmVxdWVzdHMgZG8gbm90IHN1cHBvcnQgaGVhZGVycy4nO1xuLyoqXG4gKiBESSB0b2tlbi9hYnN0cmFjdCB0eXBlIHJlcHJlc2VudGluZyBhIG1hcCBvZiBKU09OUCBjYWxsYmFja3MuXG4gKlxuICogSW4gdGhlIGJyb3dzZXIsIHRoaXMgc2hvdWxkIGFsd2F5cyBiZSB0aGUgYHdpbmRvd2Agb2JqZWN0LlxuICpcbiAqXG4gKi9cbmNsYXNzIEpzb25wQ2FsbGJhY2tDb250ZXh0IHtcbn1cbi8qKlxuICogUHJvY2Vzc2VzIGFuIGBIdHRwUmVxdWVzdGAgd2l0aCB0aGUgSlNPTlAgbWV0aG9kLFxuICogYnkgcGVyZm9ybWluZyBKU09OUCBzdHlsZSByZXF1ZXN0cy5cbiAqIEBzZWUgYEh0dHBIYW5kbGVyYFxuICogQHNlZSBgSHR0cFhockJhY2tlbmRgXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5jbGFzcyBKc29ucENsaWVudEJhY2tlbmQge1xuICAgIGNvbnN0cnVjdG9yKGNhbGxiYWNrTWFwLCBkb2N1bWVudCkge1xuICAgICAgICB0aGlzLmNhbGxiYWNrTWFwID0gY2FsbGJhY2tNYXA7XG4gICAgICAgIHRoaXMuZG9jdW1lbnQgPSBkb2N1bWVudDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgcmVzb2x2ZWQgcHJvbWlzZSB0aGF0IGNhbiBiZSB1c2VkIHRvIHNjaGVkdWxlIG1pY3JvdGFza3MgaW4gdGhlIGV2ZW50IGhhbmRsZXJzLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yZXNvbHZlZFByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBuYW1lIG9mIHRoZSBuZXh0IGNhbGxiYWNrIG1ldGhvZCwgYnkgaW5jcmVtZW50aW5nIHRoZSBnbG9iYWwgYG5leHRSZXF1ZXN0SWRgLlxuICAgICAqL1xuICAgIG5leHRDYWxsYmFjaygpIHtcbiAgICAgICAgcmV0dXJuIGBuZ19qc29ucF9jYWxsYmFja18ke25leHRSZXF1ZXN0SWQrK31gO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzZXMgYSBKU09OUCByZXF1ZXN0IGFuZCByZXR1cm5zIGFuIGV2ZW50IHN0cmVhbSBvZiB0aGUgcmVzdWx0cy5cbiAgICAgKiBAcGFyYW0gcmVxIFRoZSByZXF1ZXN0IG9iamVjdC5cbiAgICAgKiBAcmV0dXJucyBBbiBvYnNlcnZhYmxlIG9mIHRoZSByZXNwb25zZSBldmVudHMuXG4gICAgICpcbiAgICAgKi9cbiAgICBoYW5kbGUocmVxKSB7XG4gICAgICAgIC8vIEZpcnN0bHksIGNoZWNrIGJvdGggdGhlIG1ldGhvZCBhbmQgcmVzcG9uc2UgdHlwZS4gSWYgZWl0aGVyIGRvZXNuJ3QgbWF0Y2hcbiAgICAgICAgLy8gdGhlbiB0aGUgcmVxdWVzdCB3YXMgaW1wcm9wZXJseSByb3V0ZWQgaGVyZSBhbmQgY2Fubm90IGJlIGhhbmRsZWQuXG4gICAgICAgIGlmIChyZXEubWV0aG9kICE9PSAnSlNPTlAnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoSlNPTlBfRVJSX1dST05HX01FVEhPRCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocmVxLnJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoSlNPTlBfRVJSX1dST05HX1JFU1BPTlNFX1RZUEUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENoZWNrIHRoZSByZXF1ZXN0IGhlYWRlcnMuIEpTT05QIGRvZXNuJ3Qgc3VwcG9ydCBoZWFkZXJzIGFuZFxuICAgICAgICAvLyBjYW5ub3Qgc2V0IGFueSB0aGF0IHdlcmUgc3VwcGxpZWQuXG4gICAgICAgIGlmIChyZXEuaGVhZGVycy5rZXlzKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEpTT05QX0VSUl9IRUFERVJTX05PVF9TVVBQT1JURUQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEV2ZXJ5dGhpbmcgZWxzZSBoYXBwZW5zIGluc2lkZSB0aGUgT2JzZXJ2YWJsZSBib3VuZGFyeS5cbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgLy8gVGhlIGZpcnN0IHN0ZXAgdG8gbWFrZSBhIHJlcXVlc3QgaXMgdG8gZ2VuZXJhdGUgdGhlIGNhbGxiYWNrIG5hbWUsIGFuZCByZXBsYWNlIHRoZVxuICAgICAgICAgICAgLy8gY2FsbGJhY2sgcGxhY2Vob2xkZXIgaW4gdGhlIFVSTCB3aXRoIHRoZSBuYW1lLiBDYXJlIGhhcyB0byBiZSB0YWtlbiBoZXJlIHRvIGVuc3VyZVxuICAgICAgICAgICAgLy8gYSB0cmFpbGluZyAmLCBpZiBtYXRjaGVkLCBnZXRzIGluc2VydGVkIGJhY2sgaW50byB0aGUgVVJMIGluIHRoZSBjb3JyZWN0IHBsYWNlLlxuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSB0aGlzLm5leHRDYWxsYmFjaygpO1xuICAgICAgICAgICAgY29uc3QgdXJsID0gcmVxLnVybFdpdGhQYXJhbXMucmVwbGFjZSgvPUpTT05QX0NBTExCQUNLKCZ8JCkvLCBgPSR7Y2FsbGJhY2t9JDFgKTtcbiAgICAgICAgICAgIC8vIENvbnN0cnVjdCB0aGUgPHNjcmlwdD4gdGFnIGFuZCBwb2ludCBpdCBhdCB0aGUgVVJMLlxuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgICAgICBub2RlLnNyYyA9IHVybDtcbiAgICAgICAgICAgIC8vIEEgSlNPTlAgcmVxdWVzdCByZXF1aXJlcyB3YWl0aW5nIGZvciBtdWx0aXBsZSBjYWxsYmFja3MuIFRoZXNlIHZhcmlhYmxlc1xuICAgICAgICAgICAgLy8gYXJlIGNsb3NlZCBvdmVyIGFuZCB0cmFjayBzdGF0ZSBhY3Jvc3MgdGhvc2UgY2FsbGJhY2tzLlxuICAgICAgICAgICAgLy8gVGhlIHJlc3BvbnNlIG9iamVjdCwgaWYgb25lIGhhcyBiZWVuIHJlY2VpdmVkLCBvciBudWxsIG90aGVyd2lzZS5cbiAgICAgICAgICAgIGxldCBib2R5ID0gbnVsbDtcbiAgICAgICAgICAgIC8vIFdoZXRoZXIgdGhlIHJlc3BvbnNlIGNhbGxiYWNrIGhhcyBiZWVuIGNhbGxlZC5cbiAgICAgICAgICAgIGxldCBmaW5pc2hlZCA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gU2V0IHRoZSByZXNwb25zZSBjYWxsYmFjayBpbiB0aGlzLmNhbGxiYWNrTWFwICh3aGljaCB3aWxsIGJlIHRoZSB3aW5kb3dcbiAgICAgICAgICAgIC8vIG9iamVjdCBpbiB0aGUgYnJvd3Nlci4gVGhlIHNjcmlwdCBiZWluZyBsb2FkZWQgdmlhIHRoZSA8c2NyaXB0PiB0YWcgd2lsbFxuICAgICAgICAgICAgLy8gZXZlbnR1YWxseSBjYWxsIHRoaXMgY2FsbGJhY2suXG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrTWFwW2NhbGxiYWNrXSA9IChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gRGF0YSBoYXMgYmVlbiByZWNlaXZlZCBmcm9tIHRoZSBKU09OUCBzY3JpcHQuIEZpcnN0bHksIGRlbGV0ZSB0aGlzIGNhbGxiYWNrLlxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmNhbGxiYWNrTWFwW2NhbGxiYWNrXTtcbiAgICAgICAgICAgICAgICAvLyBTZXQgc3RhdGUgdG8gaW5kaWNhdGUgZGF0YSB3YXMgcmVjZWl2ZWQuXG4gICAgICAgICAgICAgICAgYm9keSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgZmluaXNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIGNsZWFudXAoKSBpcyBhIHV0aWxpdHkgY2xvc3VyZSB0aGF0IHJlbW92ZXMgdGhlIDxzY3JpcHQ+IGZyb20gdGhlIHBhZ2UgYW5kXG4gICAgICAgICAgICAvLyB0aGUgcmVzcG9uc2UgY2FsbGJhY2sgZnJvbSB0aGUgd2luZG93LiBUaGlzIGxvZ2ljIGlzIHVzZWQgaW4gYm90aCB0aGVcbiAgICAgICAgICAgIC8vIHN1Y2Nlc3MsIGVycm9yLCBhbmQgY2FuY2VsbGF0aW9uIHBhdGhzLCBzbyBpdCdzIGV4dHJhY3RlZCBvdXQgZm9yIGNvbnZlbmllbmNlLlxuICAgICAgICAgICAgY29uc3QgY2xlYW51cCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIDxzY3JpcHQ+IHRhZyBpZiBpdCdzIHN0aWxsIG9uIHRoZSBwYWdlLlxuICAgICAgICAgICAgICAgIGlmIChub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIHJlc3BvbnNlIGNhbGxiYWNrIGZyb20gdGhlIGNhbGxiYWNrTWFwICh3aW5kb3cgb2JqZWN0IGluIHRoZVxuICAgICAgICAgICAgICAgIC8vIGJyb3dzZXIpLlxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmNhbGxiYWNrTWFwW2NhbGxiYWNrXTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBvbkxvYWQoKSBpcyB0aGUgc3VjY2VzcyBjYWxsYmFjayB3aGljaCBydW5zIGFmdGVyIHRoZSByZXNwb25zZSBjYWxsYmFja1xuICAgICAgICAgICAgLy8gaWYgdGhlIEpTT05QIHNjcmlwdCBsb2FkcyBzdWNjZXNzZnVsbHkuIFRoZSBldmVudCBpdHNlbGYgaXMgdW5pbXBvcnRhbnQuXG4gICAgICAgICAgICAvLyBJZiBzb21ldGhpbmcgd2VudCB3cm9uZywgb25Mb2FkKCkgbWF5IHJ1biB3aXRob3V0IHRoZSByZXNwb25zZSBjYWxsYmFja1xuICAgICAgICAgICAgLy8gaGF2aW5nIGJlZW4gaW52b2tlZC5cbiAgICAgICAgICAgIGNvbnN0IG9uTG9hZCA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFdlIHdyYXAgaXQgaW4gYW4gZXh0cmEgUHJvbWlzZSwgdG8gZW5zdXJlIHRoZSBtaWNyb3Rhc2tcbiAgICAgICAgICAgICAgICAvLyBpcyBzY2hlZHVsZWQgYWZ0ZXIgdGhlIGxvYWRlZCBlbmRwb2ludCBoYXMgZXhlY3V0ZWQgYW55IHBvdGVudGlhbCBtaWNyb3Rhc2sgaXRzZWxmLFxuICAgICAgICAgICAgICAgIC8vIHdoaWNoIGlzIG5vdCBndWFyYW50ZWVkIGluIEludGVybmV0IEV4cGxvcmVyIGFuZCBFZGdlSFRNTC4gU2VlIGlzc3VlICMzOTQ5NlxuICAgICAgICAgICAgICAgIHRoaXMucmVzb2x2ZWRQcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBDbGVhbnVwIHRoZSBwYWdlLlxuICAgICAgICAgICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHdoZXRoZXIgdGhlIHJlc3BvbnNlIGNhbGxiYWNrIGhhcyBydW4uXG4gICAgICAgICAgICAgICAgICAgIGlmICghZmluaXNoZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEl0IGhhc24ndCwgc29tZXRoaW5nIHdlbnQgd3Jvbmcgd2l0aCB0aGUgcmVxdWVzdC4gUmV0dXJuIGFuIGVycm9yIHZpYVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIE9ic2VydmFibGUgZXJyb3IgcGF0aC4gQWxsIEpTT05QIGVycm9ycyBoYXZlIHN0YXR1cyAwLlxuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IobmV3IEh0dHBFcnJvclJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c1RleHQ6ICdKU09OUCBFcnJvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IG5ldyBFcnJvcihKU09OUF9FUlJfTk9fQ0FMTEJBQ0spLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIFN1Y2Nlc3MuIGJvZHkgZWl0aGVyIGNvbnRhaW5zIHRoZSByZXNwb25zZSBib2R5IG9yIG51bGwgaWYgbm9uZSB3YXNcbiAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuZWQuXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQobmV3IEh0dHBSZXNwb25zZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAyMDAgLyogSHR0cFN0YXR1c0NvZGUuT2sgKi8sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNUZXh0OiAnT0snLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIENvbXBsZXRlIHRoZSBzdHJlYW0sIHRoZSByZXNwb25zZSBpcyBvdmVyLlxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIG9uRXJyb3IoKSBpcyB0aGUgZXJyb3IgY2FsbGJhY2ssIHdoaWNoIHJ1bnMgaWYgdGhlIHNjcmlwdCByZXR1cm5lZCBnZW5lcmF0ZXNcbiAgICAgICAgICAgIC8vIGEgSmF2YXNjcmlwdCBlcnJvci4gSXQgZW1pdHMgdGhlIGVycm9yIHZpYSB0aGUgT2JzZXJ2YWJsZSBlcnJvciBjaGFubmVsIGFzXG4gICAgICAgICAgICAvLyBhIEh0dHBFcnJvclJlc3BvbnNlLlxuICAgICAgICAgICAgY29uc3Qgb25FcnJvciA9IChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgICAgICAvLyBXcmFwIHRoZSBlcnJvciBpbiBhIEh0dHBFcnJvclJlc3BvbnNlLlxuICAgICAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKG5ldyBIdHRwRXJyb3JSZXNwb25zZSh7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDAsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c1RleHQ6ICdKU09OUCBFcnJvcicsXG4gICAgICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gU3Vic2NyaWJlIHRvIGJvdGggdGhlIHN1Y2Nlc3MgKGxvYWQpIGFuZCBlcnJvciBldmVudHMgb24gdGhlIDxzY3JpcHQ+IHRhZyxcbiAgICAgICAgICAgIC8vIGFuZCBhZGQgaXQgdG8gdGhlIHBhZ2UuXG4gICAgICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWQpO1xuICAgICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uRXJyb3IpO1xuICAgICAgICAgICAgdGhpcy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgLy8gVGhlIHJlcXVlc3QgaGFzIG5vdyBiZWVuIHN1Y2Nlc3NmdWxseSBzZW50LlxuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh7IHR5cGU6IEh0dHBFdmVudFR5cGUuU2VudCB9KTtcbiAgICAgICAgICAgIC8vIENhbmNlbGxhdGlvbiBoYW5kbGVyLlxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWZpbmlzaGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBbmQgZmluYWxseSwgY2xlYW4gdXAgdGhlIHBhZ2UuXG4gICAgICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlbW92ZUxpc3RlbmVycyhzY3JpcHQpIHtcbiAgICAgICAgLy8gSXNzdWUgIzM0ODE4XG4gICAgICAgIC8vIENoYW5naW5nIDxzY3JpcHQ+J3Mgb3duZXJEb2N1bWVudCB3aWxsIHByZXZlbnQgaXQgZnJvbSBleGVjdXRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NjcmlwdGluZy5odG1sI2V4ZWN1dGUtdGhlLXNjcmlwdC1ibG9ja1xuICAgICAgICBpZiAoIWZvcmVpZ25Eb2N1bWVudCkge1xuICAgICAgICAgICAgZm9yZWlnbkRvY3VtZW50ID0gdGhpcy5kb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBmb3JlaWduRG9jdW1lbnQuYWRvcHROb2RlKHNjcmlwdCk7XG4gICAgfVxufVxuSnNvbnBDbGllbnRCYWNrZW5kLsm1ZmFjID0gaTAuybXJtW5nRGVjbGFyZUZhY3RvcnkoeyBtaW5WZXJzaW9uOiBcIjEyLjAuMFwiLCB2ZXJzaW9uOiBcIjE0LjIuOFwiLCBuZ0ltcG9ydDogaTAsIHR5cGU6IEpzb25wQ2xpZW50QmFja2VuZCwgZGVwczogW3sgdG9rZW46IEpzb25wQ2FsbGJhY2tDb250ZXh0IH0sIHsgdG9rZW46IERPQ1VNRU5UIH1dLCB0YXJnZXQ6IGkwLsm1ybVGYWN0b3J5VGFyZ2V0LkluamVjdGFibGUgfSk7XG5Kc29ucENsaWVudEJhY2tlbmQuybVwcm92ID0gaTAuybXJtW5nRGVjbGFyZUluamVjdGFibGUoeyBtaW5WZXJzaW9uOiBcIjEyLjAuMFwiLCB2ZXJzaW9uOiBcIjE0LjIuOFwiLCBuZ0ltcG9ydDogaTAsIHR5cGU6IEpzb25wQ2xpZW50QmFja2VuZCB9KTtcbmkwLsm1ybVuZ0RlY2xhcmVDbGFzc01ldGFkYXRhKHsgbWluVmVyc2lvbjogXCIxMi4wLjBcIiwgdmVyc2lvbjogXCIxNC4yLjhcIiwgbmdJbXBvcnQ6IGkwLCB0eXBlOiBKc29ucENsaWVudEJhY2tlbmQsIGRlY29yYXRvcnM6IFt7XG4gICAgICAgICAgICB0eXBlOiBJbmplY3RhYmxlXG4gICAgICAgIH1dLCBjdG9yUGFyYW1ldGVyczogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gW3sgdHlwZTogSnNvbnBDYWxsYmFja0NvbnRleHQgfSwgeyB0eXBlOiB1bmRlZmluZWQsIGRlY29yYXRvcnM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBJbmplY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzOiBbRE9DVU1FTlRdXG4gICAgICAgICAgICAgICAgICAgIH1dIH1dO1xuICAgIH0gfSk7XG4vKipcbiAqIElkZW50aWZpZXMgcmVxdWVzdHMgd2l0aCB0aGUgbWV0aG9kIEpTT05QIGFuZFxuICogc2hpZnRzIHRoZW0gdG8gdGhlIGBKc29ucENsaWVudEJhY2tlbmRgLlxuICpcbiAqIEBzZWUgYEh0dHBJbnRlcmNlcHRvcmBcbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmNsYXNzIEpzb25wSW50ZXJjZXB0b3Ige1xuICAgIGNvbnN0cnVjdG9yKGpzb25wKSB7XG4gICAgICAgIHRoaXMuanNvbnAgPSBqc29ucDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSWRlbnRpZmllcyBhbmQgaGFuZGxlcyBhIGdpdmVuIEpTT05QIHJlcXVlc3QuXG4gICAgICogQHBhcmFtIHJlcSBUaGUgb3V0Z29pbmcgcmVxdWVzdCBvYmplY3QgdG8gaGFuZGxlLlxuICAgICAqIEBwYXJhbSBuZXh0IFRoZSBuZXh0IGludGVyY2VwdG9yIGluIHRoZSBjaGFpbiwgb3IgdGhlIGJhY2tlbmRcbiAgICAgKiBpZiBubyBpbnRlcmNlcHRvcnMgcmVtYWluIGluIHRoZSBjaGFpbi5cbiAgICAgKiBAcmV0dXJucyBBbiBvYnNlcnZhYmxlIG9mIHRoZSBldmVudCBzdHJlYW0uXG4gICAgICovXG4gICAgaW50ZXJjZXB0KHJlcSwgbmV4dCkge1xuICAgICAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ0pTT05QJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuanNvbnAuaGFuZGxlKHJlcSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmFsbCB0aHJvdWdoIGZvciBub3JtYWwgSFRUUCByZXF1ZXN0cy5cbiAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSk7XG4gICAgfVxufVxuSnNvbnBJbnRlcmNlcHRvci7JtWZhYyA9IGkwLsm1ybVuZ0RlY2xhcmVGYWN0b3J5KHsgbWluVmVyc2lvbjogXCIxMi4wLjBcIiwgdmVyc2lvbjogXCIxNC4yLjhcIiwgbmdJbXBvcnQ6IGkwLCB0eXBlOiBKc29ucEludGVyY2VwdG9yLCBkZXBzOiBbeyB0b2tlbjogSnNvbnBDbGllbnRCYWNrZW5kIH1dLCB0YXJnZXQ6IGkwLsm1ybVGYWN0b3J5VGFyZ2V0LkluamVjdGFibGUgfSk7XG5Kc29ucEludGVyY2VwdG9yLsm1cHJvdiA9IGkwLsm1ybVuZ0RlY2xhcmVJbmplY3RhYmxlKHsgbWluVmVyc2lvbjogXCIxMi4wLjBcIiwgdmVyc2lvbjogXCIxNC4yLjhcIiwgbmdJbXBvcnQ6IGkwLCB0eXBlOiBKc29ucEludGVyY2VwdG9yIH0pO1xuaTAuybXJtW5nRGVjbGFyZUNsYXNzTWV0YWRhdGEoeyBtaW5WZXJzaW9uOiBcIjEyLjAuMFwiLCB2ZXJzaW9uOiBcIjE0LjIuOFwiLCBuZ0ltcG9ydDogaTAsIHR5cGU6IEpzb25wSW50ZXJjZXB0b3IsIGRlY29yYXRvcnM6IFt7XG4gICAgICAgICAgICB0eXBlOiBJbmplY3RhYmxlXG4gICAgICAgIH1dLCBjdG9yUGFyYW1ldGVyczogZnVuY3Rpb24gKCkgeyByZXR1cm4gW3sgdHlwZTogSnNvbnBDbGllbnRCYWNrZW5kIH1dOyB9IH0pO1xuXG5jb25zdCBYU1NJX1BSRUZJWCA9IC9eXFwpXFxdXFx9Jyw/XFxuLztcbi8qKlxuICogRGV0ZXJtaW5lIGFuIGFwcHJvcHJpYXRlIFVSTCBmb3IgdGhlIHJlc3BvbnNlLCBieSBjaGVja2luZyBlaXRoZXJcbiAqIFhNTEh0dHBSZXF1ZXN0LnJlc3BvbnNlVVJMIG9yIHRoZSBYLVJlcXVlc3QtVVJMIGhlYWRlci5cbiAqL1xuZnVuY3Rpb24gZ2V0UmVzcG9uc2VVcmwoeGhyKSB7XG4gICAgaWYgKCdyZXNwb25zZVVSTCcgaW4geGhyICYmIHhoci5yZXNwb25zZVVSTCkge1xuICAgICAgICByZXR1cm4geGhyLnJlc3BvbnNlVVJMO1xuICAgIH1cbiAgICBpZiAoL15YLVJlcXVlc3QtVVJMOi9tLnRlc3QoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSkge1xuICAgICAgICByZXR1cm4geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdYLVJlcXVlc3QtVVJMJyk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuLyoqXG4gKiBVc2VzIGBYTUxIdHRwUmVxdWVzdGAgdG8gc2VuZCByZXF1ZXN0cyB0byBhIGJhY2tlbmQgc2VydmVyLlxuICogQHNlZSBgSHR0cEhhbmRsZXJgXG4gKiBAc2VlIGBKc29ucENsaWVudEJhY2tlbmRgXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5jbGFzcyBIdHRwWGhyQmFja2VuZCB7XG4gICAgY29uc3RydWN0b3IoeGhyRmFjdG9yeSkge1xuICAgICAgICB0aGlzLnhockZhY3RvcnkgPSB4aHJGYWN0b3J5O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzZXMgYSByZXF1ZXN0IGFuZCByZXR1cm5zIGEgc3RyZWFtIG9mIHJlc3BvbnNlIGV2ZW50cy5cbiAgICAgKiBAcGFyYW0gcmVxIFRoZSByZXF1ZXN0IG9iamVjdC5cbiAgICAgKiBAcmV0dXJucyBBbiBvYnNlcnZhYmxlIG9mIHRoZSByZXNwb25zZSBldmVudHMuXG4gICAgICovXG4gICAgaGFuZGxlKHJlcSkge1xuICAgICAgICAvLyBRdWljayBjaGVjayB0byBnaXZlIGEgYmV0dGVyIGVycm9yIG1lc3NhZ2Ugd2hlbiBhIHVzZXIgYXR0ZW1wdHMgdG8gdXNlXG4gICAgICAgIC8vIEh0dHBDbGllbnQuanNvbnAoKSB3aXRob3V0IGluc3RhbGxpbmcgdGhlIEh0dHBDbGllbnRKc29ucE1vZHVsZVxuICAgICAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ0pTT05QJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBdHRlbXB0ZWQgdG8gY29uc3RydWN0IEpzb25wIHJlcXVlc3Qgd2l0aG91dCBIdHRwQ2xpZW50SnNvbnBNb2R1bGUgaW5zdGFsbGVkLmApO1xuICAgICAgICB9XG4gICAgICAgIC8vIEV2ZXJ5dGhpbmcgaGFwcGVucyBvbiBPYnNlcnZhYmxlIHN1YnNjcmlwdGlvbi5cbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgLy8gU3RhcnQgYnkgc2V0dGluZyB1cCB0aGUgWEhSIG9iamVjdCB3aXRoIHJlcXVlc3QgbWV0aG9kLCBVUkwsIGFuZCB3aXRoQ3JlZGVudGlhbHMgZmxhZy5cbiAgICAgICAgICAgIGNvbnN0IHhociA9IHRoaXMueGhyRmFjdG9yeS5idWlsZCgpO1xuICAgICAgICAgICAgeGhyLm9wZW4ocmVxLm1ldGhvZCwgcmVxLnVybFdpdGhQYXJhbXMpO1xuICAgICAgICAgICAgaWYgKCEhcmVxLndpdGhDcmVkZW50aWFscykge1xuICAgICAgICAgICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQWRkIGFsbCB0aGUgcmVxdWVzdGVkIGhlYWRlcnMuXG4gICAgICAgICAgICByZXEuaGVhZGVycy5mb3JFYWNoKChuYW1lLCB2YWx1ZXMpID0+IHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIHZhbHVlcy5qb2luKCcsJykpKTtcbiAgICAgICAgICAgIC8vIEFkZCBhbiBBY2NlcHQgaGVhZGVyIGlmIG9uZSBpc24ndCBwcmVzZW50IGFscmVhZHkuXG4gICAgICAgICAgICBpZiAoIXJlcS5oZWFkZXJzLmhhcygnQWNjZXB0JykpIHtcbiAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQXV0by1kZXRlY3QgdGhlIENvbnRlbnQtVHlwZSBoZWFkZXIgaWYgb25lIGlzbid0IHByZXNlbnQgYWxyZWFkeS5cbiAgICAgICAgICAgIGlmICghcmVxLmhlYWRlcnMuaGFzKCdDb250ZW50LVR5cGUnKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRldGVjdGVkVHlwZSA9IHJlcS5kZXRlY3RDb250ZW50VHlwZUhlYWRlcigpO1xuICAgICAgICAgICAgICAgIC8vIFNvbWV0aW1lcyBDb250ZW50LVR5cGUgZGV0ZWN0aW9uIGZhaWxzLlxuICAgICAgICAgICAgICAgIGlmIChkZXRlY3RlZFR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsIGRldGVjdGVkVHlwZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU2V0IHRoZSByZXNwb25zZVR5cGUgaWYgb25lIHdhcyByZXF1ZXN0ZWQuXG4gICAgICAgICAgICBpZiAocmVxLnJlc3BvbnNlVHlwZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlVHlwZSA9IHJlcS5yZXNwb25zZVR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAvLyBKU09OIHJlc3BvbnNlcyBuZWVkIHRvIGJlIHByb2Nlc3NlZCBhcyB0ZXh0LiBUaGlzIGlzIGJlY2F1c2UgaWYgdGhlIHNlcnZlclxuICAgICAgICAgICAgICAgIC8vIHJldHVybnMgYW4gWFNTSS1wcmVmaXhlZCBKU09OIHJlc3BvbnNlLCB0aGUgYnJvd3NlciB3aWxsIGZhaWwgdG8gcGFyc2UgaXQsXG4gICAgICAgICAgICAgICAgLy8geGhyLnJlc3BvbnNlIHdpbGwgYmUgbnVsbCwgYW5kIHhoci5yZXNwb25zZVRleHQgY2Fubm90IGJlIGFjY2Vzc2VkIHRvXG4gICAgICAgICAgICAgICAgLy8gcmV0cmlldmUgdGhlIHByZWZpeGVkIEpTT04gZGF0YSBpbiBvcmRlciB0byBzdHJpcCB0aGUgcHJlZml4LiBUaHVzLCBhbGwgSlNPTlxuICAgICAgICAgICAgICAgIC8vIGlzIHBhcnNlZCBieSBmaXJzdCByZXF1ZXN0aW5nIHRleHQgYW5kIHRoZW4gYXBwbHlpbmcgSlNPTi5wYXJzZS5cbiAgICAgICAgICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gKChyZXNwb25zZVR5cGUgIT09ICdqc29uJykgPyByZXNwb25zZVR5cGUgOiAndGV4dCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU2VyaWFsaXplIHRoZSByZXF1ZXN0IGJvZHkgaWYgb25lIGlzIHByZXNlbnQuIElmIG5vdCwgdGhpcyB3aWxsIGJlIHNldCB0byBudWxsLlxuICAgICAgICAgICAgY29uc3QgcmVxQm9keSA9IHJlcS5zZXJpYWxpemVCb2R5KCk7XG4gICAgICAgICAgICAvLyBJZiBwcm9ncmVzcyBldmVudHMgYXJlIGVuYWJsZWQsIHJlc3BvbnNlIGhlYWRlcnMgd2lsbCBiZSBkZWxpdmVyZWRcbiAgICAgICAgICAgIC8vIGluIHR3byBldmVudHMgLSB0aGUgSHR0cEhlYWRlclJlc3BvbnNlIGV2ZW50IGFuZCB0aGUgZnVsbCBIdHRwUmVzcG9uc2VcbiAgICAgICAgICAgIC8vIGV2ZW50LiBIb3dldmVyLCBzaW5jZSByZXNwb25zZSBoZWFkZXJzIGRvbid0IGNoYW5nZSBpbiBiZXR3ZWVuIHRoZXNlXG4gICAgICAgICAgICAvLyB0d28gZXZlbnRzLCBpdCBkb2Vzbid0IG1ha2Ugc2Vuc2UgdG8gcGFyc2UgdGhlbSB0d2ljZS4gU28gaGVhZGVyUmVzcG9uc2VcbiAgICAgICAgICAgIC8vIGNhY2hlcyB0aGUgZGF0YSBleHRyYWN0ZWQgZnJvbSB0aGUgcmVzcG9uc2Ugd2hlbmV2ZXIgaXQncyBmaXJzdCBwYXJzZWQsXG4gICAgICAgICAgICAvLyB0byBlbnN1cmUgcGFyc2luZyBpc24ndCBkdXBsaWNhdGVkLlxuICAgICAgICAgICAgbGV0IGhlYWRlclJlc3BvbnNlID0gbnVsbDtcbiAgICAgICAgICAgIC8vIHBhcnRpYWxGcm9tWGhyIGV4dHJhY3RzIHRoZSBIdHRwSGVhZGVyUmVzcG9uc2UgZnJvbSB0aGUgY3VycmVudCBYTUxIdHRwUmVxdWVzdFxuICAgICAgICAgICAgLy8gc3RhdGUsIGFuZCBtZW1vaXplcyBpdCBpbnRvIGhlYWRlclJlc3BvbnNlLlxuICAgICAgICAgICAgY29uc3QgcGFydGlhbEZyb21YaHIgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGhlYWRlclJlc3BvbnNlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoZWFkZXJSZXNwb25zZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzVGV4dCA9IHhoci5zdGF0dXNUZXh0IHx8ICdPSyc7XG4gICAgICAgICAgICAgICAgLy8gUGFyc2UgaGVhZGVycyBmcm9tIFhNTEh0dHBSZXF1ZXN0IC0gdGhpcyBzdGVwIGlzIGxhenkuXG4gICAgICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpO1xuICAgICAgICAgICAgICAgIC8vIFJlYWQgdGhlIHJlc3BvbnNlIFVSTCBmcm9tIHRoZSBYTUxIdHRwUmVzcG9uc2UgaW5zdGFuY2UgYW5kIGZhbGwgYmFjayBvbiB0aGVcbiAgICAgICAgICAgICAgICAvLyByZXF1ZXN0IFVSTC5cbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBnZXRSZXNwb25zZVVybCh4aHIpIHx8IHJlcS51cmw7XG4gICAgICAgICAgICAgICAgLy8gQ29uc3RydWN0IHRoZSBIdHRwSGVhZGVyUmVzcG9uc2UgYW5kIG1lbW9pemUgaXQuXG4gICAgICAgICAgICAgICAgaGVhZGVyUmVzcG9uc2UgPSBuZXcgSHR0cEhlYWRlclJlc3BvbnNlKHsgaGVhZGVycywgc3RhdHVzOiB4aHIuc3RhdHVzLCBzdGF0dXNUZXh0LCB1cmwgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhlYWRlclJlc3BvbnNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIE5leHQsIGEgZmV3IGNsb3N1cmVzIGFyZSBkZWZpbmVkIGZvciB0aGUgdmFyaW91cyBldmVudHMgd2hpY2ggWE1MSHR0cFJlcXVlc3QgY2FuXG4gICAgICAgICAgICAvLyBlbWl0LiBUaGlzIGFsbG93cyB0aGVtIHRvIGJlIHVucmVnaXN0ZXJlZCBhcyBldmVudCBsaXN0ZW5lcnMgbGF0ZXIuXG4gICAgICAgICAgICAvLyBGaXJzdCB1cCBpcyB0aGUgbG9hZCBldmVudCwgd2hpY2ggcmVwcmVzZW50cyBhIHJlc3BvbnNlIGJlaW5nIGZ1bGx5IGF2YWlsYWJsZS5cbiAgICAgICAgICAgIGNvbnN0IG9uTG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBSZWFkIHJlc3BvbnNlIHN0YXRlIGZyb20gdGhlIG1lbW9pemVkIHBhcnRpYWwgZGF0YS5cbiAgICAgICAgICAgICAgICBsZXQgeyBoZWFkZXJzLCBzdGF0dXMsIHN0YXR1c1RleHQsIHVybCB9ID0gcGFydGlhbEZyb21YaHIoKTtcbiAgICAgICAgICAgICAgICAvLyBUaGUgYm9keSB3aWxsIGJlIHJlYWQgb3V0IGlmIHByZXNlbnQuXG4gICAgICAgICAgICAgICAgbGV0IGJvZHkgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgIT09IDIwNCAvKiBIdHRwU3RhdHVzQ29kZS5Ob0NvbnRlbnQgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVXNlIFhNTEh0dHBSZXF1ZXN0LnJlc3BvbnNlIGlmIHNldCwgcmVzcG9uc2VUZXh0IG90aGVyd2lzZS5cbiAgICAgICAgICAgICAgICAgICAgYm9keSA9ICh0eXBlb2YgeGhyLnJlc3BvbnNlID09PSAndW5kZWZpbmVkJykgPyB4aHIucmVzcG9uc2VUZXh0IDogeGhyLnJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBOb3JtYWxpemUgYW5vdGhlciBwb3RlbnRpYWwgYnVnICh0aGlzIG9uZSBjb21lcyBmcm9tIENPUlMpLlxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzID0gISFib2R5ID8gMjAwIC8qIEh0dHBTdGF0dXNDb2RlLk9rICovIDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gb2sgZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSByZXNwb25zZSB3aWxsIGJlIHRyYW5zbWl0dGVkIG9uIHRoZSBldmVudCBvclxuICAgICAgICAgICAgICAgIC8vIGVycm9yIGNoYW5uZWwuIFVuc3VjY2Vzc2Z1bCBzdGF0dXMgY29kZXMgKG5vdCAyeHgpIHdpbGwgYWx3YXlzIGJlIGVycm9ycyxcbiAgICAgICAgICAgICAgICAvLyBidXQgYSBzdWNjZXNzZnVsIHN0YXR1cyBjb2RlIGNhbiBzdGlsbCByZXN1bHQgaW4gYW4gZXJyb3IgaWYgdGhlIHVzZXJcbiAgICAgICAgICAgICAgICAvLyBhc2tlZCBmb3IgSlNPTiBkYXRhIGFuZCB0aGUgYm9keSBjYW5ub3QgYmUgcGFyc2VkIGFzIHN1Y2guXG4gICAgICAgICAgICAgICAgbGV0IG9rID0gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgd2hldGhlciB0aGUgYm9keSBuZWVkcyB0byBiZSBwYXJzZWQgYXMgSlNPTiAoaW4gbWFueSBjYXNlcyB0aGUgYnJvd3NlclxuICAgICAgICAgICAgICAgIC8vIHdpbGwgaGF2ZSBkb25lIHRoYXQgYWxyZWFkeSkuXG4gICAgICAgICAgICAgICAgaWYgKHJlcS5yZXNwb25zZVR5cGUgPT09ICdqc29uJyAmJiB0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2F2ZSB0aGUgb3JpZ2luYWwgYm9keSwgYmVmb3JlIGF0dGVtcHRpbmcgWFNTSSBwcmVmaXggc3RyaXBwaW5nLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbEJvZHkgPSBib2R5O1xuICAgICAgICAgICAgICAgICAgICBib2R5ID0gYm9keS5yZXBsYWNlKFhTU0lfUFJFRklYLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBdHRlbXB0IHRoZSBwYXJzZS4gSWYgaXQgZmFpbHMsIGEgcGFyc2UgZXJyb3Igc2hvdWxkIGJlIGRlbGl2ZXJlZCB0byB0aGUgdXNlci5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkgPSBib2R5ICE9PSAnJyA/IEpTT04ucGFyc2UoYm9keSkgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2luY2UgdGhlIEpTT04ucGFyc2UgZmFpbGVkLCBpdCdzIHJlYXNvbmFibGUgdG8gYXNzdW1lIHRoaXMgbWlnaHQgbm90IGhhdmUgYmVlbiBhXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBKU09OIHJlc3BvbnNlLiBSZXN0b3JlIHRoZSBvcmlnaW5hbCBib2R5IChpbmNsdWRpbmcgYW55IFhTU0kgcHJlZml4KSB0byBkZWxpdmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhIGJldHRlciBlcnJvciByZXNwb25zZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkgPSBvcmlnaW5hbEJvZHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIHdhcyBhbiBlcnJvciByZXF1ZXN0IHRvIGJlZ2luIHdpdGgsIGxlYXZlIGl0IGFzIGEgc3RyaW5nLCBpdCBwcm9iYWJseVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8ganVzdCBpc24ndCBKU09OLiBPdGhlcndpc2UsIGRlbGl2ZXIgdGhlIHBhcnNpbmcgZXJyb3IgdG8gdGhlIHVzZXIuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBFdmVuIHRob3VnaCB0aGUgcmVzcG9uc2Ugc3RhdHVzIHdhcyAyeHgsIHRoaXMgaXMgc3RpbGwgYW4gZXJyb3IuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgcGFyc2UgZXJyb3IgY29udGFpbnMgdGhlIHRleHQgb2YgdGhlIGJvZHkgdGhhdCBmYWlsZWQgdG8gcGFyc2UuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keSA9IHsgZXJyb3IsIHRleHQ6IGJvZHkgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAob2spIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQSBzdWNjZXNzZnVsIHJlc3BvbnNlIGlzIGRlbGl2ZXJlZCBvbiB0aGUgZXZlbnQgc3RyZWFtLlxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KG5ldyBIdHRwUmVzcG9uc2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNUZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmwgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSBmdWxsIGJvZHkgaGFzIGJlZW4gcmVjZWl2ZWQgYW5kIGRlbGl2ZXJlZCwgbm8gZnVydGhlciBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgLy8gYXJlIHBvc3NpYmxlLiBUaGlzIHJlcXVlc3QgaXMgY29tcGxldGUuXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBBbiB1bnN1Y2Nlc3NmdWwgcmVxdWVzdCBpcyBkZWxpdmVyZWQgb24gdGhlIGVycm9yIGNoYW5uZWwuXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKG5ldyBIdHRwRXJyb3JSZXNwb25zZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgZXJyb3IgaW4gdGhpcyBjYXNlIGlzIHRoZSByZXNwb25zZSBib2R5IChlcnJvciBmcm9tIHRoZSBzZXJ2ZXIpLlxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGJvZHksXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdXJsIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBUaGUgb25FcnJvciBjYWxsYmFjayBpcyBjYWxsZWQgd2hlbiBzb21ldGhpbmcgZ29lcyB3cm9uZyBhdCB0aGUgbmV0d29yayBsZXZlbC5cbiAgICAgICAgICAgIC8vIENvbm5lY3Rpb24gdGltZW91dCwgRE5TIGVycm9yLCBvZmZsaW5lLCBldGMuIFRoZXNlIGFyZSBhY3R1YWwgZXJyb3JzLCBhbmQgYXJlXG4gICAgICAgICAgICAvLyB0cmFuc21pdHRlZCBvbiB0aGUgZXJyb3IgY2hhbm5lbC5cbiAgICAgICAgICAgIGNvbnN0IG9uRXJyb3IgPSAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHVybCB9ID0gcGFydGlhbEZyb21YaHIoKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBuZXcgSHR0cEVycm9yUmVzcG9uc2Uoe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzIHx8IDAsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0IHx8ICdVbmtub3duIEVycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmwgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKHJlcyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gVGhlIHNlbnRIZWFkZXJzIGZsYWcgdHJhY2tzIHdoZXRoZXIgdGhlIEh0dHBSZXNwb25zZUhlYWRlcnMgZXZlbnRcbiAgICAgICAgICAgIC8vIGhhcyBiZWVuIHNlbnQgb24gdGhlIHN0cmVhbS4gVGhpcyBpcyBuZWNlc3NhcnkgdG8gdHJhY2sgaWYgcHJvZ3Jlc3NcbiAgICAgICAgICAgIC8vIGlzIGVuYWJsZWQgc2luY2UgdGhlIGV2ZW50IHdpbGwgYmUgc2VudCBvbiBvbmx5IHRoZSBmaXJzdCBkb3dubG9hZFxuICAgICAgICAgICAgLy8gcHJvZ3Jlc3MgZXZlbnQuXG4gICAgICAgICAgICBsZXQgc2VudEhlYWRlcnMgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIFRoZSBkb3dubG9hZCBwcm9ncmVzcyBldmVudCBoYW5kbGVyLCB3aGljaCBpcyBvbmx5IHJlZ2lzdGVyZWQgaWZcbiAgICAgICAgICAgIC8vIHByb2dyZXNzIGV2ZW50cyBhcmUgZW5hYmxlZC5cbiAgICAgICAgICAgIGNvbnN0IG9uRG93blByb2dyZXNzID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gU2VuZCB0aGUgSHR0cFJlc3BvbnNlSGVhZGVycyBldmVudCBpZiBpdCBoYXNuJ3QgYmVlbiBzZW50IGFscmVhZHkuXG4gICAgICAgICAgICAgICAgaWYgKCFzZW50SGVhZGVycykge1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHBhcnRpYWxGcm9tWGhyKCkpO1xuICAgICAgICAgICAgICAgICAgICBzZW50SGVhZGVycyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFN0YXJ0IGJ1aWxkaW5nIHRoZSBkb3dubG9hZCBwcm9ncmVzcyBldmVudCB0byBkZWxpdmVyIG9uIHRoZSByZXNwb25zZVxuICAgICAgICAgICAgICAgIC8vIGV2ZW50IHN0cmVhbS5cbiAgICAgICAgICAgICAgICBsZXQgcHJvZ3Jlc3NFdmVudCA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogSHR0cEV2ZW50VHlwZS5Eb3dubG9hZFByb2dyZXNzLFxuICAgICAgICAgICAgICAgICAgICBsb2FkZWQ6IGV2ZW50LmxvYWRlZCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIC8vIFNldCB0aGUgdG90YWwgbnVtYmVyIG9mIGJ5dGVzIGluIHRoZSBldmVudCBpZiBpdCdzIGF2YWlsYWJsZS5cbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0V2ZW50LnRvdGFsID0gZXZlbnQudG90YWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSByZXF1ZXN0IHdhcyBmb3IgdGV4dCBjb250ZW50IGFuZCBhIHBhcnRpYWwgcmVzcG9uc2UgaXNcbiAgICAgICAgICAgICAgICAvLyBhdmFpbGFibGUgb24gWE1MSHR0cFJlcXVlc3QsIGluY2x1ZGUgaXQgaW4gdGhlIHByb2dyZXNzIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gdG8gYWxsb3cgZm9yIHN0cmVhbWluZyByZWFkcy5cbiAgICAgICAgICAgICAgICBpZiAocmVxLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnICYmICEheGhyLnJlc3BvbnNlVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0V2ZW50LnBhcnRpYWxUZXh0ID0geGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gRmluYWxseSwgZmlyZSB0aGUgZXZlbnQuXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChwcm9ncmVzc0V2ZW50KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBUaGUgdXBsb2FkIHByb2dyZXNzIGV2ZW50IGhhbmRsZXIsIHdoaWNoIGlzIG9ubHkgcmVnaXN0ZXJlZCBpZlxuICAgICAgICAgICAgLy8gcHJvZ3Jlc3MgZXZlbnRzIGFyZSBlbmFibGVkLlxuICAgICAgICAgICAgY29uc3Qgb25VcFByb2dyZXNzID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gVXBsb2FkIHByb2dyZXNzIGV2ZW50cyBhcmUgc2ltcGxlci4gQmVnaW4gYnVpbGRpbmcgdGhlIHByb2dyZXNzXG4gICAgICAgICAgICAgICAgLy8gZXZlbnQuXG4gICAgICAgICAgICAgICAgbGV0IHByb2dyZXNzID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBIdHRwRXZlbnRUeXBlLlVwbG9hZFByb2dyZXNzLFxuICAgICAgICAgICAgICAgICAgICBsb2FkZWQ6IGV2ZW50LmxvYWRlZCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSB0b3RhbCBudW1iZXIgb2YgYnl0ZXMgYmVpbmcgdXBsb2FkZWQgaXMgYXZhaWxhYmxlLCBpbmNsdWRlXG4gICAgICAgICAgICAgICAgLy8gaXQuXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3MudG90YWwgPSBldmVudC50b3RhbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU2VuZCB0aGUgZXZlbnQuXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChwcm9ncmVzcyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gQnkgZGVmYXVsdCwgcmVnaXN0ZXIgZm9yIGxvYWQgYW5kIGVycm9yIGV2ZW50cy5cbiAgICAgICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgb25Mb2FkKTtcbiAgICAgICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uRXJyb3IpO1xuICAgICAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ3RpbWVvdXQnLCBvbkVycm9yKTtcbiAgICAgICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIG9uRXJyb3IpO1xuICAgICAgICAgICAgLy8gUHJvZ3Jlc3MgZXZlbnRzIGFyZSBvbmx5IGVuYWJsZWQgaWYgcmVxdWVzdGVkLlxuICAgICAgICAgICAgaWYgKHJlcS5yZXBvcnRQcm9ncmVzcykge1xuICAgICAgICAgICAgICAgIC8vIERvd25sb2FkIHByb2dyZXNzIGlzIGFsd2F5cyBlbmFibGVkIGlmIHJlcXVlc3RlZC5cbiAgICAgICAgICAgICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBvbkRvd25Qcm9ncmVzcyk7XG4gICAgICAgICAgICAgICAgLy8gVXBsb2FkIHByb2dyZXNzIGRlcGVuZHMgb24gd2hldGhlciB0aGVyZSBpcyBhIGJvZHkgdG8gdXBsb2FkLlxuICAgICAgICAgICAgICAgIGlmIChyZXFCb2R5ICE9PSBudWxsICYmIHhoci51cGxvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIG9uVXBQcm9ncmVzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRmlyZSB0aGUgcmVxdWVzdCwgYW5kIG5vdGlmeSB0aGUgZXZlbnQgc3RyZWFtIHRoYXQgaXQgd2FzIGZpcmVkLlxuICAgICAgICAgICAgeGhyLnNlbmQocmVxQm9keSk7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KHsgdHlwZTogSHR0cEV2ZW50VHlwZS5TZW50IH0pO1xuICAgICAgICAgICAgLy8gVGhpcyBpcyB0aGUgcmV0dXJuIGZyb20gdGhlIE9ic2VydmFibGUgZnVuY3Rpb24sIHdoaWNoIGlzIHRoZVxuICAgICAgICAgICAgLy8gcmVxdWVzdCBjYW5jZWxsYXRpb24gaGFuZGxlci5cbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gT24gYSBjYW5jZWxsYXRpb24sIHJlbW92ZSBhbGwgcmVnaXN0ZXJlZCBldmVudCBsaXN0ZW5lcnMuXG4gICAgICAgICAgICAgICAgeGhyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25FcnJvcik7XG4gICAgICAgICAgICAgICAgeGhyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0Jywgb25FcnJvcik7XG4gICAgICAgICAgICAgICAgeGhyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWQpO1xuICAgICAgICAgICAgICAgIHhoci5yZW1vdmVFdmVudExpc3RlbmVyKCd0aW1lb3V0Jywgb25FcnJvcik7XG4gICAgICAgICAgICAgICAgaWYgKHJlcS5yZXBvcnRQcm9ncmVzcykge1xuICAgICAgICAgICAgICAgICAgICB4aHIucmVtb3ZlRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBvbkRvd25Qcm9ncmVzcyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXFCb2R5ICE9PSBudWxsICYmIHhoci51cGxvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHhoci51cGxvYWQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBvblVwUHJvZ3Jlc3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEZpbmFsbHksIGFib3J0IHRoZSBpbi1mbGlnaHQgcmVxdWVzdC5cbiAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgIT09IHhoci5ET05FKSB7XG4gICAgICAgICAgICAgICAgICAgIHhoci5hYm9ydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbkh0dHBYaHJCYWNrZW5kLsm1ZmFjID0gaTAuybXJtW5nRGVjbGFyZUZhY3RvcnkoeyBtaW5WZXJzaW9uOiBcIjEyLjAuMFwiLCB2ZXJzaW9uOiBcIjE0LjIuOFwiLCBuZ0ltcG9ydDogaTAsIHR5cGU6IEh0dHBYaHJCYWNrZW5kLCBkZXBzOiBbeyB0b2tlbjogaTEuWGhyRmFjdG9yeSB9XSwgdGFyZ2V0OiBpMC7Jtcm1RmFjdG9yeVRhcmdldC5JbmplY3RhYmxlIH0pO1xuSHR0cFhockJhY2tlbmQuybVwcm92ID0gaTAuybXJtW5nRGVjbGFyZUluamVjdGFibGUoeyBtaW5WZXJzaW9uOiBcIjEyLjAuMFwiLCB2ZXJzaW9uOiBcIjE0LjIuOFwiLCBuZ0ltcG9ydDogaTAsIHR5cGU6IEh0dHBYaHJCYWNrZW5kIH0pO1xuaTAuybXJtW5nRGVjbGFyZUNsYXNzTWV0YWRhdGEoeyBtaW5WZXJzaW9uOiBcIjEyLjAuMFwiLCB2ZXJzaW9uOiBcIjE0LjIuOFwiLCBuZ0ltcG9ydDogaTAsIHR5cGU6IEh0dHBYaHJCYWNrZW5kLCBkZWNvcmF0b3JzOiBbe1xuICAgICAgICAgICAgdHlwZTogSW5qZWN0YWJsZVxuICAgICAgICB9XSwgY3RvclBhcmFtZXRlcnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFt7IHR5cGU6IGkxLlhockZhY3RvcnkgfV07IH0gfSk7XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuY29uc3QgWFNSRl9DT09LSUVfTkFNRSA9IG5ldyBJbmplY3Rpb25Ub2tlbignWFNSRl9DT09LSUVfTkFNRScpO1xuY29uc3QgWFNSRl9IRUFERVJfTkFNRSA9IG5ldyBJbmplY3Rpb25Ub2tlbignWFNSRl9IRUFERVJfTkFNRScpO1xuLyoqXG4gKiBSZXRyaWV2ZXMgdGhlIGN1cnJlbnQgWFNSRiB0b2tlbiB0byB1c2Ugd2l0aCB0aGUgbmV4dCBvdXRnb2luZyByZXF1ZXN0LlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuY2xhc3MgSHR0cFhzcmZUb2tlbkV4dHJhY3RvciB7XG59XG4vKipcbiAqIGBIdHRwWHNyZlRva2VuRXh0cmFjdG9yYCB3aGljaCByZXRyaWV2ZXMgdGhlIHRva2VuIGZyb20gYSBjb29raWUuXG4gKi9cbmNsYXNzIEh0dHBYc3JmQ29va2llRXh0cmFjdG9yIHtcbiAgICBjb25zdHJ1Y3Rvcihkb2MsIHBsYXRmb3JtLCBjb29raWVOYW1lKSB7XG4gICAgICAgIHRoaXMuZG9jID0gZG9jO1xuICAgICAgICB0aGlzLnBsYXRmb3JtID0gcGxhdGZvcm07XG4gICAgICAgIHRoaXMuY29va2llTmFtZSA9IGNvb2tpZU5hbWU7XG4gICAgICAgIHRoaXMubGFzdENvb2tpZVN0cmluZyA9ICcnO1xuICAgICAgICB0aGlzLmxhc3RUb2tlbiA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAaW50ZXJuYWwgZm9yIHRlc3RpbmdcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucGFyc2VDb3VudCA9IDA7XG4gICAgfVxuICAgIGdldFRva2VuKCkge1xuICAgICAgICBpZiAodGhpcy5wbGF0Zm9ybSA9PT0gJ3NlcnZlcicpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvb2tpZVN0cmluZyA9IHRoaXMuZG9jLmNvb2tpZSB8fCAnJztcbiAgICAgICAgaWYgKGNvb2tpZVN0cmluZyAhPT0gdGhpcy5sYXN0Q29va2llU3RyaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnBhcnNlQ291bnQrKztcbiAgICAgICAgICAgIHRoaXMubGFzdFRva2VuID0gybVwYXJzZUNvb2tpZVZhbHVlKGNvb2tpZVN0cmluZywgdGhpcy5jb29raWVOYW1lKTtcbiAgICAgICAgICAgIHRoaXMubGFzdENvb2tpZVN0cmluZyA9IGNvb2tpZVN0cmluZztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5sYXN0VG9rZW47XG4gICAgfVxufVxuSHR0cFhzcmZDb29raWVFeHRyYWN0b3IuybVmYWMgPSBpMC7Jtcm1bmdEZWNsYXJlRmFjdG9yeSh7IG1pblZlcnNpb246IFwiMTIuMC4wXCIsIHZlcnNpb246IFwiMTQuMi44XCIsIG5nSW1wb3J0OiBpMCwgdHlwZTogSHR0cFhzcmZDb29raWVFeHRyYWN0b3IsIGRlcHM6IFt7IHRva2VuOiBET0NVTUVOVCB9LCB7IHRva2VuOiBQTEFURk9STV9JRCB9LCB7IHRva2VuOiBYU1JGX0NPT0tJRV9OQU1FIH1dLCB0YXJnZXQ6IGkwLsm1ybVGYWN0b3J5VGFyZ2V0LkluamVjdGFibGUgfSk7XG5IdHRwWHNyZkNvb2tpZUV4dHJhY3Rvci7JtXByb3YgPSBpMC7Jtcm1bmdEZWNsYXJlSW5qZWN0YWJsZSh7IG1pblZlcnNpb246IFwiMTIuMC4wXCIsIHZlcnNpb246IFwiMTQuMi44XCIsIG5nSW1wb3J0OiBpMCwgdHlwZTogSHR0cFhzcmZDb29raWVFeHRyYWN0b3IgfSk7XG5pMC7Jtcm1bmdEZWNsYXJlQ2xhc3NNZXRhZGF0YSh7IG1pblZlcnNpb246IFwiMTIuMC4wXCIsIHZlcnNpb246IFwiMTQuMi44XCIsIG5nSW1wb3J0OiBpMCwgdHlwZTogSHR0cFhzcmZDb29raWVFeHRyYWN0b3IsIGRlY29yYXRvcnM6IFt7XG4gICAgICAgICAgICB0eXBlOiBJbmplY3RhYmxlXG4gICAgICAgIH1dLCBjdG9yUGFyYW1ldGVyczogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gW3sgdHlwZTogdW5kZWZpbmVkLCBkZWNvcmF0b3JzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogSW5qZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJnczogW0RPQ1VNRU5UXVxuICAgICAgICAgICAgICAgICAgICB9XSB9LCB7IHR5cGU6IHVuZGVmaW5lZCwgZGVjb3JhdG9yczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEluamVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3M6IFtQTEFURk9STV9JRF1cbiAgICAgICAgICAgICAgICAgICAgfV0gfSwgeyB0eXBlOiB1bmRlZmluZWQsIGRlY29yYXRvcnM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBJbmplY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzOiBbWFNSRl9DT09LSUVfTkFNRV1cbiAgICAgICAgICAgICAgICAgICAgfV0gfV07XG4gICAgfSB9KTtcbi8qKlxuICogYEh0dHBJbnRlcmNlcHRvcmAgd2hpY2ggYWRkcyBhbiBYU1JGIHRva2VuIHRvIGVsaWdpYmxlIG91dGdvaW5nIHJlcXVlc3RzLlxuICovXG5jbGFzcyBIdHRwWHNyZkludGVyY2VwdG9yIHtcbiAgICBjb25zdHJ1Y3Rvcih0b2tlblNlcnZpY2UsIGhlYWRlck5hbWUpIHtcbiAgICAgICAgdGhpcy50b2tlblNlcnZpY2UgPSB0b2tlblNlcnZpY2U7XG4gICAgICAgIHRoaXMuaGVhZGVyTmFtZSA9IGhlYWRlck5hbWU7XG4gICAgfVxuICAgIGludGVyY2VwdChyZXEsIG5leHQpIHtcbiAgICAgICAgY29uc3QgbGNVcmwgPSByZXEudXJsLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIC8vIFNraXAgYm90aCBub24tbXV0YXRpbmcgcmVxdWVzdHMgYW5kIGFic29sdXRlIFVSTHMuXG4gICAgICAgIC8vIE5vbi1tdXRhdGluZyByZXF1ZXN0cyBkb24ndCByZXF1aXJlIGEgdG9rZW4sIGFuZCBhYnNvbHV0ZSBVUkxzIHJlcXVpcmUgc3BlY2lhbCBoYW5kbGluZ1xuICAgICAgICAvLyBhbnl3YXkgYXMgdGhlIGNvb2tpZSBzZXRcbiAgICAgICAgLy8gb24gb3VyIG9yaWdpbiBpcyBub3QgdGhlIHNhbWUgYXMgdGhlIHRva2VuIGV4cGVjdGVkIGJ5IGFub3RoZXIgb3JpZ2luLlxuICAgICAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcgfHwgcmVxLm1ldGhvZCA9PT0gJ0hFQUQnIHx8IGxjVXJsLnN0YXJ0c1dpdGgoJ2h0dHA6Ly8nKSB8fFxuICAgICAgICAgICAgbGNVcmwuc3RhcnRzV2l0aCgnaHR0cHM6Ly8nKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLnRva2VuU2VydmljZS5nZXRUb2tlbigpO1xuICAgICAgICAvLyBCZSBjYXJlZnVsIG5vdCB0byBvdmVyd3JpdGUgYW4gZXhpc3RpbmcgaGVhZGVyIG9mIHRoZSBzYW1lIG5hbWUuXG4gICAgICAgIGlmICh0b2tlbiAhPT0gbnVsbCAmJiAhcmVxLmhlYWRlcnMuaGFzKHRoaXMuaGVhZGVyTmFtZSkpIHtcbiAgICAgICAgICAgIHJlcSA9IHJlcS5jbG9uZSh7IGhlYWRlcnM6IHJlcS5oZWFkZXJzLnNldCh0aGlzLmhlYWRlck5hbWUsIHRva2VuKSB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcbiAgICB9XG59XG5IdHRwWHNyZkludGVyY2VwdG9yLsm1ZmFjID0gaTAuybXJtW5nRGVjbGFyZUZhY3RvcnkoeyBtaW5WZXJzaW9uOiBcIjEyLjAuMFwiLCB2ZXJzaW9uOiBcIjE0LjIuOFwiLCBuZ0ltcG9ydDogaTAsIHR5cGU6IEh0dHBYc3JmSW50ZXJjZXB0b3IsIGRlcHM6IFt7IHRva2VuOiBIdHRwWHNyZlRva2VuRXh0cmFjdG9yIH0sIHsgdG9rZW46IFhTUkZfSEVBREVSX05BTUUgfV0sIHRhcmdldDogaTAuybXJtUZhY3RvcnlUYXJnZXQuSW5qZWN0YWJsZSB9KTtcbkh0dHBYc3JmSW50ZXJjZXB0b3IuybVwcm92ID0gaTAuybXJtW5nRGVjbGFyZUluamVjdGFibGUoeyBtaW5WZXJzaW9uOiBcIjEyLjAuMFwiLCB2ZXJzaW9uOiBcIjE0LjIuOFwiLCBuZ0ltcG9ydDogaTAsIHR5cGU6IEh0dHBYc3JmSW50ZXJjZXB0b3IgfSk7XG5pMC7Jtcm1bmdEZWNsYXJlQ2xhc3NNZXRhZGF0YSh7IG1pblZlcnNpb246IFwiMTIuMC4wXCIsIHZlcnNpb246IFwiMTQuMi44XCIsIG5nSW1wb3J0OiBpMCwgdHlwZTogSHR0cFhzcmZJbnRlcmNlcHRvciwgZGVjb3JhdG9yczogW3tcbiAgICAgICAgICAgIHR5cGU6IEluamVjdGFibGVcbiAgICAgICAgfV0sIGN0b3JQYXJhbWV0ZXJzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBbeyB0eXBlOiBIdHRwWHNyZlRva2VuRXh0cmFjdG9yIH0sIHsgdHlwZTogdW5kZWZpbmVkLCBkZWNvcmF0b3JzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogSW5qZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJnczogW1hTUkZfSEVBREVSX05BTUVdXG4gICAgICAgICAgICAgICAgICAgIH1dIH1dO1xuICAgIH0gfSk7XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLyoqXG4gKiBBbiBpbmplY3RhYmxlIGBIdHRwSGFuZGxlcmAgdGhhdCBhcHBsaWVzIG11bHRpcGxlIGludGVyY2VwdG9yc1xuICogdG8gYSByZXF1ZXN0IGJlZm9yZSBwYXNzaW5nIGl0IHRvIHRoZSBnaXZlbiBgSHR0cEJhY2tlbmRgLlxuICpcbiAqIFRoZSBpbnRlcmNlcHRvcnMgYXJlIGxvYWRlZCBsYXppbHkgZnJvbSB0aGUgaW5qZWN0b3IsIHRvIGFsbG93XG4gKiBpbnRlcmNlcHRvcnMgdG8gdGhlbXNlbHZlcyBpbmplY3QgY2xhc3NlcyBkZXBlbmRpbmcgaW5kaXJlY3RseVxuICogb24gYEh0dHBJbnRlcmNlcHRpbmdIYW5kbGVyYCBpdHNlbGYuXG4gKiBAc2VlIGBIdHRwSW50ZXJjZXB0b3JgXG4gKi9cbmNsYXNzIEh0dHBJbnRlcmNlcHRpbmdIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihiYWNrZW5kLCBpbmplY3Rvcikge1xuICAgICAgICB0aGlzLmJhY2tlbmQgPSBiYWNrZW5kO1xuICAgICAgICB0aGlzLmluamVjdG9yID0gaW5qZWN0b3I7XG4gICAgICAgIHRoaXMuY2hhaW4gPSBudWxsO1xuICAgIH1cbiAgICBoYW5kbGUocmVxKSB7XG4gICAgICAgIGlmICh0aGlzLmNoYWluID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcmNlcHRvcnMgPSB0aGlzLmluamVjdG9yLmdldChIVFRQX0lOVEVSQ0VQVE9SUywgW10pO1xuICAgICAgICAgICAgdGhpcy5jaGFpbiA9IGludGVyY2VwdG9ycy5yZWR1Y2VSaWdodCgobmV4dCwgaW50ZXJjZXB0b3IpID0+IG5ldyBIdHRwSW50ZXJjZXB0b3JIYW5kbGVyKG5leHQsIGludGVyY2VwdG9yKSwgdGhpcy5iYWNrZW5kKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jaGFpbi5oYW5kbGUocmVxKTtcbiAgICB9XG59XG5IdHRwSW50ZXJjZXB0aW5nSGFuZGxlci7JtWZhYyA9IGkwLsm1ybVuZ0RlY2xhcmVGYWN0b3J5KHsgbWluVmVyc2lvbjogXCIxMi4wLjBcIiwgdmVyc2lvbjogXCIxNC4yLjhcIiwgbmdJbXBvcnQ6IGkwLCB0eXBlOiBIdHRwSW50ZXJjZXB0aW5nSGFuZGxlciwgZGVwczogW3sgdG9rZW46IEh0dHBCYWNrZW5kIH0sIHsgdG9rZW46IGkwLkluamVjdG9yIH1dLCB0YXJnZXQ6IGkwLsm1ybVGYWN0b3J5VGFyZ2V0LkluamVjdGFibGUgfSk7XG5IdHRwSW50ZXJjZXB0aW5nSGFuZGxlci7JtXByb3YgPSBpMC7Jtcm1bmdEZWNsYXJlSW5qZWN0YWJsZSh7IG1pblZlcnNpb246IFwiMTIuMC4wXCIsIHZlcnNpb246IFwiMTQuMi44XCIsIG5nSW1wb3J0OiBpMCwgdHlwZTogSHR0cEludGVyY2VwdGluZ0hhbmRsZXIgfSk7XG5pMC7Jtcm1bmdEZWNsYXJlQ2xhc3NNZXRhZGF0YSh7IG1pblZlcnNpb246IFwiMTIuMC4wXCIsIHZlcnNpb246IFwiMTQuMi44XCIsIG5nSW1wb3J0OiBpMCwgdHlwZTogSHR0cEludGVyY2VwdGluZ0hhbmRsZXIsIGRlY29yYXRvcnM6IFt7XG4gICAgICAgICAgICB0eXBlOiBJbmplY3RhYmxlXG4gICAgICAgIH1dLCBjdG9yUGFyYW1ldGVyczogZnVuY3Rpb24gKCkgeyByZXR1cm4gW3sgdHlwZTogSHR0cEJhY2tlbmQgfSwgeyB0eXBlOiBpMC5JbmplY3RvciB9XTsgfSB9KTtcbi8qKlxuICogQ29uc3RydWN0cyBhbiBgSHR0cEhhbmRsZXJgIHRoYXQgYXBwbGllcyBpbnRlcmNlcHRvcnNcbiAqIHRvIGEgcmVxdWVzdCBiZWZvcmUgcGFzc2luZyBpdCB0byB0aGUgZ2l2ZW4gYEh0dHBCYWNrZW5kYC5cbiAqXG4gKiBVc2UgYXMgYSBmYWN0b3J5IGZ1bmN0aW9uIHdpdGhpbiBgSHR0cENsaWVudE1vZHVsZWAuXG4gKlxuICpcbiAqL1xuZnVuY3Rpb24gaW50ZXJjZXB0aW5nSGFuZGxlcihiYWNrZW5kLCBpbnRlcmNlcHRvcnMgPSBbXSkge1xuICAgIGlmICghaW50ZXJjZXB0b3JzKSB7XG4gICAgICAgIHJldHVybiBiYWNrZW5kO1xuICAgIH1cbiAgICByZXR1cm4gaW50ZXJjZXB0b3JzLnJlZHVjZVJpZ2h0KChuZXh0LCBpbnRlcmNlcHRvcikgPT4gbmV3IEh0dHBJbnRlcmNlcHRvckhhbmRsZXIobmV4dCwgaW50ZXJjZXB0b3IpLCBiYWNrZW5kKTtcbn1cbi8qKlxuICogRmFjdG9yeSBmdW5jdGlvbiB0aGF0IGRldGVybWluZXMgd2hlcmUgdG8gc3RvcmUgSlNPTlAgY2FsbGJhY2tzLlxuICpcbiAqIE9yZGluYXJpbHkgSlNPTlAgY2FsbGJhY2tzIGFyZSBzdG9yZWQgb24gdGhlIGB3aW5kb3dgIG9iamVjdCwgYnV0IHRoaXMgbWF5IG5vdCBleGlzdFxuICogaW4gdGVzdCBlbnZpcm9ubWVudHMuIEluIHRoYXQgY2FzZSwgY2FsbGJhY2tzIGFyZSBzdG9yZWQgb24gYW4gYW5vbnltb3VzIG9iamVjdCBpbnN0ZWFkLlxuICpcbiAqXG4gKi9cbmZ1bmN0aW9uIGpzb25wQ2FsbGJhY2tDb250ZXh0KCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gd2luZG93O1xuICAgIH1cbiAgICByZXR1cm4ge307XG59XG4vKipcbiAqIENvbmZpZ3VyZXMgWFNSRiBwcm90ZWN0aW9uIHN1cHBvcnQgZm9yIG91dGdvaW5nIHJlcXVlc3RzLlxuICpcbiAqIEZvciBhIHNlcnZlciB0aGF0IHN1cHBvcnRzIGEgY29va2llLWJhc2VkIFhTUkYgcHJvdGVjdGlvbiBzeXN0ZW0sXG4gKiB1c2UgZGlyZWN0bHkgdG8gY29uZmlndXJlIFhTUkYgcHJvdGVjdGlvbiB3aXRoIHRoZSBjb3JyZWN0XG4gKiBjb29raWUgYW5kIGhlYWRlciBuYW1lcy5cbiAqXG4gKiBJZiBubyBuYW1lcyBhcmUgc3VwcGxpZWQsIHRoZSBkZWZhdWx0IGNvb2tpZSBuYW1lIGlzIGBYU1JGLVRPS0VOYFxuICogYW5kIHRoZSBkZWZhdWx0IGhlYWRlciBuYW1lIGlzIGBYLVhTUkYtVE9LRU5gLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuY2xhc3MgSHR0cENsaWVudFhzcmZNb2R1bGUge1xuICAgIC8qKlxuICAgICAqIERpc2FibGUgdGhlIGRlZmF1bHQgWFNSRiBwcm90ZWN0aW9uLlxuICAgICAqL1xuICAgIHN0YXRpYyBkaXNhYmxlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IEh0dHBDbGllbnRYc3JmTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBIdHRwWHNyZkludGVyY2VwdG9yLCB1c2VDbGFzczogTm9vcEludGVyY2VwdG9yIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb25maWd1cmUgWFNSRiBwcm90ZWN0aW9uLlxuICAgICAqIEBwYXJhbSBvcHRpb25zIEFuIG9iamVjdCB0aGF0IGNhbiBzcGVjaWZ5IGVpdGhlciBvciBib3RoXG4gICAgICogY29va2llIG5hbWUgb3IgaGVhZGVyIG5hbWUuXG4gICAgICogLSBDb29raWUgbmFtZSBkZWZhdWx0IGlzIGBYU1JGLVRPS0VOYC5cbiAgICAgKiAtIEhlYWRlciBuYW1lIGRlZmF1bHQgaXMgYFgtWFNSRi1UT0tFTmAuXG4gICAgICpcbiAgICAgKi9cbiAgICBzdGF0aWMgd2l0aE9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogSHR0cENsaWVudFhzcmZNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmNvb2tpZU5hbWUgPyB7IHByb3ZpZGU6IFhTUkZfQ09PS0lFX05BTUUsIHVzZVZhbHVlOiBvcHRpb25zLmNvb2tpZU5hbWUgfSA6IFtdLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMuaGVhZGVyTmFtZSA/IHsgcHJvdmlkZTogWFNSRl9IRUFERVJfTkFNRSwgdXNlVmFsdWU6IG9wdGlvbnMuaGVhZGVyTmFtZSB9IDogW10sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9O1xuICAgIH1cbn1cbkh0dHBDbGllbnRYc3JmTW9kdWxlLsm1ZmFjID0gaTAuybXJtW5nRGVjbGFyZUZhY3RvcnkoeyBtaW5WZXJzaW9uOiBcIjEyLjAuMFwiLCB2ZXJzaW9uOiBcIjE0LjIuOFwiLCBuZ0ltcG9ydDogaTAsIHR5cGU6IEh0dHBDbGllbnRYc3JmTW9kdWxlLCBkZXBzOiBbXSwgdGFyZ2V0OiBpMC7Jtcm1RmFjdG9yeVRhcmdldC5OZ01vZHVsZSB9KTtcbkh0dHBDbGllbnRYc3JmTW9kdWxlLsm1bW9kID0gaTAuybXJtW5nRGVjbGFyZU5nTW9kdWxlKHsgbWluVmVyc2lvbjogXCIxNC4wLjBcIiwgdmVyc2lvbjogXCIxNC4yLjhcIiwgbmdJbXBvcnQ6IGkwLCB0eXBlOiBIdHRwQ2xpZW50WHNyZk1vZHVsZSB9KTtcbkh0dHBDbGllbnRYc3JmTW9kdWxlLsm1aW5qID0gaTAuybXJtW5nRGVjbGFyZUluamVjdG9yKHsgbWluVmVyc2lvbjogXCIxMi4wLjBcIiwgdmVyc2lvbjogXCIxNC4yLjhcIiwgbmdJbXBvcnQ6IGkwLCB0eXBlOiBIdHRwQ2xpZW50WHNyZk1vZHVsZSwgcHJvdmlkZXJzOiBbXG4gICAgICAgIEh0dHBYc3JmSW50ZXJjZXB0b3IsXG4gICAgICAgIHsgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUV4aXN0aW5nOiBIdHRwWHNyZkludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZSB9LFxuICAgICAgICB7IHByb3ZpZGU6IEh0dHBYc3JmVG9rZW5FeHRyYWN0b3IsIHVzZUNsYXNzOiBIdHRwWHNyZkNvb2tpZUV4dHJhY3RvciB9LFxuICAgICAgICB7IHByb3ZpZGU6IFhTUkZfQ09PS0lFX05BTUUsIHVzZVZhbHVlOiAnWFNSRi1UT0tFTicgfSxcbiAgICAgICAgeyBwcm92aWRlOiBYU1JGX0hFQURFUl9OQU1FLCB1c2VWYWx1ZTogJ1gtWFNSRi1UT0tFTicgfSxcbiAgICBdIH0pO1xuaTAuybXJtW5nRGVjbGFyZUNsYXNzTWV0YWRhdGEoeyBtaW5WZXJzaW9uOiBcIjEyLjAuMFwiLCB2ZXJzaW9uOiBcIjE0LjIuOFwiLCBuZ0ltcG9ydDogaTAsIHR5cGU6IEh0dHBDbGllbnRYc3JmTW9kdWxlLCBkZWNvcmF0b3JzOiBbe1xuICAgICAgICAgICAgdHlwZTogTmdNb2R1bGUsXG4gICAgICAgICAgICBhcmdzOiBbe1xuICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIEh0dHBYc3JmSW50ZXJjZXB0b3IsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VFeGlzdGluZzogSHR0cFhzcmZJbnRlcmNlcHRvciwgbXVsdGk6IHRydWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogSHR0cFhzcmZUb2tlbkV4dHJhY3RvciwgdXNlQ2xhc3M6IEh0dHBYc3JmQ29va2llRXh0cmFjdG9yIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IFhTUkZfQ09PS0lFX05BTUUsIHVzZVZhbHVlOiAnWFNSRi1UT0tFTicgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogWFNSRl9IRUFERVJfTkFNRSwgdXNlVmFsdWU6ICdYLVhTUkYtVE9LRU4nIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgfV0gfSk7XG4vKipcbiAqIENvbmZpZ3VyZXMgdGhlIFtkZXBlbmRlbmN5IGluamVjdG9yXShndWlkZS9nbG9zc2FyeSNpbmplY3RvcikgZm9yIGBIdHRwQ2xpZW50YFxuICogd2l0aCBzdXBwb3J0aW5nIHNlcnZpY2VzIGZvciBYU1JGLiBBdXRvbWF0aWNhbGx5IGltcG9ydGVkIGJ5IGBIdHRwQ2xpZW50TW9kdWxlYC5cbiAqXG4gKiBZb3UgY2FuIGFkZCBpbnRlcmNlcHRvcnMgdG8gdGhlIGNoYWluIGJlaGluZCBgSHR0cENsaWVudGAgYnkgYmluZGluZyB0aGVtIHRvIHRoZVxuICogbXVsdGlwcm92aWRlciBmb3IgYnVpbHQtaW4gW0RJIHRva2VuXShndWlkZS9nbG9zc2FyeSNkaS10b2tlbikgYEhUVFBfSU5URVJDRVBUT1JTYC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmNsYXNzIEh0dHBDbGllbnRNb2R1bGUge1xufVxuSHR0cENsaWVudE1vZHVsZS7JtWZhYyA9IGkwLsm1ybVuZ0RlY2xhcmVGYWN0b3J5KHsgbWluVmVyc2lvbjogXCIxMi4wLjBcIiwgdmVyc2lvbjogXCIxNC4yLjhcIiwgbmdJbXBvcnQ6IGkwLCB0eXBlOiBIdHRwQ2xpZW50TW9kdWxlLCBkZXBzOiBbXSwgdGFyZ2V0OiBpMC7Jtcm1RmFjdG9yeVRhcmdldC5OZ01vZHVsZSB9KTtcbkh0dHBDbGllbnRNb2R1bGUuybVtb2QgPSBpMC7Jtcm1bmdEZWNsYXJlTmdNb2R1bGUoeyBtaW5WZXJzaW9uOiBcIjE0LjAuMFwiLCB2ZXJzaW9uOiBcIjE0LjIuOFwiLCBuZ0ltcG9ydDogaTAsIHR5cGU6IEh0dHBDbGllbnRNb2R1bGUsIGltcG9ydHM6IFtIdHRwQ2xpZW50WHNyZk1vZHVsZV0gfSk7XG5IdHRwQ2xpZW50TW9kdWxlLsm1aW5qID0gaTAuybXJtW5nRGVjbGFyZUluamVjdG9yKHsgbWluVmVyc2lvbjogXCIxMi4wLjBcIiwgdmVyc2lvbjogXCIxNC4yLjhcIiwgbmdJbXBvcnQ6IGkwLCB0eXBlOiBIdHRwQ2xpZW50TW9kdWxlLCBwcm92aWRlcnM6IFtcbiAgICAgICAgSHR0cENsaWVudCxcbiAgICAgICAgeyBwcm92aWRlOiBIdHRwSGFuZGxlciwgdXNlQ2xhc3M6IEh0dHBJbnRlcmNlcHRpbmdIYW5kbGVyIH0sXG4gICAgICAgIEh0dHBYaHJCYWNrZW5kLFxuICAgICAgICB7IHByb3ZpZGU6IEh0dHBCYWNrZW5kLCB1c2VFeGlzdGluZzogSHR0cFhockJhY2tlbmQgfSxcbiAgICBdLCBpbXBvcnRzOiBbSHR0cENsaWVudFhzcmZNb2R1bGUud2l0aE9wdGlvbnMoe1xuICAgICAgICAgICAgY29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICAgICAgICAgICAgaGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG4gICAgICAgIH0pXSB9KTtcbmkwLsm1ybVuZ0RlY2xhcmVDbGFzc01ldGFkYXRhKHsgbWluVmVyc2lvbjogXCIxMi4wLjBcIiwgdmVyc2lvbjogXCIxNC4yLjhcIiwgbmdJbXBvcnQ6IGkwLCB0eXBlOiBIdHRwQ2xpZW50TW9kdWxlLCBkZWNvcmF0b3JzOiBbe1xuICAgICAgICAgICAgdHlwZTogTmdNb2R1bGUsXG4gICAgICAgICAgICBhcmdzOiBbe1xuICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICogT3B0aW9uYWwgY29uZmlndXJhdGlvbiBmb3IgWFNSRiBwcm90ZWN0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0czogW1xuICAgICAgICAgICAgICAgICAgICAgICAgSHR0cENsaWVudFhzcmZNb2R1bGUud2l0aE9wdGlvbnMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICogQ29uZmlndXJlcyB0aGUgW2RlcGVuZGVuY3kgaW5qZWN0b3JdKGd1aWRlL2dsb3NzYXJ5I2luamVjdG9yKSB3aGVyZSBpdCBpcyBpbXBvcnRlZFxuICAgICAgICAgICAgICAgICAgICAgKiB3aXRoIHN1cHBvcnRpbmcgc2VydmljZXMgZm9yIEhUVFAgY29tbXVuaWNhdGlvbnMuXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIEh0dHBDbGllbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IEh0dHBIYW5kbGVyLCB1c2VDbGFzczogSHR0cEludGVyY2VwdGluZ0hhbmRsZXIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIEh0dHBYaHJCYWNrZW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBwcm92aWRlOiBIdHRwQmFja2VuZCwgdXNlRXhpc3Rpbmc6IEh0dHBYaHJCYWNrZW5kIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgfV0gfSk7XG4vKipcbiAqIENvbmZpZ3VyZXMgdGhlIFtkZXBlbmRlbmN5IGluamVjdG9yXShndWlkZS9nbG9zc2FyeSNpbmplY3RvcikgZm9yIGBIdHRwQ2xpZW50YFxuICogd2l0aCBzdXBwb3J0aW5nIHNlcnZpY2VzIGZvciBKU09OUC5cbiAqIFdpdGhvdXQgdGhpcyBtb2R1bGUsIEpzb25wIHJlcXVlc3RzIHJlYWNoIHRoZSBiYWNrZW5kXG4gKiB3aXRoIG1ldGhvZCBKU09OUCwgd2hlcmUgdGhleSBhcmUgcmVqZWN0ZWQuXG4gKlxuICogWW91IGNhbiBhZGQgaW50ZXJjZXB0b3JzIHRvIHRoZSBjaGFpbiBiZWhpbmQgYEh0dHBDbGllbnRgIGJ5IGJpbmRpbmcgdGhlbSB0byB0aGVcbiAqIG11bHRpcHJvdmlkZXIgZm9yIGJ1aWx0LWluIFtESSB0b2tlbl0oZ3VpZGUvZ2xvc3NhcnkjZGktdG9rZW4pIGBIVFRQX0lOVEVSQ0VQVE9SU2AuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5jbGFzcyBIdHRwQ2xpZW50SnNvbnBNb2R1bGUge1xufVxuSHR0cENsaWVudEpzb25wTW9kdWxlLsm1ZmFjID0gaTAuybXJtW5nRGVjbGFyZUZhY3RvcnkoeyBtaW5WZXJzaW9uOiBcIjEyLjAuMFwiLCB2ZXJzaW9uOiBcIjE0LjIuOFwiLCBuZ0ltcG9ydDogaTAsIHR5cGU6IEh0dHBDbGllbnRKc29ucE1vZHVsZSwgZGVwczogW10sIHRhcmdldDogaTAuybXJtUZhY3RvcnlUYXJnZXQuTmdNb2R1bGUgfSk7XG5IdHRwQ2xpZW50SnNvbnBNb2R1bGUuybVtb2QgPSBpMC7Jtcm1bmdEZWNsYXJlTmdNb2R1bGUoeyBtaW5WZXJzaW9uOiBcIjE0LjAuMFwiLCB2ZXJzaW9uOiBcIjE0LjIuOFwiLCBuZ0ltcG9ydDogaTAsIHR5cGU6IEh0dHBDbGllbnRKc29ucE1vZHVsZSB9KTtcbkh0dHBDbGllbnRKc29ucE1vZHVsZS7JtWluaiA9IGkwLsm1ybVuZ0RlY2xhcmVJbmplY3Rvcih7IG1pblZlcnNpb246IFwiMTIuMC4wXCIsIHZlcnNpb246IFwiMTQuMi44XCIsIG5nSW1wb3J0OiBpMCwgdHlwZTogSHR0cENsaWVudEpzb25wTW9kdWxlLCBwcm92aWRlcnM6IFtcbiAgICAgICAgSnNvbnBDbGllbnRCYWNrZW5kLFxuICAgICAgICB7IHByb3ZpZGU6IEpzb25wQ2FsbGJhY2tDb250ZXh0LCB1c2VGYWN0b3J5OiBqc29ucENhbGxiYWNrQ29udGV4dCB9LFxuICAgICAgICB7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogSnNvbnBJbnRlcmNlcHRvciwgbXVsdGk6IHRydWUgfSxcbiAgICBdIH0pO1xuaTAuybXJtW5nRGVjbGFyZUNsYXNzTWV0YWRhdGEoeyBtaW5WZXJzaW9uOiBcIjEyLjAuMFwiLCB2ZXJzaW9uOiBcIjE0LjIuOFwiLCBuZ0ltcG9ydDogaTAsIHR5cGU6IEh0dHBDbGllbnRKc29ucE1vZHVsZSwgZGVjb3JhdG9yczogW3tcbiAgICAgICAgICAgIHR5cGU6IE5nTW9kdWxlLFxuICAgICAgICAgICAgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBKc29ucENsaWVudEJhY2tlbmQsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IEpzb25wQ2FsbGJhY2tDb250ZXh0LCB1c2VGYWN0b3J5OiBqc29ucENhbGxiYWNrQ29udGV4dCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUywgdXNlQ2xhc3M6IEpzb25wSW50ZXJjZXB0b3IsIG11bHRpOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgfV0gfSk7XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLyoqXG4gKiBBIHdyYXBwZXIgYXJvdW5kIHRoZSBgWE1MSHR0cFJlcXVlc3RgIGNvbnN0cnVjdG9yLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqIEBzZWUgYFhockZhY3RvcnlgXG4gKiBAZGVwcmVjYXRlZFxuICogYFhockZhY3RvcnlgIGhhcyBtb3ZlZCwgcGxlYXNlIGltcG9ydCBgWGhyRmFjdG9yeWAgZnJvbSBgQGFuZ3VsYXIvY29tbW9uYCBpbnN0ZWFkLlxuICovXG5jb25zdCBYaHJGYWN0b3J5ID0gWGhyRmFjdG9yeSQxO1xuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBHZW5lcmF0ZWQgYnVuZGxlIGluZGV4LiBEbyBub3QgZWRpdC5cbiAqL1xuXG5leHBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUywgSHR0cEJhY2tlbmQsIEh0dHBDbGllbnQsIEh0dHBDbGllbnRKc29ucE1vZHVsZSwgSHR0cENsaWVudE1vZHVsZSwgSHR0cENsaWVudFhzcmZNb2R1bGUsIEh0dHBDb250ZXh0LCBIdHRwQ29udGV4dFRva2VuLCBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cEV2ZW50VHlwZSwgSHR0cEhhbmRsZXIsIEh0dHBIZWFkZXJSZXNwb25zZSwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMsIEh0dHBSZXF1ZXN0LCBIdHRwUmVzcG9uc2UsIEh0dHBSZXNwb25zZUJhc2UsIEh0dHBVcmxFbmNvZGluZ0NvZGVjLCBIdHRwWGhyQmFja2VuZCwgSHR0cFhzcmZUb2tlbkV4dHJhY3RvciwgSnNvbnBDbGllbnRCYWNrZW5kLCBKc29ucEludGVyY2VwdG9yLCBYaHJGYWN0b3J5LCBIdHRwSW50ZXJjZXB0aW5nSGFuZGxlciBhcyDJtUh0dHBJbnRlcmNlcHRpbmdIYW5kbGVyIH07XG4iXSwibmFtZXMiOlsiaTEiLCJET0NVTUVOVCIsIsm1cGFyc2VDb29raWVWYWx1ZSIsIlhockZhY3RvcnkiLCJYaHJGYWN0b3J5JDEiLCJpMCIsIkluamVjdGFibGUiLCJJbmplY3Rpb25Ub2tlbiIsIkluamVjdCIsIlBMQVRGT1JNX0lEIiwiTmdNb2R1bGUiLCJvZiIsIk9ic2VydmFibGUiLCJjb25jYXRNYXAiLCJmaWx0ZXIiLCJtYXAiLCJIdHRwSGFuZGxlciIsIkh0dHBCYWNrZW5kIiwiSHR0cEhlYWRlcnMiLCJjb25zdHJ1Y3RvciIsImhlYWRlcnMiLCJub3JtYWxpemVkTmFtZXMiLCJNYXAiLCJsYXp5VXBkYXRlIiwibGF6eUluaXQiLCJzcGxpdCIsImZvckVhY2giLCJsaW5lIiwiaW5kZXgiLCJpbmRleE9mIiwibmFtZSIsInNsaWNlIiwia2V5IiwidG9Mb3dlckNhc2UiLCJ2YWx1ZSIsInRyaW0iLCJtYXliZVNldE5vcm1hbGl6ZWROYW1lIiwiaGFzIiwiZ2V0IiwicHVzaCIsInNldCIsIm5nRGV2TW9kZSIsImFzc2VydFZhbGlkSGVhZGVycyIsIk9iamVjdCIsImtleXMiLCJ2YWx1ZXMiLCJsZW5ndGgiLCJpbml0IiwiQXJyYXkiLCJmcm9tIiwiZ2V0QWxsIiwiYXBwZW5kIiwiY2xvbmUiLCJvcCIsImRlbGV0ZSIsImxjTmFtZSIsImNvcHlGcm9tIiwidXBkYXRlIiwiYXBwbHlVcGRhdGUiLCJvdGhlciIsImNvbmNhdCIsImJhc2UiLCJ1bmRlZmluZWQiLCJ0b0RlbGV0ZSIsImV4aXN0aW5nIiwiZm4iLCJlbnRyaWVzIiwiaXNBcnJheSIsIkVycm9yIiwiSHR0cFVybEVuY29kaW5nQ29kZWMiLCJlbmNvZGVLZXkiLCJzdGFuZGFyZEVuY29kaW5nIiwiZW5jb2RlVmFsdWUiLCJkZWNvZGVLZXkiLCJkZWNvZGVVUklDb21wb25lbnQiLCJkZWNvZGVWYWx1ZSIsInBhcmFtUGFyc2VyIiwicmF3UGFyYW1zIiwiY29kZWMiLCJwYXJhbXMiLCJyZXBsYWNlIiwicGFyYW0iLCJlcUlkeCIsInZhbCIsImxpc3QiLCJTVEFOREFSRF9FTkNPRElOR19SRUdFWCIsIlNUQU5EQVJEX0VOQ09ESU5HX1JFUExBQ0VNRU5UUyIsInYiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzIiwidCIsIl9hIiwidmFsdWVUb1N0cmluZyIsIkh0dHBQYXJhbXMiLCJvcHRpb25zIiwidXBkYXRlcyIsImNsb25lRnJvbSIsImVuY29kZXIiLCJmcm9tU3RyaW5nIiwiZnJvbU9iamVjdCIsInJlcyIsImFwcGVuZEFsbCIsIl92YWx1ZSIsInRvU3RyaW5nIiwiZUtleSIsImpvaW4iLCJpZHgiLCJzcGxpY2UiLCJIdHRwQ29udGV4dFRva2VuIiwiZGVmYXVsdFZhbHVlIiwiSHR0cENvbnRleHQiLCJ0b2tlbiIsIm1pZ2h0SGF2ZUJvZHkiLCJtZXRob2QiLCJpc0FycmF5QnVmZmVyIiwiQXJyYXlCdWZmZXIiLCJpc0Jsb2IiLCJCbG9iIiwiaXNGb3JtRGF0YSIsIkZvcm1EYXRhIiwiaXNVcmxTZWFyY2hQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJIdHRwUmVxdWVzdCIsInVybCIsInRoaXJkIiwiZm91cnRoIiwiYm9keSIsInJlcG9ydFByb2dyZXNzIiwid2l0aENyZWRlbnRpYWxzIiwicmVzcG9uc2VUeXBlIiwidG9VcHBlckNhc2UiLCJjb250ZXh0IiwidXJsV2l0aFBhcmFtcyIsInFJZHgiLCJzZXAiLCJzZXJpYWxpemVCb2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRldGVjdENvbnRlbnRUeXBlSGVhZGVyIiwidHlwZSIsInNldEhlYWRlcnMiLCJyZWR1Y2UiLCJzZXRQYXJhbXMiLCJIdHRwRXZlbnRUeXBlIiwiSHR0cFJlc3BvbnNlQmFzZSIsImRlZmF1bHRTdGF0dXMiLCJkZWZhdWx0U3RhdHVzVGV4dCIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJvayIsIkh0dHBIZWFkZXJSZXNwb25zZSIsIlJlc3BvbnNlSGVhZGVyIiwiSHR0cFJlc3BvbnNlIiwiUmVzcG9uc2UiLCJIdHRwRXJyb3JSZXNwb25zZSIsIm1lc3NhZ2UiLCJlcnJvciIsImFkZEJvZHkiLCJvYnNlcnZlIiwiSHR0cENsaWVudCIsImhhbmRsZXIiLCJyZXF1ZXN0IiwiZmlyc3QiLCJyZXEiLCJldmVudHMkIiwicGlwZSIsImhhbmRsZSIsInJlcyQiLCJldmVudCIsImhlYWQiLCJqc29ucCIsImNhbGxiYWNrUGFyYW0iLCJwYXRjaCIsInBvc3QiLCJwdXQiLCLJtWZhYyIsIsm1cHJvdiIsIkh0dHBJbnRlcmNlcHRvckhhbmRsZXIiLCJuZXh0IiwiaW50ZXJjZXB0b3IiLCJpbnRlcmNlcHQiLCJIVFRQX0lOVEVSQ0VQVE9SUyIsIk5vb3BJbnRlcmNlcHRvciIsIm5leHRSZXF1ZXN0SWQiLCJmb3JlaWduRG9jdW1lbnQiLCJKU09OUF9FUlJfTk9fQ0FMTEJBQ0siLCJKU09OUF9FUlJfV1JPTkdfTUVUSE9EIiwiSlNPTlBfRVJSX1dST05HX1JFU1BPTlNFX1RZUEUiLCJKU09OUF9FUlJfSEVBREVSU19OT1RfU1VQUE9SVEVEIiwiSnNvbnBDYWxsYmFja0NvbnRleHQiLCJKc29ucENsaWVudEJhY2tlbmQiLCJjYWxsYmFja01hcCIsImRvY3VtZW50IiwicmVzb2x2ZWRQcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJuZXh0Q2FsbGJhY2siLCJvYnNlcnZlciIsImNhbGxiYWNrIiwibm9kZSIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJmaW5pc2hlZCIsImRhdGEiLCJjbGVhbnVwIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwib25Mb2FkIiwidGhlbiIsImNvbXBsZXRlIiwib25FcnJvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcHBlbmRDaGlsZCIsIlNlbnQiLCJyZW1vdmVMaXN0ZW5lcnMiLCJzY3JpcHQiLCJpbXBsZW1lbnRhdGlvbiIsImNyZWF0ZUhUTUxEb2N1bWVudCIsImFkb3B0Tm9kZSIsImRlY29yYXRvcnMiLCJhcmdzIiwiSnNvbnBJbnRlcmNlcHRvciIsIlhTU0lfUFJFRklYIiwiZ2V0UmVzcG9uc2VVcmwiLCJ4aHIiLCJyZXNwb25zZVVSTCIsInRlc3QiLCJnZXRBbGxSZXNwb25zZUhlYWRlcnMiLCJnZXRSZXNwb25zZUhlYWRlciIsIkh0dHBYaHJCYWNrZW5kIiwieGhyRmFjdG9yeSIsImJ1aWxkIiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJkZXRlY3RlZFR5cGUiLCJyZXFCb2R5IiwiaGVhZGVyUmVzcG9uc2UiLCJwYXJ0aWFsRnJvbVhociIsInJlc3BvbnNlIiwicmVzcG9uc2VUZXh0Iiwib3JpZ2luYWxCb2R5IiwicGFyc2UiLCJ0ZXh0Iiwic2VudEhlYWRlcnMiLCJvbkRvd25Qcm9ncmVzcyIsInByb2dyZXNzRXZlbnQiLCJEb3dubG9hZFByb2dyZXNzIiwibG9hZGVkIiwibGVuZ3RoQ29tcHV0YWJsZSIsInRvdGFsIiwicGFydGlhbFRleHQiLCJvblVwUHJvZ3Jlc3MiLCJwcm9ncmVzcyIsIlVwbG9hZFByb2dyZXNzIiwidXBsb2FkIiwic2VuZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZWFkeVN0YXRlIiwiRE9ORSIsImFib3J0IiwiWFNSRl9DT09LSUVfTkFNRSIsIlhTUkZfSEVBREVSX05BTUUiLCJIdHRwWHNyZlRva2VuRXh0cmFjdG9yIiwiSHR0cFhzcmZDb29raWVFeHRyYWN0b3IiLCJkb2MiLCJwbGF0Zm9ybSIsImNvb2tpZU5hbWUiLCJsYXN0Q29va2llU3RyaW5nIiwibGFzdFRva2VuIiwicGFyc2VDb3VudCIsImdldFRva2VuIiwiY29va2llU3RyaW5nIiwiY29va2llIiwiSHR0cFhzcmZJbnRlcmNlcHRvciIsInRva2VuU2VydmljZSIsImhlYWRlck5hbWUiLCJsY1VybCIsInN0YXJ0c1dpdGgiLCJIdHRwSW50ZXJjZXB0aW5nSGFuZGxlciIsImJhY2tlbmQiLCJpbmplY3RvciIsImNoYWluIiwiaW50ZXJjZXB0b3JzIiwicmVkdWNlUmlnaHQiLCJJbmplY3RvciIsImludGVyY2VwdGluZ0hhbmRsZXIiLCJqc29ucENhbGxiYWNrQ29udGV4dCIsIndpbmRvdyIsIkh0dHBDbGllbnRYc3JmTW9kdWxlIiwiZGlzYWJsZSIsIm5nTW9kdWxlIiwicHJvdmlkZXJzIiwicHJvdmlkZSIsInVzZUNsYXNzIiwid2l0aE9wdGlvbnMiLCJ1c2VWYWx1ZSIsIsm1bW9kIiwiybVpbmoiLCJ1c2VFeGlzdGluZyIsIm11bHRpIiwiSHR0cENsaWVudE1vZHVsZSIsImltcG9ydHMiLCJIdHRwQ2xpZW50SnNvbnBNb2R1bGUiLCJ1c2VGYWN0b3J5IiwiybVIdHRwSW50ZXJjZXB0aW5nSGFuZGxlciJdLCJzb3VyY2VSb290Ijoid2VicGFjazovLy8iLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbM119