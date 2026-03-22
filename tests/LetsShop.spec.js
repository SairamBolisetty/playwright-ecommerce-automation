const {test,expect} = require('@playwright/test');
const {POManager}= require('../pageobjects/POManager.js');



test(`@Login LetsShop test`, async ({page}) =>
{
    const poManager= new POManager(page);
    const username= 'sairam75@gmail.com';
    const password= 'Sairam@123';
    const loginPage= poManager.getLoginPage();
    const homePage= poManager.getHomePage();
    const cartPage= poManager.getCartPage();
    const paymentPage= poManager.getPaymentPage();

    await loginPage.launch();
    await loginPage.ValidLogin(username,password);
    await homePage.getProductsName();
    await cartPage.checkoutclick();
    await paymentPage.checkOut();
    //await page.pause();

})