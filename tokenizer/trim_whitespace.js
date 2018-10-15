Tokenizer.prototype.trimWhitespace = function(text) {
	cleanedText = text.replace(/\n+/g, "\n");
	//spacesToTabs = singleLine.replace(/    /g, "\t");
	cleanedText = cleanedText.replace(/[ ]+/g, " ");
	cleanedText = cleanedText.trim();
	return cleanedText;
}
