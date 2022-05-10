package facebook;

import org.testng.annotations.Test;
import page.Login;

public class CreateAccountInvalidLogin extends BaseTest {

  @Test(priority = 1, description = "Complete inValid Login.")
  public void completeInvalidLogin() throws InterruptedException {
    objLogin = new Login(driver, homePage);
    objLogin.completeInvalidLogin();
  }
}