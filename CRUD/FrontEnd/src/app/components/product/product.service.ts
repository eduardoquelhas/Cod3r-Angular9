import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private _snackBar: MatSnackBar ) { }

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

}
