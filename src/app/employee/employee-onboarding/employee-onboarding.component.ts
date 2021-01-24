import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import { CustomValidator } from './custom.validator';
import { exhaustMap, filter, mergeMap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-employee-onboarding',
  templateUrl: './employee-onboarding.component.html',
  styleUrls: ['./employee-onboarding.component.scss']
})
export class EmployeeOnboardingComponent implements OnInit {

  search: FormControl;

  onBoardingForm: FormGroup;

  get pastExp() {
    return this.onBoardingForm.get('pastExp') as FormArray;
  }

  constructor(private fb: FormBuilder,
    private empService: EmployeeService) { }

  ngOnInit(): void {
    this.search = new FormControl('');
    this.onBoardingForm = this.fb.group({
      name: new FormControl({ value: 'Test', disabled: false },
        {
          updateOn: 'change',
          validators: [
            Validators.required,
            CustomValidator.nameValidator
          ]
        }),
      email: new FormControl('', [Validators.required, Validators.email]),
      dob: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
      address: this.fb.group({
        addrLine1: new FormControl('',
          [
            Validators.required,
            Validators.maxLength(15),
            Validators.minLength(5),
            CustomValidator.specialChar('#')
          ]),
        addrLine2: new FormControl('', Validators.required),
        city: new FormControl(''),
        pin: new FormControl(''),
      }),
      pastExp: this.fb.array([
        this.buildForm()
      ])
    }, {
      validators: CustomValidator.passwordValidator
    });

    this.bindFormData();

    this.onBoardingForm.valueChanges.pipe(
      filter(()=> this.onBoardingForm.valid),
      exhaustMap(val => this.empService.addEmp(val))
    ).subscribe();
  }

  bindFormData() {
    this.onBoardingForm.patchValue(this.empService.getEmployee());
  }

  addEmployer() {
    this.pastExp.push(this.buildForm())
  }


  private buildForm() {
    return this.fb.group({
      employer: new FormControl('', Validators.required),
      fromDate: new FormControl(''),
      toDate: new FormControl(''),
      designation: new FormControl('')
    });
  }

  deleteExp(i: number) {
    this.pastExp.removeAt(i);
  }

  deletAll() {
    this.pastExp.clear();
  }

  addPassport() {
    this.onBoardingForm.addControl('passport', new FormControl());

    this.onBoardingForm.removeControl('name');
  }

  submit() {
    console.log(this.onBoardingForm.getRawValue());
    this.resetForm();
  }

  private resetForm() {
    this.onBoardingForm.reset({
      name: '',
      email: '',
      dob: new Date(''),
      password: '',
      confirmPassword: '',
      address: {
        addrLine1: '',
        addrLine2: '',
        city: '',
        pin: ''
      },
      pastExp: [
        {
          employer: '',
          fromDate: new Date(),
          toDate: new Date(),
          designation: ''
        }
      ]
    });
  }

  reset() {
    this.resetForm();
  }
}
