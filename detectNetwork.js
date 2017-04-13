// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
	var possibleNetworks = collectNetworks(cardNumber);
	var matches = selectNetworkMatches(possibleNetworks, cardNumber);
	var correctNetwork = networkWithLongestPrefix(matches);
	return correctNetwork;
}

var collectNetworks = function(cardNumber) {
	var possibleNetworks = [];
	for (var i = 0; i < cardNetworks.length; i++) {
		for (var j = 0; j < cardNetworks[i].numberLengths.length; j++) {
			if (cardNumber.length === cardNetworks[i].numberLengths[j]) {
				possibleNetworks.push(cardNetworks[i]);
			}
		} 
	}
	return possibleNetworks;
}

var selectNetworkMatches = function(possibleNetworks, cardNumber) {
	var matchingNetworks = [];
	for (var i = 0; i < possibleNetworks.length; i++) {
		if (isValidNetwork(possibleNetworks[i], cardNumber)) {
			matchingNetworks.push(possibleNetworks[i]);
		}
	}
	return matchingNetworks;
}

var isValidNetwork = function(network, cardNumber) {
	for (var i = 0; i < network.prefixRanges.length; i++) {
		for (var j = network.prefixRanges[i][0]; j <= network.prefixRanges[i][1]; j++) {
			if (cardNumber.startsWith('' + j)) {
				return true;
			}
		}
	}
	return false;
}

var networkWithLongestPrefix = function(networkList) {
	var maxLength = -1;
	var networkName = null;
	for (var i = 0; i < networkList.length; i++) {
		for (var j = 0; j < networkList[i].prefixRanges.length; j++) {
			var prefixStr = '' + networkList[i].prefixRanges[j][0];
			if (prefixStr.length > maxLength) {
				maxLength = prefixStr.length;
				networkName = networkList[i].name;
			}
		}
	}
	return networkName;
}


/*
var detectNetwork = function(cardNumber) {
	var numDigits = cardNumber.length;
	switch(numDigits) {
		case 12: return selectNetwork(['Maestro'], cardNumber);
		case 13: return selectNetwork(['Visa', 'Maestro'], cardNumber);
		case 14: return selectNetwork(['Diner\'s Club', 'Maestro'], cardNumber);
		case 15: return selectNetwork(['American Express', 'Maestro'], cardNumber);
		case 16: return selectNetwork(['MasterCard', 'Visa', 'Discover', 'Maestro'], cardNumber);
		case 17: return selectNetwork(['Maestro'], cardNumber);
		case 18: return selectNetwork(['Maestro'], cardNumber);
		case 19: return selectNetwork(['Visa', 'Discover', 'Maestro'], cardNumber);
		default: return null;
	}
}
*/
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
	'Discover': ['6011', '644', '645', '646', '647', '648', '649', '65'],
	'Maestro': ['5018', '5020', '5038', '6304']
}

var cardNetworks = [
	{
		name: 'Diner\'s Club',
		prefixRanges: [[38, 39]],
		numberLengths: [14]
	},
	{
		name: 'American Express',
		prefixRanges: [[34, 34], [37, 37]],
		numberLengths: [15]
	},
	{
		name: 'MasterCard',
		prefixRanges: [[51, 55]],
		numberLengths: [16]
	},
	{
		name: 'Visa',
		prefixRanges: [[4, 4]],
		numberLengths: [13, 16, 19]
	},
	{
		name: 'Discover',
		prefixRanges: [[6011, 6011], [644, 649], [65, 65]],
		numberLengths: [16, 19]
	},
	{
		name: 'Maestro',
		prefixRanges: [[5018, 5018], [5020, 5020], [5038, 5038], [6304, 6304]],
		numberLengths: [12, 13, 14, 15, 16, 17, 18, 19]
	},
	{
		name: 'China UnionPay',
		prefixRanges: [[622126, 622925], [624, 626], [6282, 6288]],
		numberLengths: [16, 17, 18, 19]
	}
]


