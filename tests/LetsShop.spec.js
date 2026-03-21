const {test,expect} = require('@playwright/test');
const {LoginPage}= require('../pageobjects/LoginPage');
const {HomePage}= require('../pageobjects/HomePage');
const {CartPage}=require('../pageobjects/CartPage');
const {PaymentPage}= require('../pageobjects/PaymentPage');

test(`@Login LetsShop test`, async ({page}) =>
{
    const loginPage= new LoginPage(page);
    const homePage= new HomePage(page);
    const cartPage= new CartPage(page);
    const paymentPage= new PaymentPage(page);
    const username= 'sairam75@gmail.com';
    const password= 'Sairam@123';
    await loginPage.launch();
    await loginPage.ValidLogin(username,password);
    await homePage.getProductsName();
    await cartPage.checkoutclick();
    await paymentPage.checkOut();
    await page.pause();

})