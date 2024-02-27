function searchFood(item) {
    return new Promise(function fun1(res, rej) {
        console.log("searching start for", item, ".....");
        setTimeout(function timer1() {
            let data = `list of ${item}`;
            if (data) {
                res({ item, data });
            } else {
                rej(new Error("list is empty"));
            }
        }, 3000);
    });
}

function orderFood(item) {
    return new Promise(function fun2(res, rej) {
        console.log("Select ", item);
        setTimeout(function timer2() {
            let id = Math.floor(Math.random() * 999999);
            res({ id, item });
        }, 4000);
    });
}

function payment(item, id) {
    return new Promise(function fun3(res, rej) {
        console.log(`payment starting for ${item} with id no.`, id);
        setTimeout(function timer3() {
            let status = false;
            if (status) {
                res(status);
            } else {
                rej(new Error(`Payment Rejected due to some technical Error with status ${status}`))
            }
        }, 6000);
    });
}


let result = searchFood("pizza")
    .then(function consume1(detail) {
        console.log(detail.data);
        return orderFood(detail.item);
    })
    .then(function consume2(detail2) {
        console.log("order created successfully with id no.", detail2.id);
        return payment(detail2.item, detail2.id);
    })
    .then(
        function consume3(status) {
            console.log("Payment successfull with status", status);
        }
        // function reject(err) {
        //     console.log(err);
        // }
    )
    .catch(function reject(err) {
        console.log(err);
    })
    .finally(() => {
        console.log("always execute")
    })
