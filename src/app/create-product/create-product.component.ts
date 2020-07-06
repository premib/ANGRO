import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ShareService } from "../share.service";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  iter: number= 0;
  myForm: FormGroup;
  productList: Array<object>;
  constructor(private fb: FormBuilder, public share: ShareService ) { 
    this.myForm= this.fb.group({
      'name': ['', Validators.required],
      'price': ['',[ Validators.required, Validators.pattern('[0-9]*')]],
      'stock': ['',[ Validators.required, Validators.pattern('[0-9]*')]]
    })
    // this.share = new ShareService()
  }

  ngOnInit(): void {
  }

  submit(form: FormGroup,){
    console.log(form, form.value.name.valid , form.value.price.valid, form.value.stock.valid)
    if(form.status === "VALID"){
      // window.localStorage.setItem(this.iter.toString(), JSON.stringify({name: form.value.name, price: form.value.price, stock: form.value.stock}))
      // this.iter++;
      this.share.setOption(form.value.name, {price: form.value.price,stock: form.value.stock})
    }
  }
}
