import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';

interface Comodo {
  id: number;
  nome: string;
}

interface Equipamento {
  id: number;
  nome: string;
  potencia: number;
  tempoUso: number;
}

interface EquipamentoSelecionado {
  equipamento_id: number;
  tempo_uso: number;
  potencia: number;
  nome?: string;
}

@Component({
  selector: 'app-cadastro-ambiente',
  templateUrl: './cadastro-ambiente.page.html',
  styleUrls: ['./cadastro-ambiente.page.scss'],
})
export class CadastroAmbientePage implements OnInit {
  public id: number = 0;
  public comodos: Comodo[] = [];
  public comodoSelecionado: number = 0;
  public equipamentos: Equipamento[] = [];
  public equipamentoSelecionado: number = 0;
  public tempoUso: number = 0;
  public mensagemErro: string = '';
  public equipamentosSelecionados: EquipamentoSelecionado[] = [];

  constructor(
    public rs: RequisicaoService,
    private activated_router: ActivatedRoute,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {
    // Carrega dados existentes se for edição
    this.activated_router.params.subscribe((params: any) => {
      if (params.id !== 0 && params.id != null) {
        this.rs
          .get({
            controller: 'ambiente',
            id: params.id,
          })
          .subscribe((_dados: any) => {
            this.id = _dados.id;
            this.comodoSelecionado = _dados.comodo_id;
            // Adaptar para carregar os equipamentos relacionados
            if (_dados.equipamentos) {
              this.equipamentosSelecionados = _dados.equipamentos;
            }
          });
      }
    });
  }

  ngOnInit() {
    this.carregarComodos();
    this.carregarEquipamentos();
  }

  async carregarComodos() {
    const loading = await this.loadingCtrl.create({
      message: 'Carregando cômodos, aguarde.'
    });
    loading.present();
    
    this.rs.get({
      controller: 'comodolistar'
    }).subscribe(
      (res: any) => {
        this.comodos = res;
        loading.dismiss();
      },
      (error: any) => {
        console.log(error);
        loading.dismiss();
      }
    );
  }

  async carregarEquipamentos() {
    const loading = await this.loadingCtrl.create({
      message: 'Carregando Equipamentos, aguarde.'
    });
    loading.present();
    
    this.rs.get({
      controller: 'listarequipamento'
    }).subscribe(
      (res: any) => {
        this.equipamentos = res;
        loading.dismiss();
      },
      (error: any) => {
        console.log(error);
        loading.dismiss();
      }
    );
  }

  adicionarEquipamento() {
    if (!this.equipamentoSelecionado) {
      this.mensagemErro = 'Por favor, selecione um equipamento.';
      return;
    }
    if (!this.tempoUso || this.tempoUso <= 0) {
      this.mensagemErro = 'Por favor, informe um tempo de uso válido.';
      return;
    }

    // Verifica se o equipamento já foi adicionado
    const equipamentoJaAdicionado = this.equipamentosSelecionados.find(
      e => e.equipamento_id === this.equipamentoSelecionado
    );

    if (equipamentoJaAdicionado) {
      this.mensagemErro = 'Este equipamento já foi adicionado.';
      return;
    }

    const equipamento = this.equipamentos.find(e => e.id === this.equipamentoSelecionado);
    
    if (equipamento) {
      this.equipamentosSelecionados.push({
        equipamento_id: this.equipamentoSelecionado,
        tempo_uso: this.tempoUso,
        potencia: equipamento.potencia,
        nome: equipamento.nome
      });

      // Limpa os campos após adicionar
      this.equipamentoSelecionado = 0;
      this.tempoUso = 0;
      this.mensagemErro = '';
    }
  }

  async removerEquipamento(index: number) {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar exclusão',
      message: 'Deseja remover este equipamento?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Remover',
          handler: () => {
            this.equipamentosSelecionados.splice(index, 1);
          }
        }
      ]
    });

    await alert.present();
  }

  async salvar() {
    // Validações
    if (!this.comodoSelecionado) {
      this.mensagemErro = 'Por favor, selecione um cômodo.';
      return;
    }
    if (this.equipamentosSelecionados.length === 0) {
      this.mensagemErro = 'Por favor, adicione pelo menos um equipamento.';
      return;
    }

    const loading = await this.loadingCtrl.create({
      message: 'Salvando ambiente...'
    });
    loading.present();

    // Contador para controlar as requisições completadas
    let requisicoesConcluidas = 0;

    // Para cada equipamento, cria um registro na tabela ambiente
    this.equipamentosSelecionados.forEach(equipamento => {
      const fd = new FormData();
      fd.append('controller', 'ambiente');
      fd.append('op', 'salvar');
      fd.append('comodo_id', String(this.comodoSelecionado));
      fd.append('equipamento_id', String(equipamento.equipamento_id));
      fd.append('tempo_uso', String(equipamento.tempo_uso));
      fd.append('potencia', String(equipamento.potencia));

      this.rs.post(fd).subscribe(() => {
        requisicoesConcluidas++;
        
        // Quando todas as requisições forem concluídas
        if (requisicoesConcluidas === this.equipamentosSelecionados.length) {
          loading.dismiss();
          this.go('/home');
        }
      }, error => {
        console.error('Erro ao salvar:', error);
        loading.dismiss();
        this.mensagemErro = 'Erro ao salvar o ambiente. Tente novamente.';
      });
    });
  }

  go(rota: string) {
    window.location.href = rota;
  }
}