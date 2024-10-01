import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-exemplo',
  templateUrl: './perfil-exemplo.page.html',
  styleUrls: ['./perfil-exemplo.page.scss'],
})
export class PerfilExemploPage implements OnInit {
  nome: string = '';
  email: string = '';
  telefone: string = '';
  cpf: string = '';
  senha: string = '';

  constructor() { }

  ngOnInit() {
    // Inicializar com valores fictícios ou pegar os dados do serviço backend
    this.nome = '';
    this.email = '';
    this.telefone = '';
    this.cpf = '';
    this.senha = ''; // Senha deve ser tratada com segurança
  }

  editarPerfil() {
    // Lógica para habilitar a edição (pode ser alternar um modo de edição)
    console.log('Editar perfil ativado');
  }

  salvarPerfil() {
    if (this.nome && this.email && this.telefone && this.cpf && this.senha) {
      console.log('Perfil salvo com sucesso');
      console.log(`Nome: ${this.nome}, Email: ${this.email}, Telefone: ${this.telefone}, CPF: ${this.cpf}`);
      // Aqui você pode chamar um serviço para enviar os dados ao backend
    } else {
      console.log('Por favor, preencha todos os campos.');
    }
  }

  logout() {
    // Lógica de logout (pode ser redirecionamento ou limpar o token de autenticação)
    console.log('Usuário deslogado');
  }
}
