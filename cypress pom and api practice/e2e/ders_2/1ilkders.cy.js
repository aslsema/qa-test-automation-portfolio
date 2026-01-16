describe('ilk dersimiz', function(){


it("TC01 İlk test senaryomuz", function(){

cy.visit('https://www.edu.goit.global/account/login')

cy.get('#user_email').type("Deneme");  

//cy.get('#user_email').as("email")
//cy.get('@email').clear();

//cy.get("[name='email']").type("deneme")
//cy.get("[name='email']").clear()

cy.get('#user_password').type("1234567890")

cy.get('.eckniwg2').click()

cy.wait(2000)

cy.get('.eckniwg2').dblclick();

cy.get('.eckniwg2').rightclick();

cy.get('.eckniwg2').should('have.text', 'Log in')

cy.get('.eckniwg2').should('have.text', 'Log in').and('be.visible')

cy.get('.eckniwg2').should('have.text', 'Log in').and('be.visible').and('exist')

cy.get('.eckniwg2').should("have.css", "background-color", "#2f3537") 


})

it('TC02 login butonunun dogrulanmasi', function(){

cy.visit('https://www.edu.goit.global/account/login')
cy.get('.eckniwg2').should("have.text", "Log in")
cy.get('.eckniwg2').should("have.css", "background-color", "rgb(255, 107, 10)")




})

it("scrollIntoView test", function(){

cy.visit("https://www.edu.goit.global/account/login")
cy.get('[name="email"]').type("user888@gmail.com")
cy.get('[name="password"]').type("1234567890")
cy.get('.eckniwg2').click()
//cy.get('[id="go-to-the-course-homepage-widget"]').scrollIntoView().should("be.visible")
//scrollTo('bottom')
cy.screenshot()


})

})

