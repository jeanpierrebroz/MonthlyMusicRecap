import { Component } from '@angular/core';
import { GraphViewerComponent } from '../graph-viewer/graph-viewer.component';
import { SubscriptionOptionsComponent } from "../account-settings/subscription-options/subscription-options.component";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home-page',
  imports: [GraphViewerComponent, SubscriptionOptionsComponent, MatButtonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
