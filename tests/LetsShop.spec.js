// Run command: npx playwright test --grep '@Login'
const {test,expect} = require('@playwright/test');
const {POManager}= require('../pageobjects/POManager.js');
//drive the data from json file to the test case
//json->string->js object
const dataset = JSON.parse(JSON.stringify(require('../testData/LetsShopTestData.json')));
//Parameterize the test case with multiple data sets
for(const data of dataset){
test(`@Login LetsShop test ${data.productName}`, async ({page}) =>
{
    const poManager= new POManager(page);
    
    const loginPage= poManager.getLoginPage();
    const homePage= poManager.getHomePage();
    const cartPage= poManager.getCartPage();
    const paymentPage= poManager.getPaymentPage();

    await loginPage.launch();
    await loginPage.ValidLogin(data.username, data.password);
    await homePage.getProductsName(data.productName);
    await cartPage.checkoutclick();
    await paymentPage.checkOut();
    //await page.pause();

})
}