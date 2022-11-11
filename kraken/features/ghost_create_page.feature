Feature: Create Page

@user1 @web
@avoid
Scenario: Create page with common data
//Login first
Given I navigate to page "http://localhost:2368/ghost/#/signin"
And I wait for 2 seconds
When I enter email "<EMAIL>"
And I enter password "<PWD>"
And I click sign in
And I wait for 2 seconds

And I click on the link named "Pages"
And I click on the link named "New page"
And I type on the keyboard "$string_1"
And I hit the tab key on the keyboard
And I type on the keyboard "$string_2"
And I click on the button named "Publish"
And I wait for 1 seconds
And I click on the button named "Continue, final review →"
And I wait for 1 seconds
And I click on the button named "Publish page, right now"
And I wait for 5 seconds

@user2 @web
Scenario: Create page with custom url
Given I navigate to page "http://localhost:2368/ghost/#/signin"
And I wait for 2 seconds
When I enter email "<EMAIL>"
And I enter password "<PWD>"
And I click sign in
And I wait for 2 seconds

And I click on the link named "Pages"
And I click on the link named "New page"
And I type on the keyboard "$string_1"
And I hit the tab key on the keyboard
And I type on the keyboard "$string_2"
And I click the button with class ".settings-menu-toggle"
And I write "$string_3" on the input "#url"
And I wait for 1 seconds
And I click on the button named "Publish"
And I wait for 1 seconds
And I click on the button named "Continue, final review →"
And I wait for 1 seconds
And I click on the button named "Publish page, right now"
And I wait for 5 seconds