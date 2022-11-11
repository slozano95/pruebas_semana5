Feature: Edit Member

@user1 @web
Scenario: Edit member with different name
//Login first
Given I navigate to page "http://localhost:2368/ghost/#/signin"
And I wait for 2 seconds
When I enter email "<EMAIL>"
And I enter password "<PWD>"
And I click sign in
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
Then I wait for 2 seconds

And I click on the link variable "$$name_1"
And I wait for 1 seconds
And I enter member name "$name_2"
And I wait for 1 seconds
And I click on the button named "Save"
And I wait for 1 seconds
And I click on the link named "Members"
Then I wait for 5 seconds