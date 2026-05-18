import SimpleLangVisitor from "./generated/SimpleLangVisitor.js";

export default class CustomSimpleLangVisitor extends SimpleLangVisitor {

    visitCommandStmt(ctx) {
        console.log("Comando encontrado:", ctx.getText());

        return this.visitChildren(ctx);
    }

}