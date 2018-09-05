const users = [
{ firstname: 'Ella',
  surname: 'Sanders',
  email: 'ellasanders@cognicode.com',
  gender: 'female',
  tin: 862370567,
  hash: '8FBz8NORNzTmWOGpalGlpxmFtJbDMKWjAHw1gr0JMko',
  salt: 'ZzM3Im/e2dOPaE9FN/l3gw',
  preferences: [["purchase list", true], ["recently viewed",true], ["location", true], ["company", false], ["gender", true], ["age", false]]
},
{ firstname: 'Buckner',
  surname: 'Stafford',
  email: 'bucknerstafford@cognicode.com',
  gender: 'male',
  tin: 470470982,
  hash: 'RxgB0YmIrUm5hO0iODIc2Fxxipva+09G8HD7iFmO+uA',
  salt: '6f6in5ZRhWZ3NmdR8Po9zw',
  preferences: [["purchase list", false], ["recently viewed",true], ["location", false], ["company", true], ["gender", true], ["age", false]]
},
{ firstname: 'Simmons',
  surname: 'Kline',
  email: 'simmonskline@cognicode.com',
  gender: 'male',
  tin: 231237242,
  hash: 'UORDUvLT0qzoPrlWsQvYwV1fTXHmW78WftLpMSlv2Ng',
  salt: 'f7M8ttmxpY1GQKLf2rfuBA',
  preferences: [["purchase list", true], ["recently viewed",false], ["location", true], ["company", false], ["gender", true], ["age", false]]
},
{ firstname: 'Shana',
  surname: 'Stevens',
  email: 'shanastevens@cognicode.com',
  gender: 'female',
  tin: 615105111,
  hash: 'OD7MImQATxYv9rtzleoez8E58V8buHHEBKtVqKuid6o',
  salt: 'xQjOL1gmgsXOeaYwwZJy7Q',
  preferences: [["purchase list", true], ["recently viewed",true], ["location", false], ["company", false], ["gender", true], ["age", false]]
},
{ firstname: 'Miller',
  surname: 'Carroll',
  email: 'millercarroll@cognicode.com',
  gender: 'male',
  tin: 274178588,
  hash: 'tQeEXYFFtnOEFN4H562+RG7fDH6hCUGU0NjfsZKI/cg',
  salt: 'jVHEtLEbn5S+CRITE5PKXg',
  preferences: [["purchase list", false], ["recently viewed",true], ["location", false], ["company", false], ["gender", true], ["age", true]]
},
{ firstname: 'Weiss',
  surname: 'Diaz',
  email: 'weissdiaz@cognicode.com',
  gender: 'male',
  tin: 369722824,
  hash: 'CauJnUZTxtRKkx0BfUYPzbwnLPOW83uBZQ7xVGKC7Vc',
  salt: 'UdJoFOUKhZAp/oJnUHGfDQ',
  preferences: [["purchase list", true], ["recently viewed",false], ["location", false], ["company", false], ["gender", true], ["age", false]]
},
{ firstname: 'Delgado',
  surname: 'Christian',
  email: 'delgadochristian@cognicode.com',
  gender: 'male',
  tin: 626333452,
  hash: 'OlXmt7RT0mv/xbZf/n/QVwaLbSs2eftYr/RuuDHJ5L8',
  salt: 'cOgmc9VIB0AeNXwK8Hw7JQ',
  preferences: [["purchase list", true], ["recently viewed",true], ["location", false], ["company", false], ["gender", false], ["age", true]]
},
{ firstname: 'Murray',
  surname: 'Cervantes',
  email: 'murraycervantes@cognicode.com',
  gender: 'male',
  tin: 154461632,
  hash: 'HuXlXTOUfsgxVQ6eM8p1r4fVMZvjVN6CHsmtMp2KL58',
  salt: 'xKselHQRzjTfULnpDkR5Hw',
  preferences: [["purchase list", true], ["recently viewed",true], ["location", false], ["company", false], ["gender", true], ["age", false]]
},
{ firstname: 'Peterson',
  surname: 'Benson',
  email: 'petersonbenson@cognicode.com',
  gender: 'male',
  tin: 607129964,
  hash: 'FM/BQMTORySpPc8Glbr0tg0NVztJWIrLSq/S/BdMv0g',
  salt: '0sfXTo6HQDr2MPwRpGsvKw',
  preferences: [["purchase list", true], ["recently viewed",true], ["location", false], ["company", false], ["gender", true], ["age", false]]
},
{ firstname: 'Bette',
  surname: 'Berger',
  email: 'betteberger@cognicode.com',
  gender: 'female',
  tin: 644624860,
  hash: 'RQBXLMA1DnNj8pX8ntYUWZ2CTqXY4/qHf7PxJdA8hn4',
  salt: 'l3Y7z1z4ppf5eZ4Vx7tAXA',
  preferences: [["purchase list", false], ["recently viewed",true], ["location", false], ["company", true], ["gender", true], ["age", false]]
},
{ firstname: 'Warren',
  surname: 'Nolan',
  email: 'warrennolan@cognicode.com',
  gender: 'male',
  tin: 184516499,
  hash: 'NdQSlT6vK8TgT/TVr7dt8uRd9dwpwTuMKlO+GgzG2bg',
  salt: '+0p+DuN5XkSFWwwA32KkNA',
  preferences: [["purchase list", true], ["recently viewed",true], ["location", true], ["company", false], ["gender", true], ["age", false]]
},
{ firstname: 'Frances',
  surname: 'Finley',
  email: 'francesfinley@cognicode.com',
  gender: 'female',
  tin: 819295724,
  hash: 'jx8SKcpVCuBIVoTlTXyXX+HcFv3UZqUMwic32kW2fqk',
  salt: '0cRwdUJexRYtnDLa19bffg',
  preferences: [["purchase list", true], ["recently viewed",false], ["location", false], ["company", false], ["gender", true], ["age", true]]
},
{ firstname: 'Wanda',
  surname: 'Sheppard',
  email: 'wandasheppard@cognicode.com',
  gender: 'female',
  tin: 430861252,
  hash: 'THC1gnW7+fNA9c+6KX3EGVEg54DWHyosuth1XHYzzBg',
  salt: 'p5EQiX4IbFFPGKMuzY6F5A',
  preferences: [["purchase list", true], ["recently viewed",true], ["location", false], ["company", false], ["gender", true], ["age", true]]
},
{ firstname: 'Brock',
  surname: 'Wiggins',
  email: 'brockwiggins@cognicode.com',
  gender: 'male',
  tin: 947887349,
  hash: 'L7CGhYxEecRRVNynB0AuBiY4ZJEvkzLDAqZbkCQfxds',
  salt: 'YKTf+9pPoxbEwC7r4Jp4BA',
  preferences: [["purchase list", false], ["recently viewed",true], ["location", false], ["company", false], ["gender", true], ["age", false]]
}];

const storage = require('node-persist');

async function write(){
	await storage.init({
		dir: 'storage'
	});

	for(e of users){
		await storage.setItem(e.hash, e);
	}

	console.log('User file persisted to local storage.');
}

write();
