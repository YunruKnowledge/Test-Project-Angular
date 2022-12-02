import { Component, OnInit } from '@angular/core';
import { dataModel } from '../../model';
import { DB_DATA } from "../../dbData"

@Component({
  selector: 'app-data-container',
  templateUrl: './data-container.component.html',
  styleUrls: ['./data-container.component.sass']
})
export class DataContainerComponent implements OnInit {

  dbData: dataModel[] = DB_DATA;

  con_test() {
    // console.log(DB_DATA)
    return DB_DATA.forEach(e=>{
      e.title
      console.log(e.title)
    })
  }

  constructor() { }

  ngOnInit(): void {
  }

}
