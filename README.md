# 52135
Proyecto analizador materia Sintaxis y Semántica de los Lenguajes

# Instalación:
Clona este repositorio: git clone https://github.com/GaBoLkn/52135

# Prerrequisitos:
Para poder utilizar este analizador y mostrar el arbol de manera gráfica, deberemos tener instalado Visual Studio Code con la extensión de ANTLR4, de lo contrario solo podremos ver el arbol de la gramática en formato de texto.

# Instrucciones de Uso:
Para poder usar el analizador debemos correr el archivo de JavaScript "index.js". Para cambiar el archivo de ejemplo que tomará el programa debemos modificar el nombre del archivo a leer en la linea 13 del código.

Cabe aclarar que debido a que la gramática en UTF-8 no detecta los caracteres del código ascii tuve que hacer algunas modificaciones a la hora de definir los lexemas, es por eso que a la hora de realizar las pruebas tiene que tener en cuenta que los lexemas correctos son los siguientes:

Implicación: '->'

Disyunción: '+'

Conjunción: '.'

Negación: '-'

Estas modificaciones no afectan en nada a la gramática ya que funciona exactamente como debería pero con la diferencia de que cambian estos símbolos.

# Nota:
Al correr el programa se mostrará el arbol en formato de texto en la terminal, si queremos generarlo de manera gráfica con la extensión de ANTLR4 de visual studio, deberemos cambiar en la configuración de la extensión el archivo de texto a leer, que por defecto es 'input.txt'.

Dentro de este 'input.txt' se encuentra el ejemplo de código que venia con la gramática.

Si cambiamos este por alguno de los input tanto correctos como incorrectos que se encuentran dentro de la carpeta ssl-antlr-calculator podremos ver los distintos inputs ya sean correctos o no.

![image](https://github.com/user-attachments/assets/42007a19-1c4a-401b-bc82-aa6edbcc31a0)
