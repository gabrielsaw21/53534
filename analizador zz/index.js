import SimpleLangLexer from "./generated/SimpleLangLexer.js";
import SimpleLangParser from "./generated/SimpleLangParser.js";
import CustomSimpleLangVisitor from "./CustomSimpleLangVisitor.js";

import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import readline from "readline";
import fs from "fs";

async function main() {
    console.log("Programa iniciado");
    let input;

    // Intento leer la entrada desde input.txt
    try {
        input = fs.readFileSync("input.txt", "utf8");
    } catch (err) {

        // Si no existe el archivo, pedir entrada por teclado
        input = await leerCadena();
        console.log(input);
    }

    // Crear stream de entrada
    let inputStream = CharStreams.fromString(input);

    // Crear lexer
    let lexer = new SimpleLangLexer(inputStream);

    // Verificar tokens generados
    console.log("Verificando tokens generados por el lexer...");

    const tokens = lexer.getAllTokens();

    if (tokens.length === 0) {
        console.error(
            "No se generaron tokens. Verifica la entrada y la gramática."
        );
        return;
    }

    // Mostrar tabla de tokens y lexemas
    console.log("\nTabla de Tokens y Lexemas:");
    console.log("--------------------------------------------------");
    console.log("| Lexema         | Token                         |");
    console.log("--------------------------------------------------");

    for (let token of tokens) {

        // Nombre simbólico del token
        const tokenType =
            SimpleLangLexer.symbolicNames[token.type] ||
            `UNKNOWN (${token.type})`;

        // Lexema
        const lexema = token.text;

        console.log(
            `| ${lexema.padEnd(14)} | ${tokenType.padEnd(30)}|`
        );
    }

    console.log("--------------------------------------------------");

    /*
     * Volver a procesar la entrada porque getAllTokens()
     * consume todos los tokens del lexer.
     */

    inputStream = CharStreams.fromString(input);

    lexer = new SimpleLangLexer(inputStream);

    const tokenStream = new CommonTokenStream(lexer);

    const parser = new SimpleLangParser(tokenStream);

    // Regla inicial
    const tree = parser.prog();

    // Verificar errores sintácticos
    if (parser.syntaxErrorsCount > 0) {

        console.error(
            "\nSe encontraron errores de sintaxis en la entrada."
        );

    } else {

        console.log("\nEntrada válida.");

        // Mostrar árbol de derivación
        const cadena_tree = tree.toStringTree(parser.ruleNames);

        console.log(`Árbol de derivación: ${cadena_tree}`);

        /*
         * Utilizar visitor para recorrer el árbol
         * e implementar la semántica.
         */

        const visitor = new CustomSimpleLangVisitor();

        visitor.visit(tree);
    }
}

// Función para leer entrada desde teclado
function leerCadena() {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {

        rl.question("Ingrese una cadena: ", (answer) => {

            rl.close();

            resolve(answer);
        });
    });
}
main().catch(console.error);