import { Injectable } from '@angular/core';
import {Users} from '../users';

@Injectable({
  providedIn: 'root'
})
export class ServiceUsrService {

  UsrList:Users[]=[
    {id:1,name:"nom1", email:"nom1.prenom1@email.com", role:"Admin", password:"123"},
    {id:2,name:"nom2", email:"nom2.prenom2@email.com", role:"Client", password:"1234"},
    {id:3,name:"nom3", email:"nom3.prenom3@email.com", role:"Professionnel", password:"12345"}
  ];
  constructor() {}

  getAllUsr(): Users[]{
    return this.UsrList;
  }

  AddUsr(u:Users){
    this.UsrList.push(u);
  }

}
