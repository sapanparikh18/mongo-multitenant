import {Component, Injectable, OnInit} from '@angular/core';
import {TeamService} from "./team.service";
import {User} from "./user.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  newUser: User = new User()
  constructor(private teamService:TeamService) { }

  ngOnInit() {
  }

    addUser(){
        this.teamService.addUser(this.newUser)
            .subscribe(
                category => {
                    // this.team.push(category);
                    this.newUser = new User();
                },
                error => console.log('Error: ' + error)
            );
    }
}
