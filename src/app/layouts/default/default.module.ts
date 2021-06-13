import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatIconModule} from '@angular/material/icon';
import { DashboradComponent } from 'src/app/modules/dashborad/dashborad.component';
import { AffectationComponent } from 'src/app/modules/affectation/affectation.component';
import { MatTable, MatTableModule } from '@angular/material/table';
import { ExamComponent } from 'src/app/modules/exam/exam.component';
import { AddComponent } from 'src/app/modules/add/add.component';
import { EditComponent } from 'src/app/modules/edit/edit.component';
import { AddmComponent } from 'src/app/modules/addm/addm.component';
import { DeliverycompanyComponent } from 'src/app/modules/deliverycompany/deliverycompany.component';
import { EditmComponent } from 'src/app/modules/editm/editm.component';
import { OrdrsComponent } from 'src/app/modules/ordrs/ordrs.component';
import { AffecterComponent } from 'src/app/modules/affecter/affecter.component';


@NgModule({

  declarations: [
    DefaultComponent,
    HomeComponent,
    PostsComponent,
     DashboradComponent,
     AffectationComponent,
     ExamComponent,
     AddComponent,
     EditComponent,
     AddmComponent,
     DeliverycompanyComponent,
     EditmComponent,
     OrdrsComponent,
     AffecterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    MatIconModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ]
})
export class DefaultModule { }
