

describe("Implicity Assertion", ()=>{

    it("Implicity Assertion", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        /*cy.url().should('include', 'orangehrmlive.com')
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain', 'opensource') */

        /*cy.url().should('include', 'orangehrmlive.com').
        should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').
        should('contain', 'opensource')*/

        cy.url().should('include', 'orangehrmlive.com')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain', 'opensource')
        .and('not.contain', 'greenhrm')


        cy.title().should('include', 'Orange')
        .and('eq', 'OrangeHRM')
        .and('contain', 'HRM')


        //logo test
        cy.get("img[alt='company-branding']").should('be.visible')
        .should('exist')

        cy.xpath("//a").should('have.length', '5')  //Number of links

        cy.xpath("//input[@name='username']").type("Admin")
        cy.xpath("//input[@name='username']").should('have.value', 'Admin')
    })

    it('explicit assertion', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.xpath("//input[@name='username']").type("Admin")
        cy.xpath("//input[@name='password']").type("admin123")
        cy.get("button[type='submit']").click()

        let expName="Baba Ganoush"
        cy.get(".oxd-userdropdown-name").then( ()=>{
            
            let actName=x.text()
            //BDD style
           expect(actName).to.equal(expName)
           expect(actName).to.not.equal(expName)
           
           //TDD Style
           assert.equal(actName, expName)
           assert.notEqual(actName, expName)

        })
        

    })
})