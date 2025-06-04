import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/Order';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'order-items-list',
  standalone: true,
  templateUrl: './order-items-list.component.html',
  styleUrls: ['./order-items-list.component.css'],
  imports:[
    RouterLink,
    CommonModule,
  ],
})
export class OrderItemsListComponent implements OnInit {

  @Input()
  order!:Order;
  constructor() { }

  ngOnInit(): void {
  }

}
