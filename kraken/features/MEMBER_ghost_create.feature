Feature: Create Member

@user1 @web
Scenario: Create member with common data
//Given
Given I navigate to page "<URL>"
And I wait for 2 seconds
When I enter email "<EMAIL>" "Version 5.22.10" "Member" "Create Member" "IngresarEmail"
And I wait for 1 seconds
And I enter password "<PWD>" "Version 5.22.10" "Member" "Create Member" "IngresarPassword"
And I wait for 1 seconds
And I click sign in "Version 5.22.10" "Member" "Create Member" "ClickLogin"
And I wait for 2 seconds

And I click on the link named "Members"
And I wait for 1 seconds
And I click on the link named "New member"
And I wait for 1 seconds
And I enter member name "$name_1"
And I wait for 1 seconds
And I enter member email "$email_1"
And I wait for 1 seconds
And I click on the button named "Save"
And I wait for 1 seconds
And I click on the link named "Members"

Then I wait for 5 seconds