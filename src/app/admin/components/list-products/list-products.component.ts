import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/admin/components/interface/Products';
import { ProductService } from 'src/app/admin/components/services/product.service';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  listProducts : Products[] = []
  loading: boolean = false;

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this.getListProducts()
  }
  getListProducts() {
    this.loading = true;
    this._productService.getListProducts().subscribe((data) => {
      console.log(data);
      this.listProducts = data;
      this.loading = false;
    })
  }
}
