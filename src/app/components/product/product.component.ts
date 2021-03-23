import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {HttpClient} from '@angular/common/http';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[]=[];
  dataLoaded=false;
  filterText="";

  constructor(private productService:ProductService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private cartService:CartService ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      if (params["categoryId"]){
        this.getProductByCategory(params["categoryId"])
      }
      else
      {

        this.getProducts();
      }
    })
    
  }

  getProducts(){
    this.productService.getProducts().subscribe((response)=>{
      this.products=response.data
      this.dataLoaded=true;
    });
  }
  getProductByCategory(categoryId:number){
    this.productService.getProductsByCategory(categoryId).subscribe((response)=>
    {
      this.products=response.data;
      this.dataLoaded=true;
    });
  }

  addToCart(product:Product){
      this.cartService.addToCart(product);
      this.toastrService.success("Sepete eklendi",product.productName);
  }


}
