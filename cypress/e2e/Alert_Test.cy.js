describe("AlertTest",()=>{
    it("Java script alert", ()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()

        //alert window automaticaly closed by Cypress
        cy.on("window:alert", (t)=>{
            expect(t).to.contains("I am a JS Alert")
        })

        cy.get("#result").should("have.text", "You successfully clicked an alert")
    })

    it("java script confirm alert- Ok", ()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on("window:confirm", (t)=>{
            expect(t).to.contains("I am a JS Confirm");
        })

        //cypress automaticaly closed the alret window by using ok button by default

        cy.get("#result").should("have.text", "You clicked: Ok");
    })

    it("java script confirm alert- cancle", ()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on("window:confirm", (t)=>{
            expect(t).to.contains("I am a JS Confirm");
        })

        cy.on("window:confirm",()=> false)  //cypress closes alert window using cancle button

        cy.get("#result").should("have.text", "You clicked: Cancel");
    })

    it("java script prompt window alert", ()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.window().then((win)=>{
            cy.stub(win,"prompt").returns("welcome")
        })

        cy.get("button[onclick='jsPrompt()']").click();


        //cy.on("window:confirm",()=> false)  //cypress closes alert window using cancle button

        cy.get("#result").should("have.text", "You entered: welcome");
    })

    it.only("Authentication Alert", ()=>{

        //Appraoch 1
        cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:{username:"admin", password:"admin"}})
        

       //Appraoch 2
       //cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get("div[class='example']>p").should("have.contain", "Congratulations");
    })
})