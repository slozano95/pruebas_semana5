Feature: Edit Meta Data Tag

@user1 @web
Scenario: Edit Meta Data Tag with common data

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
And I enter tag name "$name_1"
And I wait for 1 seconds
And I enter tag slug "$string_1"
And I wait for 1 seconds
And I enter tag description "$string_2"
And I wait for 1 seconds
And I click on the button named "Save"
And I wait for 1 seconds

And I click on the link named "Tags"
And I wait for 1 seconds
And I click on the link variable "$$name_1"
And I wait for 1 seconds
And I click on the button named "Expand"
And I wait for 1 seconds
And I enter tag meta-title "$string_3"
And I wait for 1 seconds
And I enter tag meta-description "$string_4"
And I wait for 1 seconds
And I enter tag canonical-url "$url_1"
And I wait for 1 seconds
And I click on the button named "Save"
Then I wait for 5 seconds