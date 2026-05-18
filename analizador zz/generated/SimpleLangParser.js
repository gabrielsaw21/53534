// Generated from c:/Users/gabri/Desktop/utn 2do año/tarea analizador/analizador zz/SimpleLang.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import SimpleLangListener from './SimpleLangListener.js';
import SimpleLangVisitor from './SimpleLangVisitor.js';

const serializedATN = [4,1,7,51,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,4,0,18,8,0,11,0,12,0,19,1,0,1,0,1,1,1,1,5,1,
26,8,1,10,1,12,1,29,9,1,1,1,1,1,1,2,1,2,1,2,1,2,3,2,37,8,2,1,3,1,3,3,3,41,
8,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,7,0,0,8,0,2,4,6,8,10,12,14,0,0,46,
0,17,1,0,0,0,2,23,1,0,0,0,4,32,1,0,0,0,6,40,1,0,0,0,8,42,1,0,0,0,10,44,1,
0,0,0,12,46,1,0,0,0,14,48,1,0,0,0,16,18,3,2,1,0,17,16,1,0,0,0,18,19,1,0,
0,0,19,17,1,0,0,0,19,20,1,0,0,0,20,21,1,0,0,0,21,22,5,0,0,1,22,1,1,0,0,0,
23,27,3,8,4,0,24,26,3,4,2,0,25,24,1,0,0,0,26,29,1,0,0,0,27,25,1,0,0,0,27,
28,1,0,0,0,28,30,1,0,0,0,29,27,1,0,0,0,30,31,5,5,0,0,31,3,1,0,0,0,32,33,
5,6,0,0,33,36,3,10,5,0,34,35,5,4,0,0,35,37,3,6,3,0,36,34,1,0,0,0,36,37,1,
0,0,0,37,5,1,0,0,0,38,41,3,12,6,0,39,41,3,14,7,0,40,38,1,0,0,0,40,39,1,0,
0,0,41,7,1,0,0,0,42,43,5,1,0,0,43,9,1,0,0,0,44,45,5,1,0,0,45,11,1,0,0,0,
46,47,5,2,0,0,47,13,1,0,0,0,48,49,5,3,0,0,49,15,1,0,0,0,4,19,27,36,40];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SimpleLangParser extends antlr4.Parser {

    static grammarFileName = "SimpleLang.g4";
    static literalNames = [ null, null, null, null, "'='", "';'", "'-'" ];
    static symbolicNames = [ null, "ID", "NUMBER", "STRING", "ASIGVALOR", 
                             "DELIMITADOR", "INICIADOR", "WS" ];
    static ruleNames = [ "prog", "comando", "opcion", "valor", "nombre", 
                         "id", "numero", "cadena" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SimpleLangParser.ruleNames;
        this.literalNames = SimpleLangParser.literalNames;
        this.symbolicNames = SimpleLangParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SimpleLangParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 16;
	            this.comando();
	            this.state = 19; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	        this.state = 21;
	        this.match(SimpleLangParser.EOF);
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



	comando() {
	    let localctx = new ComandoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, SimpleLangParser.RULE_comando);
	    var _la = 0;
	    try {
	        localctx = new CommandStmtContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this.nombre();
	        this.state = 27;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 24;
	            this.opcion();
	            this.state = 29;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 30;
	        this.match(SimpleLangParser.DELIMITADOR);
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



	opcion() {
	    let localctx = new OpcionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SimpleLangParser.RULE_opcion);
	    var _la = 0;
	    try {
	        localctx = new OptionStmtContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.match(SimpleLangParser.INICIADOR);
	        this.state = 33;
	        this.id();
	        this.state = 36;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 34;
	            this.match(SimpleLangParser.ASIGVALOR);
	            this.state = 35;
	            this.valor();
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



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SimpleLangParser.RULE_valor);
	    try {
	        this.state = 40;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            localctx = new NumberValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 38;
	            this.numero();
	            break;
	        case 3:
	            localctx = new StringValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 39;
	            this.cadena();
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



	nombre() {
	    let localctx = new NombreContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SimpleLangParser.RULE_nombre);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.match(SimpleLangParser.ID);
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



	id() {
	    let localctx = new IdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SimpleLangParser.RULE_id);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(SimpleLangParser.ID);
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



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, SimpleLangParser.RULE_numero);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.match(SimpleLangParser.NUMBER);
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



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, SimpleLangParser.RULE_cadena);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.match(SimpleLangParser.STRING);
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

SimpleLangParser.EOF = antlr4.Token.EOF;
SimpleLangParser.ID = 1;
SimpleLangParser.NUMBER = 2;
SimpleLangParser.STRING = 3;
SimpleLangParser.ASIGVALOR = 4;
SimpleLangParser.DELIMITADOR = 5;
SimpleLangParser.INICIADOR = 6;
SimpleLangParser.WS = 7;

SimpleLangParser.RULE_prog = 0;
SimpleLangParser.RULE_comando = 1;
SimpleLangParser.RULE_opcion = 2;
SimpleLangParser.RULE_valor = 3;
SimpleLangParser.RULE_nombre = 4;
SimpleLangParser.RULE_id = 5;
SimpleLangParser.RULE_numero = 6;
SimpleLangParser.RULE_cadena = 7;

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
        this.ruleIndex = SimpleLangParser.RULE_prog;
    }

	EOF() {
	    return this.getToken(SimpleLangParser.EOF, 0);
	};

	comando = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ComandoContext);
	    } else {
	        return this.getTypedRuleContext(ComandoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComandoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_comando;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class CommandStmtContext extends ComandoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	DELIMITADOR() {
	    return this.getToken(SimpleLangParser.DELIMITADOR, 0);
	};

	opcion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OpcionContext);
	    } else {
	        return this.getTypedRuleContext(OpcionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterCommandStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitCommandStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitCommandStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SimpleLangParser.CommandStmtContext = CommandStmtContext;

class OpcionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_opcion;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class OptionStmtContext extends OpcionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	INICIADOR() {
	    return this.getToken(SimpleLangParser.INICIADOR, 0);
	};

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	ASIGVALOR() {
	    return this.getToken(SimpleLangParser.ASIGVALOR, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterOptionStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitOptionStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitOptionStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SimpleLangParser.OptionStmtContext = OptionStmtContext;

class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_valor;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class StringValueContext extends ValorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterStringValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitStringValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitStringValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SimpleLangParser.StringValueContext = StringValueContext;

class NumberValueContext extends ValorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterNumberValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitNumberValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitNumberValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SimpleLangParser.NumberValueContext = NumberValueContext;

class NombreContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_nombre;
    }

	ID() {
	    return this.getToken(SimpleLangParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterNombre(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitNombre(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitNombre(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_id;
    }

	ID() {
	    return this.getToken(SimpleLangParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterId(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitId(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitId(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_numero;
    }

	NUMBER() {
	    return this.getToken(SimpleLangParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_cadena;
    }

	STRING() {
	    return this.getToken(SimpleLangParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




SimpleLangParser.ProgContext = ProgContext; 
SimpleLangParser.ComandoContext = ComandoContext; 
SimpleLangParser.OpcionContext = OpcionContext; 
SimpleLangParser.ValorContext = ValorContext; 
SimpleLangParser.NombreContext = NombreContext; 
SimpleLangParser.IdContext = IdContext; 
SimpleLangParser.NumeroContext = NumeroContext; 
SimpleLangParser.CadenaContext = CadenaContext; 
