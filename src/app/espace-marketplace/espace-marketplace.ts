import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatIconModule} from '@angular/material/icon';

import { MatTable, MatTableModule } from '@angular/material/table';
import { EspaceMarketplaceComponent } from './espace-marketplace.component';
import { SidebarmarketComponent } from '../shared/components/sidebarmarket/sidebarmarket.component';
import { OrdersComponent } from './ordrs/ordrs.component';


@NgModule({

  declarations: [
   EspaceMarketplaceComponent,
   OrdersComponent
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
export class EspaceMarketplaceModule { }
