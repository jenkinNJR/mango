console.log('before');
async function gethttp() {

    let p = new Promise((r, re) => {
        setTimeout(() => {
            r("hello");
        }, 3000);
    });

    let result = await p;
    return result;

}



gethttp().then(v => console.log(v)).catch(err => console.log('eror cached', err));

console.log('after');