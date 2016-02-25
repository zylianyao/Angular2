import {Component}       from 'angular2/core';
import {HeroService}     from './hero.service';
import {HeroesComponent} from './heroes.component';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {DashboardComponent} from "./dashboard.component";
import {HeroDetailComponent} from "./hero-detail.component";
@Component({
    selector: 'my-app',
    templateUrl: '../template/app.component.html',
    styleUrls: ['../css/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        HeroService
    ]
})
//<a [routerLink]="['Heroes']">Heroes</a>可以调用
//useAsDefault: true设置为默认的视图不设置则默认是愿路径
@RouteConfig([
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    }
])
export class AppComponent {
    title = 'Tour of Heroes';
}