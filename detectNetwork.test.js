
var FILL_ME_IN = 'Fill this value in';

describe('Diner\'s Club', function() {

  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });
});

describe('American Express', function() {
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  var assert = chai.assert;

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  var expect = chai.expect;
 
  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  })

  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  })
});

describe('Discover', function() {
  var assert = chai.assert;

  it('has a prefix of 6011 and a length of 16', function() {
    assert(detectNetwork('6011567890123456') === 'Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
    assert(detectNetwork('6011567890123456789') === 'Discover');
  });
  it('has a prefix of 644 and a length of 16', function() {
    assert(detectNetwork('6444567890123456') === 'Discover');
  });
  it('has a prefix of 644 and a length of 19', function() {
    assert(detectNetwork('6444567890123456789') === 'Discover');
  });
  it('has a prefix of 645 and a length of 16', function() {
    assert(detectNetwork('6454567890123456') === 'Discover');
  });
  it('has a prefix of 645 and a length of 19', function() {
    assert(detectNetwork('6454567890123456789') === 'Discover');
  });
  it('has a prefix of 646 and a length of 16', function() {
    assert(detectNetwork('6464567890123456') === 'Discover');
  });
  it('has a prefix of 646 and a length of 19', function() {
    assert(detectNetwork('6464567890123456789') === 'Discover');
  });
  it('has a prefix of 647 and a length of 16', function() {
    assert(detectNetwork('6474567890123456') === 'Discover');
  });
  it('has a prefix of 647 and a length of 19', function() {
    assert(detectNetwork('6474567890123456789') === 'Discover');
  });
  it('has a prefix of 648 and a length of 16', function() {
    assert(detectNetwork('6484567890123456') === 'Discover');
  });
  it('has a prefix of 648 and a length of 19', function() {
    assert(detectNetwork('6484567890123456789') === 'Discover');
  });
  it('has a prefix of 649 and a length of 16', function() {
    assert(detectNetwork('6494567890123456') === 'Discover');
  });
  it('has a prefix of 649 and a length of 19', function() {
    assert(detectNetwork('6494567890123456789') === 'Discover');
  });
  it('has a prefix of 65 and a length of 16', function() {
    assert(detectNetwork('6534567890123456') === 'Discover');
  });
  it('has a prefix of 65 and a length of 19', function() {
    assert(detectNetwork('6534567890123456789') === 'Discover');
  });
});

describe('Maestro', function() {
  var assert = chai.assert;

  it('has a prefix of 5018 and a length of 12', function() {
    assert(detectNetwork('501856789012') === 'Maestro');
  });
  it('has a prefix of 5018 and a length of 13', function() {
    assert(detectNetwork('5018567890123') === 'Maestro');
  });
  it('has a prefix of 5018 and a length of 14', function() {
    assert(detectNetwork('50185678901234') === 'Maestro');
  });
  it('has a prefix of 5018 and a length of 15', function() {
    assert(detectNetwork('501856789012345') === 'Maestro');
  });
  it('has a prefix of 5018 and a length of 16', function() {
    assert(detectNetwork('5018567890123456') === 'Maestro');
  });
  it('has a prefix of 5018 and a length of 17', function() {
    assert(detectNetwork('50185678901234567') === 'Maestro');
  });
  it('has a prefix of 5018 and a length of 18', function() {
    assert(detectNetwork('501856789012345678') === 'Maestro');
  });
  it('has a prefix of 5018 and a length of 19', function() {
    assert(detectNetwork('5018567890123456789') === 'Maestro');
  });
  it('has a prefix of 5020 and a length of 12', function() {
    assert(detectNetwork('502056789012') === 'Maestro');
  });
  it('has a prefix of 5020 and a length of 13', function() {
    assert(detectNetwork('5020567890123') === 'Maestro');
  });
  it('has a prefix of 5020 and a length of 14', function() {
    assert(detectNetwork('50205678901234') === 'Maestro');
  });
  it('has a prefix of 5020 and a length of 15', function() {
    assert(detectNetwork('502056789012345') === 'Maestro');
  });
  it('has a prefix of 5020 and a length of 16', function() {
    assert(detectNetwork('5020567890123456') === 'Maestro');
  });
  it('has a prefix of 5020 and a length of 17', function() {
    assert(detectNetwork('50205678901234567') === 'Maestro');
  });
  it('has a prefix of 5020 and a length of 18', function() {
    assert(detectNetwork('502056789012345678') === 'Maestro');
  });
  it('has a prefix of 5020 and a length of 19', function() {
    assert(detectNetwork('5020567890123456789') === 'Maestro');
  });
  it('has a prefix of 5038 and a length of 12', function() {
    assert(detectNetwork('503856789012') === 'Maestro');
  });
  it('has a prefix of 5038 and a length of 13', function() {
    assert(detectNetwork('5038567890123') === 'Maestro');
  });
  it('has a prefix of 5038 and a length of 14', function() {
    assert(detectNetwork('50385678901234') === 'Maestro');
  });
  it('has a prefix of 5038 and a length of 15', function() {
    assert(detectNetwork('503856789012345') === 'Maestro');
  });
  it('has a prefix of 5038 and a length of 16', function() {
    assert(detectNetwork('5038567890123456') === 'Maestro');
  });
  it('has a prefix of 5038 and a length of 17', function() {
    assert(detectNetwork('50385678901234567') === 'Maestro');
  });
  it('has a prefix of 5038 and a length of 18', function() {
    assert(detectNetwork('503856789012345678') === 'Maestro');
  });
  it('has a prefix of 5038 and a length of 19', function() {
    assert(detectNetwork('5038567890123456789') === 'Maestro');
  });
  it('has a prefix of 6304 and a length of 12', function() {
    assert(detectNetwork('630456789012') === 'Maestro');
  });
  it('has a prefix of 6304 and a length of 13', function() {
    assert(detectNetwork('6304567890123') === 'Maestro');
  });
  it('has a prefix of 6304 and a length of 14', function() {
    assert(detectNetwork('63045678901234') === 'Maestro');
  });
  it('has a prefix of 6304 and a length of 15', function() {
    assert(detectNetwork('630456789012345') === 'Maestro');
  });
  it('has a prefix of 6304 and a length of 16', function() {
    assert(detectNetwork('6304567890123456') === 'Maestro');
  });
  it('has a prefix of 6304 and a length of 17', function() {
    assert(detectNetwork('63045678901234567') === 'Maestro');
  });
  it('has a prefix of 6304 and a length of 18', function() {
    assert(detectNetwork('630456789012345678') === 'Maestro');
  });
  it('has a prefix of 6304 and a length of 19', function() {
    assert(detectNetwork('6304567890123456789') === 'Maestro');
  });
});

describe('China UnionPay', function() {
  var assert = chai.assert;

  for (var i = 622126; i <= 622925; i++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        assert(detectNetwork('' + prefix + '7890123456') === 'China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 17', function() {
        assert(detectNetwork('' + prefix + '78901234567') === 'China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        assert(detectNetwork('' + prefix + '789012345678') === 'China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        assert(detectNetwork('' + prefix + '7890123456789') === 'China UnionPay');
      });
    })(i)
  }
  for (var i = 624; i <= 626; i++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        assert(detectNetwork('' + prefix + '4567890123456') === 'China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 17', function() {
        assert(detectNetwork('' + prefix + '45678901234567') === 'China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        assert(detectNetwork('' + prefix + '456789012345678') === 'China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        assert(detectNetwork('' + prefix + '4567890123456789') === 'China UnionPay');
      });
    })(i)
  }
  for (var i = 6282; i <= 6288; i++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        assert(detectNetwork('' + prefix + '567890123456') === 'China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 17', function() {
        assert(detectNetwork('' + prefix + '5678901234567') === 'China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        assert(detectNetwork('' + prefix + '56789012345678') === 'China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        assert(detectNetwork('' + prefix + '567890123456789') === 'China UnionPay');
      });
    })(i)
  }
});

