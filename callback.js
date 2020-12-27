console.log('before');


function center(value, callback) {
    setTimeout(() => {
        callback(value);
    }, 3000)
}

function getId(num, callback) {
    setTimeout(() => {
        callback(num);
    }, 3000)
}

center(50, c => {
    console.log(c);
    const v = c * 5;
    getId(v, res => {
        result = { 'c': c, "v": res };
        getRes(result);
    })
})

function getRes(res) {
    console.log(res);
}
console.log('after');