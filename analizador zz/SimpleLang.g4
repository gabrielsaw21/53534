<<<<<<< HEAD:analizador zz/SimpleLang.g4
grammar SimpleLang;

// Regla inicial
prog
    : comando+ EOF
    ;

// Comando
comando
    : nombre opcion* DELIMITADOR                  #commandStmt
    ;

// Opciones
opcion
    : INICIADOR id (ASIGVALOR valor)?                #optionStmt
    ;

// Valores
valor
    : numero                             #numberValue
    | cadena                             #stringValue
    ;

// Tokens léxicos
nombre
    : ID
    ;

id
    : ID
    ;

numero
    : NUMBER
    ;

cadena
    : STRING
    ;

// TOKENS
ID
    : [a-zA-Z]+
    ;

NUMBER
    : [0-9]+
    ;

STRING
    : '"' (~["\r\n])* '"'
    ;
ASIGVALOR 
    : '='
    ;
DELIMITADOR
    : ';'
    ;
INICIADOR
    : '-'
    ;
// Ignorar espacios y saltos de línea
WS
    : [ \t\r\n]+ -> skip
    ;
=======
<comando> ::= <nombre> { <opcion> } ;

<opcion> ::= "-" <id> [ "=" <valor> ] ;

<valor> ::= <numero> | <cadena> ;

<nombre> ::= [a-zA-Z]+ ;

<id> ::= [a-zA-Z]+ ;

<numero> ::= [0-9]+ ;

<cadena> ::= '"' { <caracter> } '"' ;
>>>>>>> 573f7a37c79959aab3651d79946ac88861dc2ead:gramatica.txt
