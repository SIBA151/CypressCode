import login from "../PageObject/LoginPage2"

describe("pom",()=>{
    it("logintest",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        const ln=new login();
        ln.setUserName("Admin")
        ln.setPassword("admin123")
        ln.clickLogin();
        ln.verifyLoginPage("Dashboard");
    })
//using pom with fixture
    it.only("logintest",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.fixture("orangehrm").then((data)=>{
        const ln=new login();
        ln.setUserName(data.username)
        ln.setPassword(data.password)
        ln.clickLogin();
        ln.verifyLoginPage(data.expected);
        })
        
    })
})