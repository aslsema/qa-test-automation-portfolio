describe('ödev', function (){

  it("Test No1", function (){

  //cy.visit("https://www.edu.goit.global/account/login")
  //cy.get('[name="email"]').type('user888@gmail.com')
  //cy.get('[name="password"]').type('1234567890')
  //cy.get('.eckniwg2').click()
  //cy.get('#open-navigation-menu-mobile').click()
  //cy.contains('div', 'Log out').should('be.visible').click()
  
  cy.homlogin('user888@gmail.com', '1234567890')
   
  })

  it("Test No2", function (){

   cy.homlogin("testowyqa@qa.team", "QA!automation-1")

  })

})