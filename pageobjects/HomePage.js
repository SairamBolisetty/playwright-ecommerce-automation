const {test,expect} = require('@playwright/test');
//const dataset = JSON.parse(JSON.stringify(require('../testData/LetsShopTestData.json')));
class HomePage{

    constructor(page){
        
        this.productsName= page.locator('.card-body h5');
        this.price= page.locator("//div[@class='text-muted']");
        this.addToCartBtn = page.locator("//button[@class='btn w-10 rounded']");
        this.cart = page.locator('li .fa-shopping-cart ');
        this.logoElement = page.locator('.heading h1');

    }
    async getProductsName(productName){
        const firstProduct = await this.productsName.first().textContent();
        console.log(firstProduct);
       const allProducts= await this.productsName.allTextContents();
       console.log(allProducts);
       const count = await this.productsName.count();
       //const productName = 'iphone 13 pro';
       

       for(let i=0; i< count; i++){
        if(await this.productsName.nth(i).textContent()== productName)
        {
            console.log('product found:'+ productName);
            await this.addToCartBtn.nth(i).click();
            
            break;
        }
       }
       await this.cart.click();
       await expect(this.logoElement).toBeVisible();
       console.log(await this.logoElement.textContent());
       
    }

}
module.exports={HomePage};