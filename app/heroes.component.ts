import {Component, OnInit} from 'angular2/core';
import {HeroDetailComponent} from './hero-detail.component';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {Router} from "angular2/router";
//更改会实时显示到用户
//@Component可以添加styles来添加CSS
@Component({
    selector: 'my-heroes',
    //使用反引号【ESC下面那个键可以打印多行】
    //<input value="{{hero.name}}" placeholder="name">并没有实现数据的修改绑定【只是显示了】
    //<input [(ngModel)]="hero.name" placeholder="name">实现了数据的双向绑定
    //(click)可以添加事件onSelect(hero)中hero与ngFor出的是同一个对象
    //noFor循环
    //ngIf判断
    //[class.selected]="hero === selectedHero"当条件成立的时候会增加一个 class="selected"
    templateUrl: '../template/heroes.component.html',
    styleUrls: ['../css/heroes.component.css'],
    directives: [HeroDetailComponent],
    providers: [HeroService]
})

export class HeroesComponent implements OnInit {
    public title = 'Tour of Heroes';
    public heroes:Hero[];
    selectedHero:Hero;
    //非全局变量_开头的编码规范
    constructor(private _router:Router, private _heroService:HeroService) {
    }

    // 直接这样也可以实现
    ngOnInit() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    onSelect(hero:Hero) {
        this.selectedHero = hero;
    }

    gotoDetail() {
        this._router.navigate(['HeroDetail', {id: this.selectedHero.id}]);
    }
}