class Searchpage{
    seachField(){
        return cy.get('#twotabsearchtextbox')
    }
    searchLogo(){
        return cy.get('#nav-search-submit-button')
    }

    Searchout(){
        return cy.get('h2[class="a-size-mini a-spacing-none a-color-base s-line-clamp-4"]')
    }

    ItemsList(){
        return cy.get('.puis-card-container')
    }

    AddtoCart(){
        return cy.contains('Add to cart')
    }
    AppleBrand(){
        return cy.get("li[aria-label='Apple'] i[class='a-icon a-icon-checkbox']")
    }
    InvalidMsg(){
        return cy.get("div[class='s-no-outline'] div[class='a-row']")
    }
}


export default Searchpage