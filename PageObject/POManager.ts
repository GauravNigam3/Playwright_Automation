import {Page} from '@playwright/test'
import {HomePage} from './HomePage'
import {RegistrationPage} from './RegistrationPage'
import {LoginPage} from './LoginPage'

export class POManager
{

    private page:Page
    private homepage:HomePage
    private registrationpage:RegistrationPage
    private loginpage:LoginPage

    constructor(page:Page)
    {
        this.page=page
        this.homepage=new HomePage(this.page)
        this.loginpage=new LoginPage(this.page)
        this.registrationpage=new RegistrationPage(this.page)
    }

    getHomePage():HomePage
    {
        return this.homepage
    }

    getLoginPage():LoginPage
    {
        return this.loginpage
    }

    getRegistrationPage():RegistrationPage
    {
        return this.registrationpage
    }
}
