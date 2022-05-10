package facebook;

import org.testng.annotations.Test;
import page.Login;

public class CreateAccountValidLogin extends BaseTest {
	
 @Test(priority = 2, description = "Complete Valid Login.")
  public void completeLogin() throws InterruptedException {
    objLogin = new Login(driver, homePage);
    objLogin.completeValidLogin();
  }
}