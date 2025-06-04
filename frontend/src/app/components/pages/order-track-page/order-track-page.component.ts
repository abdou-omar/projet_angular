import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/models/Order';
import { OrderItemsListComponent } from '../../partials/order-items-list/order-items-list.component';
import { TitleComponent } from '../../partials/title/title.component';
import { CommonModule } from '@angular/common';
import { MapComponent } from '../../partials/map/map.component';

@Component({
  selector: 'app-order-track-page',
  standalone: true,
  templateUrl: './order-track-page.component.html',
  styleUrls: ['./order-track-page.component.css'],
  imports:[
    OrderItemsListComponent,
    TitleComponent,
    CommonModule,
    MapComponent
  ],
})
export class OrderTrackPageComponent implements OnInit {

  order!:Order;
  constructor(activatedRoute: ActivatedRoute,
              orderService:OrderService) {
     const params = activatedRoute.snapshot.params;
     if(!params.orderId) return;

     orderService.trackOrderById(params.orderId).subscribe(order => {
       this.order = order;
     })

  }

  ngOnInit(): void {
  }

}
