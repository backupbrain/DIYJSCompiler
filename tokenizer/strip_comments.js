Tokenizer.prototype.stripComments = function(text) {
	return text.replace(/\/\/[^\n]+/g, "");
}
