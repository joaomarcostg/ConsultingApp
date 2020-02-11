import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-projectionschart',
  templateUrl: './projectionschart.component.html',
  styleUrls: ['./projectionschart.component.scss']
})
export class ProjectionschartComponent implements OnInit {

  @Input() barChartData
  @Input() barChartLabels
  @Input() barChartOptions
  @Input() barChartPlugins
  @Input() barChartLegend
  @Input() barChartType

  constructor() { }

  ngOnInit(): void {
  }

}
