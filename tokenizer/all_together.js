function Tokenizer(text) {
}

Tokenizer.prototype.run = function(text) {
	formattedText = this.prepareCodeForTokenization(text);
	tokens = this.getTokenLines(formattedText);
	return tokens;
}

Tokenizer.prototype.prepareCodeForTokenization = function(text) {
	text = this.stripComments(text);
	text = this.trimWhitespace(text);
	text = this.resetNewlines(text);
	text = this.padTokens(text);
	//text = this.convertToLine(text);
	return text;
}