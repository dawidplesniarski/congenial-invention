import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id: new FormControl(''),
      firstName: new FormControl('', Validators.maxLength(255)),
      lastName: new FormControl('', Validators.maxLength(255)),
      birthDate: new FormControl('', Validators.required),
      wzrost: new FormControl('')
    });
  }

  ngOnInit() {
  }

  toConsole() {
    console.log(this.form.value);
  }
}
