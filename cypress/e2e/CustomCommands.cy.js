describe("Custom commands",()=>{
    it("handling Links",()=>{
        cy.visit("https://demo.nopcommerce.com/")
        cy.clickLink("Apple MacBook Pro 13-inch");

        cy.get("div[class='product-name']>h1").should('have.text',"Apple MacBook Pro 13-inch")

    })

    it.only("Login Command",()=>{

        cy.visit("https://demo.nopcommerce.com/");
        cy.clickLink("Log in");

        cy.loginapp("shiva.raja52@gmail.com","Raju2038@");

        cy.get(".ico-account").should("have.text","My account");
    })
})