import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-comodo',
  templateUrl: './cadastro-comodo.page.html',
  styleUrls: ['./cadastro-comodo.page.scss'],
})
export class CadastroComodoPage {
  comodo = {
    nome: '',
    equipamentos: [{ nome: '' }]
  };

  adicionarEquipamento() {
    this.comodo.equipamentos.push({ nome: '' });
  }

  removerEquipamento(index: number) {
    this.comodo.equipamentos.splice(index, 1);
  }

  onSubmit() {
    console.log('Cômodo cadastrado:', this.comodo);
    // Aqui você pode implementar a lógica para salvar o cômodo em um banco de dados ou serviço
    this.resetForm();
  }

  resetForm() {
    this.comodo = {
      nome: '',
      equipamentos: [{ nome: '' }]
    };
  }
}
