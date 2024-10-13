class AmazonfreshPage
{
tabItems(){
 return cy.get('div[style="visibility: visible;"]')
}
DealsVerification(){
    return cy.get('[data-sub-page-id="deals"] > .a-size-medium')
}
}
export default AmazonfreshPage