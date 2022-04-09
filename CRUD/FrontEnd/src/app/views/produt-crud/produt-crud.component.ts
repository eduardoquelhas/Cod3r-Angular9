import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produt-crud',
  templateUrl: './produt-crud.component.html',
  styleUrls: ['./produt-crud.component.css']
})
export class ProdutCrudComponent implements OnInit {

  constructor( private _router: Router ) { }

  ngOnInit(): void {
  }
  
  navigateToProductCreate() {
    this._router.navigate(['/products/create']);
  }
}
