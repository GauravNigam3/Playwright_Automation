import {Page,Locator} from '@playwright/test'

export class LoginPage
{
private page:Page
private username:Locator
private password:Locator
private loginbutton:Locator

constructor(page:Page)
{
    this.page=page
    this.username=page.locator("//input[@name='username']")
    this.password=page.locator("//input[@name='password']")
    this.loginbutton=page.locator("//input[@value='Log In']")
}

async LoginToApplication(Username:string,Password:string)
{
 await this.username.fill(Username)
 await this.password.fill(Password)
await this.loginbutton.click()

}
}