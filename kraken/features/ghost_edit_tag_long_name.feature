Feature: Edit Tag

@user1 @web
Scenario: Edit Tag with long name

Given I navigate to page "http://localhost:2368/ghost/#/signin"
And I wait for 2 seconds
When I enter email "<EMAIL>"
And I enter password "<PWD>"
And I click sign in
And I wait for 2 seconds

And I click on the link named "Tags"
And I wait for 1 seconds
And I click on the link named "New tag"
And I wait for 1 seconds
And I enter tag name "<LONG_NAME_TAG>"
And I wait for 1 seconds
And I enter tag slug "$string_1"
And I wait for 1 seconds
And I enter tag description "$string_2"
And I wait for 1 seconds
And I click on the button named "Save"
And I wait for 1 seconds

And I click on the link named "Tags"
And I wait for 1 seconds
And I click on the link variable "<LONG_NAME_TAG>"
And I wait for 1 seconds
And I enter tag name "$name_2"
And I wait for 1 seconds
And I enter tag slug "$string_2"
And I wait for 1 seconds
And I enter tag description "$string_2"
And I wait for 1 seconds
And I click on the button named "Save"
Then I wait for 5 seconds