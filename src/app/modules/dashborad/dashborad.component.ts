import { Component, OnInit } from '@angular/core';
import * as Apexcharts from 'apexcharts';
@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.css']
})
export class DashboradComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var options = {
      chart: {
        type: "area",
        height: 450,
        foreColor: "#199",
        stacked: true,
        dropShadow: {
          enabled: true,
          enabledSeries: [0],
          top: -2,
          left: 2,
          blur: 5,
          opacity: 0.06
        }
      },
      colors: ['#FAEBD7', 'black','#db9833','#7e9a9a'],
      stroke: {
        curve: "smooth",
        width: 3
      },
      dataLabels: {
        enabled: false
      },
      series: [{
        name: 'Jumia',
        data: generateDayWiseTimeSeries(0, 18)
      }, {
        name: 'Amazon',
        data: generateDayWiseTimeSeries(1, 18)
      }, {
        name: 'honny',
        data: generateDayWiseTimeSeries(1, 18)
      }, {
        name: 'zcolis',
        data: generateDayWiseTimeSeries(1, 18)
      }
    ],
      markers: {
        size: 0,
        strokeColor: "#fff",
        strokeWidth: 3,
        strokeOpacity: 1,
        fillOpacity: 1,
        hover: {
          size: 6
        }
      },
      xaxis: {
        type: "datetime",
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        labels: {
          offsetX: 14,
          offsetY: -5
        },
        tooltip: {
          enabled: true
        }
      },
      grid: {
        padding: {
          left: -5,
          right: 5
        }
      },
      tooltip: {
        x: {
          format: "dd MMM yyyy"
        },
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left'
      },
      fill: {
        type: "solid",
        fillOpacity: 0.7
      }
    };

    var chart = new Apexcharts(document.querySelector("#timeline-chart"), options);

    chart.render();

    function generateDayWiseTimeSeries(s, count) {
      var values = [[
        1,3,10,9,20,19,21,9,12,1,19,5,16,9,17,2,7,5
      ], [
        2,3,8,7,2,16,12,7,11,5,12,9,10,4,15,2,6,2
      ], [
        2,3,8,9,8,26,12,7,11,5,15,5,10,4,15,2,6,12
      ]
    ];
      var i = 0;
      var series = [];
      var x = new Date("28 apr 2021").getTime();
      while (i < count) {
        series.push([x, values[s][i]]);
        x += 86400000;
        i++;
      }
      return series;
    }
  
  }

}
