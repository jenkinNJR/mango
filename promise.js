const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
console.log('before');

let getNumber = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("success") // Yay! Everything went well!
    }, 1000)
});

getNumber.then(
    (value) => { console.log(value, 'called success') },
).catch((err) => console.log(err, 'called error'))



console.log('after');