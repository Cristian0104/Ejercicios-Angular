import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/usuarios.iterfaces';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudFacade {

  private baseUrl: string = 'http://localhost:3000';

  private subjet = new Subject<void>();
  usuarioEditar = new EventEmitter<Usuario>();

  constructor( private http:HttpClient) { }



  sendClickEvent() {
    this.subjet.next();
  }

  getClickEvent(): Observable<any> {
    return this.subjet.asObservable();
  }

  agregarUsuario(usuario:Usuario): Observable<Usuario> {
  return this.http.post<Usuario>(`${this.baseUrl}/usuarios`,usuario);
  }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseUrl}/usuarios`);
  }

  deleteUsuario(id: string): Observable<Usuario>{
    return this.http.delete<Usuario>(`${this.baseUrl}/usuarios/${id}`);
  }

  actualizarUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(`${this.baseUrl}/usuarios/${usuario.id}`, usuario);
  }

}
