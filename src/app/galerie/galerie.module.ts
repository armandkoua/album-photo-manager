import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeImageComponent } from './liste-image/liste-image.component';
import { DetailImageComponent } from './detail-image/detail-image.component';
import { BrowserModule } from '@angular/platform-browser';
import { ImageComponent } from './image/image.component';



@NgModule({
  declarations: [
    ListeImageComponent,
    DetailImageComponent,
    ImageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports:[
    ListeImageComponent,
    DetailImageComponent,
    ImageComponent
  ]
})
export class GalerieModule { }
