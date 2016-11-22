import { Component, OnInit } from '@angular/core';

import {Hero} from "./hero";
import {HeroService} from "./hero.service";

// import '../../public/css/styles.css';

@Component({
    selector: 'my-app',
    providers: [HeroService],
    template:  `
        <h2>My Heroes</h2>
        <ul class="heroes">
            <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
                <span class="badge">{{hero.id}}</span>{{hero.name}}
            </li> 
        </ul>
        <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    `,
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroService: HeroService){
    }

    onSelect(hero: Hero): void{
        this.selectedHero = hero;
    }
    getHeroes(): void{
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    ngOnInit(): void{
        this.getHeroes();
    }
}


