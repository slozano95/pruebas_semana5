Feature: Unpublish Post

@user1 @web
@avoid
Scenario: Unpublish a Post
//Login first
Given I navigate to page "<URL>"
And I wait for 2 seconds
When I enter email "<EMAIL>"
And I wait for 1 seconds
And I enter password "<PWD>"
And I wait for 1 seconds
And I click sign in
And I wait for 2 seconds

And I click on the link named "Posts"
And I wait for 1 seconds
And I click in new post "New post"
And I wait for 1 seconds
And I type on the keyboard "$string_1"
And I wait for 1 seconds
And I hit the tab key on the keyboard
And I wait for 1 seconds
And I type on the keyboard "$string_2" 
And I wait for 1 seconds
And I click on the button post named "Publish"
And I wait for 1 seconds
And I click on the button named "Continue, final review →"
And I wait for 1 seconds
And I click on the button named "Publish & send, right now"
And I wait for 1 seconds
And I click on the button named "Back to editor"
And I wait for 1 seconds
And I click on the button named "Posts"
And I wait for 1 seconds
And I click on the link variable "$$string_1"
And I wait for 1 seconds
And I click on the button named "Unpublish"
And I wait for 1 seconds
And I click on the button named "Unpublish and revert to private draft →"
And I wait for 1 seconds
And I click on the link named "Posts"

Then I wait for 5 seconds
