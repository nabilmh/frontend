import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../product.model';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  products: Product[] | undefined;
  isAuthenticated : boolean = false

  constructor(private productService: ProductService, private router: Router) {

  }

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts() {
    this.productService.getProductList().subscribe(data => {
      this.products = data;
    });
  }

}
