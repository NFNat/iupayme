import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables)

@Component({
  selector: 'app-comparative',
  templateUrl: './comparative.component.html',
  styleUrls: ['./comparative.component.scss']
})
export class ComparativeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.renderChart();
  }

  renderChart(){

    const ctx = document.getElementById('myChart');

    new Chart("linechart", {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Income',
          data: [21, 9, 20, 5, 2, 19, 7],
          borderWidth: 1,
          backgroundColor: "blue",
          borderColor: "blue",
          pointRadius: 0,
          tension: 0.5,
        },
        {
          label: 'Withdeawls',
           data: [11, 23, 11, 7, 11, 7, 13],
           borderWidth: 1,
           backgroundColor: "yellowgreen",
           borderColor: "yellowgreen",
            pointRadius: 0,
           tension: 0.5,
         }]
      },

      options: {
        scales: {
          y: {
            max:40,
            border:{
              display: false
            },
            beginAtZero: true,
            grid: {
              display: false,
            },
            ticks: {
              display: false
          }
          },
          x: {
            border:{
              display: false
            },
            beginAtZero: true,
            grid: {
              display: false,
            }
          },
        },
        plugins:{
          legend:{
            display: false
          }
        }
      }
    });
  }
}
