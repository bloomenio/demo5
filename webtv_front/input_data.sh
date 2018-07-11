#!/bin/bash

curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '[{"$class":"bloomen.webtv.User","hashID":"8FBz8NORNzTmWOGpalGlpxmFtJbDMKWjAHw1gr0JMko","balance":124,"offeredProducts":[],"purchasedProducts":[]},{"$class":"bloomen.webtv.User","hashID":"RxgB0YmIrUm5hO0iODIc2Fxxipva+09G8HD7iFmO+uA","balance":183,"offeredProducts":[],"purchasedProducts":[]},{"$class":"bloomen.webtv.User","hashID":"UORDUvLT0qzoPrlWsQvYwV1fTXHmW78WftLpMSlv2Ng","balance":80,"offeredProducts":[],"purchasedProducts":[]},{"$class":"bloomen.webtv.User","hashID":"OD7MImQATxYv9rtzleoez8E58V8buHHEBKtVqKuid6o","balance":220,"offeredProducts":[],"purchasedProducts":[]},{"$class":"bloomen.webtv.User","hashID":"tQeEXYFFtnOEFN4H562+RG7fDH6hCUGU0NjfsZKI/cg","balance":72,"offeredProducts":[],"purchasedProducts":[]},{"$class":"bloomen.webtv.User","hashID":"CauJnUZTxtRKkx0BfUYPzbwnLPOW83uBZQ7xVGKC7Vc","balance":131,"offeredProducts":[],"purchasedProducts":[]},{"$class":"bloomen.webtv.User","hashID":"OlXmt7RT0mv/xbZf/n/QVwaLbSs2eftYr/RuuDHJ5L8","balance":264,"offeredProducts":[],"purchasedProducts":[]},{"$class":"bloomen.webtv.User","hashID":"HuXlXTOUfsgxVQ6eM8p1r4fVMZvjVN6CHsmtMp2KL58","balance":134,"offeredProducts":[],"purchasedProducts":[]},{"$class":"bloomen.webtv.User","hashID":"FM/BQMTORySpPc8Glbr0tg0NVztJWIrLSq/S/BdMv0g","balance":90,"offeredProducts":[],"purchasedProducts":[]},{"$class":"bloomen.webtv.User","hashID":"RQBXLMA1DnNj8pX8ntYUWZ2CTqXY4/qHf7PxJdA8hn4","balance":296,"offeredProducts":[],"purchasedProducts":[]},{"$class":"bloomen.webtv.User","hashID":"NdQSlT6vK8TgT/TVr7dt8uRd9dwpwTuMKlO+GgzG2bg","balance":204,"offeredProducts":[],"purchasedProducts":[]},{"$class":"bloomen.webtv.User","hashID":"jx8SKcpVCuBIVoTlTXyXX+HcFv3UZqUMwic32kW2fqk","balance":158,"offeredProducts":[],"purchasedProducts":[]},{"$class":"bloomen.webtv.User","hashID":"THC1gnW7+fNA9c+6KX3EGVEg54DWHyosuth1XHYzzBg","balance":95,"offeredProducts":[],"purchasedProducts":[]},{"$class":"bloomen.webtv.User","hashID":"L7CGhYxEecRRVNynB0AuBiY4ZJEvkzLDAqZbkCQfxds","balance":73,"offeredProducts":[],"purchasedProducts":[]}]
' 'http://localhost:3000/api/User'
sleep 5
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '
[
{
	"$class": "bloomen.webtv.Product",
	"productID": "mxhxL1LzKww",
	"title": "Travel INSIDE a Black Hole",
	"value": 0.99,
	"URL": "https://www.youtube.com/embed/mxhxL1LzKww?rel=0",
	"description": "Black holes, light speed travel, and the center of the universe! ",
    "timesSold": 6,
    "supplier": "resource:bloomen.webtv.User#L7CGhYxEecRRVNynB0AuBiY4ZJEvkzLDAqZbkCQfxds"	
}
,
{
	"$class": "bloomen.webtv.Product",
	"productID": "evQsOFQju08",
	"title": "Is Your Red The Same as My Red?",
	"value": 0.99,
	"URL": "https://www.youtube.com/embed/evQsOFQju08?rel=0",
	"description": "Exploring perception of colors",
	"timesSold": 6,
    "supplier": "resource:bloomen.webtv.User#L7CGhYxEecRRVNynB0AuBiY4ZJEvkzLDAqZbkCQfxds"
}
,
{
	"$class": "bloomen.webtv.Product",
	"productID": "DAcjV60RnRw",
	"title": "Will We Ever Run Out of New Music?",
	"value": 0.99,
	"URL": "https://www.youtube.com/embed/DAcjV60RnRw?rel=0",
	"description": "Vsauce",
    "timesSold": 8,
    "supplier": "resource:bloomen.webtv.User#DaesIJK3Hl3JCQ6D/5yH5EQ4jzNXWZjrhY+CQJIbhZ8"
}
,
{
	"$class": "bloomen.webtv.Product",
	"productID": "3teflb1QNN4",
	"title": "What Can You Do Without a Brain?",
	"value": 0.99,
	"URL": "https://www.youtube.com/embed/3teflb1QNN4?rel=0",
	"description": "Vsauce", 
    "timesSold": 7,
    "supplier": "resource:bloomen.webtv.User#CauJnUZTxtRKkx0BfUYPzbwnLPOW83uBZQ7xVGKC7Vc"
}
,
{
	"$class": "bloomen.webtv.Product",
	"productID": "dmeSGwVBoao",
	"title": "Come Be PC - Social Justice: The Musical",
	"value": 0.99,
	"URL": "https://www.youtube.com/embed/dmeSGwVBoao?rel=0",
	"description": "Social Justice The Musical Part IV is a go! A parody of Under the Sea all about Political Correctness. Lets all drown ourselves in tomfoolery!", 
    "timesSold": 10,
    "supplier": "resource:bloomen.webtv.User#CauJnUZTxtRKkx0BfUYPzbwnLPOW83uBZQ7xVGKC7Vc"
}
,
{
	"$class": "bloomen.webtv.Product",
	"productID": "C6eOcd06kdk",
	"title": "How Many Things Are There?",
	"value": 0.99,
	"URL": "https://www.youtube.com/embed/C6eOcd06kdk?rel=0",
	"description": "Vsauce", 
    "timesSold": 3,
    "supplier": "resource:bloomen.webtv.User#L7CGhYxEecRRVNynB0AuBiY4ZJEvkzLDAqZbkCQfxds"
}
,
{
	"$class": "bloomen.webtv.Product",
	"productID": "wBU9N35ZHIw",
	"title": "The Scientific Way to Cut a Cake",
	"value": 0.89,
	"URL": "https://www.youtube.com/embed/wBU9N35ZHIw?rel=0",
	"description": "Numberphile", 
    "timesSold": 5,
    "supplier": "resource:bloomen.webtv.User#8FBz8NORNzTmWOGpalGlpxmFtJbDMKWjAHw1gr0JMko"
}
,
{
	"$class": "bloomen.webtv.Product",
	"productID": "Zh3Yz3PiXZw",
	"title": "Alternative Math | Short Film",
	"value": 0.99,
	"URL": "https://www.youtube.com/embed/Zh3Yz3PiXZw?rel=0",
	"description": "A well meaning math teacher finds herself trumped by a post-fact America.", 
    "timesSold": 6,
    "supplier": "resource:bloomen.webtv.User#8FBz8NORNzTmWOGpalGlpxmFtJbDMKWjAHw1gr0JMko"
}
,
{
	"$class": "bloomen.webtv.Product",
	"productID": "V4V2bpZlqx8",
	"title": "Flaw in the Enigma Code",
	"value": 0.89,
	"URL": "https://www.youtube.com/embed/V4V2bpZlqx8?rel=0",
	"description": "Numberphile", 
    "timesSold": 5,
    "supplier": "resource:bloomen.webtv.User#CauJnUZTxtRKkx0BfUYPzbwnLPOW83uBZQ7xVGKC7Vc"
}
,
{
	"$class": "bloomen.webtv.Product",
	"productID": "R9OHn5ZF4Uo",
	"title": "How Machines Learn",
	"value": 0.79,
	"URL": "https://www.youtube.com/embed/R9OHn5ZF4Uo?rel=0",
	"description": "CGPGrey", 
    "timesSold": 9,
    "supplier": "resource:bloomen.webtv.User#8FBz8NORNzTmWOGpalGlpxmFtJbDMKWjAHw1gr0JMko"
}
,
{
	"$class": "bloomen.webtv.Product",
	"productID": "iHzzSao6ypE",
	"title": "The Simple Solution to Traffic",
	"value": 0.99,
	"URL": "https://www.youtube.com/embed/iHzzSao6ypE?rel=0",
	"description": "CGPGrey", 
    "timesSold": 10,
    "supplier": "resource:bloomen.webtv.User#L7CGhYxEecRRVNynB0AuBiY4ZJEvkzLDAqZbkCQfxds"
}
,
{
	"$class": "bloomen.webtv.Product",
	"productID": "ao8L-0nSYzg",
	"title": "Addiction",
	"value": 1.99,
	"URL": "https://www.youtube.com/embed/ao8L-0nSYzg?rel=0",
	"description": "What causes addiction? Easy, right? Drugs cause addiction. But maybe it is not that simple.", 
    "timesSold": 0,
    "supplier": "resource:bloomen.webtv.User#NdQSlT6vK8TgT/TVr7dt8uRd9dwpwTuMKlO+GgzG2bg"
}
,
{
	"$class": "bloomen.webtv.Product",
	"productID": "kP15q815Saw",
	"title": "3 Arguments Why Marijuana Should Stay Illegal Reviewed",
	"value": 1.99,
	"URL": "https://www.youtube.com/embed/kP15q815Saw?rel=0",
	"description": "We take a fair look at some of the best counter arguments for legalization and see how they hold up in review. ", 
    "timesSold": 0,
    "supplier": "resource:bloomen.webtv.User#DaesIJK3Hl3JCQ6D/5yH5EQ4jzNXWZjrhY+CQJIbhZ8"
}
,
{
	"$class": "bloomen.webtv.Product",
	"productID": "mRzxTzKIsp8",
	"title": "What is Chemical Evolution?",
	"value": 2.99,
	"URL": "https://www.youtube.com/embed/mRzxTzKIsp8?rel=0",
	"description": "Have you ever wondered how life first got started on Earth? So do scientists! ", 
    "timesSold": 2,
    "supplier": "resource:bloomen.webtv.User#DaesIJK3Hl3JCQ6D/5yH5EQ4jzNXWZjrhY+CQJIbhZ8"
}
,
{
	"$class": "bloomen.webtv.Product",
	"productID": "QOCaacO8wus",
	"title": "What Is Life? Is Death Real?",
	"value": 1.99,
	"URL": "https://www.youtube.com/embed/QOCaacO8wus?rel=0",
	"description": "So what is the difference between you and a rock? This seems like an easy, even stupid question. But even the smartest people on earth have no idea where to draw the line between living and dead things. Which leads to mind-blowing implications. What is life after all? And is death really a thing? ", 
    "timesSold": 10,
    "supplier": "resource:bloomen.webtv.User#L7CGhYxEecRRVNynB0AuBiY4ZJEvkzLDAqZbkCQfxds"
}
,
{
	"$class": "bloomen.webtv.Product",
	"productID": "JhHMJCUmq28",
	"title": "Quantum Computers Explained – Limits of Human Technology",
	"value": 1.99,
	"URL": "https://www.youtube.com/embed/JhHMJCUmq28?rel=0",
	"description": "Where are the limits of human technology? And can we somehow avoid them? This is where quantum computers become very interesting.", 
    "timesSold": 0,
    "supplier": "resource:bloomen.webtv.User#NdQSlT6vK8TgT/TVr7dt8uRd9dwpwTuMKlO+GgzG2bg"
}
,
{
	"$class": "bloomen.webtv.Product",
	"productID": "JQVmkDUkZT4",
	"title": "What Are You?",
	"value": 1.99,
	"URL": "https://www.youtube.com/embed/JQVmkDUkZT4?rel=0",
	"description": "So. Are you your body? And if so, how exactly does this work? Lets explore lots of confusing questions.",
    "timesSold": 5,
    "supplier": "resource:bloomen.webtv.User#8FBz8NORNzTmWOGpalGlpxmFtJbDMKWjAHw1gr0JMko"
}
,
{
	"$class": "bloomen.webtv.Product",
	"productID": "2XkV6IpV2Y0",
	"title": "The History and Future of Everything -- Time",
	"value": 1.99,
	"URL": "https://www.youtube.com/embed/2XkV6IpV2Y0?rel=0",
	"description": "Time makes sense in small pieces. But when you look at huge stretches of time, its almost impossible to wrap your head around things. So we teamed up with the awesome blog \"Wait but Why\" and made this video to help you putting things in perspective with some infographics!",
    "timesSold": 0,
    "supplier": "resource:bloomen.webtv.User#NdQSlT6vK8TgT/TVr7dt8uRd9dwpwTuMKlO+GgzG2bg"
}
,
{
	"$class": "bloomen.webtv.Product",
	"productID": "MBRqu0YOH14",
	"title": "Optimistic Nihilism",
	"value": 1.99,
	"URL": "https://www.youtube.com/embed/MBRqu0YOH14?rel=0",
	"description": "The philosophy of Kurzgesagt.",
    "timesSold": 7,
    "supplier": "resource:bloomen.webtv.User#CauJnUZTxtRKkx0BfUYPzbwnLPOW83uBZQ7xVGKC7Vc"
}
,
{
	"$class": "bloomen.webtv.Product",
	"productID": "YI3tsmFsrOg",
	"title": "The Deadliest Being on Planet Earth – The Bacteriophage",
	"value": 1.99,
	"URL": "https://www.youtube.com/embed/YI3tsmFsrOg?rel=0",
	"description": "A war has been raging for billions of years, killing trillions every single day, while we don’t even notice. This war involves the single deadliest being on our planet: The Bacteriophage.",
    "timesSold": 7,
    "supplier": "resource:bloomen.webtv.User#CauJnUZTxtRKkx0BfUYPzbwnLPOW83uBZQ7xVGKC7Vc"
}
]'  'http://localhost:3000/api/Product'
sleep 12
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
	"$class": "bloomen.webtv.NewProductTx",
	"product": "resource:bloomen.webtv.Product#evQsOFQju08"
}' 'http://localhost:3000/api/NewProductTx'
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
	"$class": "bloomen.webtv.NewProductTx",
	"product": "resource:bloomen.webtv.Product#DAcjV60RnRw"
}' 'http://localhost:3000/api/NewProductTx'
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
	"$class": "bloomen.webtv.NewProductTx",
	"product": "resource:bloomen.webtv.Product#3teflb1QNN4"
}' 'http://localhost:3000/api/NewProductTx'
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
	"$class": "bloomen.webtv.NewProductTx",
	"product": "resource:bloomen.webtv.Product#dmeSGwVBoao"
}' 'http://localhost:3000/api/NewProductTx'
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
	"$class": "bloomen.webtv.NewProductTx",
	"product": "resource:bloomen.webtv.Product#C6eOcd06kdk"
}' 'http://localhost:3000/api/NewProductTx'
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
	"$class": "bloomen.webtv.NewProductTx",
	"product": "resource:bloomen.webtv.Product#wBU9N35ZHIw"
}' 'http://localhost:3000/api/NewProductTx'
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
	"$class": "bloomen.webtv.NewProductTx",
	"product": "resource:bloomen.webtv.Product#Zh3Yz3PiXZw"
}' 'http://localhost:3000/api/NewProductTx'
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
	"$class": "bloomen.webtv.NewProductTx",
	"product": "resource:bloomen.webtv.Product#V4V2bpZlqx8"
}' 'http://localhost:3000/api/NewProductTx'
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
	"$class": "bloomen.webtv.NewProductTx",
	"product": "resource:bloomen.webtv.Product#R9OHn5ZF4Uo"
}' 'http://localhost:3000/api/NewProductTx'
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
	"$class": "bloomen.webtv.NewProductTx",
	"product": "resource:bloomen.webtv.Product#iHzzSao6ypE"
}' 'http://localhost:3000/api/NewProductTx'
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
	"$class": "bloomen.webtv.NewProductTx",
	"product": "resource:bloomen.webtv.Product#ao8L-0nSYzg"
}' 'http://localhost:3000/api/NewProductTx'
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
	"$class": "bloomen.webtv.NewProductTx",
	"product": "resource:bloomen.webtv.Product#kP15q815Saw"
}' 'http://localhost:3000/api/NewProductTx'
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
	"$class": "bloomen.webtv.NewProductTx",
	"product": "resource:bloomen.webtv.Product#mRzxTzKIsp8"
}' 'http://localhost:3000/api/NewProductTx'
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
	"$class": "bloomen.webtv.NewProductTx",
	"product": "resource:bloomen.webtv.Product#QOCaacO8wus"
}' 'http://localhost:3000/api/NewProductTx'
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
	"$class": "bloomen.webtv.NewProductTx",
	"product": "resource:bloomen.webtv.Product#JhHMJCUmq28"
}' 'http://localhost:3000/api/NewProductTx'
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
	"$class": "bloomen.webtv.NewProductTx",
	"product": "resource:bloomen.webtv.Product#JQVmkDUkZT4"
}' 'http://localhost:3000/api/NewProductTx'
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
	"$class": "bloomen.webtv.NewProductTx",
	"product": "resource:bloomen.webtv.Product#2XkV6IpV2Y0"
}' 'http://localhost:3000/api/NewProductTx'
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
	"$class": "bloomen.webtv.NewProductTx",
	"product": "resource:bloomen.webtv.Product#MBRqu0YOH14"
}' 'http://localhost:3000/api/NewProductTx'
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{
	"$class": "bloomen.webtv.NewProductTx",
	"product": "resource:bloomen.webtv.Product#YI3tsmFsrOg"
}' 'http://localhost:3000/api/NewProductTx'
sleep 10