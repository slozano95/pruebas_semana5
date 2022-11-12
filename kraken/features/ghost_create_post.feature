Feature: Create Post

@user1 @web
@avoid
Scenario: Create Post with common data
//Login first
Given I navigate to page "http://localhost:2368/ghost/#/signin"
And I wait for 2 seconds
When I enter email post "<EMAIL>"
And I enter password post "<PWD>"
And I click sign in post
And I wait for 2 seconds

And I click on the link named "Posts"
And I wait for 2 seconds
And I click in new post "New post"
And I wait for 2 seconds
And I type on the keyboard "$string_1"
And I hit the tab key on the keyboard
And I wait for 2 seconds
And I type on the keyboard "$string_2" 
And I wait for 2 seconds
And I click on the button post named "Publish"
And I wait for 2 seconds
And I click on the button named "Continue, final review →"
And I wait for 2 seconds
And I click on the button named "Publish post, right now"
Then I wait for 5 seconds

