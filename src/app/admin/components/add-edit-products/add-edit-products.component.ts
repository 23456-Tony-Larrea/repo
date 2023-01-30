import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Products } from '../interface/Products';

@Component({
  selector: 'app-add-edit-products',
  templateUrl: './add-edit-products.component.html',
  styleUrls: ['./add-edit-products.component.css']
})
export class AddEditProductsComponent implements OnInit{
  form: FormGroup;
constructor (private fb: FormBuilder){
  this.form = this.fb.group({
    name:['', Validators.required],
    description:['', Validators.required],
    price:['null', Validators.required],
    stock:['null', Validators.required]
  })
}

ngOnInit(): void {
}
addProduct(){
  //console.log(this.form.value.name);
  //console.log(this.form.get('name')?.value);

  const product: Products = {
   nombre_producto: this.form.value.name,
   description_producto: this.form.value.description,
    price_producto: this.form.value.price,
    stock_producto: this.form.value.stock
  }
  console.log(product);
}

  }



