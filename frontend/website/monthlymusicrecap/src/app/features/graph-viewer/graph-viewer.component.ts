import { Component, Input, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([LineChart, GridComponent, CanvasRenderer]);

@Component({
  selector: 'app-graph-viewer',
  imports: [NgxEchartsDirective],
  templateUrl: './graph-viewer.component.html',
  styleUrl: './graph-viewer.component.scss',
  providers: [
      provideEchartsCore({ echarts }),
  ]
})
export class GraphViewerComponent implements OnInit {

    @Input() chart: any;
    chartOption: EChartsOption = {};
    isBrowser: boolean;

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        this.isBrowser = isPlatformBrowser(this.platformId);
    }

    ngOnInit() {
        if (!this.isBrowser) {
            return;
        }

        // Example line chart configuration
        this.chartOption = {
            title: {
                text: 'Monthly Music Stats'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['Songs Played']
            },
            xAxis: {
                type: 'category',
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                name: 'Songs Played',
                type: 'line',
                data: [120, 132, 101, 134, 90, 230],
                smooth: true
            }]
        };

        if (this.chart) {
            this.chartOption = this.chart;
        }


    }
}