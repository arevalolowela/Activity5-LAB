import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  profileForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      province: ['']
    }),
    hobbies: this.fb.array([
      this.fb.control('')
    ])
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.profileForm);
  }

  update() {
    this.profileForm.patchValue({
      firstname: 'Mikasa',
      lastname: 'Ackerman'
    });
  }
  get hobbies() {
    return this.profileForm.get('hobbies') as FormArray;
  }
  addHobby(){
    this.hobbies.push(this.fb.control(''))
  }

}
