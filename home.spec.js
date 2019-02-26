let basePage = require('./home.page.js');

describe('Home test suite', function () {
    let base = new basePage();

    beforeAll(function () {
        browser.get(browser.baseUrl);
        base.nameInput.sendKeys('s');
        base.emailInput.sendKeys('n.jeremic@levi9.com');
        base.passwordInput.sendKeys('blabla');
        base.checkboxInput.click();
        base.selectGender('Female');
        base.radioButtonInput.click();
        base.bDay.sendKeys(07221991);
        base.submitButton.click();

    });

      it('Message is displayed if name is less than 2 characters', async function () {
          let enteredName = await base.nameInput.getAttribute('value');
          if (enteredName.length < 2) {
              expect(base.alertMessage.isDisplayed()).toBe(true);
          } else {
              expect(base.alertMessage.isDisplayed()).toBe(false);
          }
      });

    it('Success message is displayed', function () {
        expect(base.successMessage.isDisplayed()).toBe(true);
    });

    it('Success message contains the word "Success"', function () {
        expect(base.successMessage.getText()).toContain('Success');
    });

    it('Redirected to shop', async function () {
        base.shopButton.click();
        expect(await base.shopTitle.getText()).toEqual('Shop Name');
    });

});