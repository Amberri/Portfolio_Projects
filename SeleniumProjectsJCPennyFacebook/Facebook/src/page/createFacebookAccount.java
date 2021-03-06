package page;

import java.time.Duration;
import java.util.ArrayList;
import java.util.List;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.Wait;
import org.testng.Assert;

public class createFacebookAccount {

  WebDriver driver = null;

  public createFacebookAccount(WebDriver driver) {
    this.driver = driver;
  }

//-------------------- Create Account Page Elements -----------------------------------
  
	  By btnCreateAccount = By.xpath("//a[@data-testid='open-registration-form-button']");
	  By fldFirstName = By.xpath("//input[@name='firstname']");
	  By fldLastName = By.xpath("//input[@name='lastname']");
	  By fldPhoneEmail = By.xpath("//input[@name='reg_email__']");
	  By fldPassword = By.xpath("//input[@name='reg_passwd__']");
	  By ddMonth = By.xpath("//select[@id='month']");
	  By ddDay = By.xpath("//select[@id='day']");
	  By ddYear = By.xpath("//select[@id='year']");
	  By rbGender = By.xpath("//input[@type='radio']");
	  By btnSignUp = By.xpath("//button[@name='websubmit']");
	  By fldReenterEmail = By.xpath("//input[@name='reg_email_confirmation__']");
  
//-------------------- Create Account Form Values ------------------------------------
  
	  String vFirstName = "Samantha";
	  String vLastName = "Burgess";
	  String vPhoneEmail = "Samantha.Burgess25@gmail.com";
	  String vPassword = "Bravo2020!";
	  String vMonth = "2";
	  String vDay = "4";
	  String vYear = "1985";
  
//-------------------------------Array------------------------------------------------
/* Form field elements are added to this array. */
	  
     ArrayList < By > fieldList = new ArrayList < By > ();
   
//---------------------- Elements and Methods ----------------------------------------
/* Code below adds form field locators to an Array List. Via for loop they are each 
 * passed into the verifyFormElementPresent() function to ensure they are click
 * able/visible before being populated or an action is performed.*/
	 
	  public void verifyFormElements(String param) throws InterruptedException { 
		String FormName = param;
		switch (FormName) {
		case "add_LoginFld": {
			fieldList.add(btnCreateAccount);
	    }   
			for (int i = 0; i < fieldList.size(); i++) {
				verifyFormElementPresent(fieldList.get(i));
			}
			break;
		case "add_CreateAccountFldPrt1": {
			fieldList.add(fldFirstName);
			fieldList.add(fldLastName);
			fieldList.add(fldPhoneEmail);
		}
			for (int i = 1; i < fieldList.size(); i++) {
				verifyFormElementPresent(fieldList.get(i));
			}
			break;
		case "add_CreateAccountFldPrt2": {
			fieldList.add(fldReenterEmail);
			fieldList.add(fldPassword);
			fieldList.add(ddMonth);
			fieldList.add(ddDay);
			fieldList.add(ddYear);
			fieldList.add(rbGender);
			fieldList.add(btnSignUp);
		}
			for (int i = 4; i < fieldList.size(); i++) {
				verifyFormElementPresent(fieldList.get(i));
			}
			break;
		}
  }
//elements are passed to this function to verify they are clickable/visible
	  public void verifyFormElementPresent(By value) { 
	
	    Wait < WebDriver > wait = new FluentWait < WebDriver > (driver)
	      .withTimeout(Duration.ofSeconds(15))
	      .pollingEvery(Duration.ofMillis(600))
	      .ignoring(NoSuchElementException.class);
	
	    wait.until(ExpectedConditions.or(
	      ExpectedConditions.elementToBeClickable(value)
	
	    ));
	  }
  
//--------------------------------- Asserts ------------------------------------------
// Below asserts verify if the information entered into the forms is correct before submission.
  
