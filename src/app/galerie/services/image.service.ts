import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Image} from 'src/app/entities/image';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private FAKE_DATA:Image=
    {
      description:'fake',
      image:'https://dummyimage.com/100',
      url:'https://dummyimage.com/100'
    };



  constructor() { }

  public getAll$():Observable<Image[]>{
    let all:Image[]=[];
    for (let index = 0; index < 10; index++) {
      all.push(this.FAKE_DATA);      
    }
    return of(all);
  }
}
