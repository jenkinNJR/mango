async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => { resolve('done') }, 3000);
    })
    let resul = await promise;
    console.log(resul);
}


f();