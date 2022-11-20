Feature: Delete a Post

@user1 @web
@avoid
Scenario: Delete a Post
//Login first
Given I navigate to page "<URL>"
And I wait for 2 seconds
When I enter email "<EMAIL>" "Version 3.42" "Post" "DeletePost" "1_IngresarEmail"
And I wait for 1 seconds
And I enter password "<PWD>" "Version 3.42" "Post" "DeletePost" "2_IngresarContrasena"
And I wait for 1 seconds
And I click sign in "Version 3.42" "Post" "DeletePost" "3_ClickLogin"
And I wait for 2 seconds

And I click on the link named "Posts" "Version 3.42" "Post" "DeletePost" "4_ClickPost" 
And I wait for 1 seconds
And I click in new post "New post" "Version 3.42" "Post" "DeletePost" "5_ClickNewPost" 
And I wait for 1 seconds
And I type on the keyboard name post "Version 3.42" "Post" "DeletePost" "6_IngresarTitulo"
And I wait for 1 seconds
And I type on the keyboard "$string_1" "Version 3.42" "Post" "DeletePost" "7_IngresarTitulo"
And I wait for 1 seconds
And I hit the tab key on the keyboard "Version 3.42" "Post" "DeletePost" "8_IngresarTab"
And I wait for 1 seconds
And I type on the keyboard "$string_2" "Version 3.42" "Post" "DeletePost" "9_IngrearDescripcion"
And I wait for 1 seconds
And I click on the button post named "Publish" "Version 3.42" "Post" "DeletePost" "10_ClickPublicar"
And I wait for 1 seconds
And I click on the button named publish confirm "Version 3.42" "Post" "DeletePost" "11_ClickPublicarS"
And I wait for 1 seconds
And I type on the keyboard name post "Version 3.42" "Post" "DeletePost" "12_ClickTitulo"
And I wait for 1 seconds
And I type on the keyboard name post "Version 3.42" "Post" "DeletePost" "13_ClickTitulo"
And I wait for 1 seconds
And I click on the link named "Posts" "Version 3.42" "Post" "DeletePost" "14_ClickPostkBack"
And I wait for 1 seconds
And I click on the link variable "$$string_1" "Version 3.42" "Post" "DeletePost" "15_ClickVariable"
And I wait for 1 seconds
And I click the button named delete settings "Version 3.42" "Post" "DeletePost" "16_ClickSetting"
And I wait for 1 seconds
And I click on the button named delete post "Version 3.42" "Post" "DeletePost" "17_ClickDelete"
And I wait for 1 seconds
And I click on the button confirm delete page named "Delete" "Version 3.42" "Post" "DeletePost" "18_ClickConfirmDeletePage"
And I wait for 1 seconds
And I click on the link named "Posts" "Version 3.42" "Post" "DeletePost" "19_ClickPostConfirm"

Then I wait for 5 seconds