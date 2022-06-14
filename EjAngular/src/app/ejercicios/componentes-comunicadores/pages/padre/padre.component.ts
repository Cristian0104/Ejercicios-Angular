import { Component, Output, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ComponentesComunicadoresService } from '../../services/componentes-comunicadores.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styles: [
  ]
})
export class PadreComponent implements OnInit {
  show = false
  messageHijo: string = '';

  messagePadre: string = '';

  subc!: Subscription;

  constructor( private ccs:ComponentesComunicadoresService) {
    this.ccs.padre = this;
  }

  ngOnInit() {
    this.subc =  this.ccs.messageChild$
        .subscribe( messageChild => {
          this.messageHijo = messageChild;
        })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('destruido');
    this.subc?.unsubscribe()

  }

  messageService() {
  this.ccs.hijo.messagePadre="Parent using service";
  }

  messageInput(){
    this.messagePadre = 'Parent using input property';
  }

  getOutputChild(event: any) {
    this.messageHijo = event;
  }

  messageObservable() {
    this.ccs.messageParent$.next('Parent using observable')
  }

}
