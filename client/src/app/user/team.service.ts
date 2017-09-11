import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import {User} from "./user.model";
import {HttpClient} from "@angular/common/http";
@Injectable()
export class TeamService{
    _team: Observable<any>;
    newUser: User = new User();
    constructor(private http: HttpClient) { }

    addUser(user: User) {
        return this.http.post(environment.serverUrl + 'users', user)
            .map(user => user);
    }
}
