import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appCustomValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
})
export class CustomValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    if(control !== undefined && control.value !== null ) {
      const value = control.value as string;
      if(value.includes('test')) {
        return { invalidTitle: true }
      }
      return null;
    }
    return null;
  }

}
