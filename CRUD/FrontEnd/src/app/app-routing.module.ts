import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProdutCrudComponent } from './views/produt-crud/produt-crud.component';
import  {ProductCreateComponent } from './components/product/product-create/product-create.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produtos', component: ProdutCrudComponent },
  { path: 'products/create', component: ProductCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
