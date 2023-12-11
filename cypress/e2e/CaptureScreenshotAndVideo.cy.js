describe("block", ()=>{
    /*it("Take ScreenShot", ()=>{
        cy.visit("https://demo.opencart.com/")
        cy.screenshot("homePage")

        cy.wait(5000)
        cy.get("img[alt='Your Store']").screenshot("logo")
    })*/

    it("Automatic Take ScreenshotAndVideo",()=>{
        cy.visit("https://demo.opencart.com/")
        cy.get("li:nth-child(7)").click();
        cy.get("#content>h2").should("have.text", "Tablets");
    })
})