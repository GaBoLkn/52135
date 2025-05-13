// Generated from c:/Users/Usuario/ssl-antlr-calculator/Calculator.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import CalculatorListener from './CalculatorListener.js';
import CalculatorVisitor from './CalculatorVisitor.js';

const serializedATN = [4,1,10,70,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,4,0,20,8,0,11,0,12,0,21,1,1,1,1,3,1,
26,8,1,1,2,1,2,1,2,3,2,31,8,2,1,3,1,3,1,3,5,3,36,8,3,10,3,12,3,39,9,3,1,
4,1,4,1,4,5,4,44,8,4,10,4,12,4,47,9,4,1,5,1,5,1,5,3,5,52,8,5,1,6,1,6,1,6,
1,6,1,6,3,6,59,8,6,1,7,1,7,5,7,63,8,7,10,7,12,7,66,9,7,1,8,1,8,1,8,0,0,9,
0,2,4,6,8,10,12,14,16,0,1,1,0,5,6,68,0,19,1,0,0,0,2,23,1,0,0,0,4,27,1,0,
0,0,6,32,1,0,0,0,8,40,1,0,0,0,10,51,1,0,0,0,12,58,1,0,0,0,14,60,1,0,0,0,
16,67,1,0,0,0,18,20,3,2,1,0,19,18,1,0,0,0,20,21,1,0,0,0,21,19,1,0,0,0,21,
22,1,0,0,0,22,1,1,0,0,0,23,25,3,4,2,0,24,26,5,9,0,0,25,24,1,0,0,0,25,26,
1,0,0,0,26,3,1,0,0,0,27,30,3,6,3,0,28,29,5,1,0,0,29,31,3,4,2,0,30,28,1,0,
0,0,30,31,1,0,0,0,31,5,1,0,0,0,32,37,3,8,4,0,33,34,5,2,0,0,34,36,3,8,4,0,
35,33,1,0,0,0,36,39,1,0,0,0,37,35,1,0,0,0,37,38,1,0,0,0,38,7,1,0,0,0,39,
37,1,0,0,0,40,45,3,10,5,0,41,42,5,3,0,0,42,44,3,10,5,0,43,41,1,0,0,0,44,
47,1,0,0,0,45,43,1,0,0,0,45,46,1,0,0,0,46,9,1,0,0,0,47,45,1,0,0,0,48,49,
5,4,0,0,49,52,3,10,5,0,50,52,3,12,6,0,51,48,1,0,0,0,51,50,1,0,0,0,52,11,
1,0,0,0,53,59,3,14,7,0,54,55,5,7,0,0,55,56,3,2,1,0,56,57,5,8,0,0,57,59,1,
0,0,0,58,53,1,0,0,0,58,54,1,0,0,0,59,13,1,0,0,0,60,64,5,5,0,0,61,63,3,16,
8,0,62,61,1,0,0,0,63,66,1,0,0,0,64,62,1,0,0,0,64,65,1,0,0,0,65,15,1,0,0,
0,66,64,1,0,0,0,67,68,7,0,0,0,68,17,1,0,0,0,8,21,25,30,37,45,51,58,64];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CalculatorParser extends antlr4.Parser {

    static grammarFileName = "Calculator.g4";
    static literalNames = [ null, "'->'", "'+'", "'.'", "'-'", null, null, 
                            "'('", "')'" ];
    static symbolicNames = [ null, "IMPLICATION", "DISJUNCTION", "CONJUNCTION", 
                             "NEGATION", "LETTER", "DIGIT", "LPAREN", "RPAREN", 
                             "NEWLINE", "WS" ];
    static ruleNames = [ "prog", "formula", "implicacion", "disyuncion", 
                         "conjuncion", "negacion", "primario", "variable", 
                         "variable_char" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CalculatorParser.ruleNames;
        this.literalNames = CalculatorParser.literalNames;
        this.symbolicNames = CalculatorParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CalculatorParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 18;
	            this.formula();
	            this.state = 21; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 176) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	formula() {
	    let localctx = new FormulaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CalculatorParser.RULE_formula);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this.implicacion();
	        this.state = 25;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 24;
	            this.match(CalculatorParser.NEWLINE);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	implicacion() {
	    let localctx = new ImplicacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CalculatorParser.RULE_implicacion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this.disyuncion();
	        this.state = 30;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 28;
	            this.match(CalculatorParser.IMPLICATION);
	            this.state = 29;
	            this.implicacion();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	disyuncion() {
	    let localctx = new DisyuncionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CalculatorParser.RULE_disyuncion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.conjuncion();
	        this.state = 37;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 33;
	            this.match(CalculatorParser.DISJUNCTION);
	            this.state = 34;
	            this.conjuncion();
	            this.state = 39;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	conjuncion() {
	    let localctx = new ConjuncionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CalculatorParser.RULE_conjuncion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.negacion();
	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 41;
	            this.match(CalculatorParser.CONJUNCTION);
	            this.state = 42;
	            this.negacion();
	            this.state = 47;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	negacion() {
	    let localctx = new NegacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CalculatorParser.RULE_negacion);
	    try {
	        this.state = 51;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 48;
	            this.match(CalculatorParser.NEGATION);
	            this.state = 49;
	            this.negacion();
	            break;
	        case 5:
	        case 7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 50;
	            this.primario();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	primario() {
	    let localctx = new PrimarioContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CalculatorParser.RULE_primario);
	    try {
	        this.state = 58;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 53;
	            this.variable();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 54;
	            this.match(CalculatorParser.LPAREN);
	            this.state = 55;
	            this.formula();
	            this.state = 56;
	            this.match(CalculatorParser.RPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, CalculatorParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.match(CalculatorParser.LETTER);
	        this.state = 64;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 61;
	                this.variable_char(); 
	            }
	            this.state = 66;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable_char() {
	    let localctx = new Variable_charContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, CalculatorParser.RULE_variable_char);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        _la = this._input.LA(1);
	        if(!(_la===5 || _la===6)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

CalculatorParser.EOF = antlr4.Token.EOF;
CalculatorParser.IMPLICATION = 1;
CalculatorParser.DISJUNCTION = 2;
CalculatorParser.CONJUNCTION = 3;
CalculatorParser.NEGATION = 4;
CalculatorParser.LETTER = 5;
CalculatorParser.DIGIT = 6;
CalculatorParser.LPAREN = 7;
CalculatorParser.RPAREN = 8;
CalculatorParser.NEWLINE = 9;
CalculatorParser.WS = 10;

CalculatorParser.RULE_prog = 0;
CalculatorParser.RULE_formula = 1;
CalculatorParser.RULE_implicacion = 2;
CalculatorParser.RULE_disyuncion = 3;
CalculatorParser.RULE_conjuncion = 4;
CalculatorParser.RULE_negacion = 5;
CalculatorParser.RULE_primario = 6;
CalculatorParser.RULE_variable = 7;
CalculatorParser.RULE_variable_char = 8;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_prog;
    }

	formula = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormulaContext);
	    } else {
	        return this.getTypedRuleContext(FormulaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FormulaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_formula;
    }

	implicacion() {
	    return this.getTypedRuleContext(ImplicacionContext,0);
	};

	NEWLINE() {
	    return this.getToken(CalculatorParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImplicacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_implicacion;
    }

	disyuncion() {
	    return this.getTypedRuleContext(DisyuncionContext,0);
	};

	IMPLICATION() {
	    return this.getToken(CalculatorParser.IMPLICATION, 0);
	};

	implicacion() {
	    return this.getTypedRuleContext(ImplicacionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterImplicacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitImplicacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitImplicacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DisyuncionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_disyuncion;
    }

	conjuncion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConjuncionContext);
	    } else {
	        return this.getTypedRuleContext(ConjuncionContext,i);
	    }
	};

	DISJUNCTION = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CalculatorParser.DISJUNCTION);
	    } else {
	        return this.getToken(CalculatorParser.DISJUNCTION, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterDisyuncion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitDisyuncion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitDisyuncion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConjuncionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_conjuncion;
    }

	negacion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NegacionContext);
	    } else {
	        return this.getTypedRuleContext(NegacionContext,i);
	    }
	};

	CONJUNCTION = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CalculatorParser.CONJUNCTION);
	    } else {
	        return this.getToken(CalculatorParser.CONJUNCTION, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterConjuncion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitConjuncion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitConjuncion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NegacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_negacion;
    }

	NEGATION() {
	    return this.getToken(CalculatorParser.NEGATION, 0);
	};

	negacion() {
	    return this.getTypedRuleContext(NegacionContext,0);
	};

	primario() {
	    return this.getTypedRuleContext(PrimarioContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterNegacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitNegacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitNegacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrimarioContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_primario;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	LPAREN() {
	    return this.getToken(CalculatorParser.LPAREN, 0);
	};

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	RPAREN() {
	    return this.getToken(CalculatorParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterPrimario(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitPrimario(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitPrimario(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_variable;
    }

	LETTER() {
	    return this.getToken(CalculatorParser.LETTER, 0);
	};

	variable_char = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Variable_charContext);
	    } else {
	        return this.getTypedRuleContext(Variable_charContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Variable_charContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_variable_char;
    }

	LETTER() {
	    return this.getToken(CalculatorParser.LETTER, 0);
	};

	DIGIT() {
	    return this.getToken(CalculatorParser.DIGIT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterVariable_char(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitVariable_char(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitVariable_char(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




CalculatorParser.ProgContext = ProgContext; 
CalculatorParser.FormulaContext = FormulaContext; 
CalculatorParser.ImplicacionContext = ImplicacionContext; 
CalculatorParser.DisyuncionContext = DisyuncionContext; 
CalculatorParser.ConjuncionContext = ConjuncionContext; 
CalculatorParser.NegacionContext = NegacionContext; 
CalculatorParser.PrimarioContext = PrimarioContext; 
CalculatorParser.VariableContext = VariableContext; 
CalculatorParser.Variable_charContext = Variable_charContext; 
