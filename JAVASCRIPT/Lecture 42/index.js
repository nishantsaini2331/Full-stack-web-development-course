// function searchFood(item, cb1) {
//     console.log("searching start for", item, ".....");
//     setTimeout(function timer1() {
//         let data = `list of ${item}`;
//         cb1(item, data);
//     }, 3000);
// }

// searchFood("chole chawal" , function (item, data){
//     console.log(item )
//     console.log(data )
// })

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
            res({id, item});
        }, 4000);
    });
}

function payment(item, id) {
    return new Promise(function fun3(res, rej) {
        console.log(`payment starting for ${item} with id no.`, id);
        setTimeout(function timer3() {
            let status = true;
            res(status);
        }, 6000);
    });
}

let result = searchFood("dal chawal")
    .then(function consume1(detail) {
        console.log(detail.data);
        return orderFood(detail.item);
    })
    .then(function consume2(detail2) {
        console.log("order created successfully with id no.", detail2.id);
        return payment(detail2.item, detail2.id);
    })
    .then(function consume3(status) {
        console.log("Payment successfull with status", status);
    });

// console.log(result);

// orderFood(item.item).then(function consume2(id) {
//     console.log("order created successfully with id no.", id);
//     payment(item.item, id).then(function consume3(status) {
//         console.log("Payment successfull with status", status);
//     });
// });
