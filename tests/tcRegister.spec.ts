import{test,expect} from '@playwright/test'
import{HomePage} from '../PageObject/HomePage'
import {RegistrationPage} from '../PageObject/RegistrationPage'


test('tcRegister',async({page}) =>
{
const homepage=new HomePage(page)
await homepage.goTo()
await homepage.clickonRegisterLink()

await page.waitForTimeout(2000)

const registrationpage=new RegistrationPage(page)
await registrationpage.RegisterUser('Gaurav', 'Nigam', 'Gurgaon', 'Sector 21', 'Haryana',
        '122016', '97655443322', '1112222', 'ts131', 'abcd', 'abcd')
await registrationpage.ClinkOnRegisterButton()

await page.waitForTimeout(2000)

await expect(page.getByText('Your account was created successfully. You are now logged in.',{exact : true}))
.toHaveText('Your account was created successfully. You are now logged in.')

await page.waitForTimeout(2000)

})