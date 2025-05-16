import { CharStreams, CommonTokenStream } from "antlr4";
import CalculatorVisitor from "./generated/CalculatorVisitor.js";
import CalculatorParser from "./generated/CalculatorParser.js";
import CalculatorLexer from "./generated/CalculatorLexer.js";

export class CustomCalculatorVisitor extends CalculatorVisitor{

    constructor() {
        super();
        this.memory = new Map();   //Declaro una variable de instancia con una memoria temporal para hacer las reducciones
    } 
    
    visitProg(ctx) {
        return ctx.formula().map(f => this.visit(f)).join("\n");
    }

    visitFormula(ctx) {
        return this.visit(ctx.implicacion());
    }

    visitImplicacion(ctx) {
        if (ctx.implicacion()) {
            // CORREGIDO: uso de template string correctamente
            return `(!(${this.visit(ctx.disyuncion())}) || ${this.visit(ctx.implicacion())})`;
        } else {
            return this.visit(ctx.disyuncion());
        }
    }

    visitDisyuncion(ctx) {
        const partes = ctx.conjuncion().map(c => this.visit(c));
        return partes.join(" || ");
    }

    visitConjuncion(ctx) {
        const partes = ctx.negacion().map(n => this.visit(n));
        return partes.join(" && ");
    }

    visitNegacion(ctx) {
        if (ctx.NEGATION()) {
            // CORREGIDO: uso de template string
            return `!(${this.visit(ctx.negacion())})`;
        } else {
            return this.visit(ctx.primario());
        }
    }

    visitPrimario(ctx) {
        if (ctx.variable()) {
            return this.visit(ctx.variable());
        } else {
            // CORREGIDO: uso de template string
            return `(${this.visit(ctx.formula())})`;
        }
    }

    visitVariable(ctx) {
        return ctx.getText();
    }

    traducir(input) {
    const inputStream = CharStreams.fromString(input);
    const lexer = new CalculatorLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new CalculatorParser(tokenStream);
    const tree = parser.prog();

    return this.visit(tree); // Usamos this, no TraductorVisitor
}
}
