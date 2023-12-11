class login{
    setUserName(username){
        cy.get("input[name='username']").type(username);
    }
    setPassword(password){
        cy.get("input[name='password']").type(password);
    }
     clickLogin(){
        cy.get("button[type='submit']").click();
     }
     verifyLoginPage(){
        cy.get(".oxd-topbar-header-breadcrumb>h6").should("have.text","Dashboard")
     }
}
export default login; 