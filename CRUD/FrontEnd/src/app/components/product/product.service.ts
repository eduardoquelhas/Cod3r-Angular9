import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { IProduct } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:3001/products';

  constructor( private _snackBar: MatSnackBar,
               private _http: HttpClient ) { }

  showOnConsole(msg: string):void {
    console.log(msg);    
  }

  showMessage(msg: string, isError: boolean = false): void {
    this._snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",      
      panelClass: isError ? ['msg-error'] : ['msg-success']      
    });
  }
  
  createProduct(_IProduct: IProduct): Observable<IProduct> {
     return this._http.post<IProduct>(this.baseUrl, _IProduct)
  }
}
