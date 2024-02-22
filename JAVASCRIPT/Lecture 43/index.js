// function fun2() {
//     return Promise.resolve("hello");
// }

// fun2().then((data) => {
//     console.log(data)
// })

// function pro() {
//     return new Promise(function pro1(res, rej) {
//         setTimeout(() => {
//             res("heelloo");
//         }, 10000);
//     });
// }

// async function fun1() {
//     console.log("start");
//     let x = await pro();
//     console.log("end");
//     // console.log(x);
//     return x;
// }

// fun1().then((data) => {
//     console.log("data", data);
// });

function searchFood(item) {
    return new Promise(function fun1(res, rej) {
        console.log("searching start for", item, ".....");
        setTimeout(function timer1() {
            let data = `list of ${item}`;
            res({ item, data });
        }, 3000);
    });
}

function orderFood(item) {
    return new Promise(function fun2(res, rej) {
        console.log("Select ", item);
        setTimeout(function timer2() {
            let id = Math.floor(Math.random() * 999999);
            console.log("order created successfully with id no.", id);
            res({ id, item });
        }, 4000);
    });
}

function payment(item, id) {
    return new Promise(function fun3(res, rej) {
        console.log(`payment starting for ${item} with id no.`, id);
        setTimeout(function timer3() {
            let status = true;
            // console.log("Payment successfull with status", status);
            res(status);
        }, 6000);
    });
}

async function foodOrder(item) {
    let res1 = await searchFood(item);
    let res2 = await orderFood(res1.item);
    let res3 = await payment(res2.item, res2.id);
    return res3;
    // console.log("Payment successfull with status", res3);
}

foodOrder("kadai panner").then((status) => {
    console.log("Payment successfull with status", status);
});

// let result = searchFood("dal chawal")
//     .then(function consume1(detail) {
//         console.log(detail.data);
//         return orderFood(detail.item);
//     })
//     .then(function consume2(detail2) {
//         console.log("order created successfully with id no.", detail2.id);
//         return payment(detail2.item, detail2.id);
//     })
//     .then(function consume3(status) {
//         console.log("Payment successfull with status", status);
//     });
