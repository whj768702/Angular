import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from '../components/dashboard/dashboard.component';
import { HeroesComponent }      from '../components/hero/heroes.component';
import { HeroDetailComponent }  from '../components/hero/hero-detail.component';
import { CrisisCenterComponent } from "../components/crisis/crisis-center.component";
import {CrisisDetailComponent} from "../components/crisis/crisis-detail.component";
import {CountdownParentComponent} from "../components/countdown/countdown-parent.component";
import {CountdownParentComponent2} from "../components/countdown/countdown-parent.component2";
import {MissioncontrolComponent} from "../components/communicate-service/missioncontrol.component";
import {HighlightDisplayComponent} from "../components/attribute-directives/highlight-display.component";
import {MyUnlessComponent} from "../components/structural-directive/myUnless.component";

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'heroes',     component: HeroesComponent },
    { path: 'crisis', component: CrisisCenterComponent},
    { path: 'crisis-detail/:id', component: CrisisDetailComponent},
    { path: 'countdown', component: CountdownParentComponent},
    { path: 'countdown2', component: CountdownParentComponent2},
    { path: 'astronaut-mission', component: MissioncontrolComponent},
    { path: 'show-highlight', component: HighlightDisplayComponent},
    { path: 'structural-directive', component: MyUnlessComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
