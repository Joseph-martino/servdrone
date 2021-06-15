import { Component, OnInit } from '@angular/core';
import { DisplayHeaderService } from './services/display.header.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HeaderInformations } from './services/display.header.service';

interface User {
    familyName: string;
    firstName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  currentHeaderInformation: HeaderInformations;
  // listNumbers: number[] = [];
  // nameList: User[] = [];

  



  constructor(headerServiceInformations: DisplayHeaderService, router: Router) {
    router
    .events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(event => 
      {
        const currentRoute = (event as NavigationEnd).url;
        this.currentHeaderInformation = headerServiceInformations.getHeaderInfoByPath(currentRoute);
      });
  }

  ngOnInit(): void {
    // this.listNumbers = this.generateNumbers();
    // this.nameList = this.generateUsers();
  }

  // generateNumbers() {
  //   const arr: number[] = [];
  //   for(let i = 0; i <= 500; i ++) {
  //     const randomNumber = Math.floor(Math.random() * 500);
  //     arr.push(randomNumber);
  //   }
  //   return arr;
  // }

  // generateUsers() {
  //   const users: User[] = [];
  //   for(let i = 0; i <= 500; i++) {
  //     const user: User = {
  //       familyName: "toto",
  //       firstName: "titi"
  //     }
  //     users.push(user);
  //   }
  //   return users;
  // }
}
