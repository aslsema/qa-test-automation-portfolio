class HomePagemodul3odev {

openMenu() {
    cy.get('#open-navigation-menu-mobile').click();
  } 

findLogOutButton() {
    cy.contains('div', 'Log out').scrollIntoView().should('be.visible').click();
  }


 }
 
 export default HomePagemodul3odev;
