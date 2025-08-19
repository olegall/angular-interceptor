import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})

export class AppComponent {
  constructor(http: HttpClient) {
    http.get("https://google.com").subscribe(() => { }, () => { });
  }

  title = 'interceptor';
}
