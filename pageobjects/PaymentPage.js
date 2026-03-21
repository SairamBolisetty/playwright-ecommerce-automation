const { expect } = require("allure-playwright");

class PaymentPage{
    constructor(page){
        this.page= page;
        this.ccNumber= page.locator("//input[@class='input txt text-validated']").first();
        this.expiryMonth= page.locator("//select[@class='input ddl']").first();
        this.expiryYear=page.locator("//select[@class='input ddl']").nth(1);
        this.cvv= page.locator("//input[@class='input txt']").first();
        this.nameOnCard= page.locator("//input[@class='input txt']").last();
        this.country= page.locator("//input[@placeholder='Select Country']");
        this.countryOption= page.locator("//span[text()=' India']");
        this.placeOrderBtn= page.locator("//a[text()='Place Order ']");
        this.orderId= page.locator("//label[@class='ng-star-inserted']");
        this.orders= page.locator("//button[@routerlink='/dashboard/myorders']");

        this.table= page.locator(".table");
        this.tableRows= page.locator("//tbody //tr //th");
        this.viewBtn= page.locator("//td //button[@class='btn btn-primary']");
        
    
    }
    async checkOut(){
        await this.ccNumber.clear();
        await this.ccNumber.fill('1234567890123456');
        await this.expiryMonth.selectOption('07');
        await this.expiryYear.selectOption('27');
        await this.cvv.fill('123');
        await this.nameOnCard.fill('Sai');
        await this.country.pressSequentially('India');
        await this.page.waitForTimeout(2000);
        await this.countryOption.click();
        
        await this.placeOrderBtn.click();

        await expect(this.page.locator("//h1[@class='hero-primary']")).toHaveText(' Thankyou for the order. ');   
        const orderIdText= await this.orderId.textContent();   
        console.log('order id is :'+ orderIdText);
        await this.orders.click();
        await this.page.locator("tbody").waitFor();
        let totalOrders= await this.tableRows.count();
        console.log('total orders are:'+ totalOrders);
        
        for(let i=0; i< totalOrders; i++){
            const rowText= await this.tableRows.nth(i).textContent();
            console.log(rowText);
            if(orderIdText.includes(rowText)){

                console.log('order found in orders page');
                await this.viewBtn.nth(i).click();
                break;
            }
            else{
                console.log('order not found in orders page');
            }
        }

    }
    
    
}
module.exports={PaymentPage};