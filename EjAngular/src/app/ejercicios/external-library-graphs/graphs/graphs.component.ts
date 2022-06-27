import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { GraphsService } from '../services/graphs.service';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styles: [
  ]
})
export class GraphsComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  // Pie
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [ ],
    datasets: [ {
      data: []
    } ]
  };
  public pieChartType: ChartType = 'pie';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }




  constructor(private graphService: GraphsService) { }

  ngOnInit(): void {
    this.graphService.getGenresGamesPieGraph().subscribe( data => {
      data.forEach( (ele: any) => {
        this.pieChartData.labels?.push(ele.name);
        this.pieChartData.datasets[0].data.push(ele.games_count);


      });


    })
  }

}
