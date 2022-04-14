import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { catchError, EMPTY, map, Observable } from 'rxjs';
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

  showMessage(msg: string, isError: boolean =false  ): void {
    this._snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",      
      panelClass:isError? ['msg-error'] : ['msg-sucess']
    });
  }
  
  createProduct(_IProduct: IProduct): Observable<IProduct> {
     return this._http.post<IProduct>(this.baseUrl, _IProduct).pipe(
       map((obj) => obj),
       catchError((e) => this.errorHandler(e))
     );
  }



  readProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
      );
  }
  
  readByIdProduct(id: any): Observable<IProduct> {
    const url = `${this.baseUrl}/${id}`;
    return this._http.get<IProduct>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
      );
  }

 
  deleteByIdProduct(id: number): Observable<IProduct> {
    const url = `${this.baseUrl}/${id}`;    
    return this._http.delete<IProduct>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
      );
  }

  updateProduct(_product: IProduct): Observable<IProduct> {
    const url = `${this.baseUrl}/${_product.id}`;
    return this._http.put<IProduct>(url, _product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
      );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }




}
