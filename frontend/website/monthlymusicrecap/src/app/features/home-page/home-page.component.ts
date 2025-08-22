import { Component } from '@angular/core';
import { GraphViewerComponent } from '../graph-viewer/graph-viewer.component';
import {MatListModule} from '@angular/material/list';


@Component({
  selector: 'app-home-page',
  imports: [GraphViewerComponent, MatListModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
