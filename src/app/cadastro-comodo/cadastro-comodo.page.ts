import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-comodo',
  templateUrl: './cadastro-comodo.page.html',
  styleUrls: ['./cadastro-comodo.page.scss'],
})
export class CadastroComodoPage implements OnInit {
  public id: number = 0;
  public nome: string = ''; // Nome da variável
  public mensagemErro: string = '';

  constructor(
    public rs: RequisicaoService,
    private activated_router: ActivatedRoute,
    private router: Router
  ) {
    this.activated_router.params.subscribe((params: any) => {
      if (params.id !== 0 && params.id != null) {
        this.rs
          .get({
            controller: 'comodo',
            id: params.id,
          })
          .subscribe((_dados: any) => {
            this.id = _dados.id;
            this.nome = _dados.nome;
          });
      }
    });
  }

  ngOnInit() {}

  salvar() {
    // Validações
    if (!this.nome) {
      this.mensagemErro = 'Por favor, preencha o campo nome.';
      return;
    }

    this.mensagemErro = '';

    const fd = new FormData();
    fd.append('controller', 'comodo');
    fd.append('op', 'salvar');
    fd.append('id', String(this.id));
    fd.append('nome', this.nome);

    this.rs.post(fd).subscribe(() => {
      location.href = '/listarcomodo';
    });
  }
   go(rota:string){
    window.location.href = rota;
  }
}
