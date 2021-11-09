import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-view-user-post',
  templateUrl: './view-user-post.component.html',
  styleUrls: ['./view-user-post.component.css']
})
export class ViewUserPostComponent implements OnInit {
  singleUserPost: any = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

  }
  

}
