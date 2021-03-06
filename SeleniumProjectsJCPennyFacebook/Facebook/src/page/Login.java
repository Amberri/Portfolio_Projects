package page;

import java.time.Duration;
import java.util.ArrayList;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Wait;
import org.testng.Assert;

public class Login {

  WebDriver driver = null;
  String homePage = null;

  public Login(WebDriver driver, String homePage) {
    this.driver = driver;
    this.homePage = homePage;
  }
  
//---------------------- completeInValidLogin --------------------------
//------------------------------------------------------------------------
//-------------------- Login Form Page Objects ---------------------------

	  By fldPhoneEmail = By.xpath("//input[@data-testid='royal_email']");
	  By fldPassword = By.xpath("//input[@data-testid='royal_pass']");
	  By btnLogin = By.xpath("//button[@data-testid='royal_login_button']");
	  By txtLoginErrorMessage = By.xpath("//div[@class='_9ay7']");
	  
      //Placed Login Form Objects into an array.
	  ArrayList < By > fieldList = new ArrayList < By > (); {
	    fieldList.add(fldPhoneEmail);
	    fieldList.add(fldPassword);
	    fieldList.add(btnLogin);
	  }

//-------------------- Login Form Values ---------------------------------  

	  String vPhoneEmail = "amberautest@gmail.com";
	  String vPassword = "Bubblegum2011!";
	  String vEmailBlankErrortxt = "The email or mobile number you entered isn?t connected to an account. Find your account and log in.";
	  String vPasswordBlankErrortxt = "The password you?ve entered is incorrect. Forgot Password?";
	  String vEmailPassBlankErrortxt = "The email or mobile number you entered isn?t connected to an account. Find your account and log in.";

//-------------------- Functions Called ----------------------------------
  
	  public void verifyFormElements() throws InterruptedException {
	    for (int i = 0; i < fieldList.size(); i++) {
	      verifythere(fieldList.get(i));
	    }
	  }
	  public void verifythere(By value) {
	    Wait < WebDriver > wait = new FluentWait < WebDriver > (driver)
	      .withTimeout(Duration.ofSeconds(15))
	      .pollingEvery(Duration.ofMillis(600))
	      .ignoring(NoSuchElementException.class);
	
	    wait.until(ExpectedConditions.or(
	      ExpectedConditions.elementToBeClickable(value)
	
	    ));
	  }
	  public void setMobileEmailFld() {
	    driver.findElement(fldPhoneEmail).sendKeys(vPhoneEmail);
	  }
	  public void setPasswordFld() {
	    driver.findElement(fldPassword).sendKeys(vPassword);
	  }
	  public void clickLoginBtn() {
	    driver.findElement(btnLogin).click();
	  }

//---------------------------- Asserts -----------------------------------

	  public void assertBlankPassEmailErrortxt() {
	    Assert.assertEquals(driver.findElement(txtLoginErrorMessage).getText(), vEmailPassBlankErrortxt);
	  }
	  public void assertBlankEmailErrortxt() {
	    Assert.assertEquals(driver.findElement(txtLoginErrorMessage).getText(), vEmailBlankErrortxt);
	  }
	  public void assertBlankPasswordErrortxt() {
	    Assert.assertEquals(driver.findElement(txtLoginErrorMessage).getText(), vPasswordBlankErrortxt);
	  }
	  
	  public void completeInvalidLogin() throws InterruptedException {
		  
	    // Validate: Check error message correct when Email and Password fields blank.
	    this.verifyFormElements();
	    this.clickLoginBtn();
	    assertBlankPassEmailErrortxt();
	
	    // Validate: Check error message correct when Email field left blank.
	    driver.navigate().back();
	    this.verifyFormElements();
	    this.setPasswordFld();
	    this.clickLoginBtn();
	    assertBlankEmailErrortxt();
	
	    //Validate: Check error message correct when Password field left blank.
	    driver.navigate().back();
	    this.verifyFormElements();
	    this.setMobileEmailFld();
	    this.clickLoginBtn();
	    assertBlankPasswordErrortxt();
	  }
  
//---------------------- completeValidLogin ------------------------------
//------------------------------------------------------------------------

//-------------------- Login Form Field Locators -------------------------
  
	  By lnkProfile = By.xpath("//span[contains(text(),'Amber Autest')]");
	  By lnkAccountMenu = By.xpath("//div[@aria-label='Your profile']");
	  By lnkLogOut = By.xpath("//span[contains(text(),'Log Out')]");

//-------------------- Login Form Field Values ---------------------------
  
	  String vloginURL = "https://www.facebook.com/?sk=welcome";
	  String fbLoginPageTile = "Facebook - log in or sign up";
	  String fbHomePageTitle = "Facebook";
	  String fbProfilePageTitle = "Amber Autest | Facebook";

//------------------------ Functions Called ------------------------------
  
	  public void clickProfileLink() {
	    driver.findElement(lnkProfile).click();
	  }
	  public void clickAccountLink() {
	    driver.findElement(lnkAccountMenu).click();
	  }
	  public void clickLogoutLink() {
	    driver.findElement(lnkLogOut).click();
	  }
  
//-------------------- Verification --------------------------------------
  
	  public void verify_Element(By value) {
	    Wait < WebDriver > wait = new FluentWait < WebDriver > (driver)
	      .withTimeout(Duration.ofSeconds(15))
	      .pollingEvery(Duration.ofMillis(600))
	      .ignoring(NoSuchElementException.class);
	
	    wait.until(ExpectedConditions.or(
	      ExpectedConditions.elementToBeClickable(value)
	    ));
	  }

//----------------------- Asserts ----------------------------------------
	  
	  public void assertFBHomePage() {
	    Assert.assertEquals(driver.getTitle(), fbHomePageTitle);
	  }
	  public void assertFBProfilePage() {
	    Assert.assertEquals(driver.getTitle(), fbProfilePageTitle);
	  }
	  public void assertFBLoginPage() {
	    Assert.assertEquals(driver.getTitle(), fbLoginPageTile);
	  }

//--------------------- Elements and Methods -----------------------------
  
  public void completeValidLogin() throws InterruptedException {
    driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));

    //FB Login Page
    driver.get(homePage);
    this.verifyFormElements();
    this.setMobileEmailFld();
    this.setPasswordFld();
    this.clickLoginBtn();
    Thread.sleep(2000);

    //Validate on FB Home Page
    this.assertFBHomePage();
    Thread.sleep(2000);
    this.verify_Element(lnkProfile);
    this.clickProfileLink();
    Thread.sleep(4000);
    
    //Validate on FB Profile Page
    this.assertFBProfilePage();
    Thread.sleep(2000);
    
    //Sign Out
    this.clickAccountLink();
    this.clickLogoutLink();
    Thread.sleep(4000);
    
    //Validate on FB Login Page
    this.assertFBLoginPage();

  }
}