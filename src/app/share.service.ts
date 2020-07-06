import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  private data = {};  
  
  setOption(option, value) {    
    console.log(this.data) 
    console.log(option, value) 
     this.data[option] = value;  
   }  
   
   getOption() {  
     return this.data;  
   }  
  constructor() { }
}
