import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
  imports:[
    CommonModule,
    RouterLink,
  ],
})
export class NotFoundComponent implements OnInit {
  @Input()
  visible = false;
  @Input()
  notFoundMessage = "Nothing Found!";
  @Input()
  resetLinkText = "Reset";
  @Input()
  resetLinkRoute = "/";
  constructor() { }

  ngOnInit(): void {
  }

}
