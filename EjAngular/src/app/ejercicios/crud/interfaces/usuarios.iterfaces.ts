export interface Usuarios {
  usuarios: Usuario[];
}

export interface Usuario {
  id?:       string;
  name:   string;
  password: string;
  confirmPassword: string;
  email:    string;
  suscribe: boolean;
  country:     Pais;
  city:   string;
}


export enum Pais {
  "España","Portugal","Francia"
}
