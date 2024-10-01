import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.page.html',
  styleUrls: ['./cadastro-usuario.page.scss'],
})
export class CadastroUsuarioPage implements OnInit {
  public senha:string = '';
  public tipopessoa: string = "";
  public cidade: string = "";
  public estado: string = "";
  public CEP: string = "";
  public telefone: string = "";
  public cpf: string = "";
  public nome: string = "";

  constructor() { }

  ngOnInit() {
  }

  salvar(){}

}