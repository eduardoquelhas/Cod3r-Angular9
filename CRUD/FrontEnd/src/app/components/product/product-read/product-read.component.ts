import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  _products: IProduct[] = [];
  displayedColumns: string[] = ['id', 'name', 'price', 'action'];

  constructor( private _produtcService: ProductService ) { }

  ngOnInit(): void {
    this._produtcService.readProducts().subscribe(products => {
      this._products = products;
      
      // console.log(products);
    })
  }

  getFormattedPrice(_price: number) {
    console.log('Price = '+ _price);
    return _price

    // return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
}
}
