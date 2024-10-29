import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  usuario: string = '';
  senha: string = '';

  constructor(private navCtrl: NavController) {}

  login(event: Event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    if (this.usuario === 'usuario' && this.senha === 'senha') {
      // Redireciona para a página inicial após login bem-sucedido
      this.navCtrl.navigateForward('/home');
    } else {
      // Exibe um alerta de erro ou uma mensagem para o usuário
      alert('Usuário ou senha incorretos!');
    }
  }
}
