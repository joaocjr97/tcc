import { $ } from '@wdio/globals'
class CadastroPage {
    get firstName() { return $('id:firstName') }
    get lastName() { return $('id:lastName') }
    get phone() { return $('id:phone') }
    get email() { return $('id:email') }
    get password() { return $('id:password') }
    get repassword() { return $('id:repassword') }
    get btnCreate() { return $('//android.widget.TextView[@text="Create"]') }

    async cadastrar({ nome, sobrenome, telefone, email, senha }) {
        await this.firstName.setValue(nome)
        await this.lastName.setValue(sobrenome)
        await this.phone.setValue(telefone)
        await this.email.setValue(email)
        await this.password.setValue(senha)
        await this.repassword.setValue(senha)
        await this.btnCreate.click()
    }
}
export default new CadastroPage()