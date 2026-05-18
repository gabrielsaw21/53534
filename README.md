# Analizador personalizado

Este proyecto implementa un analizador léxico y sintáctico utilizando ANTLR4 y Node.js. Reconoce una porción reducida del lenguaje C, construye el árbol sintáctico, genera una tabla de tokens, y traduce el código a JavaScript para su ejecución.

##  Requisitos

- Node.js (v18 o superior)
- Java instalado (17 o superior para ejecutar ANTLR)
- ANTLR4 (`antlr-4.13.2-complete.jar`) descargado desde: https://www.antlr.org/download/antlr-4.13.2-complete.jar

##  Instalación
1. Abrir cmd desde Windows y abrir una carpeta de facil acceso para guardar el proyeto.
En cmd: algo asi te queda 
```bash
cd C:\Users\gabril\Desktop\prueba_clonacion
```

2. Clonar el repositorio: 
En cmd:
```bash
git clone https://github.com/gabrielsaw21/53534.git
```

3. Instalar las dependencias:
En cmd: 
```bash
cd 53534\analizador zz
```
```bash
npm install
```


4. Generar los archivos ANTLR:
   Abriendo el archivo en visual studio /ANALIZADOR ZZ /SimpleLang , luego abrir terminal y pegar:
-Terminal de visual studio:
```bash
java -jar antlr-4.13.2-complete.jar -Dlanguage=JavaScript -o generated SimpleLang.g4
```

##  Ejecución

Se puede probar el analizador con cualquiera de los archivos de ejemplo modificando `input.txt` o directamente reemplazando su contenido.

-Abrir la terminal de visual studio y pegar:
```bash
node index.js
```

El programa mostrará:

- Tabla de tokens
- Árbol sintáctico
- Código JavaScript traducido
- Resultado de la ejecución
  
+Aclaración: Asegurarse, a la hora de ejecutar el programa, de estar en la carpeta "analizador" ya que de no ser así no se ejecutará el programa.
