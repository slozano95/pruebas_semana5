Feature: Create Member

@user1 @web
Scenario: Create member with common data
//Login first
Given I navigate to page "http://localhost:2368/ghost/#/signin"
And I wait for 2 seconds
When I enter email "<EMAIL>"
And I enter password "<PWD>a"
And I click sign in
And I wait for 2 seconds

And I see on the message incorrect login "Your password is incorrect."
Then I wait for 5 seconds