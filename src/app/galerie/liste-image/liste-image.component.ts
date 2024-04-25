import { Component,Input } from '@angular/core';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-liste-image',
  templateUrl: './liste-image.component.html',
  styleUrls: ['./liste-image.component.scss']
})
export class ListeImageComponent {

  @Input() colonnes:number=4;

  numbers:number[]=[];

  constructor(public imageService:ImageService) {
   
  }

  ngOnInit(){
    this.numbers=Array(this.colonnes).fill(0).map((x,i)=> x=i+1);
  }

}
