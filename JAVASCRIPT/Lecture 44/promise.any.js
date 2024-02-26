function api1() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej("rejected 1");
        }, 5000);
    });
}

function api2() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej("rejected 2");
        }, 7000);
    });
}

let api3 = new Promise((res, rej) => {
    setTimeout(() => {
        rej("rejected 3");
    }, 2000);
});

let x = Promise.any([api1(), api2(), api3])
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error(err.errors);
    });
