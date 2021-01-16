import { AbstractControl, FormControl, FormGroup, NgForm, ValidationErrors } from "@angular/forms";

export class CustomValidator {

  static nameValidator(control: AbstractControl): ValidationErrors | null {
    const name = control.value as string;
    if (name.toLowerCase().includes('test')) {
      return { invalidName: true }
    }
    return null;
  }

  static specialChar(chars: string) {
    return (control: AbstractControl): ValidationErrors | null => {
      const addr1 = control.value as string;

      if (addr1.includes(chars)) {
        return { specialChar: true }
      }
      return null;
    }
  }

  static passwordValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');

    if (password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ invalidPassword: true });
      return { invalidPassword: true }
    }
    return null;
  }

}
