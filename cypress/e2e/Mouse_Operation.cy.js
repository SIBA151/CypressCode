import 'cypress-iframe'
require ('@4tw/cypress-drag-drop')

describe("Mouse Actions", ()=>{

    it("Mouse Over", ()=>{
        cy.visit("https://demo.opencart.com")

        cy.get("body> main>div>nav>div:nth-child(3)>ul>li>div>div>ul>li:nth-child(2)").should("not.be.visible")

        cy.get(".nav > :nth-child(1) > .dropdown-toggle").trigger("mouseover")

        cy.get(".list-unstyled>li:nth-child(2)>a").should("be.visible")
    })

    it("Right Click", ()=>{
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");

        //Appraoch_1
       // cy.get("span[class='context-menu-one btn btn-neutral']").trigger("contextmenu")
        //cy.get("li.context-menu-item:nth-child(3)>span").should("be.visible")

        //Appraoch_2
        cy.get("span[class='context-menu-one btn btn-neutral']").rightclick();
        cy.get("li.context-menu-item:nth-child(3)>span").should("be.visible")
    })

    it("Double Click", ()=>{

        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick");
        cy.frameLoaded("#iframeResult")

        //Appraoch_1
       // cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").trigger("dblclick");
        //cy.iframe("#iframeResult").find("#demo").should("have.value", "Hello World")

        //Appraoch_2
        cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").dblclick();
        cy.iframe("#iframeResult").find("html>body>p#demo").should("be.visible")

    })

    it("Drag and Drop using plugin", ()=>{
        cy.visit("https://the-internet.herokuapp.com/drag_and_drop")
        cy.get("#column-a").should("be.visible")
        cy.get("#column-b").should("be.visible")
        cy.get("#column-a").drag("#column-b");
    })

    it.only("Scrolling page", ()=>{
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html")
        cy.get(":nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img").scrollIntoView({duration:2000});
        cy.get(":nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img").should("be.visible")
    })
})