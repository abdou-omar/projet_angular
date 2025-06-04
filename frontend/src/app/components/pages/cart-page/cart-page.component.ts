import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CommonModule } from '@angular/common';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { NotFoundComponent } from '../../partials/not-found/not-found.component'; 
import { TitleComponent } from '../../partials/title/title.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-cart-page',
  standalone:true,
  templateUrl: './cart-page.component.html',
  imports: [
    NotFoundComponent,
    TitleComponent,
    RouterModule,
    CommonModule
    // autres composants que tu utilises dans le template
  ],

  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    })
   }

  ngOnInit(): void {
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
  }

  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
  }

}
