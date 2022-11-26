# Instrucciones de ejecución de pruebas en Kraken Version 5.22.10

Por favor asegurese de instalar las dependencias requeridas, las puede consultar [aca](https://github.com/slozano95/pruebas_semana5/#versiones-de-software-requeridas).
Es importante que adicional a las dependencias mencionadas, tenga instalado:

Android Studio + SDK
Appium, este se instala con el comando npm install -g appium

Pasos de ejecución de pruebas
- Descargue el repositorio con el comando git clone https://github.com/slozano95/pruebas_semana5
- Navegue en la terminal hasta la carpeta 'kraken' con el comando cd kraken
- Note que dentro de la carpeta de features existen varios archivos que NO tienen la extensión .feature.
- Dado que Kraken no permite la ejecución de varios tests en serie, usted deberá modificar la extensión de las prueba que requiera ejecutar y asegurarse que sea '.feature'.
Ejemplo:
Nombre original del archivo: MEMBER_ghost_create.featur
Nombre que debe quedar para poder ejecutar la prueba: MEMBER_ghost_create.feature
Es importante, por lo mencionado anteriormente, que exista un único archivo con la extensión '.feature', por lo tanto, si está probando múltiples archivos no olvide ir ajustando la extensión de los archivos.
Ejecute el comando ./node_modules/kraken-node/bin/kraken-node run
