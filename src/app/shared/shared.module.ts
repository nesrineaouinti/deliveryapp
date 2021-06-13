import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { Router, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidebarmarketComponent } from './components/sidebarmarket/sidebarmarket.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    SidebarmarketComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    RouterModule,

  ],
  exports :[
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    SidebarmarketComponent
  ]
})
export class SharedModule { 

}
