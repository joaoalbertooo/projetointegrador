import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-periodicidade',
  templateUrl: './periodicidade.page.html',
  styleUrls: ['./periodicidade.page.scss'],
})
export class PeriodicidadePage implements OnInit {
  consumo: number | null = null; // Consumo de energia em kWh
  dias: number | null = null;    // Número de dias para o cálculo
  resultado: number | null = null; // Resultado da emissão de carbono (kg CO2)

  constructor() { }

  ngOnInit() {}

  // Método para calcular a emissão de carbono
  calcularCarbono() {
    // Constante que representa o CO2 emitido por kWh em kg
    const CO2_PER_KWH = 0.233; // Essa taxa pode variar dependendo da região

    // Verifica se ambos os campos de consumo e dias foram preenchidos com valores válidos
    if (this.consumo !== null && this.dias !== null && this.consumo > 0 && this.dias > 0) {
      // Calcula o consumo total ao multiplicar o consumo por dia pelo número de dias
      const totalConsumo = this.consumo * this.dias;

      // Calcula a emissão total de CO2
      this.resultado = totalConsumo * CO2_PER_KWH;
      console.log(`Resultado calculado: ${this.resultado.toFixed(2)} kg de CO2.`);
    } else {
      // Se os campos não forem preenchidos corretamente, exibe uma mensagem de erro
      this.resultado = null;
      console.log('Por favor, insira valores válidos para o consumo e o número de dias.');
    }
  }

  // Método para salvar as informações (se precisar futuramente)
  salvar() {
    if (this.consumo !== null && this.dias !== null && this.consumo > 0 && this.dias > 0 && this.resultado !== null) {
      console.log(`Consumo: ${this.consumo} kWh, Dias: ${this.dias}`);
      console.log(`Resultado: ${this.resultado.toFixed(2)} kg de CO2`);
      // Aqui você pode salvar os dados em um backend ou local storage
    } else {
      console.log('Erro ao salvar: os valores de consumo ou dias estão inválidos ou o cálculo não foi realizado.');
    }
  }
}