import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validator, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  


  // title = 'Reactive Form';

  // myForm: FormGroup;
  // name: string ='';
  // description: string= '';
  // Address: any;
  
  // constructor(private fb: FormBuilder) {
  //   // this.myFullDetail = [];
  //   this.myForm = fb.group({
  //     'name' : [null, Validators.required],
  //     'description' : [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
  //     'country': '',
  //     'state':'',
  //     'city':'',
  //     'pinCode':'',
  //     'street':'',
  //     'flatNumber':''
  //   })
  // }
  // myFullDetail: any = [];
  // onSubmit(values) { debugger
  //   this.name = values.name;
  //   this.description = values.description;
  //   this.Address = {
  //     country: values.country,
  //     state: values.state,
  //     city: values.city,
  //     pinCode: values.pinCode,
  //     street: values.street,
  //     flatNumber: values.flatNumber
  //   }
  //   this.myFullDetail.push(this);
  //   localStorage.setItem('myDate',this.myFullDetail);
  // }


}
