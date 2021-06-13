import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../services/Service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  // id = this.actRoute.snapshot.params['id'];
  // MarketplaceData: any = {};

  editExam:FormGroup;
   id: string;
  confirmation: string;
  isupdated: boolean;

  constructor(private editer: FormBuilder , private route: ActivatedRoute , private http:HttpClient  , ) {
    this.editExam=this.editer.group({

      name:[''],
      description :[''],
      phone:[''],
      adress:[''],
      website:['']
    })
   }
   get f()
   {
     return this.editExam.controls;
   }
   private url:string ="http://localhost:3000/marketplace";


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
