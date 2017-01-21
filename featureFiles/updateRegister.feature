Feature: Update existing computer register

As order to update a computer register
I want to populate the fields with new data info

@BACKBASE-004
Scenario Outline: update computer register
	Given user is in homepage
	When I fill in filter field with "<NameSearch>"
	And I click filter by name button
	Then I click "<Name>" link
	Then I update computer name field with "<NameUpdate>"
	And I update introduced date field with "<IntroducedDate>"
	And I update discontinued date field with "<DiscontinuedDate>"
	Then I update "<company>" option
	Then I click save this computer button
      
Examples:
	|NameSearch	| Name			      |  IntroducedDate	|  DiscontinuedDate	| company					| NameUpdate|
    | Nokia v1  | Nokia v1			  |  1579-01-31		| 	3579-01-31		| RCA						|Erikson v2|
    
