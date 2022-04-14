import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
_product: IProduct = {
  id: 0,
  name: '',
  price: 0
};

  constructor(private _productservice: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }


  ngOnInit(): void {

    const id =  this.route.snapshot.paramMap.get('id');
    this._productservice.readByIdProduct(id).subscribe(product => {
    this._product = product});
  }
 
  deleteProductID(): void {
    // const id =  this.route.snapshot.paramMap.get('id');

    this._productservice.deleteByIdProduct(Number(this._product.id)).subscribe(() => {
    this._productservice.showMessage('Produto deletado com sucesso!');
    this.router.navigate(['/produtos']);
    });
  }

    cancel(): void {
      this.router.navigate(['/produtos']);
    }
}