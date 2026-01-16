class Loginnmodul3odev {

url="https://www.edu.goit.global/account/login"; 
email="#user_email";
password="#user_password";
LoginButton=".eckniwg2";


navigateUrl() {
      cy.visit(this.url); 
  } 

checkEmailField() {
      cy.get(this.email).should("be.visible").type('user888@gmail.com');
  }
  
checkPasswordField() {
      cy.get(this.password).should("be.visible").type('1234567890');
  }
 
checkLoginButton() {
      cy.get(this.LoginButton).should("be.visible").click();
  }
 
wait() {
      cy.wait(5000);
}

}

export default Loginnmodul3odev;


