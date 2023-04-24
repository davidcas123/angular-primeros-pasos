import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPagesComponent } from './pages/main-pages.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MainPagesComponent, ListComponent, AddCharacterComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MainPagesComponent
  ]
})
export class DbzModule { }
