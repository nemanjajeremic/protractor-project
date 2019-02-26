let shopPage = function () {
    this.addPhone = function (phoneName) {
        element.all(by.css('[class="col-lg-3 col-md-6 mb-3"]')).each(async function (card) {
            let phoneTitle = await card.element(by.css('h4[class="card-title"]')).getText();
            let addbutton = card.element(by.css('button[class="btn btn-info"]'));
            if (phoneTitle === phoneName) {
                addbutton.click();
            }
        })
       
    }

    this.checkoutButton = element(by.css('a[class="nav-link btn btn-primary"]'));

}

module.exports = shopPage;