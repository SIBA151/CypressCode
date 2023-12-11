describe("MyFirstTest",()=>{
    before(()=>{
        cy.log("***** Launch App *****")
    })

    after(()=>{
        cy.log("***** Close App *****")
    })

    beforeEach(()=>{
        cy.log("***** Login *****");
    })

    afterEach(()=>{
        cy.log("***** Logout *****");
    })

    it("Search",()=>{
        cy.log("***** Search *****");
    })

    it("Advance Search",()=>{
        cy.log("***** Advance Searching *****");
    })

    it("Listing Product",()=>{
         cy.log("***** Listing Product  *****");
    })
})