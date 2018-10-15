Tokenizer.prototype.getTokenLines = function(text) {
	lines = text.split("\n");
	tokenLines = [];
	for (var lineId = 0; lineId < lines.length; lineId++) {
		line = lines[lineId];
		//console.log(line);
		tokens = line.split(" ");
		tokenLines.push(tokens);
	}
	return tokenLines;
}
