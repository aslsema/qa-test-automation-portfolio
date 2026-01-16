class Login {

navigateUrl() {
    cy.visit("https://www.edu.goit.global/account/login");
  } 

checkTitle(title) {
    cy.get(".next-10stgr7 > .next-c1vj7d").should("be.visible").and("have.text", title);
  }

checkEmailField() {
    cy.get("#user_email").should("be.visible").and("exist");
  }
checkPasswordField() {
    cy.get("#user_password").should("be.visible").and("exist");
  }

checkLoginButton() {
    cy.get(".eckniwg2").should("be.visible").and("exist");
  }

 checkPasswordLink() {
   cy.get('.next-1f1fv1i > .next-1qrvie4').should("be.visible").and("have.text", "I can't remember the password");
  }

}


export default Login;


