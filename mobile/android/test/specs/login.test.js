import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import profilePage from '../pageobjects/profile.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await homePage.openMenu('profile')
        await loginPage.login('joao.bmth@outlook.com', 'qwe123ja')
        await homePage.openMenu('profile')
        expect((await profilePage.ProfileName('santos joao')).isDisplayed()).toBeTruthy()
    })
})

