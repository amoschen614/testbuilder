// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
	var numDigits = cardNumber.length;
	switch(numDigits) {
		case 12: return null;
		case 13: return selectNetwork(['Visa'], cardNumber);
		case 14: return selectNetwork(['Diner\'s Club'], cardNumber);
		case 15: return selectNetwork(['American Express'], cardNumber);
		case 16: return selectNetwork(['MasterCard', 'Visa', 'Discover'], cardNumber);
		case 17: return null;
		case 18: return null;
		case 19: return selectNetwork(['Visa', 'Discover'], cardNumber);
		default: return null;
	}
}

var selectNetwork = function(networkNames, cardNumber) {
	for (var i = 0; i < networkNames.length; i++) {
		if (isValidPrefix(cardPrefixes[networkNames[i]], cardNumber)) {
			return networkNames[i];
		}
	}
	return null;
}

var isValidPrefix = function(validPrefixes, cardNumber) {
	for (var i = 0; i < validPrefixes.length; i++) {
		if (cardNumber.startsWith(validPrefixes[i])) {
			return true;
		}
	}
	return false;
}

var cardPrefixes = {
	'Diner\'s Club': ['38', '39'],
	'American Express': ['34', '37'],
	'MasterCard': ['51', '52', '53', '54', '55'],
	'Visa': ['4'],
	'Discover': ['6011', '644', '645', '646', '647', '648', '649', '65']
}


