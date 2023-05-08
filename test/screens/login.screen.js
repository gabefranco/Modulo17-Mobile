class LoginScreen {

  //tela 1
  get #enderecoLoja() { return $('id=com.woocommerce.android:id/input') } //ok class //http://lojaebac.ebaconline.art.br
  get #continue() { return $('id:bottom_button') } //ok continuar

  //tela 2
  //get #credentialgo() { return $('android=new UiSelector().text("Continue with store credentials")') }
  get #credentialGo() { return $('id:login_site_creds') }

  //tela 3
  get #emailLogin() { return $('android=new UiSelector().text("Username")') } //ok entrar com email
  get #password() { return $('android=new UiSelector().text("Password")') }

  //tela 4
  get #enterPass() { return $('id:login_enter_password') }

  //tela 5
  get #passwordP() { return $('android=new UiSelector().text("Password")') }
  get #continue1() { return $('id:bottom_button') } //ok continuar

  //tela 1 async
  async colocarEndLoja(urlLoja) {
    await this.#enderecoLoja.waitForExist({ timeout: 10000 })
    await this.#enderecoLoja.setValue(urlLoja)
  }

  async clickContinue() {
    await this.#continue.waitForExist({ timeout: 10000 })
    await this.#continue.click()
  }

  //tela2 async
  async continueCredential() {
    await this.#credentialGo.waitForDisplayed({ timeout: 10000 })
    await this.#credentialGo.click()
  }

  //tela3 async
  async emailLogin(email, password) {
    await this.#emailLogin.waitForExist({ timeout: 10000 })
    await this.#emailLogin.setValue(email)
    await this.#password.setValue(password)
    await this.#continue.click() //usado o mesmo continue padrão já existente acima
  }

  //tela 4 async
  async enterPass() {
    await this.#enterPass.click()
  }

  //tela 5 async
  async passwordAgain() {
    await this.#passwordP.waitForExist({ timeout: 10000 })
    await this.#passwordP.setValue(password)
    await this.#continue1.click()
  }

}

module.exports = new LoginScreen()