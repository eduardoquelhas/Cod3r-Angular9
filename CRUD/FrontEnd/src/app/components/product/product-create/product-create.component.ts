import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor( private _productService: ProductService,
               private _router: Router ) { }

  ngOnInit(): void {
    // this.productService.showOnConsole(☺'Testando componente de criação de produtos.');
      }

  createProduct(): void {
    // this._productService.showOnConsole('Testando componente de criação de produtos.');
    this._productService.showMessage('Produto criado com sucesso!', false);
  }

  cancel(): void {
    this._router.navigate(['produtos']);
  }
}
