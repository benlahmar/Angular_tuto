import { Component, OnInit } from '@angular/core';
import { mydata } from 'src/app/mydata/data';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {

  data;

  constructor() { }

  ngOnInit() {

    this.data=mydata;
  }

}
