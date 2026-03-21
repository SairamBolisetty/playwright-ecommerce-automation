class LoginPage{

    constructor(page){
        this.page=page;
        this.username=page.locator('#userEmail');
        this.password= page.locator('#userPassword');
        this.loginBtn= page.locator('#login');

    }
    async launch(){
     await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    }

    async ValidLogin(username,password){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();
    }
    async test1(){
        await this.username.fill('122');

    }
}
module.exports={LoginPage};
