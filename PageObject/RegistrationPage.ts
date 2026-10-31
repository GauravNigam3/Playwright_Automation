import{Page, Locator} from '@playwright/test'

export class RegistrationPage
{

    private page:Page
    private FirstName: Locator
    private LastName: Locator
    private Address: Locator
    private City: Locator
    private State: Locator
    private Zip: Locator
    private PhoneNumber: Locator
    private Ssn: Locator
    private UserName: Locator
    private Password: Locator
    private ConfirmPassword: Locator
    private RegistrationButton: Locator

    constructor(page:Page)
    {
        this.page=page
        this.FirstName = page.locator("//input[@id='customer.firstName']")
        this.LastName = page.locator("//input[@id='customer.lastName']")
        this.Address = page.locator("//input[@id='customer.address.street']")
        this.City = page.locator("//input[@id='customer.address.city']")
        this.State = page.locator("//input[@id='customer.address.state']")
        this.Zip = page.locator("//input[@id='customer.address.zipCode']")
        this.PhoneNumber = page.locator("//input[@id='customer.phoneNumber']")
        this.Ssn = page.locator("//input[@id='customer.ssn']")
        this.UserName = page.locator("//input[@id='customer.username']")
        this.Password = page.locator("//input[@id='customer.password']")
        this.ConfirmPassword = page.locator("//input[@id='repeatedPassword']")
        this.RegistrationButton = page.locator("//input[@value='Register']")
       
    }

    async RegisterUser(fname:string,lname:string,address:string,city:string,state:string,
        zip:string,phonenumber:string,ssn:string,username:string,password:string,confirmpassword:string)
    {
        await this.FirstName.fill(fname)
        await this.LastName.fill(lname)
        await this.Address.fill(address)
        await this.City.fill(city)
        await this.State.fill(state)
        await this.Zip.fill(zip)
        await this.Ssn.fill(ssn)
        await this.PhoneNumber.fill(phonenumber)
        await this.UserName.fill(username)
        await this.Password.fill(password)
        await this.ConfirmPassword.fill(confirmpassword)
    }

async ClinkOnRegisterButton()
{
    await this.RegistrationButton.click()
}

}