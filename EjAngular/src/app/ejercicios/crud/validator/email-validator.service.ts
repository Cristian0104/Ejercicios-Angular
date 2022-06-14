import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { delay, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService {

  originalEmail!: string;
  constructor(private http: HttpClient) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {

    const email = control.value
    console.log(email);





    return this.http.get<any[]>(`http://localhost:3000/usuarios?q=${ email }`)
                .pipe(
                  delay(3000),
                  map( resp => {
                    console.log(this.originalEmail);
                    if ( this.originalEmail === email) {
                      return null;
                    }
                    return ( resp.length === 0)? null : {emailTomado: true}
                  })
                );

  }

}
