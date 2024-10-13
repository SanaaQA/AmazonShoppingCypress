class Loginpage{
Signinclick()
{
    return cy.get("#nav-link-accountList")
}
EmailField()
{
    return cy.get('#ap_email')
}
ContinueBtn()
{
    return cy.get('#continue')
}
PassField()
{
return cy.get("#ap_password")
}
SignInSubmit(){
    return cy.get("#signInSubmit")
}
}
export default Loginpage