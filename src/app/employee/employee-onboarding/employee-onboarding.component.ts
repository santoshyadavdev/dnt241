import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.search = new FormControl('');
    this.onBoardingForm = this.fb.group({
      name: new FormControl({ value: 'Test', disabled: true }, Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      dob: new FormControl('', Validators.required),
      address: this.fb.group({
        addrLine1: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(5)]),
        addrLine2: new FormControl('', Validators.required),
        city: new FormControl(''),
        pin: new FormControl(''),
      }),
      pastExp: this.fb.array([
        this.buildForm()
      ])
    })
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
  }
}
