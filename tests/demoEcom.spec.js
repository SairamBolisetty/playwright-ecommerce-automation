const {test, expect} = require ('@playwright/test');
test.only('Ecom login test', async ({page}) =>
{
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    const registerPage= page.locator('.text-reset');
    const firstName = page.locator("//input[@placeholder='First Name']");
    const lastName = page.locator("#lastName");
    const email = page.locator('#userEmail');
    const phoneNo = page.locator('#userMobile');
    const occupation = page.locator("//select[@formcontrolname='occupation']");
    const gender = page.locator("//input[@value='Male']");
    const password = page.locator("#userPassword");
    const confirmPassword = page.locator("#confirmPassword");
    const checkBox = page.locator("//input[@type='checkbox']");
    const registerBtn = page.locator("#login");



    // await registerPage.click();
    // await firstName.fill('Sai');
    // await lastName.fill('Ram');
    // await email.fill('sairam75@gmail.com');
    // await phoneNo.fill('9876543210');
    // await occupation.selectText('Student');
    // await gender.click();
    // await password.fill('Sairam@123');
    // await confirmPassword.fill('Sairam@123');
    // await checkBox.click();
    
    // await registerBtn.click();
    // await page.waitForTimeout(5000);

    // await page.locator(".login-wrapper-footer-text").click();
    await page.locator('#userEmail').fill('sairam75@gmail.com');
    await page.locator('#userPassword').fill('Sairam@123');
    await page.locator('#login').click();
    await page.waitForTimeout(5000);

    const productTitle = page.locator('.card-body b');
    const firstProduct =await productTitle.first().textContent();
    console.log(firstProduct);
    const thirdProduct = await productTitle.nth(2).textContent();
    console.log(thirdProduct);
    const allProducts =await productTitle.allTextContents();
    console.log(allProducts);
    const product =page.locator('.card-body');
    const count = await product.count();
    const productName = 'iphone 13 pro'
    for(let i=0; i< count; i++)
    {
        if(await product.nth(i).locator('b').textContent()== productName)
        {
            const productText = await product.nth(i).locator('b').textContent();
            console.log('product found:'+ productText);
            await product.nth(i).locator('text= Add To Cart').click();
            break;
        }

    }

    


});