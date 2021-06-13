import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ordrs } from 'src/app/services/ordrs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-affecter',
  templateUrl: './affecter.component.html',
  styleUrls: ['./affecter.component.css']
})
export class AffecterComponent implements OnInit {
  editExam:FormGroup;
  id: string;
 confirmation: string;
 isupdated: boolean;
  constructor (private editer: FormBuilder , private route: ActivatedRoute , private http:HttpClient   ) {
    this.editExam=this.editer.group({
      Affectation:[''],
     
    })
   }

   get f()
   {
     return this.editExam.controls;
   }
   private url:string ="http://localhost:3000/commandes";


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
