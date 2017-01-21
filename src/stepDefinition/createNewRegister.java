package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class createNewRegister {
	public static WebDriver driver;
	
	@Given("^user is on homepage$")
	public void user_is_on_Home_Page() throws Throwable {
        driver = new FirefoxDriver();
        driver.manage().deleteAllCookies();/* Command delete all coockies when browser is opened*/
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.get("http://computer-database.herokuapp.com/computers");
	}
	
	@When("^I click Add a new computer button$")
	public void add() throws Throwable {
		driver.findElement(By.linkText("Add a new computer")).click();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}
	
	@And("^I fill in computer name field with \"(.*)\"$")
	public void computerName(String Name) throws Throwable {
		driver.findElement(By.name("name")).sendKeys(Name);
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}
	
	@And("^I fill in introduced date field with \"(.*)\"$")
	public void introducedDate(String IntroducedDate) throws Throwable {
		driver.findElement(By.id("introduced")).sendKeys(IntroducedDate);
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}
	
	@And("^I fill in discontinued date field with \"(.*)\"$")
	public void discontinuedDate(String DiscontinuedDate) throws Throwable {
		driver.findElement(By.id("discontinued")).sendKeys(DiscontinuedDate);
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}
	
	@Then("^I select \"(.*)\" option$")
	public void selectCompany(String company) throws Throwable {
		Select dropdown=new Select(driver.findElement(By.id("company")));
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		dropdown.selectByValue("16");
	}
	
	@Then("^I click create this computer button$")
	public void createThisComputer() throws Throwable {
		driver.findElement(By.cssSelector("input[class='btn primary']")).click();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.quit();
	}

}
