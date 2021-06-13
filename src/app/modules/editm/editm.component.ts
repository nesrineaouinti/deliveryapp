
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-editm',
  templateUrl: './editm.component.html',
  styleUrls: ['./editm.component.css']
})
export class EditmComponent implements OnInit {

  editExam:FormGroup;
   id: string;
  confirmation: string;
  isupdated: boolean;

  constructor(private editer: FormBuilder , private route: ActivatedRoute , private http:HttpClient  , ) {
    this.editExam=this.editer.group({

      name:[''],
      description :[''],
      fax:[''],
      phone:[''],
      adress:[''],
      website:['']
    })
   }
   get f()
   {
     return this.editExam.controls;
   }
   private url:string ="http://localhost:3000/deliverycompany";


   update()
{
  this.id = this.route.snapshot.paramMap.get('id');
  if(confirm("Are you sure?")) {

  const _url=`${this.url}/${this.id}`;
console.log(this.editExam.value);
this.http.put(_url,this.editExam.value).subscribe((resultats)=>{
 this.confirmation =" Modification a été effectuée !";

this.isupdated=true;
})
}
}
  ngOnInit(): void {
  }

}
