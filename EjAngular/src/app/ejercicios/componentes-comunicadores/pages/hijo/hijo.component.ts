import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentesComunicadoresService } from '../../services/componentes-comunicadores.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [
  ]
})
export class HijoComponent {

  @Input() messagePadre: string = '';
  @Output() outputEvent = new EventEmitter <string>();

  messageHijo: string = '';
  subc !: Subscription

  constructor( private ccs:ComponentesComunicadoresService) {
    this.ccs.hijo = this;
  }

  ngOnInit() {
   this.subc = this.ccs.messageParent$
        .subscribe( messageParent => {
          console.log('recibido del padre', messageParent);

          this.messagePadre = messageParent;
        })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('destruido');
    this.subc?.unsubscribe()

  }

  messageOput() {
    this.outputEvent.emit('Child using output event');
  }

  messageService() {
    // this.ccs.mesage = 'Child using Service';
    this.ccs.padre.messageHijo="Child using service";
  }

  messageObservable() {
    this.ccs.messageChild$.next('Child using observable');
  }


}
