import {Component, OnInit} from '@angular/core';
import {ServiceUsrService} from '../../services/service-usr.service';
import {Users} from '../../users';
import {NgForOf, NgIf, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-list-usr',
  imports: [
    UpperCasePipe,
    NgForOf,
    NgIf
  ],
  templateUrl: './list-usr.component.html',
  styleUrl: './list-usr.component.css'
})
export class ListUsrComponent implements OnInit{

  ngOnInit(): void {
    this.showList();
  }

  UsrList: Users[]=[];

  constructor(private usrService:ServiceUsrService) {
  }



  showList(){
    this.UsrList = this.usrService.getAllUsr();
  }

  deleteAll() {
    this.UsrList=[];
  }
}
