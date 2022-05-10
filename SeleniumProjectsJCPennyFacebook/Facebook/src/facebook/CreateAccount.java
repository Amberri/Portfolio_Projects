package facebook;

import org.testng.annotations.Test;
import page.createFacebookAccount;

public class CreateAccount extends BaseTest {

  @Test(priority = 1, description = "Create Facebook Account.")
  public void createAccount() throws InterruptedException {
    objCreateAccount = new createFacebookAccount(driver);
    objCreateAccount.createUserAccount();
  }
}