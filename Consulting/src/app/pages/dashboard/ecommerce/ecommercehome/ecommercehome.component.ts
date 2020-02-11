import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-ecommercehome',
  templateUrl: './ecommercehome.component.html',
  styleUrls: ['./ecommercehome.component.scss']
})
export class EcommercehomeComponent implements OnInit {

  refreshIcon = 'assets/pages/dashboard/refresh_icon.svg'
  hideIcon = 'assets/pages/dashboard/hide_icon.svg'

  isHidden = false
  refreshed = false

  groups = [{
    type: 'Customers',
    value: '38,454',
    percent: "3.27",
    period: 'month'
  },
  {
    type: 'Orders',
    value: '4,820',
    percent: "-0.27",
    period: 'month'
  },
  {
    type: 'Revenue',
    value: '$7,829',
    percent: "-4.15",
    period: 'month'
  },
  {
    type: 'Growth',
    value: '+25,74%',
    percent: "4.56",
    period: 'month'
  }]


  barChartOptions: ChartOptions = {
    responsive: true,
    spanGaps: true,
    scales: {
      xAxes: [{
        offset: true,
        gridLines: {
          color: '#fff',

        }
      }], yAxes: [{
        offset: true,
        gridLines: {
          offsetGridLines: false
        }
      }]
    },
    plugins: {

      datalabels: {
        anchor: 'end',
        align: 'end',
        padding: {
          top: -10,
          bottom: 0,
          right: 0,
          left: 0
        }
      },
    }
  };
  barChartLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', "Sep", "Oct", "Nov", "Dec"];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [pluginDataLabels];

  barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40, 56, 64, 61, 48, 71], label: 'Projections', backgroundColor: '#727DF5', hoverBackgroundColor: '#A4ACF7' },
    { data: [28, 48, 40, 19, 86, 27, 43, 28, 37, 45, 59, 65], label: 'Actuals', backgroundColor: '#CCC', hoverBackgroundColor: '#DDD  ' }
  ];

  // events
  chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


  randomize(): void {

    const data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ]

    const data2 = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ]
    this.barChartData[0].data = data;
    this.barChartData[1].data = data2;
  }

  animateRefresh() {
    this.refreshed = !this.refreshed

    const icon = document.getElementById('refresh')

    icon.style.transform = 'rotate(720deg)'
    icon.style.transition = 'ease-out 1s'
    setTimeout(() => {
      icon.style.transform = 'rotate(0deg)'
      icon.style.transition = 'none'
    }, 1000)

    this.randomize()

  }

  animateHide() {

    this.isHidden = !this.isHidden

    const main = document.getElementById('mainid')
    const icon = document.getElementById('hide')

    if (this.isHidden) {
      icon.style.transform = 'rotate(180deg)'
      icon.style.transition = 'ease 0.6s'
      main.style.position = 'absolute'
      main.style.transform = 'translateY(-2000px)'
      main.style.transition = 'ease 1s'
      setTimeout(() => {
        main.style.display = 'none'
      }, 1000)
    }
    else {
      icon.style.transform = 'rotate(0deg)'
      icon.style.transition = 'ease 0.6s'
      main.style.display = 'flex'
      setTimeout(() => {
        main.style.transform = 'translateY(0px)'
        main.style.transition = 'ease .5s'

      }, 100)

    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
