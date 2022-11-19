Feature: user incorrect

@user1 @web
@avoid
Scenario: user incorrect
//Login first
Given I navigate to page "http://localhost:2368/ghost/#/signin"
And I wait for 2 seconds
When I enter email post "<EMAIL>@"
And I enter password post "<PWD>"
And I click sign in post
And I wait for 2 seconds


And I see on the message incorrect user "Your User is incorrect."
Then I wait for 5 seconds