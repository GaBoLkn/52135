grammar Calculator;

//Gramatica
prog: formula+;

formula: implicacion NEWLINE?;

implicacion:disyuncion (IMPLICATION implicacion)?;

disyuncion: conjuncion (DISJUNCTION conjuncion)*;

conjuncion: negacion (CONJUNCTION negacion)*;

negacion: NEGATION negacion
        |primario
        ;

primario: variable
        | LPAREN formula RPAREN
        ;

variable: LETTER (variable_char)*;

variable_char: LETTER
             | DIGIT
             ;

//Lexemas

IMPLICATION: '->';
DISJUNCTION: '+';
CONJUNCTION: '.';
NEGATION: '-';
LETTER : [a-zA-Z];
DIGIT : [0-9];
LPAREN : '(';
RPAREN : ')';
NEWLINE:'\r'? '\n';
WS: [ \t]+ -> skip;