import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspaceMarketplaceComponent } from './espace-marketplace/espace-marketplace.component';
import { DefaultComponent } from './layouts/default/default.component';
import { LoginComponent } from './login/login.component';
import { deliverycompany } from './models/Deliverycompany';
import { AddComponent } from './modules/add/add.component';
import { AddmComponent } from './modules/addm/addm.component';
import { AffectationComponent } from './modules/affectation/affectation.component';
import { AffecterComponent } from './modules/affecter/affecter.component';
import { DashboradComponent } from './modules/dashborad/dashborad.component';
import { DeliverycompanyComponent } from './modules/deliverycompany/deliverycompany.component';
import { EditComponent } from './modules/edit/edit.component';
import { EditmComponent } from './modules/editm/editm.component';
import { ExamComponent } from './modules/exam/exam.component';
import { HomeComponent } from './modules/home/home.component';
import { OrdrsComponent } from './modules/ordrs/ordrs.component';
import { PostsComponent } from './modules/posts/posts.component';
import { OrdersComponent } from './espace-marketplace/ordrs/ordrs.component';

const routes: Routes = [{
  path: '',
   component : DefaultComponent,
   children :[{
path: '',
component: DashboradComponent
   }, {
path :'posts',
component : PostsComponent,
    }, {
      path :'dashborad',
component : DashboradComponent,
    },{
      path :'affectation',
      component : AffectationComponent,
    },{
      path :'ordrs',
      component : OrdrsComponent,
    },{
      path :'affecter/:id',
      component :AffecterComponent,
    }
    ,{
      path :'home',
      component :HomeComponent,
    },{
      path :'deliverycompany',
      component : DeliverycompanyComponent,
    },{
      path :'Addm',
      component :AddmComponent,
    },{
      path :'editm/:id',
      component :EditmComponent,
    },{
      path :'exam',
      component : ExamComponent,
    },{
      path :'Add',
      component :AddComponent,
    },{
      path :'Edit/:id',
      component :EditComponent
    }
  ]
},
{
  path :'login',
  component : LoginComponent,
 },
 {
  path :'MarketplaceEspace',
  component : EspaceMarketplaceComponent,
  children :[{
    path: '',
    component: OrdersComponent,
       }]
   }

];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
