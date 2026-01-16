describe("Standart Test Yazma", () => {
  
    it("tc01_Standart Test", () => {

// visit page
    cy.visit("https://www.edu.goit.global/account/login");

// check title
    cy.get(".next-10stgr7 > .next-c1vj7d").should("be.visible").and("have.text", "Login");

// check inputs
    cy.get("#user_email").should("be.visible").and("exist");
    cy.get("#user_password").should("be.visible").and("exist");

// check button (login butonu)
    cy.get(".eckniwg2").should("be.visible").and("exist");

// check link
    cy.get('.next-1f1fv1i > .next-1qrvie4').should("be.visible").and("have.text", "I can't remember the password");

  });

});
