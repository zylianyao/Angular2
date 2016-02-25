import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Hero} from './hero';
import {HeroService} from './hero.service';
@Component({
    selector: 'my-dashboard',
    templateUrl: '../template/dashboard.component.html',
    styleUrls: ['../css/dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
    heroes:Hero[] = [];

    constructor(private _router:Router, private _heroService:HeroService) {
    }

    ngOnInit() {
        this._heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(0, 4));
    }

    gotoDetail(hero:Hero) {
        let link = ['HeroDetail', {id: hero.id}];
        //路由跳转
        this._router.navigate(link);
    }
}