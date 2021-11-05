import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  allUsers : any =[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllUsers_API()
    .then(result => {
      this.allUsers= result;
      console.log(result);
      

    }).catch(err => {
      console.log(err);
      
    }) 
  }

}