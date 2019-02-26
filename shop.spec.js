let shopPage = require('./shop.page.js');

describe('Shop Page test suite', function () {
    let shop = new shopPage();

    it('Check if there is added product in the cart', async function () {
        shop.addPhone('iphone X');
        let checkoutButtonText = await shop.checkoutButton.getText();
        expect(checkoutButtonText).toContain('1');
    });

    it('Go to checkout page', function () {
        shop.checkoutButton.click();
    });

});