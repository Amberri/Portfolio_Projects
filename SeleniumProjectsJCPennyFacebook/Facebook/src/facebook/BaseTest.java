package facebook;

import java.time.Duration;  
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import page.createFacebookAccount;
import page.Login;

public class BaseTest {
	
	
	static WebDriver driver;
	static String homePage = "https://www.facebook.com";
	
	createFacebookAccount objCreateAccount;
	Login objLogin;

	@BeforeClass
	public static void setUp() throws InterruptedException {
		
		System.setProperty("webdriver.chrome.driver", "C:\\SeleniumDrivers\\chromedriver.exe");
		 ChromeOptions option = new ChromeOptions();
		  option.addArguments("disable-infobars");
		  driver = new ChromeDriver(option);
		  driver.manage().window().maximize();
		  driver.get(homePage);
		  driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(15));
	}
    
	@AfterClass
	public static void tearDown() throws InterruptedException {
		  //driver.quit();
	}
}
