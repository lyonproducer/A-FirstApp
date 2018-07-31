import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-get-api',
  templateUrl: './get-api.component.html',
  styleUrls: ['./get-api.component.css']
})
export class GetApiComponent implements OnInit {

  posts = [];

  constructor(private dataService: DataService){

    this.dataService.getData().subscribe(data => {
      this.posts= data;
    });

  }

  ngOnInit() {
  }

}
