Tokenizer.prototype.resetNewlines = function(text) {
	nlText = text.replace(/\n/g, "").replace(/\;/g, ";\n");
	nlText = nlText.replace(/\}/g, "}\n").replace(/\{/g, "\n{\n");
	nlText = nlText.replace(/\n[ ]+/g, "\n");
	nlText = nlText.replace(/\n$/, "");
	return nlText;
}
