import { Component, OnInit } from '@angular/core';

import { Ordrs} from 'src/app/services/ordrs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-ordrs',
  templateUrl: './ordrs.component.html',
  styleUrls: ['./ordrs.component.css']
})
export class OrdrsComponent implements OnInit {

  tabs=[];
  isupdated: boolean;
  conf: string;
  isdeleted: boolean;
  constructor(private exam:Ordrs, private Http:HttpClient) { }

  getdata()
  {
    this.exam.getdata().subscribe(data=>this.tabs=data);
  }

  delete(id : number)
  {
    this.exam.deleteExam(id).subscribe(data=>{
      console.log(data);
      this.getdata();
      this.conf="affectation  deleted";
      this.isdeleted=true;

    })
  }
  
  ngOnInit(): void {
    this.getdata();
  }

}


