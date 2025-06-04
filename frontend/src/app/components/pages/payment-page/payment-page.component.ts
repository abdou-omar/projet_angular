import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/models/Order';
import { TitleComponent } from '../../partials/title/title.component';
import { OrderItemsListComponent } from '../../partials/order-items-list/order-items-list.component';
import { PaypalButtonComponent } from '../../partials/paypal-button/paypal-button.component';
import { MapComponent } from '../../partials/map/map.component';


@Component({
  selector: 'app-payment-page',
  standalone: true,
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css'], 
  imports:[
    TitleComponent,
    OrderItemsListComponent,
    PaypalButtonComponent,
    MapComponent
  ],
})
export class PaymentPageComponent implements OnInit {

  order:Order = new Order();
  constructor(orderService: OrderService, router: Router) {
      orderService.getNewOrderForCurrentUser().subscribe({
        next: (order) => {
          this.order = order;
        },
        error:() => {
          router.navigateByUrl('/chekcout');
        }
      })

   }

  ngOnInit(): void {
  }

}
