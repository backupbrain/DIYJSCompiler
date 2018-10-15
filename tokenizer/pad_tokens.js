Tokenizer.prototype.padTokens = function(text) {
	tokenized = text.replace(/ ?([,\(\)\/\[\]\+\*\-]+) ?/g, " $1 ");
	tokenized = tokenized.replace(/ ?([,]) ?/g, " $1 ");
	tokenized = tokenized.replace(/- >/g, "->")
	tokenized = tokenized.replace(/ ?(==) ?/g, " $1 ");
	tokenized = tokenized.replace(/;/g, " ;");
	tokenized = tokenized.replace(/\s{2,}/g, " ");
	return tokenized;
}