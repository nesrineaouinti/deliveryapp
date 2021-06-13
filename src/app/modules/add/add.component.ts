import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { Exam } from '../../models/Marketplace';
import {ServiceService} from '../../services/Service.service'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
 
  ajoutExam:FormGroup;
  
  Examaj = new Exam();
  isAdded: boolean;
  
  confirmation:String="Marketplace added successfully  ";

  constructor( private ajout: FormBuilder  ,private exam:ServiceService ) {
    this.ajoutExam = this.ajout.group({
      
      name:['' ],
      description:[''],
     phone:[''],
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
     this.exam.addExam(this.Examaj ).subscribe(data=> {
       console.log(data);
       this.isAdded=true;

     })
   }
  ngOnInit(): void {
  }

}



