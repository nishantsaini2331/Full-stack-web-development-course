function isData(item) {
    const promise1 = new Promise(function fun1(resolve, reject) {
        if (item) {
            resolve("promise resolve");
        } else {
            reject("dataa is empty");
        }
    });

    return promise1;
}

let result = isData("rbgdfgc");

let x = result
    .then(function success(result) {
        console.log(result);
        return "heelllo from .then()";
    })
    .then(function secondFun(e) {
        console.log(e);
        return "nishant";
    })
    .then(function nish(data) {
        console.log("data", data);
    });

// console.log("end")

// const x = Promise.resolve("weqtee");

// console.log(x);
// console.log("end");
