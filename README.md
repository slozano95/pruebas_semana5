## Instalación Ambiente GHOST para pruebas. ¡ Importante !

* Versión Principal ( 5.22.10 ) - Usada en la semana 5 : Esta se encuentra desplegada en un servidor bajo la siguiente dirección:
     URL: https://pruebasautomatizadas.digitalpress.blog/ghost/#/signin
* Versión Antigua para Regresión Visual ( 3.42 ) : Esta versión requiere seguir unos pasos de instalación para que las pruebas funcionen correctamente:
     [Pasos de Instalación Version 3.42](https://github.com/slozano95/pruebas_semana5/wiki/Instalaci%C3%B3n-GHOST-Versi%C3%B3n-3.42)

## Integrantes del Grupo
|  Nombres  | Correo  |  
|---|---|
| Leidy Beltrán Romero  | richardacevedo98@gmail.com  |
| Santiago Lozano R  |  ssa.lozanolo@uniandes.edu.co |
| Richard Alexander Acevedo Ramírez   | r.acevedor@uniandes.edu.co   | 
| Oscar Arley Sanchez | oa.sanchez2@uniandes.edu.co |

## Indice General Semana 6
 * [Versiones de Software Requeridas](https://github.com/slozano95/pruebas_semana5/#versiones-de-software-requeridas)
 * [Estructura del Proyecto](https://github.com/slozano95/pruebas_semana5/#estructura-del-proyecto)
 * [Descripción de las funcionalidades de Ghost que se incluyen en las pruebas](https://github.com/slozano95/pruebas_semana5/#funcionalidades-bajo-pruebas)
 * [Descripción de Escenarios de Prueba](https://github.com/slozano95/pruebas_semana5/#escenarios-de-pruebas)
 * [10 Escenarios de prueba con la nueva version ghost - Entrega Semana 6](https://github.com/slozano95/pruebas_semana5/tree/main/kraken/features)
 * [Instrucciones para Ejecucion Reporte Visual - Entrega Semana 6](https://github.com/slozano95/pruebas_semana5/wiki/Reporte-Comparaci%C3%B3n-Visual)
 * [Reporte de Referencias Visuales HTML - Entrega Semana 6](https://github.com/slozano95/pruebas_semana5/blob/main/TestResemble/results/2022-11-20T22.02.16.475Z/report.html)
 * [Reporte de Referencias Visuales PDF - Entrega Semana 6](https://github.com/slozano95/pruebas_semana5/blob/main/TestResemble/results/2022-11-20T22.02.16.475Z/VRT%20Report.pdf)
 * [Registro de Incidencias Encontrados - ISSUES - Entrega Semana 6](https://github.com/slozano95/pruebas_semana5/issues)
 * [Pro y Contra Herramientas de comparacion visuales - Entrega Semana 6](https://github.com/slozano95/pruebas_semana5/blob/main/README.md#semana-6)
 * [Codigo Reporte comparacion Visual - Entrega Semana 6](https://github.com/slozano95/pruebas_semana5/tree/main/TestResemble)
 * [Video - Entrega Semana 6]()
 * [Pro y Contra Herramientas de Testing - Entrega Semana 5](https://github.com/slozano95/pruebas_semana5/wiki#pros-y-contras-de-las-herramientas-para-pruebas-e2e-kraken-vs-cypress)

## Semana 6
A continuación presentamos una tabla que muestra algunas pros y contras de las herramientas que se pueden utilizar para realizar regresiones visuales.
|  ResembleJS | BackStopJS |
| ------------ | ------------ |
 |  **PRO** Facilidad de generar reportes, los genera en formato estandar HTML | **CONTRA** Implementación más larga
 | **PRO** Utilización de escenarios | **CONTRA** No los incluye por defecto |
 |**CONTRA** Basado en Puppetter, solo utiliza Chrome | **PRO** Permite extensibilidad a navegadores |
 |**CONTRA** Comparación visual obtenida a partir de la posición absoluta de los pixeles |**CONTRA** Comparación visual obtenida a partir de la posición absoluta de los pixeles |
 |**CONTRA** No se tiene en cuenta contexto alguno|**CONTRA** No se tiene en cuenta contexto alguno|

# Versiones de Software Requeridas
- Ghost: 3.42 y 5.22.10
- Playwright: 1.27.1
- Resemblejs: 4.1.0
- Node: 14.20.1
- npm: 6.14.17
- xpath: ^2.0.1
- Kraken-Node: 1.0.24
- Cypress: ^11.0.1
- Google Chrome: 107.0.5304.107 64 bits
- Windows: Windows 10 64 bits

# Estructura del proyecto
## Monkey-Cypress
-monkey-cypress /cypress/e2e/monkey (Se encuentran los 20 escenarios de pruebas con los scripts para tomas de screenshots correspondientes)

## Kraken
- kraken/features (Contine los features correspondientes a las version 5.22.10)
- kraken 3.42/features (Contine los features correspondientes a las version 3.42 )

## Screenshots
- Screenshots/Version 5.22.10 (Contiene las imagenes correspondientes de las funcionalidades y sus diferentes escenarios para la versión 5.22.10).
- Screenshots/Version 3.42 (Contiene las imagenes correspondientes de las funcionalidades y sus diferentes escenarios para la versión 3.42).

## TestResemble
- TestResemble/results/2022-11-20T22.02.16.475Z/report.html (Reporte de la comparación de pantallazos).

# Funcionalidades Bajo pruebas
* Funcionalidades Posts : Permite la creación de articulos que pueden ser publicados, editados dentro de la Herramienta.
* Funcionalidades Paginas : Permite la creacion de Paginas que pueden ser publicada o editadas.
* Funcionalidades Tags: Son etiquetas que describen el contenido de un post mediante palabras claves las cuales se puende manipular de diferentes maneras
* Funcionalidades Miembros: Permite la Creacion de miembro del ghost publicadores, lectore ect.
* Funcionalidades Login: Este es el inicio de Ghost es importante hacer log-in en el portal.

## Escenarios de pruebas
### 1. Escenarios Post

| Escenario    | Validacion   |
|--------------|--------------|
|Crear un nuevo post  | Log-in     |
|   |Crear post   |
|   |Validar la creación del post     |
| Editar un post  | Log-in  |
|   | editar post existente   |
|   | Validar la edicion del post    |
| Eliminar un post  |Log-in   |
|   | crear un post  |
|   | eliminar un post   |
|   | valicar que no este en la lista de post   |
| Publicar un post  | Log-in   |
|   | Crear un post  |
|   | Publicar post  |
|   | Validar que se encuntre en la lista de post publicados  |
| Despublicar un post   | Log-in   |
|   |  Crear un post   |
|   |  Publicar post |
|   |  Despublicar post |
|   |  validar que el post se encuentre en la lista de despulicar |

### 2. Escenarios Paginas

| Escenario    | Validacion   |
|--------------|--------------|
|Crear nueva página  | Log-in     |
|   | Ir a páginas   |
|   | Crear página   |
|   | Llenar datos  |
|   | Validar la creación de la página     |
| Crear página con url personalizada  | Log-in  |
|   | Ir a páginas   |
|   | Crear página   |
|   | Llenar datos  |
|   | Asignar URL personalizada  |
|   | Validar la creación de la página     |
| Eliminar página  |Log-in   |
|   | Ir a páginas   |
|   | Crear página   |
|   | Llenar datos  |
|   | Editar página  |
|   | Eliminar página  |
|   | Confirmar eliminación  |
| Despublicar una página  | Log-in   |
|   | Ir a páginas   |
|   | Crear página   |
|   | Llenar datos  |
|   | Editar página  |
|   | Despublicar página  |
|   | Confirmar despublicación |

### 3. Escenarios Tags
 | Escenario    | Validacion   |
|--------------|--------------|
|Crear un nuevo tag  | Log-in     |
|   |Crear tag  |
|   |Validar la creación del tag    |
|Editar un tag  | Log-in  |
|   | editar tag   |
|   | Validar la edicion del tag   |
|Eliminar un tag  |Log-in   |
|   | crear un tag  |
|   | Crear tag   |
|   | Eliminar tag   |
|   | valicar que se halla elimanado tag  |
|Editar meta data de un tag  | Log-in   |
|   | Crear un tag  |
|   | editar tag existente |
|   | Validacion edicion del tag meta data |
|Editar tag con un nombre largo   | Log-in   |
|   |  Crear un con nombre largo tag   |
|   |  validar que se visualice el boton save al guardar |

### 4. Escenarios Miembros


| Escenario    | Validación   |
|--------------|--------------|
| Crear nuevo miembro  | Log-in     |
|   | Crear nuevo miembro   |
|   | Llenar datos del miembro   |
|   | Guardar datos  |
|   | Validar la creación del miembro     |
| Crear nuevo miembro  | Log-in     |
|   | Crear nuevo miembro   |
|   | Llenar datos del miembro con email incorrecto  |
|   | Intentar guardar datos  |
|   | Validar la nó creación del miembro     |
| Editar miembro  | Log-in     |
|   | Crear nuevo miembro   |
|   | Llenar datos del miembro   |
|   | Guardar datos  |
|   | Cambiar datos del miembro  |
|   | Guardar datos  |
|   | Validar la edición del miembro     |
| Eliminar miembro  | Log-in     |
|   | Crear nuevo miembro   |
|   | Llenar datos del miembro   |
|   | Guardar datos  |
|   | Eliminar miembro |
|   | Validar la eliminación del miembro     |

### 5. Escenarios Login
| Escenario    | Validacion   |
|--------------|--------------|
|Usuario incorrecto  | Log-in     |
|   | crear un usuario   |
|   | intentar ingresar con otro usuario   |
|   | Validar el no ingreso al la herramienta   |
|Password incorrecta| Log-in  |
|   | crear un usuario   |
|   | ingresar en el login con otra clave   |
|   |Validar el no ingreso al la herramienta   |


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
