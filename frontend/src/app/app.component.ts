import { Component } from '@angular/core';
import { LoadingComponent } from './components/partials/loading/loading.component'; 
import { HeaderComponent } from './components/partials/header/header.component';
import { RouterOutlet } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LoadingComponent,
    HeaderComponent,
    RouterOutlet,
    ToastrModule,  // <-- ici forRoot() pour fournir la config ToastConfig
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
}
