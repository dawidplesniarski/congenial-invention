import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private form: FormGroup;
  id:string


  constructor(private fb: FormBuilder, private route: ActivatedRoute) {

    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
      this.form = this.fb.group({
      id: new FormControl(this.id),
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
