import { Component, Input } from '@angular/core';
import { ApexCharts } from 'apexcharts'

@Component({
  selector: 'app-graph-viewer',
  imports: [],
  templateUrl: './graph-viewer.component.html',
  styleUrl: './graph-viewer.component.scss'
})
export class GraphViewerComponent {

    @Input() graphData: any;

    ngAfterViewInit() {
        var chart = new ApexCharts()
    }
}
