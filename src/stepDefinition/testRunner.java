package stepDefinition;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
 
@RunWith(Cucumber.class)
@CucumberOptions(
		features = "featureFiles",glue={"stepDefinition"},
		format={"html:output"}
		)

public class testRunner {

}