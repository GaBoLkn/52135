// Generated from c:/Users/Usuario/ssl-antlr-calculator/Calculator.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,10,50,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,1,0,1,0,1,1,1,1,1,2,1,
2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,3,8,40,8,8,1,8,1,8,1,9,4,9,
45,8,9,11,9,12,9,46,1,9,1,9,0,0,10,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,
9,19,10,1,0,3,2,0,65,90,97,122,1,0,48,57,2,0,9,9,32,32,51,0,1,1,0,0,0,0,
3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,
0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,1,21,1,0,0,0,3,24,1,0,0,0,5,26,1,
0,0,0,7,28,1,0,0,0,9,30,1,0,0,0,11,32,1,0,0,0,13,34,1,0,0,0,15,36,1,0,0,
0,17,39,1,0,0,0,19,44,1,0,0,0,21,22,5,45,0,0,22,23,5,62,0,0,23,2,1,0,0,0,
24,25,5,43,0,0,25,4,1,0,0,0,26,27,5,46,0,0,27,6,1,0,0,0,28,29,5,45,0,0,29,
8,1,0,0,0,30,31,7,0,0,0,31,10,1,0,0,0,32,33,7,1,0,0,33,12,1,0,0,0,34,35,
5,40,0,0,35,14,1,0,0,0,36,37,5,41,0,0,37,16,1,0,0,0,38,40,5,13,0,0,39,38,
1,0,0,0,39,40,1,0,0,0,40,41,1,0,0,0,41,42,5,10,0,0,42,18,1,0,0,0,43,45,7,
2,0,0,44,43,1,0,0,0,45,46,1,0,0,0,46,44,1,0,0,0,46,47,1,0,0,0,47,48,1,0,
0,0,48,49,6,9,0,0,49,20,1,0,0,0,3,0,39,46,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class CalculatorLexer extends antlr4.Lexer {

    static grammarFileName = "Calculator.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'->'", "'+'", "'.'", "'-'", null, null, 
                         "'('", "')'" ];
	static symbolicNames = [ null, "IMPLICATION", "DISJUNCTION", "CONJUNCTION", 
                          "NEGATION", "LETTER", "DIGIT", "LPAREN", "RPAREN", 
                          "NEWLINE", "WS" ];
	static ruleNames = [ "IMPLICATION", "DISJUNCTION", "CONJUNCTION", "NEGATION", 
                      "LETTER", "DIGIT", "LPAREN", "RPAREN", "NEWLINE", 
                      "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

CalculatorLexer.EOF = antlr4.Token.EOF;
CalculatorLexer.IMPLICATION = 1;
CalculatorLexer.DISJUNCTION = 2;
CalculatorLexer.CONJUNCTION = 3;
CalculatorLexer.NEGATION = 4;
CalculatorLexer.LETTER = 5;
CalculatorLexer.DIGIT = 6;
CalculatorLexer.LPAREN = 7;
CalculatorLexer.RPAREN = 8;
CalculatorLexer.NEWLINE = 9;
CalculatorLexer.WS = 10;



