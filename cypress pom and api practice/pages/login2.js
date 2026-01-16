class Login2 {

url="https://www.edu.goit.global/account/login"; 
title=".next-10stgr7 > .next-c1vj7d";
email="#user_email";
password="#user_password";
LoginButton=".eckniwg2";
PasswordLink=".next-1f1fv1i > .next-1qrvie4";


navigateUrl() {
      cy.visit(this.url); 
  } 

checkTitle(title) { 
      cy.get(this.title).should("be.visible").and("have.text", title);
  } 

checkEmailField() {
      cy.get(this.email).should("be.visible").and("exist");
  }
  
checkPasswordField() {
      cy.get(this.password).should("be.visible").and("exist");
  }

checkLoginButton() {
      cy.get(this.LoginButton).should("be.visible").and("exist");
  }

checkPasswordLink() {
    cy.get(this.PasswordLink).should("be.visible").and("have.text", "I can't remember the password");
  }


//before, beforeeach vs için ihtiyaç olacak bir çalışma
enterEmail(email){
   cy.get(this.email).type(email);
}

enterPassword(password){
   cy.get(this.password).type(password);
}

clickLoginButton(){
   cy.get(this.loginButton).click()
 }

login(email, password){           
    this.navigateUrl();
    this.enterEmail(email);                   
    this.enterPassword(password);      
    this.clickLoginButton();             
}

}
export default new Login2(); 


