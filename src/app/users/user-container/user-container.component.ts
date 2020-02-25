import { Component, OnInit } from '@angular/core';
import {UserInfo, UserModel} from '../../models/user.model';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  public currentUser: UserModel;
  public users: UserModel[];

  constructor() {


  }


  updateUser(username: string, email: string){
    this.currentUser.email = email;
    this.currentUser.username = username;
  }

  ngOnInit() {
    console.log('User Container Init');


    this.users=[
      new UserModel(0,'davidso','davidso@gmail.com', new UserInfo('david','salomon','programer','http://authenticgoods.co/wrapbootstrap/themes/sparks/img/team/avatar-male.png','0506219535')),
      new UserModel(1,'moshs','moshs@getMaxListeners.com', new UserInfo('moshe','smonik','programer','http://authenticgoods.co/wrapbootstrap/themes/sparks/img/team/avatar-male.png','0522222222')),
      new UserModel(2,'chaims','chaims@getMaxListeners.com', new UserInfo('chaim','sabato','programer','http://authenticgoods.co/wrapbootstrap/themes/sparks/img/team/avatar-male.png','0533333333')),
  
      ]

  }

  onItemClicked(user: UserModel){
    this.currentUser = user;
  }

}