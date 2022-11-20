Feature: Create Post

@user1 @web
@avoid
Scenario: Create Post with common data
//Login first
Given I navigate to page "<URL>"
And I wait for 2 seconds
When I enter email "<EMAIL>" "Version 5.22.10" "Post" "CreatePost" "IngresarEmail"
And I wait for 1 seconds
And I enter password "<PWD>" "Version 5.22.10" "Post" "CreatePost" "IngresarContrasena"
And I wait for 1 seconds
And I click sign in "Version 5.22.10" "Post" "CreatePost" "ClickLogin"
And I wait for 2 seconds

And I click on the link named "Posts" "Version 5.22.10" "Post" "CreatePost" "ClickPost" 
And I wait for 1 seconds
And I click in new post "New post" "Version 5.22.10" "Post" "CreatePost" "ClickNewPost" 
And I wait for 1 seconds
And I type on the keyboard "$string_1" "Version 5.22.10" "Post" "CreatePost" "IngresarTitulo"
And I wait for 1 seconds
And I hit the tab key on the keyboard "Version 5.22.10" "Post" "CreatePost" "IngresarTab"
And I wait for 1 seconds
And I type on the keyboard "$string_2" "Version 5.22.10" "Post" "CreatePost" "IngrearDescripcion"
And I wait for 1 seconds
And I click on the link named "Posts" "Version 5.22.10" "Post" "CreatePost" "ClickPostValidar" 

Then I wait for 5 seconds