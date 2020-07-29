// Imports:
import { Component } from '@angular/core';

@Component({
// This is the unique name that you reference other places in the app:
  selector: 'app-root',
// This is pointing towards your html file :
  templateUrl: './app.component.html',
// This is poitning to your css:
  styleUrls: ['./app.component.css']
})

// This is where you provide the logic for your application:

export class AppComponent {
  title = 'test-angular-app';
}
