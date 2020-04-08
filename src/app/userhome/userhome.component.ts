import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
 username:string='';
  constructor(private _route:ActivatedRoute) { 
    this.username = this._route.snapshot.params["name"];
  }

  ngOnInit() {
  }

}
