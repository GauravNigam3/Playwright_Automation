import {test,expect} from '@playwright/test'
import {POManager} from '../PageObject/POManager'
import testdata from '../Utils/data.json'

testdata.forEach((data)=> 
{
    
test(`register ${data.username}`,async({page})=>
    
{
const pomanger=new POManager(page)
const homepage=pomanger.getHomePage()

await homepage.goTo()
await homepage.clickonRegisterLink()

const registerpage=pomanger.getRegistrationPage()
await registerpage.RegisterUser(data.firstname,data.lastname,data.address,data.city,data.state,data.zipcode,data.phonenumber,data.ssn,data.username,data.password,data.confirmpassword)
await registerpage.ClinkOnRegisterButton()

await expect(page.getByText('Your account was created successfully. You are now logged in.', { exact: true }))
    .toHaveText('Your account was created successfully. You are now logged in.')
await page.waitForTimeout(4000)
}

)

});