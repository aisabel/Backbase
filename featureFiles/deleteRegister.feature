Feature: Delete existing computer register

As order to delete a computer register
I want to click delete button

@BACKBASE-005
Scenario Outline: update computer register
	Given user in homepage
	When I fill in search field with "<NameSearch>"
	And I click filter button
	And I click "<Name>" link to delete
	Then I click delete this computer button
      
Examples:
	|NameSearch	 | Name			      |  
    | Erikson v2 | Erikson v2		  |  
    
