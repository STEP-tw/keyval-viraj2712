const Parser = require("./keyValueParser.js");
const strictParseInfoCreator = require("./parseInfoCreator.js").strict;

var StrictParser = function(listOfKeys, caseSensitivityFlag = true) {
  Parser.call(this);
  let sanitisedListOfKeys = listOfKeys || [];
  this.parseInfoCreator = strictParseInfoCreator(sanitisedListOfKeys,caseSensitivityFlag);
}

StrictParser.prototype = Object.create(Parser.prototype);

module.exports = StrictParser;
