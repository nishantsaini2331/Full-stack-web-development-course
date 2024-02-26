function api1() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("butter naan");
        }, 5000);
    });
}

function api2() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("panner");
        }, 7000);
    });
}

function api3() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("salad");
        },0);
    });
}

api1().then((data) => {
    console.log(data);
});
api2().then((data) => {
    console.log(data);
});
api3().then((data) => {
    console.log(data);
});
