import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
//用于获取路由传递的参数
import {RouteParams} from 'angular2/router';
import {HeroService} from './hero.service';
//selector声明后调用方Component提供 directives: [HeroDetailComponent],后可以使用<selector的值>来代表该Component
@Component({
    selector: 'my-hero-detail',
    templateUrl: '../template/hero-detail.component.html',
    styleUrls: ['../css/hero-detail.component.css'],
    //这样才能获取到出入的参数
    inputs: ['hero']
})
export class HeroDetailComponent implements OnInit {
    hero:Hero;

    constructor(private _heroService:HeroService,
                private _routeParams:RouteParams) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._heroService.getHero(id)
            .then(hero => this.hero = hero);
    }

    goBack() {
        window.history.back();
    }
}