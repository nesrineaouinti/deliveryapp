
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../services/Service.service';
import{Modal} from 'bootstrap';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  tabs=[];
  isupdated: boolean;
  conf: string;
  isdeleted: boolean;
  constructor(private exam:ServiceService, private Http:HttpClient) { }

  getdata()
  {
    this.exam.getdataa().subscribe(data=>this.tabs=data);
  }

  delete(id : number)
  {
    this.exam.deleteExam(id).subscribe(data=>{
      console.log(data);
      this.getdata();  
      this.conf="marketplace deleted";
  this.isdeleted=true;

    })
  }
  
  ngOnInit(): void {
    this.getdata();
  }

}

