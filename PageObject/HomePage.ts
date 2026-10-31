import {Page,Locator} from '@playwright/test'

export class HomePage
{
private page: Page
private registerLink: Locator

constructor (page:Page)
{
this.page=page
this.registerLink=page.getByRole('link', { name: 'Register' })
}

async goTo()
{
    await this.page.goto('https://parabank.parasoft.com/parabank/index.htm')
}

async clickonRegisterLink()
{
    await this.registerLink.click()
}

}