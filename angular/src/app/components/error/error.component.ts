import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  path!: string;
  constructor(private router: Router, private titleService: TitleService) {}
  ngOnInit(): void {
    this.titleService.setTitle('404');
    this.path = location.pathname;
    if (this.path.length > 5) {
      this.path = this.path.slice(0, 6).concat('...');
    }
  }

  redirectHome() {
    this.router.navigate(['/']);
  }
}
