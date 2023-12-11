class login{

    txtUserName="input[name='username']";
    txtPassword="input[name='password']";
    btnLogin="button[type='submit']";
    lblHomePage=".oxd-topbar-header-breadcrumb>h6"

    setUserName(username){
        cy.get(this.txtUserName).type(username);
    }
    setPassword(password){
        cy.get(this.txtPassword).type(password);
    }
     clickLogin(){
        cy.get(this.btnLogin).click();
     }
     verifyLoginPage(lbl){
        cy.get(this.lblHomePage).should("have.text",lbl)
     }
}
export default login; 