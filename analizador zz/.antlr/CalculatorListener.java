// Generated from c:/Users/gabri/ssl-antlr-calculator/Calculator.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link CalculatorParser}.
 */
public interface CalculatorListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#prog}.
	 * @param ctx the parse tree
	 */
	void enterProg(CalculatorParser.ProgContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#prog}.
	 * @param ctx the parse tree
	 */
	void exitProg(CalculatorParser.ProgContext ctx);
	/**
	 * Enter a parse tree produced by the {@code declarationStat}
	 * labeled alternative in {@link CalculatorParser#stat}.
	 * @param ctx the parse tree
	 */
	void enterDeclarationStat(CalculatorParser.DeclarationStatContext ctx);
	/**
	 * Exit a parse tree produced by the {@code declarationStat}
	 * labeled alternative in {@link CalculatorParser#stat}.
	 * @param ctx the parse tree
	 */
	void exitDeclarationStat(CalculatorParser.DeclarationStatContext ctx);
	/**
	 * Enter a parse tree produced by the {@code assignmentStat}
	 * labeled alternative in {@link CalculatorParser#stat}.
	 * @param ctx the parse tree
	 */
	void enterAssignmentStat(CalculatorParser.AssignmentStatContext ctx);
	/**
	 * Exit a parse tree produced by the {@code assignmentStat}
	 * labeled alternative in {@link CalculatorParser#stat}.
	 * @param ctx the parse tree
	 */
	void exitAssignmentStat(CalculatorParser.AssignmentStatContext ctx);
	/**
	 * Enter a parse tree produced by the {@code expressionStat}
	 * labeled alternative in {@link CalculatorParser#stat}.
	 * @param ctx the parse tree
	 */
	void enterExpressionStat(CalculatorParser.ExpressionStatContext ctx);
	/**
	 * Exit a parse tree produced by the {@code expressionStat}
	 * labeled alternative in {@link CalculatorParser#stat}.
	 * @param ctx the parse tree
	 */
	void exitExpressionStat(CalculatorParser.ExpressionStatContext ctx);
	/**
	 * Enter a parse tree produced by the {@code declaration}
	 * labeled alternative in {@link CalculatorParser#decl}.
	 * @param ctx the parse tree
	 */
	void enterDeclaration(CalculatorParser.DeclarationContext ctx);
	/**
	 * Exit a parse tree produced by the {@code declaration}
	 * labeled alternative in {@link CalculatorParser#decl}.
	 * @param ctx the parse tree
	 */
	void exitDeclaration(CalculatorParser.DeclarationContext ctx);
	/**
	 * Enter a parse tree produced by the {@code assignment}
	 * labeled alternative in {@link CalculatorParser#assign}.
	 * @param ctx the parse tree
	 */
	void enterAssignment(CalculatorParser.AssignmentContext ctx);
	/**
	 * Exit a parse tree produced by the {@code assignment}
	 * labeled alternative in {@link CalculatorParser#assign}.
	 * @param ctx the parse tree
	 */
	void exitAssignment(CalculatorParser.AssignmentContext ctx);
	/**
	 * Enter a parse tree produced by the {@code addSubExpr}
	 * labeled alternative in {@link CalculatorParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterAddSubExpr(CalculatorParser.AddSubExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code addSubExpr}
	 * labeled alternative in {@link CalculatorParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitAddSubExpr(CalculatorParser.AddSubExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code numberExpr}
	 * labeled alternative in {@link CalculatorParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterNumberExpr(CalculatorParser.NumberExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code numberExpr}
	 * labeled alternative in {@link CalculatorParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitNumberExpr(CalculatorParser.NumberExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code mulDivExpr}
	 * labeled alternative in {@link CalculatorParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterMulDivExpr(CalculatorParser.MulDivExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code mulDivExpr}
	 * labeled alternative in {@link CalculatorParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitMulDivExpr(CalculatorParser.MulDivExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code parenExpr}
	 * labeled alternative in {@link CalculatorParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterParenExpr(CalculatorParser.ParenExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code parenExpr}
	 * labeled alternative in {@link CalculatorParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitParenExpr(CalculatorParser.ParenExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code idExpr}
	 * labeled alternative in {@link CalculatorParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterIdExpr(CalculatorParser.IdExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code idExpr}
	 * labeled alternative in {@link CalculatorParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitIdExpr(CalculatorParser.IdExprContext ctx);
}