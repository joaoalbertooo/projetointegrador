import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-esqueceu',
  templateUrl: './esqueceu.page.html',
  styleUrls: ['./esqueceu.page.scss'],
})
export class EsqueceuPage {
  email: string = '';
  emailError: boolean = false;
  verificationCode: string = '';
  verificationCodeError: boolean = false;
  newPassword: string = '';
  confirmPassword: string = '';
  passwordError: boolean = false;
  isCodeSent: boolean = false;  // Controla a exibição dos campos adicionais

  constructor(private router: Router, private alertController: AlertController) {}

  // Envio do e-mail para recuperação de senha
  onSubmit() {
    // Verifica se o email é válido
    if (!this.isValidEmail(this.email)) {
      this.emailError = true;
      return;
    }
    this.emailError = false;

    // Chama o serviço de recuperação de senha.
    this.sendPasswordResetLink(this.email);

    // Exibe uma mensagem de confirmação
    this.showConfirmation();
  }

  // Validação simples de e-mail
  isValidEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  // Exibe um alerta confirmando o envio do e-mail
  async showConfirmation() {
    const alert = await this.alertController.create({
      header: 'E-mail enviado',
      message: 'Um link e código para redefinir sua senha foram enviados ao seu e-mail.',
      buttons: ['OK']
    });

    await alert.present();

    // Exibe os campos para código e nova senha após o envio do e-mail
    this.isCodeSent = true;
  }

  // Simula o envio do link e código de verificação
  sendPasswordResetLink(email: string) {
    console.log(`Link de recuperação e código enviado para: ${email}`);
  }

  // Função para redefinir a senha após a inserção do código de verificação e da nova senha
  onResetPassword() {
    // Valida se o código tem 6 dígitos
    if (this.verificationCode.length !== 6) {
      this.verificationCodeError = true;
      return;
    }
    this.verificationCodeError = false;

    // Valida se as senhas coincidem
    if (this.newPassword !== this.confirmPassword) {
      this.passwordError = true;
      return;
    }
    this.passwordError = false;

    // Lógica para redefinir a senha
    console.log(`Senha redefinida para o e-mail: ${this.email}`);

    // Mostra uma confirmação e redireciona para a página de login
    this.showResetConfirmation();
  }

  // Exibe a confirmação da redefinição de senha
  async showResetConfirmation() {
    const alert = await this.alertController.create({
      header: 'Senha redefinida',
      message: 'Sua senha foi redefinida com sucesso.',
      buttons: ['OK']
    });

    await alert.present();

    // Redireciona para a página de login
    await alert.onDidDismiss();
    this.router.navigate(['/login']);
  }
}

  

