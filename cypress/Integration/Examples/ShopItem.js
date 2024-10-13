import Searchpage from "../PageObjects/Searchpage"
import Loginpage from "../PageObjects/Loginpage"
describe('Search test',()=>
    
    {
    
    let data;

    before(() => {  2
        cy.fixture('example').then((fixtureData) => {
            data = fixtureData;  // Assign fixture data to the variable
        });
    });
    

    
        it('Verify Search functionality',function(){
            const Search = new Searchpage();
            cy.visit(Cypress.env('url')+"/") 
            Search.seachField().type(data.SearchItem1)
            Search.searchLogo().click()
            Search.AppleBrand().check().should('be.checked')
            Search.Searchout().each(($el,Index,$List)=>{
            cy.wrap($el).should('contain.text',this.data.Brand1) 
            })   
        })
            it('Verify Invalid Search functionality',function(){
                const Search = new Searchpage();
                cy.visit(Cypress.env('url')+"/") 
                Search.seachField().type(data.SearchItem2)
                Search.searchLogo().click()
                Search.InvalidMsg().should('contains.text','No results for ' + data.SearchItem2)
                })   
            
       
            it('Verify Add to cart functionality',function(){
                const Search1 = new Searchpage();
                cy.visit("https://www.amazon.in") 
                Search1.seachField().type(data.SearchItem1)
                Search1.searchLogo().click()
                Search1.ItemsList().each(($el,Index,$List)=>{
                    //cy.wrap($el).find('h2[class="a-size-mini a-spacing-none a-color-base s-line-clamp-4"]').invoke('text').then((ProductList) => {
                        //console.log(ProductList);
                        //if (ProductList.includes("Apple iPhone 16 Plus (128 GB) - Teal")) {
                            //cy.wrap($el).find('span[class="a-button-inner"]').click()}
        
        const productTitle = $el.find('h2[class="a-size-mini a-spacing-none a-color-base s-line-clamp-4"]').text().trim(); 
        if (productTitle.includes("Apple iPhone 16 Plus (128 GB) - Teal")) {
            cy.wrap($el).find('span[class="a-button-inner"]').click();
             } 
            }) 
            cy.get('#nav-cart').invoke('attr', 'aria-label').should('contain', '1 item');

            })
 it('Verify Login functionality',function(){
                const Login = new Loginpage();
                cy.visit(Cypress.env('url')) 
                Login.Signinclick().click()
                Login.EmailField().type(data.Email)
                Login.ContinueBtn().click()
                Login.PassField().type(data.Pass)
                Login.SignInSubmit().click()
                })     
            })
           
            
            