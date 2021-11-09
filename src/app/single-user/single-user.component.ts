import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../shared/api.service';


@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {
  singleUserPost: any = [];
  isloading: boolean = true;
  id: any = 0;

  constructor(private route : ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    

    this.route.queryParams.subscribe(param=>{
  
     this.id = this.route.snapshot.url[1].path

     this.apiService.getSingleUserPosts_API(this.id).subscribe(response=>{
     this.singleUserPost = response;
     })
  })

    
  }
}
