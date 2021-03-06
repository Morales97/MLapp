import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './_services';
import { PushNotificationsService} from 'ng-push';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'ML Coordinació';
  currentUser: any;
  isAdmin: any;

  constructor(
      private router: Router,
      private authService: AuthService,
      private _pushNotifications: PushNotificationsService
  ) {
      this._pushNotifications.requestPermission();
      // subscribe to currentUser to know if user is logged in/out
      this.authService.currentUser.subscribe(x => this.currentUser = x);
      this.authService.isAdmin.subscribe(x => this.isAdmin = x);
      console.log(this.isAdmin)

  }

  logout() {
      this.authService.logout();
      this.router.navigate(['/login']);
  }

  onNavigate(location: string){
    switch (location) {
      case "logout":
        this.logout();
        break;
      default:
        this.router.navigate([location]);
        console.log(location);
    }
  }
}
