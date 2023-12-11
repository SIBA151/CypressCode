describe("DropDown Testing ",()=>{

    it.skip("Select drop down test", ()=>{
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get(".globalcountrycode")
        .select("Israel")
        .should("have.value", "Israel")
    })


    it.skip("Dropdown without select mrthod use", ()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#select2-billing_country-container").click()
        cy.get(".select2-search__field").type("Italy").type("{enter}")
    })

    it.skip("Auto suggest dropdown", ()=>{
         cy.visit("https://www.wikipedia.org/")
         cy.get("#searchInput").type("Delhi")
         cy.get(".suggestion-title").contains("Delhi Metro").click()
    })

    it("Dynamic dropdown", ()=>{
        cy.visit("https://www.google.com/")
        cy.get("textarea[class='gLFyf']").type("Cypress Automation")

        cy.wait(3000)
        
        cy.get("div.wM6W7d>span").should('have.length',12)

        cy.get("div.wM6W7d>span").each( ($el, index, $list)=>{
        if($el.text()=="cypress automation tutorial"){
            cy.wrap($el).click()
        }
        })
        
        cy.get("textarea[class='gLFyf']").should('have.value', "cypress automation tutorial")
   })
})