import { Component, OnInit } from '@angular/core';
import { Deliverycompany } from 'src/app/services/Deliverycompanyserver';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-deliverycompany',
  templateUrl: './deliverycompany.component.html',
  styleUrls: ['./deliverycompany.component.css']
})
export class DeliverycompanyComponent implements OnInit {

  tabs=[];
  isupdated: boolean;
  conf: string;
  isdeleted: boolean;
  constructor(private exam:Deliverycompany, private Http:HttpClient) { }

  getdata()
  {
    this.exam.getdata().subscribe(data=>this.tabs=data);
  }

  delete(id : number)
  {
    this.exam.deleteExam(id).subscribe(data=>{
      console.log(data);
      this.getdata();
      this.conf="delievry commpany deleted";
      this.isdeleted=true;

    })
  }
  
  ngOnInit(): void {
    this.getdata();
  }

}