	  public void assertFirstNameFld() {
	    Assert.assertEquals(vFirstName, driver.findElements(fldFirstName).get(0).getAttribute("value"));
	  }
	  public void assertLastNameFld() {
	    Assert.assertEquals(vLastName, driver.findElements(fldLastName).get(0).getAttribute("value"));
	  }
	  public void assertMobileEmailFld() {
	    Assert.assertEquals(vPhoneEmail, driver.findElements(fldPhoneEmail).get(0).getAttribute("value"));
	  }
	  public void assertRenterEmailFld() {
	    Assert.assertEquals(this.vPhoneEmail, driver.findElements(this.fldReenterEmail).get(0).getAttribute("value"));
	  }
	  public void assertPasswordFld() {
	    Assert.assertEquals(vPassword, driver.findElements(fldPassword).get(0).getAttribute("value"));
	  }
	  public void assertMonthDd() {
	    Assert.assertEquals(driver.findElements(ddMonth).get(0).getAttribute("value"), vMonth);
	  }
	  public void assertDayDd() {
	    Assert.assertEquals(driver.findElements(ddDay).get(0).getAttribute("value"), vDay);
	  }
	  public void assertYearDd() {
	    Assert.assertEquals(driver.findElements(ddYear).get(0).getAttribute("value"), vYear);
	  }
	  public void assertGenderRb() {
	    Assert.assertTrue(driver.findElement(rbGender).isSelected());
	  }
  
//---------------------------- Actions & Sets ----------------------------------------

	  public void clickCreateAccountBtn() {
	    driver.findElement(btnCreateAccount).click();
	  }
	  public void setFirstNameFld() {
	    driver.findElement(fldFirstName).sendKeys(vFirstName);
	  }
	  public void setLastNameFld() {
	    driver.findElement(fldLastName).sendKeys(vLastName);
	  }
	  public void setMobileEmailFld() {
	    driver.findElement(fldPhoneEmail).sendKeys(vPhoneEmail);
	  }
	  public void setRenterEmail() {
	    driver.findElement(fldReenterEmail).sendKeys(vPhoneEmail);
	  }
	  public void setPasswordFld() {
	    driver.findElement(fldPassword).sendKeys(vPassword);
	  }
	  public void setMonthFld() {
	    WebElement staticDropDownM = driver.findElement(ddMonth);
	    Select dropDownMonth = new Select(staticDropDownM);
	    dropDownMonth.selectByValue(vMonth);
	  }
	  public void setDayFld() {
	    WebElement staticDropDownD = driver.findElement(ddDay);
	    Select dropDownDay = new Select(staticDropDownD);
	    dropDownDay.selectByValue(vDay);
	  }
	  public void setYearFld() {
	    WebElement staticDropDownY = driver.findElement(ddYear);
	    Select dropDownYear = new Select(staticDropDownY);
	    dropDownYear.selectByValue(vYear);
	  }
	  public void setRadioBtn() {
	    List < WebElement > rbGenderSelect = driver.findElements(rbGender);
	    rbGenderSelect.get(0).click();
	  }
	  public void clickSignUpBtn() {
	    driver.findElement(btnSignUp).click();
	  } 
  
//----------------------------- Functions Called --------------------------------------
  
  public void createUserAccount() throws InterruptedException {
	  
    driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(15));

    //FB Login Page - Verify form field present
    verifyFormElements("add_LoginFld");
    this.clickCreateAccountBtn();
   
    //FB Create Account form - Verify form fields present
    verifyFormElements("add_CreateAccountFldPrt1");
    
    //Set Create Account field values.
    this.setFirstNameFld();
    this.setLastNameFld();
    this.setMobileEmailFld(); //Have to set before hidden field with display.
    
    //FB Create Account form - Verify form fields present
    verifyFormElements("add_CreateAccountFldPrt2");
    
    //Set Create Account field values.
    this.setRenterEmail();
    this.setPasswordFld();
    this.setMonthFld();
    this.setDayFld();
    this.setYearFld();
    this.setRadioBtn();
   
    //Assert
    this.assertLastNameFld();
    this.assertFirstNameFld();
    this.assertMobileEmailFld();
    this.assertRenterEmailFld();
    this.assertPasswordFld();
    this.assertMonthDd();
    this.assertDayDd();
    this.assertYearDd();
    this.assertGenderRb();
    this.clickSignUpBtn();
    
  }
}