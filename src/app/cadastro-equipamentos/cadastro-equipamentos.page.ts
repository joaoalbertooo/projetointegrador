import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';

@Component({
  selector: 'app-cadastro-equipamentos',
  templateUrl: './cadastro-equipamentos.page.html',
  styleUrls: ['./cadastro-equipamentos.page.scss'],
})
export class CadastroEquipamentosPage implements OnInit {
  public nome:string = '';

  equipamento: any = {
    nome: '',
    tipo: '',
    potencia: null,
    tempoUsoDiario: null,
    eficiencia: '',
    dataAquisicao: new Date().toISOString(),
    observacoes: ''
  };

  constructor(
    public rs:RequisicaoService
  ) { }

  ngOnInit() {
  }

  cadastrarEquipamento() {
    console.log('Equipamento cadastrado:', this.equipamento);
    // Aqui você implementaria a lógica para salvar o equipamento
    // Por exemplo, enviando para um serviço ou API
    this.limparFormulario();
  }

  limparFormulario() {
    this.equipamento = {
      nome: '',
      tipo: '',
      potencia: null,
      tempoUsoDiario: null,
      eficiencia: '',
      dataAquisicao: new Date().toISOString(),
      observacoes: ''
    };
  }

  salvar(){
    const fd = new FormData();
    fd.append('controller','equipamento');
    fd.append('op','salvar');
    fd.append('nome',this.nome);
    
    this.rs.post(fd)  
    .subscribe();

  }
}