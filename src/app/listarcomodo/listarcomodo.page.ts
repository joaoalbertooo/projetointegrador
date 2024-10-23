import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-listarcômodos',
  templateUrl: './listarcomodo.page.html',
  styleUrls: ['./listarcomodo.page.scss'],
})
export class ListarcomodoPage implements OnInit {

  constructor(
    public requisicao_service: RequisicaoService,
    public router: Router,
    private loadingCtrl: LoadingController
  ) { }

  public comodo: Array<any> = [];

  editar(id: number) {
    this.router.navigateByUrl('/cadastro-comodo/' + id);
  }

  excluir(id: number) {
    this.requisicao_service.get({
      controller: 'comodo-excluir',
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
      message: 'Carregando cômodos, aguarde.'
    });
    loading.present();

    this.requisicao_service.get({
      controller: 'comodolistar'
    }).subscribe(
      (_res: any) => {
        loading.dismiss();
        this.comodo = _res; 
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
