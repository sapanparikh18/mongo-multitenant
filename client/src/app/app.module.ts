import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {IndexComponent} from './index/index.component';
import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {NavService} from './nav/nav.service';
import {AppRoutingModule} from "./app-routing.module";
import {UserComponent} from './user/user.component';
import {TeamService} from "./user/team.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        IndexComponent,
        UserComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        HttpModule,
        AppRoutingModule,
        NgbModule.forRoot()
    ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, NavService, TeamService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
