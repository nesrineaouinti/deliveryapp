import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';

import {MatSortModule} from '@angular/material/sort';
import  {MatToolbarModule} from '@angular/material/toolbar';

import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { AuthInterceptor} from './auth.interceptor';
import { DefaultModule } from './layouts/default/default.module';

import { RouterModule } from '@angular/router';
import { DashboradComponent } from './modules/dashborad/dashborad.component';
import { AffectationComponent } from './modules/affectation/affectation.component';


import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Chart} from 'chart.js';
import { EspaceMarketplaceComponent } from './espace-marketplace/espace-marketplace.component';
import { EspaceMarketplaceModule } from './espace-marketplace/espace-marketplace';
import { SharedModule } from './shared/shared.module';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrdrsComponent } from './modules/ordrs/ordrs.component';
import { AffecterComponent } from './modules/affecter/affecter.component';



@NgModule({
  declarations: [
    AppComponent,
     
 LoginComponent,
      
       
       
      
       
           
  ],
  imports: [
     EspaceMarketplaceModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    DefaultModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
     SharedModule,
    ReactiveFormsModule,
    
    NgbModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
