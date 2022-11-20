Feature: Unpublish Post

@user1 @web
@avoid
Scenario: Unpublish a Post
//Login first
Given I navigate to page "<URL>"
And I wait for 2 seconds
When I enter email "<EMAIL>" "Version 5.22.10" "Post" "UnpublishPost" "IngresarEmail"
And I wait for 1 seconds
And I enter password "<PWD>" "Version 5.22.10" "Post" "UnpublishPost" "IngresarContrasena"
And I wait for 1 seconds
And I click sign in "Version 5.22.10" "Post" "UnpublishPost" "ClickLogin"
And I wait for 2 seconds

And I click on the link named "Posts" "Version 5.22.10" "Post" "UnpublishPost" "ClickPost" 
And I wait for 1 seconds
And I click in new post "New post" "Version 5.22.10" "Post" "UnpublishPost" "ClickNewPost" 
And I wait for 1 seconds
And I type on the keyboard "$string_1" "Version 5.22.10" "Post" "UnpublishPost" "IngresarTitulo"
And I wait for 1 seconds
And I hit the tab key on the keyboard "Version 5.22.10" "Post" "UnpublishPost" "IngresarTab"
And I wait for 1 seconds
And I type on the keyboard "$string_2" "Version 5.22.10" "Post" "UnpublishPost" "IngrearDescripcion"
And I wait for 1 seconds
And I click on the button post named "Publish" "Version 5.22.10" "Post" "UnpublishPost" "ClickPublicar"
And I wait for 1 seconds
And I click on the button named "Continue, final review →" "Version 5.22.10" "Post" "UnpublishPost" "ClickPublicarS"
And I wait for 1 seconds
And I click on the button named "Publish & send, right now" "Version 5.22.10" "Post" "UnpublishPost" "ClickRigh"
And I wait for 1 seconds
And I click on the button named "Back to editor" "Version 5.22.10" "Post" "UnpublishPost" "ClickBack"
And I wait for 1 seconds
And I click on the button named "Posts" "Version 5.22.10" "Post" "UnpublishPost" "ClickPostkBack"
And I wait for 1 seconds
And I click on the link variable "$$string_1" "Version 5.22.10" "Post" "UnpublishPost" "ClickVariable"
And I wait for 1 seconds
And I click on the button named "Unpublish" "Version 5.22.10" "Post" "UnpublishPost" "ClickUnpublish"
And I wait for 1 seconds
And I click on the button named "Unpublish and revert to private draft →" "Version 5.22.10" "Post" "UnpublishPost" "ClickUnpublishPrivate"
And I wait for 1 seconds
And I click on the link named "Posts" "Version 5.22.10" "Post" "UnpublishPost" "ClickPostConfirm"

Then I wait for 5 seconds

