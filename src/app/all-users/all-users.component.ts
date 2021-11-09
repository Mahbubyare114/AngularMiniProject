import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  allUsers : any =[];
  show: boolean = false;
  id : any
  isLoading : boolean = true;

  constructor(private apiService: ApiService, private route : Router) { }

  ngOnInit(): void {
    this.apiService.getAllUsers_API()
    .then(result => {
     this.isLoading = false;
      this.allUsers= result;
      console.log(result);
      

    }).catch(err => {
      console.log(err);
      
    }) 

  }


  viewUser(user: any){
    // alert(user.id)
  this.id = this.route.navigateByUrl('single-user/'+user.id)
  }

  

}
