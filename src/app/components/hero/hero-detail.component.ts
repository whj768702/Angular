import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {Hero} from '../../hero';
import {HeroService} from '../../services/hero.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';

import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'sg-my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.less']
})

export class HeroDetailComponent implements OnInit {
  hero: Hero;
  _myHero: Hero;

  @Input()
  set myHero(myHero: Hero) {
    this._myHero = myHero;
  }

  get myHero(): Hero {
    console.log('get' + this._myHero);
    return this._myHero;
  }

  @Input() set id(value: any) {
    console.log(value);
  }

  @Output() myVote = new EventEmitter<boolean>();
  voted = false;

  vote(agreed: boolean) {
    this.myVote.emit(agreed);
    this.voted = true;
  }

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.route.params
      .pipe(switchMap((params: Params) => this.heroService.getHero(+params['id'])))
      .subscribe(result => {
        if (result) {
          console.log('result: ', result);
          this.hero = result;
        }
      });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
