import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class DashboardAdminComponent implements OnInit {
  isLoading = true;

  constructor() {}

  ngOnInit(): void {
    this.isLoading = false;
  }
}
