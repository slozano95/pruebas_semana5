# pruebas_semana5
## Integrantes del Grupo
|  Nombres  | Correo  |  
|---|---|
| Leidy Beltrán Romero  | lt.beltranr1@uniandes.edu.co  |
| Santiago Lozano R  |  ssa.lozanolo@uniandes.edu.co |
| Richard Alexander Acevedo Ramírez   | r.acevedor@uniandes.edu.co   | 
| Oscar Arley Sanchez | oa.sanchez2@uniandes.edu.co |

## Pros y Contras
[Wiki](https://github.com/slozano95/pruebas_semana5/wiki)

## Funcionalidades bajo pruebas
* Funcionalidades Posts
* Funcionalidades Paginas
* Funcionalidades Tags
* Funcionalidades Miembros 
* Funcionalidades Login

## Escenarios de pruebas
### 1. Escenarios Post
 * Crear un nuevo post
 * Editar un post
 * Eliminar un post
 * Publicar un post
 * Despublicar un post
### 2. Escenarios Paginas
* Crear un nuevo pagina
* Editar un pagina
* Eliminar un pagina
### 3. Escenarios Tags
 * Crear un nuevo tag
 * Editar un tag
 * Eliminar un tag
 * Editar meta data de un tag
 * Editar tag con un nombre largo
### 4. Escenarios Miembros
 * Crear un nuevo Miembro
 * Crear un Miembro incorrecto
 * Editar un Miembro
 * Eliminar un Miembro
### 5. Escenarios Login
 * Usuario incorrecto
 * Password incorrecta 

## Acceso Script de pruebas por Herramienta
## Cypress
### 1. Escenarios Post
 * [Crear un nuevo post](https://github.com/slozano95/pruebas_semana5/blob/main/monkey-cypress/cypress/e2e/monkey/createPost.cy.js)
 * [Editar un post](https://github.com/slozano95/pruebas_semana5/blob/main/monkey-cypress/cypress/e2e/monkey/editPost.cy.js)
 * [Eliminar un post](https://github.com/slozano95/pruebas_semana5/blob/main/monkey-cypress/cypress/e2e/monkey/deletePost.cy.js)
 * [Publicar un post](https://github.com/slozano95/pruebas_semana5/blob/main/monkey-cypress/cypress/e2e/monkey/publishPost.cy.js)
 * [Despublicar un post](https://github.com/slozano95/pruebas_semana5/blob/main/monkey-cypress/cypress/e2e/monkey/unpublishPost.cy.js)

### 2. Escenarios Paginas
* [5 escenarios](https://github.com/slozano95/pruebas_semana5/blob/main/monkey-cypress/cypress/e2e/monkey/page-feature.js)
### 3. Escenarios Tags
 * [Crear un nuevo tag](https://github.com/slozano95/pruebas_semana5/blob/main/monkey-cypress/cypress/e2e/monkey/ghost_create_tag.cy.js)
 * [Editar un tag](https://github.com/slozano95/pruebas_semana5/blob/main/monkey-cypress/cypress/e2e/monkey/ghost_edit_tag.cy.js)
 * [Eliminar un tag](https://github.com/slozano95/pruebas_semana5/blob/main/monkey-cypress/cypress/e2e/monkey/ghost_delete_tag.cy.js)
 * [Editar meta data de un tag](https://github.com/slozano95/pruebas_semana5/blob/main/monkey-cypress/cypress/e2e/monkey/ghost_edit_meta_data_tag.cy.js)
 * [Editar tag con un nombre largo](https://github.com/slozano95/pruebas_semana5/blob/main/monkey-cypress/cypress/e2e/monkey/ghost_edit_tag_long_name.cy.js)
### 4. Escenarios Miembros
 * [Crear un nuevo Miembro](https://github.com/slozano95/pruebas_semana5/blob/main/monkey-cypress/cypress/e2e/monkey/createMember.cy.js)
 * [Crear un Miembro Incorrecto](https://github.com/slozano95/pruebas_semana5/blob/main/monkey-cypress/cypress/e2e/monkey/createFailedMember.cy.js)
 * [Editar un Miembro](https://github.com/slozano95/pruebas_semana5/blob/main/monkey-cypress/cypress/e2e/monkey/editMember.cy.js)
 * [Eliminar un Miembro](https://github.com/slozano95/pruebas_semana5/blob/main/monkey-cypress/cypress/e2e/monkey/deleteMember.cy.js)

### 5. Escenarios Login
 * [Usuario incorrecto](https://github.com/slozano95/pruebas_semana5/blob/main/kraken/features/ghost_login_user_incorrect.feature)
 * [Password incorrecta](https://github.com/slozano95/pruebas_semana5/blob/main/monkey-cypress/cypress/e2e/monkey/loginFailedIncorrectPassword.cy.js)
 * [Cambiar Contraseña](https://github.com/slozano95/pruebas_semana5/blob/main/monkey-cypress/cypress/e2e/monkey/ghost_change_password.cy.js)

## Kraken
### 1. Escenarios Post
 * [Crear un nuevo post](https://github.com/slozano95/pruebas_semana5/blob/main/kraken/features/ghost_create_post.feature)
 * [Editar un post](https://github.com/slozano95/pruebas_semana5/blob/main/monkey-cypress/cypress/e2e/monkey/ghost_edit_tag.cy.js)
 * [Eliminar un post](https://github.com/slozano95/pruebas_semana5/blob/main/kraken/features/ghost_delete_post.feature)
 * [Publicar un post](https://github.com/slozano95/pruebas_semana5/blob/main/kraken/features/ghost_publish_post.feature)
 * [Despublicar un post](https://github.com/slozano95/pruebas_semana5/blob/main/kraken/features/ghost_unpublish_post.feature)

### 2. Escenarios Paginas
* [5 escenarios](https://github.com/slozano95/pruebas_semana5/blob/main/kraken/features/ghost_create_page.feature)
### 3. Escenarios Tags
 * [Crear un nuevo tag](https://github.com/slozano95/pruebas_semana5/blob/main/kraken/features/ghost_create_tag.feature)
 * [Editar un tag](https://github.com/slozano95/pruebas_semana5/blob/main/kraken/features/ghost_edit_tag.feature)
 * [Eliminar un tag](https://github.com/slozano95/pruebas_semana5/blob/main/kraken/features/ghost_delete_tag.feature)
 * [Editar meta data de un tag](https://github.com/slozano95/pruebas_semana5/blob/main/kraken/features/ghost_edit_meta_data_tag.feature)
 * [Editar tag con un nombre largo](https://github.com/slozano95/pruebas_semana5/blob/main/kraken/features/ghost_edit_tag_long_name.feature)
### 4. Escenarios Miembros
 * [Crear un nuevo Miembro](https://github.com/slozano95/pruebas_semana5/blob/main/kraken/features/ghost_create_MEMBER.feature)
 * [Crear un Miembro Incorrecto](https://github.com/slozano95/pruebas_semana5/blob/main/kraken/features/ghost_create_incorrect_MEMBER.feature)
 * [Editar un Miembro](https://github.com/slozano95/pruebas_semana5/blob/main/kraken/features/ghost_edit_MEMBER.feature)
 * [Eliminar un Miembro](https://github.com/slozano95/pruebas_semana5/blob/main/kraken/features/ghost_delete_MEMBER.feature)

### 5. Escenarios Login
 * [Usuario incorrecto](https://github.com/slozano95/pruebas_semana5/blob/main/kraken/features/ghost_login_user_incorrect.feature)
 * [Password incorrecta](https://github.com/slozano95/pruebas_semana5/blob/main/kraken/features/ghost_login_password_incorrect_R.feature)
 * [Cambiar Contraseña](https://github.com/slozano95/pruebas_semana5/blob/main/kraken/features/ghost_change_password.feature)
