import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  path!: string;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.path = location.pathname;
    if (this.path.length > 5) {
      this.path = this.path.slice(0, 6).concat('...');
    }
  }

  redirectHome() {
    this.router.navigate(['/']);
  }
}
