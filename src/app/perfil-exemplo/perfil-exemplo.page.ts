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
  showPassword: boolean = false;  // Controla a visibilidade da senha

  constructor() { }

  ngOnInit() {
    // Inicializar com valores fictícios ou pegar os dados do serviço backend
    this.nome = 'Exemplo Nome';  // Apenas exemplo, pode ser preenchido dinamicamente
    this.email = 'email@exemplo.com';
    this.telefone = '(99) 99999-9999';
    this.cpf = '000.000.000-00';
    this.senha = 'senhaSegura'; // A senha deve ser tratada com segurança
  }

  // Alterna a visibilidade da senha
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  editarPerfil() {
    // Lógica para habilitar a edição (pode ser alternar um modo de edição)
    console.log('Editar perfil ativado');
  }

  salvarPerfil() {
    // Verifica se todos os campos estão preenchidos
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
    // Exemplo de redirecionamento
    // this.router.navigate(['/login']);
  }
}

