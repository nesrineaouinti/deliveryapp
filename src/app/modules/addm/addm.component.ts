import { Component, OnInit } from '@angular/core';
import { Deliverycompany } from 'src/app/services/Deliverycompanyserver';
import { FormBuilder, FormGroup } from '@angular/forms';
import {deliverycompany} from '../../models/Deliverycompany'

@Component({
  selector: 'app-addm',
  templateUrl: './addm.component.html',
  styleUrls: ['./addm.component.css']
})
export class AddmComponent implements OnInit {

  ajoutExam:FormGroup;
  Examaj = new deliverycompany();
  isAdded: boolean;
  confirmation:String="Delivery company added successfully! ";

  constructor(private ajout: FormBuilder, private exam:Deliverycompany) {
    this.ajoutExam=this.ajout.group({
      
      name:[''],
      description:[''],
     phone:[''],
     fax :[''],
      adress:[''],
      website:[''] 
    })
   }
   get f()
   {
     return this.ajoutExam.controls;
   }

   add()
   {
     this.Examaj = this.ajoutExam.value ;
     this.exam.addDeliverycompany(this.Examaj ).subscribe(data=> {
       console.log(data);
       this.isAdded=true;

     })
   }
  ngOnInit(): void {
  }

}
