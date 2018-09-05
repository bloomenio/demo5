
const port = 80;
const composer_rest_server = "http://localhost:3000/api/";

const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const server = require('http').Server(app);
const io = require('socket.io')(server);
const rp = require('request-promise');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const storage = require('node-persist');

const basicAuth = require('express-basic-auth');

app.use(basicAuth({
    challenge: true,
    users: { 'bloomen': 'secret' }
}));

storage.init({
	dir: 'storage'
});

var api = {
	user: {
		get:(id)=>({
			uri: `${composer_rest_server}User/${id}`,
		    json: true
		}),
		exists:(id)=>({
			uri: `${composer_rest_server}User/${id}`,
		    json: true,
		    method: 'HEAD'
		}),
		sendtokens:(payer, payee, amount)=>({
			uri: `${composer_rest_server}TransferTokensTx`,
		    json: true,
		    method: 'POST',
		    body: {
			  "$class": "bloomen.webtv.TransferTokensTx",
			  "payer": `bloomen.webtv.User#${payer}`,
			  "payee": `bloomen.webtv.User#${payee}`,
			  "amount": amount
			}
		}),
		transactions:(user)=>({
			uri: `${composer_rest_server}TransferTokensTx`,
		    json: true,
		    qs: {
		    	filter: {
		    		where: {
			    		or: [
			    			{payer: `resource:bloomen.webtv.User#${user}`}, 
			    			{payee: `resource:bloomen.webtv.User#${user}`}
		    			]
			    	}
			    }
			}
		})
	},
	products: {
		getAll:()=>({
			uri: `${composer_rest_server}Product`,
		    json: true
		}),
		buy:(consumer, product)=>({
			uri: `${composer_rest_server}BuyProductTx`,
		    json: true,
		    method: 'POST',
		    body: {
			  "$class": "bloomen.webtv.BuyProductTx",
			  "consumer": `resource:bloomen.webtv.User#${consumer}`,
			  "product": `resource:bloomen.webtv.Product#${product}`
			}
		}),
		new:(user, url, title, value, description)=>({
			uri: `${composer_rest_server}Product`,
		    json: true,
		    method: 'POST',
		    body: {
			  "$class": "bloomen.webtv.Product",
			  "productID": url,
			  "title": title,
			  "value": value,
			  "URL": `https://www.youtube.com/embed/${url}`,
			  "description": description,
			  "timesSold": 0,
			  "supplier": `resource:bloomen.webtv.User#${user}`
			}
		}),
		newtx:(url)=>({
			uri: `${composer_rest_server}NewProductTx`,
		    json: true,
		    method: 'POST',
		    body: {
			  "$class": "bloomen.webtv.NewProductTx",
			  "product": `resource:bloomen.webtv.Product#${url}`,
			}
		}),
	}
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
    secret: Number(Math.random()).toString(36).split('.')[1],
    resave: false,
    saveUninitialized: true
}));

app.use(express.static('public/'));

app.get('/:id',async function(req, res) {
 	try{
	 	await rp(api.user.exists(encodeURIComponent(req.params['id'])))
 		req.session.user = req.params;
		res.sendFile(__dirname+'/public/app.html')
 	} catch(e){
        res.sendStatus(404);
 	}
});

app.post('/buyproduct',async function(req, res){
    try{
    	let call = api.products.buy(req.session.user.id, req.body.product);
	console.log(call);
        await rp(call);
        res.sendStatus(200);
    } catch(e) {
    	console.log(e);
    	res.sendStatus(400);
    }
});

app.post('/uploadproduct',async function(req, res){
    try{
    	let url = req.body.url.split("v=")[1].split("&")[0];
    	await rp(api.products.new(req.session.user.id, url, req.body.title, req.body.value, req.body.description));
    	await rp(api.products.newtx(url));
        res.sendStatus(200);
    } catch(e) {
    	console.log(e);
    	res.sendStatus(400);
    }
});

app.post('/loadapp',async function(req, res){
    try {
    	[wallet, products, profile, transactions, users] = await Promise.all([
    		rp(api.user.get(encodeURIComponent(req.session.user.id))),
    		rp(api.products.getAll()),
    		storage.get(req.session.user.id),
    		rp(api.user.transactions(req.session.user.id)),
    		storage.values()
    	]);

    	res.json({wallet, products, profile, transactions, users});
    } catch(e){
    	console.log(e);
        res.sendStatus(404);    	
    }
});

app.post('/saveprofile',async function(req, res){
    try {
    	await storage.set(req.session.user.id, req.body);
        res.sendStatus(200);
    } catch(e){
    	console.log(e);
        res.sendStatus(404);    	
    }
});

app.post('/sendtokens',async function(req, res){
    try {
    	await rp(api.user.sendtokens(req.session.user.id, req.body.receiver, req.body.amount));   	
        res.sendStatus(200);
    } catch(e){
    	console.log(e);
        res.sendStatus(404);    	
    }
});

app.get('/', function(req, res) {
	res.redirect('/CauJnUZTxtRKkx0BfUYPzbwnLPOW83uBZQ7xVGKC7Vc');
});

server.listen(port, () => {
    console.log(`listening on port ${port}`)
});

/*
var blake2 = require('blake2');
var h = blake2.createKeyedHash('blake2b', new Buffer('kwdikos'));
h.update(new Buffer(JSON.stringify({
	firstname: 'Valerios',
	lastname: 'Ajderi',
	email: 'likokeloit@gmail.com',
	tin: 159706610,
	gender: 'male'
})));
console.log(h.digest("base64"));


const argon2 = require('argon2');
hash = argon2.hash(JSON.stringify({
	firstname: 'Valerios',
	lastname: 'Ajderi',
	email: 'likokeloit@gmail.com',
	tin: 159706610,
	gender: 'male'
}).toLowerCase());
*/
