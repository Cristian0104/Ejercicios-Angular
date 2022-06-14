import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Usuario } from '../../interfaces/usuarios.iterfaces';
import { CrudFacade } from '../../services/crud.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styles: [
    `
    .icons{
      display: flex;
      justify-content: flex-start;
    }
    .icons > i {
      cursor: pointer;
    }
    `
  ]
})
export class TablaComponent implements OnInit {

  clickEvent: Subscription;

  usuarios: Usuario[] = [];
  usuario!: Usuario;

  constructor( private crudService:CrudFacade) {
    this.clickEvent = this.crudService.getClickEvent().subscribe( () => this.ngOnInit());
  }

  ngOnInit(): void {
    this.crudService.getUsuarios().subscribe( usuarios => {
      this.usuarios = usuarios;

    })
  }

  borrarUsuario(usuario: Usuario) {
    // console.log(usuario);
          this.crudService.deleteUsuario( usuario.id! )
          .subscribe( resp => {this.ngOnInit()})
  }

  actualizarUsuario(usuario:Usuario) {

    this.crudService.usuarioEditar.emit(usuario);

  }
}

