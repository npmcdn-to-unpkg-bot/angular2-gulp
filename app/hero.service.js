"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
let HeroService = class HeroService {
    constructor(http) {
        this.http = http;
        this.heroesUrl = 'app/heroes'; // URL to web api
    }
    getHeroes() {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }
    getHero(id) {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }
    save(hero) {
        if (hero.id) {
            return this.put(hero);
        }
        return this.post(hero);
    }
    delete(hero) {
        let headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        let url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .delete(url, { headers: headers })
            .toPromise()
            .catch(this.handleError);
    }
    // Add new Hero
    post(hero) {
        let headers = new http_1.Headers({
            'Content-Type': 'application/json' });
        return this.http
            .post(this.heroesUrl, JSON.stringify(hero), { headers: headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }
    // Update existing Hero
    put(hero) {
        let headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        let url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), { headers: headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }
    handleError(error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
};
HeroService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], HeroService);
exports.HeroService = HeroService;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=hero.service.js.map