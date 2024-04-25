import { Component, Input } from '@angular/core';
import { Image} from 'src/app/entities/image';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {

  @Input() data:Image={};

}
