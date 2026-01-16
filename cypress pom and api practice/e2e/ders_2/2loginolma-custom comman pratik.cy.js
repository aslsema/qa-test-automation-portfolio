describe('login test', function(){

it("TC01 admin login", function(){
   // cy.visit("https://www.edu.goit.global/account/login")
   // cy.get('[name="email"]').type("user888@gmail.com")
   // cy.get('[name="password"]').type("1234567890")
   // cy.get('.eckniwg2').click()

cy.login("user888@gmail.com", "1234567890")

  })


it("TC02 user login", function(){
   // cy.visit("https://www.edu.goit.global/account/login")
   // cy.get('[name="email"]').type("nadia.tsomko.98@gmail.com")
   // cy.get('[name="password"]').type("Nadia_Tsomko78");
   // cy.get('.eckniwg2').click()

cy.login("nadia.tsomko.98@gmail.com", "Nadia_Tsomko78")
  });


it("TC03 manager login", function(){
   // cy.visit("https://www.edu.goit.global/account/login")
   // cy.get('[name="email"]').type("mrdusty@duniakeliling.com")
   // cy.get('[name="password"]').type("mrdusty@duniakeliling.com");
   // cy.get('.eckniwg2').click()

cy.login("mrdusty@duniakeliling.com", "mrdusty@duniakeliling.com")
  })


})
