describe("DataDriven Testing",()=>{
    it("ornageHRM Data Driven Testing", ()=>{
     
        cy.fixture("orangehrm2").then((data)=>{

            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            data.forEach((datadriven)=>{
                cy.get("input[name='username']").type(datadriven.username);
                cy.get("input[name='password']").type(datadriven.password);
                cy.get("button[type='submit']").click();

                if(datadriven.username=="Admin" && datadriven.password=="admin123"){
                    cy.get("h6[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']")
                    .should("have.text", datadriven.expected)
                    cy.get(".oxd-userdropdown-name").click();
                    cy.get("li:nth-child(4)>.oxd-userdropdown-link").click();
                }else{
                    cy.get(".oxd-alert-content > .oxd-text")
                    .should("have.text", datadriven.expected)
                }
            })
        })

    })
})