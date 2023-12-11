describe("mysuite",()=>{
    it("NavigationTest",()=>{
          cy.visit("https://demo.opencart.com")
          cy.title().should('eq',"Your Store")

          cy.get("li:nth-child(7)").click();
          cy.get("#content>h2").should("have.text", "Cameras");

          cy.go("back");  //Go back to Home Page
          cy.title().should('eq',"Your Store")

          cy.go("forward"); //move forward to Camera Page
          cy.get("#content>h2").should("have.text", "Cameras");

          cy.go(-1)//Go back to Home Page
          cy.title().should('eq',"Your Store")

          cy.go(1)//move forward to Camera Page
          cy.get("#content>h2").should("have.text", "Cameras");

          cy.reload(); //it will reload the page
    })
})