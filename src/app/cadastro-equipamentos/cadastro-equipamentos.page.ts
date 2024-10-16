import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-equipamentos',
  templateUrl: './cadastro-equipamentos.page.html',
  styleUrls: ['./cadastro-equipamentos.page.scss'],
})
export class CadastroEquipamentosPage implements OnInit {
  public id: number = 0;
public nome: string = ''; // Nome da variável
public tipo: string = ''; // Tipo da variável
public potencia: string = ''; // Potência da variável
public eficiencia: string = ''; // Eficiência da variável
public obs: string = ''; // Observação da variável
public mensagemErro: string = '';
public tempouso: string = '';


constructor(
  public rs: RequisicaoService,
  private activated_router: ActivatedRoute,
  private router: Router
) {
  this.activated_router.params.subscribe((params: any) => {
    if (params.id !== 0 && params.id != null) {
      this.rs
        .get({
          controller: 'equipamento',
          id: params.id,
        })
        .subscribe((_dados: any) => {
          this.id = _dados.id;
          this.nome = _dados.nome;
          this.tipo = _dados.tipo;
          this.potencia = _dados.potencia;
          this.eficiencia = _dados.eficiencia;
          this.obs = _dados.obs;
          this.tempouso = _dados.tempouso;

        });
    }
  });
}

ngOnInit() {}

salvar() {
  // Validações
  if (
    !this.nome ||
    !this.tipo ||
    !this.potencia ||
    !this.eficiencia||
    !this.tempouso 

  ) {
    this.mensagemErro = 'Por favor, preencha todos os campos obrigatórios.';
    return;
  }

  this.mensagemErro = '';

  const fd = new FormData();
  fd.append('controller', 'equipamento');
  fd.append('op', 'salvar');
  fd.append('id', String(this.id));
  fd.append('nome', this.nome);
  fd.append('tipo', this.tipo);
  fd.append('potencia', this.potencia);
  fd.append('eficiencia', this.eficiencia);
  fd.append('obs', this.obs);
  fd.append('tempouso', this.tempouso);

  this.rs.post(fd).subscribe(() => {
    location.href = '/cadastro-equipamentos';
  });
}
}
