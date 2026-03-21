
class CartPage{
    constructor(page){
        this.checkoutBtn= page.locator("//button[text()='Checkout']");

    }

    async checkoutclick(){
        await this.checkoutBtn.click();
    
    }

}
module.exports={CartPage};
