package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class deleteRegister {
	public static WebDriver driver;
	
	@Given("^user is in computer homepage$")
	public void userInHPage() throws Throwable {
        driver = new FirefoxDriver();
        driver.manage().deleteAllCookies();/* Command delete all coockies when browser is opened*/
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.get("http://computer-database.herokuapp.com/computers");
	}
	
	@When("^I fill in search field with \"(.*)\"$")
	public void searchFieldr(String NameSearch) throws Throwable {
		driver.findElement(By.id("searchbox")).sendKeys(NameSearch);
	}
	
	@And("^I click filter button$")
	public void filterButtonr() throws Throwable {
		driver.findElement(By.id("searchsubmit")).click();
	}
	
	@And("^I click \"(.*)\" link to delete$")
	public void clickDelLink(String Name) throws Throwable {
		driver.findElement(By.linkText("Erikson v2")).click();
	}
	
	@Then("^I click delete this computer button$")
	public void deleteThisComputer() throws Throwable {
		driver.findElement(By.cssSelector("input[class='btn danger']")).click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	@Then("^I verify delete message is displayed$")
	public void verifyDeleteMessage() throws Throwable {
		driver.findElement(By.cssSelector("div[class='alert-message warning']")).getText();
		driver.quit();
	}
	
}
