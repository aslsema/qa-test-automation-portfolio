import Loginnmodul3odev from "../../pages/Modül3-ödev-Login";
import HomePagemodul3odev from "../../pages/Modül3-ödev-HomePage";

const logPage = new Loginnmodul3odev();
const homPage = new HomePagemodul3odev();


describe("POM", () => {
  it("tc01_modul3odev", () => {

    logPage.navigateUrl();        
    logPage.checkEmailField();
    logPage.checkPasswordField();
    logPage.checkLoginButton();
    logPage.wait();

    homPage.openMenu();
    homPage.findLogOutButton();


  });
});
