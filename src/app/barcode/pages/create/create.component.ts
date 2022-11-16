import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    const regex = new RegExp('^[0-9]{1,13}$');
    this.form = this.formBuilder.group({
      text: ['', Validators.required],
      code: ['', [Validators.required, Validators.pattern(regex)]],
      quantity: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.form.value);
    // redirect to list view with form as query params
    this.router.navigate(['/barcode/list'], { queryParams: this.form.value });
  }

}
