describe("My Test Suite", ()=>{
    /*it("Fixture Demo",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        cy.fixture("orangehrm"). then((data)=>{
            cy.get("input[name='username']").type(data.username);
            cy.get("input[name='password']").type(data.password);
            cy.get("button[type='submit']").click();
    
            cy.get("h6[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']").should("have.text", data.expected)
        })
        
    })*/

    //Access through hook - for multiple It test

    let getData;
    before(()=>{
        cy.fixture("orangehrm").then((data)=>{
            getData=data;
        })
    })

    it("Fixture Demo",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
            cy.get("input[name='username']").type(getData.username);
            cy.get("input[name='password']").type(getData.password);
            cy.get("button[type='submit']").click();
    
            cy.get("h6[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']").should("have.text", getData.expected)
        
        
    })


})