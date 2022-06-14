import { EventEmitter, Injectable } from '@angular/core';
import { HijoComponent } from '../pages/hijo/hijo.component';
import { Subject } from 'rxjs';
import { PadreComponent } from '../pages/padre/padre.component';


@Injectable({
  providedIn: 'root'
})
export class ComponentesComunicadoresService {

  hijo!: HijoComponent;
  padre!: PadreComponent;

  messageParent$ = new Subject<string>();
  messageChild$ = new Subject<string>();

  messageChild: string = 'Child using service';
  messageParent: string = 'Parent using service';



  constructor() { }



}
