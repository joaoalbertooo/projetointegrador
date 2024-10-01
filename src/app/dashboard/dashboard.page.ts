import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  public data: any;
  public options: any;  // Declare a variável options

  constructor() { }

  ngOnInit() {
    this.data = {
      labels: ['Ativa', 'Finalizada', 'Previstas'],
      datasets: [
        {
          data: [80, 59, 50],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Cores do gráfico
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }
      ]
    };

    this.options = {
      plugins: {
        legend: {
          labels: {
            color: 'white', // Cor do texto da legenda
          },
        },
        tooltip: {
          callbacks: {
            labelTextColor: function() {
              return 'white';  // Cor do texto do tooltip
            }
          }
        }
      }
    };
  }
}
