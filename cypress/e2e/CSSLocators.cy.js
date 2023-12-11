describe('CSSlocatror', ()=>{
   it('css', ()=>{

    cy.visit("http://www.automationpractice.pl/index.php")
    cy.get(".search_query").type("T-shirts")
    cy.get("button[name='submit_search']").click()
    cy.get(".lighter").contains("T-shirts")

   })
})