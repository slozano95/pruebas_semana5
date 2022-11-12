Feature: Create Member

@user1 @web
Scenario: Create member with common data
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
And I enter member email "$name_1"
And I wait for 1 seconds
And I click on the button named "Save"
And I wait for 1 seconds
And I see on the message "Invalid Email."
And I wait for 1 seconds
And I click on the link named "Members"
And I wait for 1 seconds
And I click on the button named "Leave"
Then I wait for 5 seconds