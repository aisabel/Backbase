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

	public class updateRegister {
		public static WebDriver driver;
		
		@Given("^user is in homepage$")
		public void userInHome_Page() throws Throwable {
	        driver = new FirefoxDriver();
	        driver.manage().deleteAllCookies();/* Command delete all coockies when browser is opened*/
	        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	        driver.get("http://computer-database.herokuapp.com/computers");
		}
		
		@When("^I fill in filter field with \"(.*)\"$")
		public void filterField(String NameSearch) throws Throwable {
			driver.findElement(By.id("searchbox")).sendKeys(NameSearch);
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		}
		
		@When("^I click filter by name button$")
		public void filterButton() throws Throwable {
			driver.findElement(By.id("searchsubmit")).click();
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		}
		
		@Then("^I should see the \"(.*)\" link$")
		public void seeLink() throws Throwable {
			driver.findElements(By.partialLinkText("Nokia v1"));
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		}
		
		@Then("^I click \"(.*)\" link$")
		public void clickLinkFound(String Name) throws Throwable {
			driver.findElement(By.linkText("Nokia v1")).click();
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);	
		}
		
		@Then("^I update computer name field with \"(.*)\"$")
		public void updateName(String NameUpdate) throws Throwable {
			driver.findElement(By.id("name")).clear();
			driver.findElement(By.id("name")).sendKeys(NameUpdate);
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		}
		
		@And("^I update introduced date field with \"(.*)\"$")
		public void updateIntroducedDate(String IntroducedDate) throws Throwable {
			driver.findElement(By.id("introduced")).clear();
			driver.findElement(By.id("introduced")).sendKeys(IntroducedDate);
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		}
		
		@And("^I update discontinued date field with \"(.*)\"$")
		public void updateDiscontinuedDate(String DiscontinuedDate) throws Throwable {
			driver.findElement(By.id("discontinued")).clear();
			driver.findElement(By.id("discontinued")).sendKeys(DiscontinuedDate);
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		}
		
		@Then("^I update \"(.*)\" option$")
		public void updateSelectCompany(String company) throws Throwable {
			Select dropdown=new Select(driver.findElement(By.id("company")));
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			dropdown.selectByValue("3");
		}
		
		@Then("^I click save this computer button$")
		public void saveThisComputer() throws Throwable {
			driver.findElement(By.cssSelector("input[class='btn primary']")).click();
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			driver.close();
		}
}
