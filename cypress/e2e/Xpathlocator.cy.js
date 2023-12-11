describe('practice xpath locator', ()=>{
      it('find no. of products', ()=>{
         cy.visit("http://www.automationpractice.pl/index.php")
         cy.get("a[title='Women']").click()
         cy.xpath("//ul[@class='product_list grid row']/li").should('have.length', 7)
      })

      it('chained', ()=>{
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.get("a[title='Women']").click()
        cy.xpath("//ul[@class='product_list grid row']").xpath("./li").should('have.length', 7)
     })
})