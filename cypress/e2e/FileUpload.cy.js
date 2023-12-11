import 'cypress-file-upload'

describe("Flie Upload Test", ()=>{
    it("Single File Upload", ()=>{

        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile("Test1.txt")
        cy.get("#file-submit").click();
        cy.get(".example>h3").should("have.text", "File Uploaded!")
    })

    it("File Upload - Rename", ()=>{

        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile({filePath:"Test1.txt", fileName:"MyFile.txt"})
        cy.get("#file-submit").click();
        cy.get(".example>h3").should("have.text", "File Uploaded!")
    })
    
    it("File Upload - Drag and Drop", ()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("div>div#drag-drop-upload").attachFile("Test1.txt",{subjectType:"drag-n-drop"})
        cy.wait(3000)
        cy.get("#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span").contains("Test1.txt")
    })

    /*it("Multiple File upload ", ()=>{
        cy.visit();
        cy.get().attachFile("[Test1.txt,Test2.txt]")
    })*/

    it.only("File Upload shadow dom",()=>{
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
        cy.get(".smart-browse-input",{includeShadowDom:true}).attachFile("Test1.txt")
        cy.get(".smart-item-name",{includeShadowDom:true}).contains("Test1.txt");
    })
})