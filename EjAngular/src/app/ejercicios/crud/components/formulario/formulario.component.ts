import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pais, Usuario } from '../../interfaces/usuarios.iterfaces';
import { EmailValidatorService } from '../../validator/email-validator.service';
import { ValidatorService } from '../../validator/validator.service';
import { CrudFacade } from '../../services/crud.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: [
  ]
})
export class FormularioComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    name: [ '', [ Validators.required ] ],
    password: [ '', [ Validators.required ] ],
    confirmPassword: [ '', [ Validators.required ] ],
    email: [ '', [ Validators.required, Validators.pattern(this.validatorService.emailPattern) ], [this.emailValidator] ],
    suscribe: [ false ],
    country: [ '', [ Validators.required ] ],
    city: [ '', [ Validators.required ] ],
  },{
     validators: [ this.validatorService.camposIguales('password','confirmPassword') ]
  })

  get emailErrorMsg(): string {

    const errors = this.miFormulario.get('email')?.errors;

    if (errors?.['required']) {
      return 'Email es obligatorio';
    } else if ( errors?.['pattern']) {
      return 'El valor ingresado no tiene formato de correo';
    } else if ( errors?.['emailTomado']) {
      return 'El email ingresado ya existe'
    }
    return '';
  }

  usuario: Usuario = {
    name: '',
    password: '',
    confirmPassword: '',
    email: '',
    suscribe: false,
    country: 0,
    city: ''
  }


  constructor( private fb:FormBuilder,
               private validatorService: ValidatorService,
               private emailValidator:EmailValidatorService,
               private crudService:CrudFacade) { }

  ngOnInit(): void {

    this.crudService.usuarioEditar.subscribe(resp => {
      this.miFormulario.patchValue(resp);
      this.usuario.id = resp.id;

       if(this.usuario.id) {
        this.emailValidator.originalEmail = resp.email;
        console.log(this.emailValidator.originalEmail);
      }
      //   console.log('hola');
      //   this.miFormulario.get('email')?.clearAsyncValidators();
      // }else{
      //  // this.miFormulario.get('email')!.asyncValidator = <any>Validators.composeAsync([this.emailValidator]);
      // }
      // this.miFormulario.get('email')?.updateValueAndValidity();
    });
  }

  campoAValidar(campo:string) {
    return this.miFormulario.get(campo)?.invalid
            && this.miFormulario.get(campo)?.touched
  }

  submitFormulario() {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }

  getPaisNombre(): Array<string> {
    const keys = Object.keys(Pais);
    return keys.slice(keys.length/2);
  }

  guardar() {


    if (this.usuario.id){
      this.usuario = this.getFormulario();
      this.crudService.actualizarUsuario(this.usuario)
      .subscribe( () => {
        this.crudService.sendClickEvent()
       })
       this.miFormulario.clearValidators();
    }else {
      this.crudService.agregarUsuario( this.miFormulario.value )
      .subscribe( ()=> this.crudService.sendClickEvent());
    }
    this.miFormulario.reset({
      name: '',
      password: '',
      confirmPassword: '',
      email: '',
      suscribe: false,
      country: 0,
      city: ''
    });
    this.usuario.id = undefined;
  }

  getFormulario(): Usuario {
    return{
      id: this.usuario.id,
      name: this.miFormulario.get('name')?.value,
      password: this.miFormulario.get('password')?.value,
      confirmPassword: this.miFormulario.get('confirmPassword')?.value,
      email: this.miFormulario.get('email')?.value,
      suscribe: this.miFormulario.get('suscribe')?.value,
      country: this.miFormulario.get('country')?.value,
      city: this.miFormulario.get('city')?.value

    }
  }

}
