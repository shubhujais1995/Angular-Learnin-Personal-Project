import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
const matMod = [
  MatFormFieldModule,
  MatInputModule
];
@NgModule({
  declarations: [],
  exports: [matMod],
  imports: [
    CommonModule, 
    matMod
  ]
})
export class MaterialModule { }
