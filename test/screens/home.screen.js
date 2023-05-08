class HomeScreen {

  get enterStoreAdress() { return $('id:button_login_store') } //ok sauce

  async goToLogoin() {
    await this.enterStoreAdress.click()
  }

}
module.exports = new HomeScreen()