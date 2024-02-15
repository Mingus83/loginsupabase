/* /src/app/app.component.ts */
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  constructor ( private router: Router ){}

  ngOnInit(): void {
    this.router.navigate(['/login']);
  }
}
