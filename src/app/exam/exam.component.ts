import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  private form: FormGroup
  id:string

  constructor(private fb: FormBuilder,private route: ActivatedRoute) {

    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    this.form = this.fb.group({
      id: new FormControl(this.id),
      name: new FormControl('', Validators.maxLength(255)),
      lastName: new FormControl('',Validators.maxLength(255)),
      birthdayDate: new FormControl('', Validators.required),
      wzrost: new FormControl('')
    });
  }

  ngOnInit() {
  }

  writeToConsole(){
    console.log(this.form.value)
  }

}
