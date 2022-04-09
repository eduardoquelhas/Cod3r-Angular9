import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { IProduct } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  _product: IProduct = {
    name: '',
    price: 0
  }
  constructor( private _productService: ProductService,
               private _router: Router ) { }

  ngOnInit(): void {
    // this.productService.showOnConsole(☺'Testando componente de criação de produtos.');
      }

  createProduct(): void {
    // this._productService.showOnConsole('Testando componente de criação de produtos.');
    this._productService.createProduct(this._product).subscribe(() => {
    this._productService.showMessage('Produto criado com sucesso!')
    this._router.navigate(['produtos'])
    })
  }

  cancel(): void {
    this._router.navigate(['produtos']);
  }
}
