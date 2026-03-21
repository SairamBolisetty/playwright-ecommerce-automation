const {test, expect} = require('@playwright/test');
test('Login test', async ({page}) => 
    {
        const errorMsg= page.locator('.alert-danger');
        const productTitle= page.locator('.card-title a');
        const username= page.locator('#username');
        const password=page.locator('#password');
        const signInBtn= page.locator('#signInBtn');

        await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
        await username.fill('rahulshettyacademy');
        await password.fill('learning');
        await signInBtn.click();
        await expect(errorMsg).toHaveText('Incorrect username/password.');
        const errorText = await errorMsg.textContent();
        console.log(errorText);

        await password.clear();
        await password.fill('Learning@830$3mK2');
        await signInBtn.click();

        const firstProduct =await productTitle.first().textContent();
        console.log(firstProduct);

        const thrirdProduct= await productTitle.nth(2).textContent();
        console.log(thrirdProduct);

        const allProducts=await productTitle.allTextContents();
        console.log(allProducts);




    })