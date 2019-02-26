let basePage = function () {

    this.nameInput = element(by.name('name'));
    this.bDay = element(by.name('bday'));
    this.emailInput = element(by.css('input[name="email"]'));
    this.passwordInput = element(by.id('exampleInputPassword1'));
    this.checkboxInput = element(by.id('exampleCheck1'));
    this.radioButtonInput = element(by.id('inlineRadio2'));
    this.genderOptions = element.all(by.tagName('option'));
    this.submitButton = element(by.buttonText('Submit'));
    this.successMessage = element(by.css('div[class="alert alert-success alert-dismissible"]'));
    this.alertMessage = element(by.css('div[class="alert alert-danger"]'));
    this.shopButton = element(by.css('a[href="/protocommerce/shop"]'))
    this.shopTitle = element(by.css('h1[class="my-4"]'))

    this.selectGender = function (selectedGender) {
        this.genderOptions.each(async function (genderOption) {
            if (selectedGender === await genderOption.getText()) {
                genderOption.click();
            }
        });
    }
}

module.exports = basePage;