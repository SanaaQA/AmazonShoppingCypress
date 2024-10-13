import AmazonfreshPage from "../PageObjects/AmazonfreshPage";

describe('Amazon Fresh test',()=>
    
    {
    
    let data;

    before(() => {  2
        cy.fixture('example').then((fixtureData) => {
            data = fixtureData;  // Assign fixture data to the variable
        });
    });
    

    
        it('Verify Search functionality',function(){
        const fresh = new AmazonfreshPage
        cy.visit(Cypress.env('url')+"/alm/storefront?almBrandId=ctnow&ref_=nav_cs_grocery")
        cy.get('button[aria-label="Close"]').click()
                fresh.tabItems().each(($el,Index,$List)=>{
            
                    const tabItem = $el.text()
                
            if(tabItem.includes(data.amazonfresh[0]))
                {
                    cy.wrap($el).click()

                    cy.wait(2000)
                fresh.DealsVerification().should('have.text','Featured Deals')
            }
            else if(tabItem.includes(data.amazonfresh[1])){
                cy.contains(data.amazonfresh[1]).click()
                    cy.wait(3000);  
                    cy.url().should('include', 'fruitsVegetables');     }
                   
             else if(tabItem.includes(data.amazonfresh[2])){
                        cy.contains(data.amazonfresh[2]).click()
                            cy.wait(3000);  
                            cy.get('body').should('contain.text', 'Whole Grains')
                            .and('contain.text', 'Dal & other grains');    }

                            else if(tabItem.includes(data.amazonfresh[3])){
                                cy.contains(data.amazonfresh[3]).click()
                                    cy.wait(3000);  
                                    cy.get('body').should('contain.text', 'Powdered Masalas')
                                    .and('not.contain.text', 'Dal & other grains');                                              cy.wait(3000);  
                                    cy.wait(3000);  
                                }

                                    else if(tabItem.includes(data.amazonfresh[4])){
                                        cy.contains(data.amazonfresh[4]).click()
                                            cy.wait(3000);  
                                            cy.get('body').should('contain.text','Indian Snacks').and('not.contain.text', 'Powdered Masalas and');    }

                                            else if(tabItem.includes(data.amazonfresh[5])){
                                                cy.contains(data.amazonfresh[5]).click()
                                                    cy.wait(3000);  
                                                    cy.get('body').should('contain.text', 'Fresh Eggs')
                                                    .and('not.contain.text', 'Indian Snacks');    }

                    else if(tabItem.includes(data.amazonfresh[6])){
                                                        cy.contains(data.amazonfresh[6]).click()
                                                            cy.wait(3000);  
                                                            cy.get('body').should('contain.text', 'Vitamins, Minerals & Supplements')
                                                            .and('not.contain.text', 'Fresh Eggs');    }

                     
                
        })
        })
    })
