import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/modules/dashboard.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent implements OnInit {
  sideBarOpen = false;

  constructor() {}

  ngOnInit(): void {}

  sideBarToggler(event) {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
