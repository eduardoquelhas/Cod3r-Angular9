import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-produt-crud',
  templateUrl: './produt-crud.component.html',
  styleUrls: ['./produt-crud.component.css']
})
export class ProdutCrudComponent implements OnInit {

  constructor( private _router: Router,
               private _headerService: HeaderService ) {
    _headerService.headerData = {
      title: 'Cadasro de Produtos',
      icon: 'storefront',
      routeUrl: 'produtos'
    }
   }

  ngOnInit(): void {
  }
  
  navigateToProductCreate() {
    this._router.navigate(['/products/create']);
  }
}
