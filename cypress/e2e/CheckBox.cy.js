describe("Check box and radio button check", ()=>{

  /*  it("Select all check box", ()=>{
        cy.visit("http://www.automationpractice.pl/index.php")

        //first key word use for first element selection
        cy.get(".sf-with-ul").first().click()

        //check the checkbox and verify them
        cy.get(".checkbox").check().parent().should("have.class","checked")

        //uncheck the checkbox and verify them
        cy.get(".checkbox").uncheck().parent().should("not.have.class","checked")
    })*/

    it("Check the first checkbox",()=>{
        cy.visit("http://www.automationpractice.pl/index.php")

        cy.get("a[title='Women']").click()
        cy.get("li[class='nomargin hiddable col-lg-12']").first().should("be.visible")

        cy.get("input[id='layered_category_4']").check().should("be.checked")

        //unchecked checkbox
        cy.get("input[id='layered_category_4']").uncheck().should("not.be.checked")
    })


})