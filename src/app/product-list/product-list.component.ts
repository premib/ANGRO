import { Component, OnInit } from '@angular/core';
import {ShareService} from '../share.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList= [];
  temp;
  constructor(shared: ShareService) { 
    this.temp = shared.getOption()
    this.productList = []
    for(let ts in this.temp){
      console.log({name:ts, price:this.temp[ts].price, stock: this.temp[ts].stock})
      this.productList.push({name:ts, price:this.temp[ts].price, stock: this.temp[ts].stock})
    }
    // for(let i= 0; i< ; i++){
    //   this.productList.push(JSON.parse(localStorage.getItem(i.toString())))
    // }
  }



  ngOnInit(): void {
  }

}
