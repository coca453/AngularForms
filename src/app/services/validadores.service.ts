import { Injectable } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';
import { rejects } from 'assert';
import { promise } from 'protractor';
import { Observable } from 'rxjs';


interface ErrorValidate {
  [s: string]: boolean;

}

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }


  existeUsuario(control: FormControl): Promise<ErrorValidate> | Observable<ErrorValidate>{

    if (!control.value) {
      return Promise.resolve(null);
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        if( control.value === 'Strider'){
          resolve ({ existe: true });
        } else {
          resolve(null);
        }

      }, 3500);
    });

  }



  noHerrera( control: FormControl): { [s: string]: boolean} {

    if ( control.value?.toLowerCase() === 'herrera2'){
      return{
        noherrera: true
      }
      return null;
    }
  
  } 
  
  passwordsIguales( pass1Name: string, pass2Name: string ){
    return ( formGroup: FormGroup ) => {
      const pass1Ctrol = formGroup.controls[pass1Name];
      const pass2Ctrol = formGroup.controls[pass2Name];
      if (pass1Ctrol.value === pass2Ctrol.value){
        pass2Ctrol.setErrors(null);
      } else {
        pass2Ctrol.setErrors({noEsIgual: true});
      }
    }
  }






}
