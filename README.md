# 52135
Proyecto analizador materia Sintaxis y Semántica de los Lenguajes

# Instalación:
Clona este repositorio poniendo la siguiente instrucción en el CMD: git clone https://github.com/GaBoLkn/52135.git

# Prerrequisitos:
Para poder utilizar este analizador y mostrar el árbol de manera gráfica, deberemos tener instalado Visual Studio Code con la extensión de ANTLR4, de lo contrario solo podremos ver el árbol de la gramática en formato de texto.

Y para poder ejecutar el archivo index.js necesitaremos tener node.js instalado.

# Instrucciones de Uso:
Para poder usar el analizador debemos correr el archivo de JavaScript "index.js". Para cambiar el archivo de ejemplo que tomará el programa debemos modificar el contenido dentro del archivo input.txt con alguno de los contenidos de los archivos .txt que estan en este mismo repositorio.

Cabe aclarar que debido a que la gramática en UTF-8 no detecta los caracteres del código ascii tuve que hacer algunas modificaciones a la hora de definir los lexemas, es por eso que a la hora de realizar las pruebas tiene que tener en cuenta que los lexemas correctos son los siguientes:

Implicación: '->'

Disyunción: '+'

Conjunción: '.'

Negación: '-'

Estas modificaciones no afectan en nada a la gramática ya que funciona exactamente como debería pero con la diferencia de que cambian estos símbolos.

Para correr el programa vamos a tener que abrir la terminal de visual studio code y poner el siguiente comando "node index.js".
![image](https://github.com/user-attachments/assets/54093c48-7c55-411b-ac66-3fa6f3e5012c)

Una vez se ejecute el programa vamos a poder ver todos los puntos del ejercicio en la terminal del visual.

#1- Realizar el análisis lexico y sintáctico: 
Si el código es correcto se mostrara lo siguiente

![image](https://github.com/user-attachments/assets/4620337b-c519-490a-bafb-62f5b70e08fe)

En caso de no serlo se mostrara lo siguiente:

![image](https://github.com/user-attachments/assets/30f5d16d-aeb0-4788-9c06-283e6990c8c2)


#2- Tabla de lexemas-tokens: 
Esta tabla se podra ver tambien en la terminal del visual una vez ejecutado el programa sin importar si la cadena de entrada es o no correcta.

![image](https://github.com/user-attachments/assets/7fda45fd-56ab-4cb3-a0db-424bdc1fae25)

**Siendo el NEWLINE el encargado de verificar si hay otra cadena distinta o ya termino ahí el programa**

#3- Árbol de análisis sintáctico:
Se podra ver de forma textual en la terminal del visual de esta manera:

![image](https://github.com/user-attachments/assets/32371a99-8693-44f3-81b6-ee2375f7ef64)

Si se quiere ver de forma gráfica vamos a tener que tocar la tecla F5 en el teclado para que con la extensión de ANTLR4 se pueda ver a la derecha de la pantalla.
**Si el F5 no funciona pruebe con Fn + F5**

![image](https://github.com/user-attachments/assets/1a901225-f413-4e01-8d65-2d8785786840)

#4- Interpretación-Traducción a JavaScript:
Esta se realiza en el archivo CustomCalculatorVisitor.js pero se muestra en la terminal cuando se ejecuta el index.js y la entrada es correcta.
Se deberá ver de esta manera: 

![image](https://github.com/user-attachments/assets/792ceada-5584-48d3-ad60-56c65ad6c3a8)