describe('Switch', function() {
  var assert = chai.assert;

  it('has a prefix of 4903 and a length of 16', function() {
    assert(detectNetwork('4903567890123456') === 'Switch');
  });
  it('has a prefix of 4903 and a length of 18', function() {
    assert(detectNetwork('490356789012345678') === 'Switch');
  });
  it('has a prefix of 4903 and a length of 19', function() {
    assert(detectNetwork('4903567890123456789') === 'Switch');
  });
  it('has a prefix of 4905 and a length of 16', function() {
    assert(detectNetwork('4905567890123456') === 'Switch');
  });
  it('has a prefix of 4905 and a length of 18', function() {
    assert(detectNetwork('490556789012345678') === 'Switch');
  });
  it('has a prefix of 4905 and a length of 19', function() {
    assert(detectNetwork('4905567890123456789') === 'Switch');
  });
  it('has a prefix of 4911 and a length of 16', function() {
    assert(detectNetwork('4911567890123456') === 'Switch');
  });
  it('has a prefix of 4911 and a length of 18', function() {
    assert(detectNetwork('491156789012345678') === 'Switch');
  });
  it('has a prefix of 4911 and a length of 19', function() {
    assert(detectNetwork('4911567890123456789') === 'Switch');
  });
  it('has a prefix of 4936 and a length of 16', function() {
    assert(detectNetwork('4936567890123456') === 'Switch');
  });
  it('has a prefix of 4936 and a length of 18', function() {
    assert(detectNetwork('493656789012345678') === 'Switch');
  });
  it('has a prefix of 4936 and a length of 19', function() {
    assert(detectNetwork('4936567890123456789') === 'Switch');
  });
  it('has a prefix of 564182 and a length of 16', function() {
    assert(detectNetwork('5641827890123456') === 'Switch');
  });
  it('has a prefix of 564182 and a length of 18', function() {
    assert(detectNetwork('564182789012345678') === 'Switch');
  });
  it('has a prefix of 564182 and a length of 19', function() {
    assert(detectNetwork('5641827890123456789') === 'Switch');
  });
  it('has a prefix of 633110 and a length of 16', function() {
    assert(detectNetwork('6331107890123456') === 'Switch');
  });
  it('has a prefix of 633110 and a length of 18', function() {
    assert(detectNetwork('633110789012345678') === 'Switch');
  });
  it('has a prefix of 633110 and a length of 19', function() {
    assert(detectNetwork('6331107890123456789') === 'Switch');
  });
  it('has a prefix of 6333 and a length of 16', function() {
    assert(detectNetwork('6333567890123456') === 'Switch');
  });
  it('has a prefix of 6333 and a length of 18', function() {
    assert(detectNetwork('633356789012345678') === 'Switch');
  });
  it('has a prefix of 6333 and a length of 19', function() {
    assert(detectNetwork('6333567890123456789') === 'Switch');
  });
  it('has a prefix of 6759 and a length of 16', function() {
    assert(detectNetwork('6759567890123456') === 'Switch');
  });
  it('has a prefix of 6759 and a length of 18', function() {
    assert(detectNetwork('675956789012345678') === 'Switch');
  });
  it('has a prefix of 6759 and a length of 19', function() {
    assert(detectNetwork('6759567890123456789') === 'Switch');
  });
});
