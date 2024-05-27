import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit{
  hero={
    id:"1",
    name:"Edgar"
  }
  hide = true;
  
  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }

  formGroup!:FormGroup;

  constructor(private formB:FormBuilder){

  }

  ngOnInit(): void{
    this.initForm();
  }

  initForm(){
    this.formGroup=this.formB.group({
      name:["", Validators.required],
      email:["",[Validators.required,Validators.email]],
      password:["",Validators.required],
      telefono:["", Validators.required]
    })
  }

  submit(){
    console.log(this.formGroup.value);
  }
}
