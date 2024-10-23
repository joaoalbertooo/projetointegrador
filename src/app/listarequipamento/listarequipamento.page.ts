import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-listarequipamento',
  templateUrl: './listarequipamento.page.html',
  styleUrls: ['./listarequipamento.page.scss'],
})
export class ListarequipamentoPage implements OnInit {

  constructor(
    public requisicao_service: RequisicaoService,
    public router: Router,
    private loadingCtrl: LoadingController
  ) { }

  public equipamento: Array<any> = [];

  editar(id: number) {
    this.router.navigateByUrl('/cadastro-equipamentos/' + id);
  }

  excluir(id: number) {
    this.requisicao_service.get({
      controller: 'equipamento-excluir',
      id: id
    }).subscribe(
      (_res: any) => {
        this.listar();
      }
    );
  }

  ngOnInit() {
    this.listar();
  }

  async listar() {
    const loading = await this.loadingCtrl.create({
      message: 'Carregando equipamentos, aguarde.'
    });
    loading.present();

    this.requisicao_service.get({
      controller: 'listarequipamento'
    }).subscribe(
      (_res: any) => {
        loading.dismiss();
        this.equipamento = _res; 
      },
      (_error:any) =>{        
        console.log(_error);
        loading.dismiss();
      }
    );
  }

  go(rota: string) {
    window.location.href = rota;
  }
}
