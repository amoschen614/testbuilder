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
	return networkWithLongestPrefix(matches);
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
	},
	{
		name: 'Switch',
		prefixRanges: [[4903, 4903], [4905, 4905], [4911, 4911], [4936, 4936], [564182, 564182], [633110, 633110], [6333, 6333], [6759, 6759]],
		numberLengths: [16, 18, 19]
	}
]
