import { expect } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import cadastroPage from '../pageobjects/cadastro.page.js'
import profilePage from '../pageobjects/profile.page.js'

describe('Cadastro no aplicativo', () => {
    it('deve realizar cadastro de novo usuário com sucesso', async () => {
        await homePage.openMenu('profile')
        await $('//android.widget.TextView[@text="Sign up"]').click()
        const usuario = {
            nome: 'Maria',
            sobrenome: 'Silva',
            telefone: '11988887777',
            email: `test${Date.now()}@mail.com`, // para evitar email repetido
            senha: 'teste123'
        }
        await cadastroPage.cadastrar(usuario)
        await $('//android.widget.TextView[@text="Profile"]').click()
        expect((await profilePage.ProfileName('Maria Silva')).isDisplayed()).toBeTruthy()
    })
})