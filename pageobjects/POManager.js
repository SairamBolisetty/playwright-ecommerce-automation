const {LoginPage} = require('./LoginPage');
const {HomePage} = require('./HomePage');
const {CartPage} = require('./CartPage');
const {PaymentPage} = require('./PaymentPage');
class POManager{
    constructor(page){
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.homePage = new HomePage(this.page);
        this.cartPage = new CartPage(this.page);
        this.paymentPage= new PaymentPage(this.page);

    }
    getLoginPage(){
        return this.loginPage;
    }
    getHomePage(){
        return this.homePage;
    }
    getCartPage(){
        return this.cartPage;
    }
    getPaymentPage(){
        return this.paymentPage;
    }
}
module.exports= {POManager};