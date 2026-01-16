//login.js dosyasının çalışması
import Login from "../../pages/login";

const loginPage = new Login();

describe("Page Object Model - POM", () => {
  it("tc02_Page Object Pattern", () => {

    loginPage.navigateUrl();      
    loginPage.checkTitle("Login");  
    loginPage.checkEmailField();
    loginPage.checkPasswordField();
    loginPage.checkLoginButton();
    loginPage.checkPasswordLink(); 

  });
});

//login2.js dosyasının çalışması
import Login2 from "../../pages/login2"; 

describe("Page Object Model - POM", () => {
it("tc03_Page Object Pattern", () => {

    Login2.navigateUrl();      
    Login2.checkTitle("Login");  
    Login2.checkEmailField();
    Login2.checkPasswordField();
    Login2.checkLoginButton();
    Login2.checkPasswordLink(); 
  });
});


//fixture(sadece title datası çekildi) ve login2 dosyasının çalışması
//import Login2 from "../../pages/login2";    bunu tekrar aynı test sayfasında import edemezsiz, yukarda var, o yüzden bunu kapadım.

describe("Page Object Model - POM", () => {

let data;

  it("tc04_Page Object Fixtures Kullanimi", () => {
    cy.fixture('login.json').then((expected) =>{
    data=expected;
    Login2.navigateUrl();      
    Login2.checkTitle(expected.titleText);  
    Login2.checkEmailField();
    Login2.checkPasswordField();
    Login2.checkLoginButton();
    Login2.checkPasswordLink(); 
  });
});
});

